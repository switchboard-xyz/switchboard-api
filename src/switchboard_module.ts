import {
  Account,
  Connection,
  PublicKey,
  SYSVAR_CLOCK_PUBKEY,
  SYSVAR_RENT_PUBKEY,
  SystemProgram,
  Transaction,
  TransactionInstruction,
  TransactionSignature,
  sendAndConfirmTransaction,
  SYSVAR_RECENT_BLOCKHASHES_PUBKEY,
} from '@solana/web3.js';
import { AggregatorState, SwitchboardInstruction, OracleJob,
  FulfillmentManagerState, SwitchboardAccountType, BundleAuth,
  VrfAccountData
} from './compiled';

export const SWITCHBOARD_DEVNET_PID = new PublicKey("7azgmy1pFXHikv36q1zZASvFq5vFa39TT9NweVugKKTU");
export const SWITCHBOARD_TESTNET_PID = new PublicKey("6by54r25x6qUe87SiQCb11sGhGY8hachdVva6H3N22Wt");
export const SWITCHBOARD_MAINNET_PID = new PublicKey("DtmE9D2CSB4L5D6A15mraeEjrGMm6auWVzgaD8hK2tZM");

/**
 * Pull accountInfo from a provided account address and attempt to parse the state.
 * @param connection Solana network connection object.
 * @param address The address of the bundle auth account to parse.
 * @return BundleAuth
 */
export async function parseBundleAuthAccountData(
  connection: Connection,
  address: PublicKey,
): Promise<BundleAuth> {
  let accountInfo = await connection.getAccountInfo(address);
  if (accountInfo == null) {
    throw new Error(`Failed to fetch information on account ${address.toBase58()}.`);
  }
  let data = accountInfo.data;
  if (data.length == 0 || data[0] != SwitchboardAccountType.TYPE_BUNDLE_AUTH) {
    throw new Error(`Switchboard account parser was not provided with a bundle auth account: ${address.toBase58()}`);
  }
  return BundleAuth.decodeDelimited(accountInfo.data.slice(1));
}

/**
 * Pull accountInfo from a provided account address and attempt to parse the state.
 * @param connection Solana network connection object.
 * @param address The address of the aggregator account to parse.
 * @return AggregatorState
 */
export async function parseAggregatorAccountData(
  connection: Connection,
  address: PublicKey,
): Promise<AggregatorState> {
  let accountInfo = await connection.getAccountInfo(address);
  if (accountInfo == null) {
    throw new Error(`Failed to fetch information on account ${address.toBase58()}.`);
  }
  let data = accountInfo.data;
  if (data.length == 0 || data[0] != SwitchboardAccountType.TYPE_AGGREGATOR) {
    throw new Error(`Switchboard account parser was not provided with an aggregator account: ${address.toBase58()}`);
  }
  return AggregatorState.decodeDelimited(accountInfo.data.slice(1));
}

/**
 * Pull accountInfo from a provided account address and attempt to parse the state.
 * @param connection Solana network connection object.
 * @param address The address of the Fulfillment Manager account to parse.
 * @return FulfillmentManagerState
 */
export async function parseFulfillmentAccountData(
  connection: Connection,
  address: PublicKey,
): Promise<FulfillmentManagerState> {
  let accountInfo = await connection.getAccountInfo(address);
  if (accountInfo == null) {
    throw new Error(`Failed to fetch information on account ${address.toBase58()}.`);
  }
  let data = accountInfo.data;
  if (data.length == 0 || data[0] != SwitchboardAccountType.TYPE_FULFILLMENT_MANAGER) {
    throw new Error(`Switchboard account parser was not provided with a fulfillment manager account: ${address.toBase58()}`);
  }
  return FulfillmentManagerState.decodeDelimited(accountInfo.data.slice(1));
}

/**
 * Pull accountInfo from a provided account address and attempt to parse the state.
 * @param connection Solana network connection object.
 * @param address The address of the Oracle Job account to parse.
 * @return OracleJob
 */
export async function parseOracleJobAccountData(
  connection: Connection,
  address: PublicKey,
): Promise<OracleJob> {
  let accountInfo = await connection.getAccountInfo(address);
  if (accountInfo == null) {
    throw new Error(`Failed to fetch information on account ${address.toBase58()}.`);
  }
  let data = accountInfo.data;
  if (data.length == 0 || data[0] != SwitchboardAccountType.TYPE_JOB_DEFINITION) {
    throw new Error(`Switchboard account parser was not provided with a fulfillment manager account: ${address.toBase58()}`);
  }
  return OracleJob.decodeDelimited(accountInfo.data.slice(1));
}

/**
 * Publishes a premade account on chain, initialized as the provided account type. 
 * @param connection Solana network connection object.
 * @param account The account which will be published and type will be set.
 * @param payerAccount Transaction funder account.
 * @param switchboardPid Switchboard program ID.
 * @param type The type to set the account to.
 * @param accountSize The size to initialize the account to.
 */
export async function publishSwitchboardAccount(
  connection: Connection,
  account: Account,
  payerAccount: Account,
  switchboardPid: PublicKey,
  type: SwitchboardAccountType,
  accountSize: number = 5_000,
): Promise<Account> {
  const space = accountSize;
  const lamports = await connection.getMinimumBalanceForRentExemption(space);
  const transaction = new Transaction().add(
    SystemProgram.createAccount({
      fromPubkey: payerAccount.publicKey,
      newAccountPubkey: account.publicKey,
      lamports,
      space,
      programId: switchboardPid,
    })
  );
  await performTransaction(connection, transaction, [payerAccount, account]);
  await initAccount(connection, payerAccount, account, type);
  return account;
}

//  === Data Feed Utilities ===

/**
 * Permanently sets the account type to an Aggregator account. 
 * @param connection Solana network connection object.
 * @param payerAccount Transaction funder account.
 * @param dataFeedAccount The account for which type will be set.
 */
export async function initDataFeedAccount(
  connection: Connection, payerAccount: Account, dataFeedAccount: Account) {
  await initAccount(connection, payerAccount, dataFeedAccount,
    SwitchboardAccountType.TYPE_AGGREGATOR);
}

/**
 * Creates an account and permanently sets the account type to an Aggregator account. 
 * @param connection Solana network connection object.
 * @param payerAccount Transaction funder account.
 * @param switchboardPid The Switchboard Program pubkey that will own the account.
 * @param accountSize: byte size to allocate for the created account.
 * @returns Account The new switchboard account that can hold a data feed.
 */
export async function createDataFeed(
  connection: Connection,
  payerAccount: Account,
  switchboardPid: PublicKey,
  accountSize: number = 5_000,
): Promise<Account> {
  let dataFeedAccount = await createOwnedStateAccount(connection, payerAccount, accountSize, switchboardPid);
  await initAccount(connection, payerAccount, dataFeedAccount,
    SwitchboardAccountType.TYPE_AGGREGATOR);
  return dataFeedAccount;
}

/**
 * Adds a new task list to be performed when the provided data feed is updated.
 * @param connection Solana network connection object.
 * @param payerAccount Transaction funder account.
 * @param dataFeedAccount The account holding the data feed being mutated.
 * @param tasks The {@linkcode OracleJob.Task} list representing the newly created job.
 * @returns the Account holding the newly created job.
 */
export async function addFeedJob(
  connection: Connection, payerAccount: Account, dataFeedAccount: Account, jobTasks: OracleJob.Task[]): Promise<Account> {
  let dataFeedAccountInfo = await connection.getAccountInfo(dataFeedAccount.publicKey);
  if (dataFeedAccountInfo == null) throw new Error("Failed to fetch information on the datafeed account");
  let buffer = Buffer.from(SwitchboardInstruction.encodeDelimited(SwitchboardInstruction.create({
      registerJobInstruction: SwitchboardInstruction.RegisterJobInstruction.create({
        job: OracleJob.create({
          tasks: jobTasks
        })
      })
    })).finish());
  let jobAccount = await createOwnedStateAccount(connection, payerAccount, buffer.length, dataFeedAccountInfo.owner);

  let transactionInstruction = new TransactionInstruction({
    keys: [
      { pubkey: dataFeedAccount.publicKey, isSigner: true, isWritable: true },
      { pubkey: jobAccount.publicKey, isSigner: true, isWritable: true },
      { pubkey: SYSVAR_RENT_PUBKEY, isSigner: false, isWritable: false },
    ],
    programId: dataFeedAccountInfo.owner,
    data: buffer,
  });

  await performTransaction(connection, new Transaction().add(transactionInstruction), [
    payerAccount,
    dataFeedAccount,
    jobAccount
  ]);
  return jobAccount;
}

/**
 * Adds a zero-copy mirror account that holds information surrounding the last
 * confirmed aggregator result.
 * @param connection Solana network connection object.
 * @param payerAccount Transaction funder account.
 * @param dataFeedAccount The account holding the data feed being mutated.
 * @param accountSize Size of the parseOptimizedAcccount to be created.
 * @returns the AggregatorParseOptimized account
 */
export async function addFeedParseOptimizedAccount(
  connection: Connection, payerAccount: Account, dataFeedAccount: Account, accountSize: number = 1_000): Promise<Account> {
  let dataFeedAccountInfo = await connection.getAccountInfo(dataFeedAccount.publicKey);
  if (dataFeedAccountInfo == null) throw new Error("Failed to fetch information on the datafeed account");

  let parseOptimizedAccount = await createOwnedStateAccount(connection, payerAccount, accountSize, dataFeedAccountInfo.owner);
  await initAccount(connection, payerAccount, parseOptimizedAccount,
    SwitchboardAccountType.TYPE_AGGREGATOR_RESULT_PARSE_OPTIMIZED);

  let transactionInstruction = new TransactionInstruction({
    keys: [
      { pubkey: dataFeedAccount.publicKey, isSigner: true, isWritable: true },
      { pubkey: parseOptimizedAccount.publicKey, isSigner: true, isWritable: true },
    ],
    programId: dataFeedAccountInfo.owner,
    data: Buffer.from(SwitchboardInstruction.encodeDelimited(SwitchboardInstruction.create({
      linkParseOptimizedAccountInstruction: SwitchboardInstruction.LinkedParseOptimizedResultAccountInstruction.create({})
    })).finish()),
  });

  await performTransaction(connection, new Transaction().add(transactionInstruction), [
    payerAccount,
    dataFeedAccount,
    parseOptimizedAccount
  ]);
  return parseOptimizedAccount;
}

/**
 * Adds a new task list to be performed when the provided data feed is updated.
 * @param connection Solana network connection object.
 * @param payerAccount Transaction funder account.
 * @param dataFeedAccount The account holding the data feed being mutated.
 * @param job The public key of the job account to remove from this aggregator.
 */
export async function removeFeedJob(
  connection: Connection, payerAccount: Account, dataFeedAccount: Account, job: PublicKey) {
  let dataFeedAccountInfo = await connection.getAccountInfo(dataFeedAccount.publicKey);
  if (dataFeedAccountInfo == null) throw new Error("Failed to fetch information on the datafeed account");
  let transactionInstruction = new TransactionInstruction({
    keys: [
      { pubkey: dataFeedAccount.publicKey, isSigner: true, isWritable: true },
    ],
    programId: dataFeedAccountInfo.owner,
    data: Buffer.from(SwitchboardInstruction.encodeDelimited(SwitchboardInstruction.create({
      unregisterJobInstruction: SwitchboardInstruction.UnregisterJobInstruction.create({
        jobPubkey: job.toBuffer()
      })
    })).finish()),
  });

  await performTransaction(connection, new Transaction().add(transactionInstruction), [
    payerAccount,
    dataFeedAccount,
  ]);
}

/**
 * updateFeed will request a new fulfillment agreement for the aggregator and
 * notify nodes to fulfill the aggregator jobs.
 * @param connection Solana network connection object.
 * @param payerAccount Transaction funder account.
 * @param dataFeedPubkey The public key of the data feed being updated.
 * @param authKey The public key of the authorization account allowing this data feed to use the linked fulfillment manager.
 * @throws Error If authorization fails or if the data feed is not allowed to be updated at the time of calling.
 * @returns TransactionSignature of the update transaction.
 */
export async function updateFeed(
  connection: Connection,
  payerAccount: Account,
  dataFeedPubkey: PublicKey,
  authKey?: PublicKey): Promise<string> {
  let dataFeedAccountInfo = await connection.getAccountInfo(dataFeedPubkey);
  if (dataFeedAccountInfo == null) throw new Error("Failed to fetch information on the datafeed account");
  let aggregator = AggregatorState.decodeDelimited(dataFeedAccountInfo.data.slice(1));

  let fulfillmentManagerStatePubKey = new PublicKey(aggregator.fulfillmentManagerPubkey);
  let keys = [
    { pubkey: dataFeedPubkey, isSigner: false, isWritable: true },
    { pubkey: fulfillmentManagerStatePubKey, isSigner: false, isWritable: false },
    { pubkey: SYSVAR_CLOCK_PUBKEY, isSigner: false, isWritable: false },
  ];
  if (authKey != null) {
    keys.push({ pubkey: authKey, isSigner: false, isWritable: false });
  }
  let agreementInstruction = new TransactionInstruction({
    keys,
    programId: dataFeedAccountInfo.owner,
    data: Buffer.from(SwitchboardInstruction.encodeDelimited(SwitchboardInstruction.create({
      reachFulfillerAgreementInstruction: SwitchboardInstruction.ReachFulfillerAgreementInstruction.create({})
    })).finish()),
  });
  let updateInstruction = new TransactionInstruction({
    keys: [
      { pubkey: dataFeedPubkey, isSigner: false, isWritable: true },
    ],
    programId: dataFeedAccountInfo.owner,
    data: Buffer.from(SwitchboardInstruction.encodeDelimited(SwitchboardInstruction.create({
      updateAggregateInstruction: SwitchboardInstruction.UpdateAggregateInstruction.create({})
    })).finish()),
  });

  let txAccounts = [payerAccount];
  return connection.sendTransaction(new Transaction()
    .add(agreementInstruction)
    .add(updateInstruction), txAccounts);
}

/**
 * setDataFeedConfigs allows settings changes to an owned data feed account
 * @param connection Solana network connection object.
 * @param payerAccount Transaction funder account.
 * @param dataFeedAccount The account of the data feed being configured.
 * @param configs A dictonary object specifying the configurations to be updated.<br>
 *                 `minConfirmations`: Number of results required to accept a new round.<br>
 *                 `minUpdateDelaySeconds`: How often this feed is permitted to be updated.<br>
 *                 `fulfillmentManagerPubkey`: The public key of the fulfillment manager to attach to.<br>
 *                 `lock`: Once a data feed is locked, all future configuration updates are forbidden.
 */
export async function setDataFeedConfigs(
  connection: Connection,
  payerAccount: Account,
  dataFeedAccount: Account,
  configs: any) {
  let dataFeedAccountInfo = await connection.getAccountInfo(dataFeedAccount.publicKey);
  if (dataFeedAccountInfo == null) throw new Error("Failed to fetch information on the datafeed account");

  let keys = [
    { pubkey: dataFeedAccount.publicKey, isSigner: true, isWritable: true }
  ];
  let fmPubkey = null;
  if (configs["fulfillmentManagerPubkey"] !== undefined) {
    fmPubkey = new PublicKey(configs["fulfillmentManagerPubkey"]);
    keys.push(
      { pubkey: fmPubkey, isSigner: false, isWritable: false });
  }
  let transactionInstruction = new TransactionInstruction({
    keys,
    programId: dataFeedAccountInfo.owner,
    data: Buffer.from(SwitchboardInstruction.encodeDelimited(SwitchboardInstruction.create({
      setAggregatorConfigsInstruction: SwitchboardInstruction.SetAggregatorConfigsInstruction.create({
        minConfirmations: configs["minConfirmations"],
        minUpdateDelaySeconds: configs["minUpdateDelaySeconds"],
        fulfillmentManagerPubkey: fmPubkey?.toBytes(),
        lock: configs["lock"],
      })
    })).finish()),
  });

  let txAccounts = [payerAccount, dataFeedAccount];
  await performTransaction(connection, new Transaction().add(transactionInstruction), txAccounts);
}

//  === Fulfillment Manager Utilities ===

/**
 * Permanently sets the account type to a FulfillmentManager account. 
 * @param connection Solana network connection object.
 * @param payerAccount Transaction funder account.
 * @param fulfillmentManagerAccount The account for which type will be set.
 */
export async function initFulfillmentManagerAccount(
  connection: Connection, payerAccount: Account, fulfillmentManagerAccount: Account) {
  await initAccount(connection, payerAccount, fulfillmentManagerAccount,
    SwitchboardAccountType.TYPE_FULFILLMENT_MANAGER);
}

/**
 * Creates an account and permanently sets the account type to a FulfillmentManagerAuth account. 
 * @param connection Solana network connection object.
 * @param payerAccount Transaction funder account.
 * @param switchboardPid The Switchboard Program pubkey.
 * @param accountSize: byte size to allocate for the created account.
 * @returns Account New switchboard account that can hold a fulfillment manager.
 */
export async function createFulfillmentManager(
  connection: Connection,
  payerAccount: Account,
  switchboardPid: PublicKey,
  accountSize: number = 3_000,
): Promise<Account> {
  let fulfillmentManagerAccount = await createOwnedStateAccount(connection, payerAccount, accountSize, switchboardPid);
  await initAccount(connection, payerAccount, fulfillmentManagerAccount,
    SwitchboardAccountType.TYPE_FULFILLMENT_MANAGER);
  return fulfillmentManagerAccount;
}

/**
 * setDataFeedConfigs allows settings changes to an owned data feed account
 * @param connection Solana network connection object.
 * @param payerAccount Transaction funder account.
 * @param fulfillmentManagerAccount The account of the fulfillment manager to being configured.
 * @param configs A dictionary object specifying the configurations to be updated.<br>
 *                `heartbeatAuthRequired`: Authorization is required for nodes to join this fulfiller.<br>
 *                `usageAuthRequired`: Authorization is required for data feeds to use this fulfiller.<br>
 *                `lock`: Once the account is locked, all future configuration updates are forbidden.
 */
export async function setFulfillmentManagerConfigs(
  connection: Connection,
  payerAccount: Account,
  fulfillmentManagerAccount: Account,
  configs: any,
) {
  let fmAccountInfo = await connection.getAccountInfo(fulfillmentManagerAccount.publicKey);
  if (fmAccountInfo == null) {
    throw new Error("Failed to fetch information on the Fulfillment Manager account");
  }

  let keys = [
    { pubkey: fulfillmentManagerAccount.publicKey, isSigner: true, isWritable: true }
  ];
  let transactionInstruction = new TransactionInstruction({
    keys,
    programId: fmAccountInfo.owner,
    data: Buffer.from(SwitchboardInstruction.encodeDelimited(SwitchboardInstruction.create({
      setFulfillmentManagerConfigsInstruction: SwitchboardInstruction.SetFulfillmentManagerConfigsInstruction.create({
        heartbeatAuthRequired: configs["heartbeatAuthRequired"],
        usageAuthRequired: configs["usageAuthRequired"],
        lock: configs["lock"],
      })
    })).finish()),
  });

  let txAccounts = [payerAccount, fulfillmentManagerAccount];
  await performTransaction(connection, new Transaction().add(transactionInstruction), txAccounts);
}


//  === Fulfillment Manager Authorization Utilities ===

/**
 * Permanently sets the account type to a FulfillmentManagerAuth account. 
 * @param connection Solana network connection object.
 * @param payerAccount Transaction funder account.
 * @param fulfillmentManagerAuthAccount The account for which type will be set.
 */
export async function initFulfillmentManagerAuthAccount(
  connection: Connection, payerAccount: Account, fulfillmentManagerAuthAccount: Account) {
  await initAccount(connection, payerAccount, fulfillmentManagerAuthAccount,
                    SwitchboardAccountType.TYPE_FULFILLMENT_MANAGER_AUTH);
}

// TODO(mgild): Make single transaction
/**
 * Creates an account which controls permissions access to a fulfillment manager.
 * @param connection Solana network connection object.
 * @param payerAccount Transaction funder account.
 * @param fulfillmentManagerAccount The {@linkcode FulfillmentManagerState} account that this authorization will attach to.
 * @param nomineePubkey The public key for which authorization is being linked to the fulfillment manager account.
 * @param configs Denotes the settings to initalize the authorization account with.<br>
 *                `authorizeHeartbeat`: Set to `true` to let this account authorize heartbeats from the `nomineePubkey` to the provided {@linkcode FulfillmentManagerState}.<br>
 *                `authorizeUsage`: Set to `true` to let the nominee use the provided Fulfillment manager to fulfill {@linkcode updateFeed} requests.
 * @param accountSize: byte size to allocate for the created account.
 * @returns Account The account holding the new authorization config.
 */
export async function createFulfillmentManagerAuth(
  connection: Connection,
  payerAccount: Account,
  fulfillmentManagerAccount: Account,
  nomineePubkey: PublicKey,
  configs: any,
  accountSize: number = 300,
): Promise<Account> {
  let fmAccountInfo = await connection.getAccountInfo(fulfillmentManagerAccount.publicKey);
  if (fmAccountInfo == null) {
    throw new Error("Failed to fetch account info for " + fulfillmentManagerAccount.publicKey.toString());
  }
  let fulfillmentManagerAuthAccount = await createOwnedStateAccount(connection, payerAccount, accountSize, fmAccountInfo.owner);
  await initFulfillmentManagerAuthAccount(connection, payerAccount, fulfillmentManagerAuthAccount);
  await setAuthConfigs(
    connection,
    payerAccount,
    fulfillmentManagerAccount,
    fulfillmentManagerAuthAccount.publicKey,
    nomineePubkey,
    configs);
  return fulfillmentManagerAuthAccount;
}

/**
 * Modifies an authorization account for a fulfillment manager. This can be used
 * to disable or enable authorization for an account to interact with a
 * {@linkcode FulfillmentManagerState}.
 * @param connection Solana network connection object.
 * @param payerAccount Transaction funder account.
 * @param fulfillmentManagerAccount The {@linkcode FulfillmentManagerState} account for which usage is being authorized.
 * @param fulfillmentManagerAuthPubkey The {@linkcode FulfillmentManagerAuth} account for which auth settings are being modified.
 * @param nomineePubkey The public key for which authorization is being linked to the fulfillment manager account.
 * @param configs Denotes the parameters of the {@linkcode FulfillmentManagerAuth} that are being modified.<br>
 *                `authorizeHeartbeat`: Set to `true` to let this account authorize heartbeats from the `nomineePubkey` to the provided FulfillmentManager.<br>
 *                `authorizeUsage`: Set to `true` to let the nominee use the provided Fulfillment manager to fulfill {@linkcode updateFeed} requests.
 */
export async function setAuthConfigs(
  connection: Connection,
  payerAccount: Account,
  fulfillmentManagerAccount: Account,
  fulfillmentManagerAuthPubkey: PublicKey,
  nomineePubkey: PublicKey,
  configs: any
) {
  let fmAccountInfo = await connection.getAccountInfo(fulfillmentManagerAccount.publicKey);
  if (fmAccountInfo == null) {
    throw new Error("Failed to fetch account info for " + fulfillmentManagerAccount.publicKey.toString());
  }
  let transactionInstruction = new TransactionInstruction({
    keys: [
      { pubkey: fulfillmentManagerAuthPubkey, isSigner: false, isWritable: true },
      { pubkey: fulfillmentManagerAccount.publicKey, isSigner: true, isWritable: false },
      { pubkey: nomineePubkey, isSigner: false, isWritable: false },
    ],
    programId: fmAccountInfo.owner,
    data: Buffer.from(SwitchboardInstruction.encodeDelimited(SwitchboardInstruction.create({
      registerAuthInstruction: SwitchboardInstruction.RegisterAuthInstruction.create({
        authorizeHeartbeat: configs["authorizeHeartbeat"],
        authorizeUsage: configs["authorizeUsage"],
      })
    })).finish()),
  });

  let txAccounts = [payerAccount, fulfillmentManagerAccount];
  await performTransaction(connection, new Transaction().add(transactionInstruction), txAccounts);
}

/**
 * Creates an account and permanently sets the account type to a VRF account. 
 * @param connection Solana network connection object.
 * @param payerAccount Transaction funder account.
 * @param switchboardPid The Switchboard Program pubkey.
 * @param accountSize: byte size to allocate for the created account.
 * @returns Account New VRF Account
 */
export async function createVrfAccount(
  connection: Connection,
  payerAccount: Account,
  switchboardPid: PublicKey,
  accountSize: number = 300,
): Promise<Account> {
  let vrfAccount = await createOwnedStateAccount(connection, payerAccount, accountSize, switchboardPid);
  await initAccount(connection, payerAccount, vrfAccount, SwitchboardAccountType.TYPE_VRF);
  let transactionInstruction1 = new TransactionInstruction({
    keys: [
      { pubkey: vrfAccount.publicKey, isSigner: true, isWritable: true },
    ],
    programId: switchboardPid,
    data: Buffer.from(SwitchboardInstruction.encodeDelimited(SwitchboardInstruction.create({
      setVrfConfigsInstruction: SwitchboardInstruction.SetVrfConfigsInstruction.create({
        minProofConfirmations: 5,
        lockConfigs: true
      })
    })).finish())
  });
  let signature = await sendAndConfirmTransaction(
    connection, new Transaction()
    .add(transactionInstruction1),
    [
      payerAccount,
      vrfAccount,
    ]);
  return vrfAccount;
}

/**
 * Requests new randomness for a provided VRF account
 * @param connection Solana network connection object.
 * @param payerAccount Transaction funder account.
 * @param vrfAccount The VRF account for which randomness is being requested.
 * @param vrfProducerPermit The permit pubkey authorizing this VRF to request randomness.
 * @param fmPermit The permit pubkey authorizing use of a specific fulfillment group to verify proofs.
 */
export async function requestRandomness(connection: Connection, payerAccount: Account, vrfAccount: Account, vrfProducerPermit: PublicKey, fmPermit: PublicKey) {
  let accountInfo = await connection.getAccountInfo(vrfAccount.publicKey);
  if (accountInfo == null) {
    throw new Error(`Failed to fetch information on account ${vrfAccount.publicKey.toBase58()}.`);
  }
  let transactionInstruction1 = new TransactionInstruction({
    keys: [
      { pubkey: vrfAccount.publicKey, isSigner: true, isWritable: true },
      { pubkey: SYSVAR_RECENT_BLOCKHASHES_PUBKEY, isSigner: false, isWritable: false },
      { pubkey: vrfProducerPermit, isSigner: false, isWritable: false },
      { pubkey: fmPermit, isSigner: false, isWritable: false },
    ],
    programId: accountInfo.owner,
    data: Buffer.from(SwitchboardInstruction.encodeDelimited(SwitchboardInstruction.create({
      requestRandomnessInstruction: SwitchboardInstruction.RequestRandomnessInstruction.create({})
    })).finish())
  });
  let signature = await sendAndConfirmTransaction(
    connection, new Transaction()
    .add(transactionInstruction1),
    [
      payerAccount,
      vrfAccount,
    ]);
}

/**
 * Pull accountInfo from a provided account address and attempt to parse the state.
 * @param connection Solana network connection object.
 * @param address The address of the VRF account to parse.
 * @return VrfAccountData
 */
export async function parseVrfAccountData(
  connection: Connection,
  address: PublicKey,
): Promise<VrfAccountData> {
  let accountInfo = await connection.getAccountInfo(address);
  if (accountInfo == null) {
    throw new Error(`Failed to fetch information on account ${address.toBase58()}.`);
  }
  let data = accountInfo.data;
  if (data.length == 0 || data[0] != SwitchboardAccountType.TYPE_VRF) {
    throw new Error(`Switchboard account parser was not provided with a VRF account: ${address.toBase58()}`);
  }
  return VrfAccountData.decodeDelimited(accountInfo.data.slice(1));
}

export async function createBundle(
  connection: Connection,
  payerAccount: Account,
  switchboardPid: PublicKey,
  accountSize: number = 10_000_000,
): Promise<Account> {
  let account = await createOwnedStateAccount(connection, payerAccount, accountSize, switchboardPid);
  await initAccount(connection, payerAccount, account,
    SwitchboardAccountType.TYPE_BUNDLE);
  return account;
}

/**
 * Creates an account which controls permissions access to write to a bundle.
 * @param connection Solana network connection object.
 * @param payerAccount Transaction funder account.
 * @param switchboardPid Switchboard program ID.
 * @param accountSize: byte size to allocate for the created account.
 * @returns Account The account holding the new authorization config.
 */
export async function createBundleAuth(
  connection: Connection,
  payerAccount: Account,
  switchboardPid: PublicKey,
  accountSize: number = 500,
): Promise<Account> {
  let account = await createOwnedStateAccount(connection, payerAccount, accountSize, switchboardPid);
  await initAccount(connection, payerAccount, account,
    SwitchboardAccountType.TYPE_BUNDLE_AUTH);
  return account;
}

export async function setBundleAuthConfigs(
  connection: Connection,
  payerAccount: Account,
  bundleAuthAccount: Account,
  bundleAccount: Account,
  aggregatorPubkey: PublicKey,
  auth_idx: number
) {
  let pid = (await connection.getAccountInfo(bundleAuthAccount.publicKey))?.owner;
  if (pid == null) {
    throw new Error("Failed to fetch account info for " + bundleAuthAccount.publicKey.toString());
  }
  let transactionInstruction = new TransactionInstruction({
    keys: [
      { pubkey: bundleAuthAccount.publicKey, isSigner: true, isWritable: true },
      { pubkey: bundleAccount.publicKey, isSigner: true, isWritable: false },
      { pubkey: aggregatorPubkey, isSigner: false, isWritable: false },
    ],
    programId: pid,
    data: Buffer.from(SwitchboardInstruction.encodeDelimited(SwitchboardInstruction.create({
      setBundleAuthConfigsInstruction: SwitchboardInstruction.SetBundleAuthConfigsInstruction.create({
        idx: auth_idx,
      })
    })).finish()),
  });

  let txAccounts = [payerAccount, bundleAuthAccount, bundleAccount];
  await performTransaction(connection, new Transaction().add(transactionInstruction), txAccounts);
}

export async function addFeedBundle(
  connection: Connection, payerAccount: Account, dataFeedAccount: Account, bundleAuth: PublicKey) {
  let dataFeedAccountInfo = await connection.getAccountInfo(dataFeedAccount.publicKey);
  if (dataFeedAccountInfo == null) throw new Error("Failed to fetch information on the datafeed account");
  let buffer = Buffer.from(SwitchboardInstruction.encodeDelimited(SwitchboardInstruction.create({
      addBundleAuthInstruction: SwitchboardInstruction.AddBundleAuthInstruction.create({})
    })).finish());

  let transactionInstruction = new TransactionInstruction({
    keys: [
      { pubkey: dataFeedAccount.publicKey, isSigner: true, isWritable: true },
      { pubkey: bundleAuth, isSigner: false, isWritable: false },
    ],
    programId: dataFeedAccountInfo.owner,
    data: buffer,
  });

  await performTransaction(connection, new Transaction().add(transactionInstruction), [
    payerAccount,
    dataFeedAccount,
  ]);
}

export async function removeFeedBundle(
  connection: Connection, payerAccount: Account, dataFeedAccount: Account, bundleAuth: PublicKey) {
  let dataFeedAccountInfo = await connection.getAccountInfo(dataFeedAccount.publicKey);
  if (dataFeedAccountInfo == null) throw new Error("Failed to fetch information on the datafeed account");
  let buffer = Buffer.from(SwitchboardInstruction.encodeDelimited(SwitchboardInstruction.create({
      removeBundleAuthInstruction: SwitchboardInstruction.RemoveBundleAuthInstruction.create({})
    })).finish());

  let transactionInstruction = new TransactionInstruction({
    keys: [
      { pubkey: dataFeedAccount.publicKey, isSigner: true, isWritable: true },
      { pubkey: bundleAuth, isSigner: false, isWritable: false },
    ],
    programId: dataFeedAccountInfo.owner,
    data: buffer,
  });

  await performTransaction(connection, new Transaction().add(transactionInstruction), [
    payerAccount,
    dataFeedAccount,
  ]);
  return null;
}

// === Exported Helpers ===
/**
 * Helper for creating rent exempted accounts.
 * @param connection Solana network connection object.
 * @param payerAccount Transaction funder account.
 * @param size Data size this account will be able to hold
 * @param parent The public key of the program that will own this account.
 */
export async function createOwnedStateAccount(
  connection: Connection,
  payerAccount: Account,
  size: number,
  parent: PublicKey,
  programStateAccount: Account | null = null
): Promise<Account> {
  if (programStateAccount == null) {
    programStateAccount = new Account();
  }
  let stateAccountPubkey = programStateAccount.publicKey;

  const space = size;
  const lamports = await connection.getMinimumBalanceForRentExemption(space);
  const transaction = new Transaction().add(
    SystemProgram.createAccount({
      fromPubkey: payerAccount.publicKey,
      newAccountPubkey: stateAccountPubkey,
      lamports,
      space,
      programId: parent,
    })
  );

  await performTransaction(connection, transaction, [payerAccount, programStateAccount]);
  return programStateAccount;
}


// === Non-Exported helpers ===

// Internal Solana transaction helper.
async function performTransaction(
  connection: Connection, transaction: Transaction, accounts: Account[]): Promise<string> {
  return sendAndConfirmTransaction(connection, transaction, accounts);
}

// Internal account initialization helper
export async function initAccount(
  connection: Connection, payerAccount: Account, account: Account, type: SwitchboardAccountType) {
  let accountInfo = await connection.getAccountInfo(account.publicKey);
  if (accountInfo == null) {
    throw new Error("Failed to fetch information on the provided account.");
  }
  let switchboardInstruction = SwitchboardInstruction.create({
    initInstruction: SwitchboardInstruction.InitInstruction.create({
      type: type
    })
  });
  let transactionInstruction = new TransactionInstruction({
    keys: [
      { pubkey: account.publicKey, isSigner: true, isWritable: true },
      { pubkey: SYSVAR_RENT_PUBKEY, isSigner: false, isWritable: false },
    ],
    programId: accountInfo.owner,
    data: Buffer.from(SwitchboardInstruction.encodeDelimited(switchboardInstruction).finish()),
  });

  await performTransaction(connection, new Transaction().add(transactionInstruction), [
    payerAccount,
    account,
  ]);
}
