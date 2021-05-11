"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOwnedStateAccount = exports.setAuthConfigs = exports.createFulfillmentManagerAuth = exports.initFulfillmentManagerAuthAccount = exports.setFulfillmentManagerConfigs = exports.createFulfillmentManager = exports.initFulfillmentManagerAccount = exports.setDataFeedConfigs = exports.updateFeed = exports.removeFeedJob = exports.addFeedJob = exports.createDataFeed = exports.initDataFeedAccount = exports.SWITCHBOARD_TESTNET_PID = exports.SWITCHBOARD_DEVNET_PID = void 0;
const web3_js_1 = require("@solana/web3.js");
const compiled_1 = require("./compiled");
exports.SWITCHBOARD_DEVNET_PID = new web3_js_1.PublicKey("7azgmy1pFXHikv36q1zZASvFq5vFa39TT9NweVugKKTU");
exports.SWITCHBOARD_TESTNET_PID = new web3_js_1.PublicKey("6by54r25x6qUe87SiQCb11sGhGY8hachdVva6H3N22Wt");
//  === Data Feed Utilities ===
/**
 * Permanently sets the account type to an Aggregator account.
 * @param connection Solana network connection object.
 * @param payerAccount Transaction funder account.
 * @param dataFeedAccount The account for which type will be set.
 */
function initDataFeedAccount(connection, payerAccount, dataFeedAccount) {
    return __awaiter(this, void 0, void 0, function* () {
        yield initAccount(connection, payerAccount, dataFeedAccount, compiled_1.SwitchboardAccountType.TYPE_AGGREGATOR);
    });
}
exports.initDataFeedAccount = initDataFeedAccount;
/**
 * Creates an account and permanently sets the account type to an Aggregator account.
 * @param connection Solana network connection object.
 * @param payerAccount Transaction funder account.
 * @param switchboardPid The Switchboard Program pubkey that will own the account.
 * @returns Account The new switchboard account that can hold a data feed.
 */
function createDataFeed(connection, payerAccount, switchboardPid) {
    return __awaiter(this, void 0, void 0, function* () {
        let dataFeedAccount = yield createOwnedStateAccount(connection, payerAccount, 50000, switchboardPid);
        yield initAccount(connection, payerAccount, dataFeedAccount, compiled_1.SwitchboardAccountType.TYPE_AGGREGATOR);
        return dataFeedAccount;
    });
}
exports.createDataFeed = createDataFeed;
/**
 * Adds a new task list to be performed when the provided data feed is updated.
 * @param connection Solana network connection object.
 * @param payerAccount Transaction funder account.
 * @param dataFeedAccount The account holding the data feed being mutated.
 * @param tasks The {@linkcode OracleJob.Task} list representing the newly created job.
 */
function addFeedJob(connection, payerAccount, dataFeedAccount, jobTasks) {
    return __awaiter(this, void 0, void 0, function* () {
        let dataFeedAccountInfo = yield connection.getAccountInfo(dataFeedAccount.publicKey);
        if (dataFeedAccountInfo == null)
            throw new Error("Failed to fetch information on the datafeed account");
        let jobAccount = yield createOwnedStateAccount(connection, payerAccount, 10000, dataFeedAccountInfo.owner);
        let transactionInstruction = new web3_js_1.TransactionInstruction({
            keys: [
                { pubkey: dataFeedAccount.publicKey, isSigner: true, isWritable: true },
                { pubkey: jobAccount.publicKey, isSigner: true, isWritable: true },
                { pubkey: web3_js_1.SYSVAR_RENT_PUBKEY, isSigner: false, isWritable: false },
            ],
            programId: dataFeedAccountInfo.owner,
            data: Buffer.from(compiled_1.SwitchboardInstruction.encodeDelimited(compiled_1.SwitchboardInstruction.create({
                registerJobInstruction: compiled_1.SwitchboardInstruction.RegisterJobInstruction.create({
                    job: compiled_1.OracleJob.create({
                        tasks: jobTasks
                    })
                })
            })).finish()),
        });
        yield performTransaction(connection, new web3_js_1.Transaction().add(transactionInstruction), [
            payerAccount,
            dataFeedAccount,
            jobAccount
        ]);
    });
}
exports.addFeedJob = addFeedJob;
/**
 * Adds a new task list to be performed when the provided data feed is updated.
 * @param connection Solana network connection object.
 * @param payerAccount Transaction funder account.
 * @param dataFeedAccount The account holding the data feed being mutated.
 * @param job The public key of the job account to remove from this aggregator.
 */
function removeFeedJob(connection, payerAccount, dataFeedAccount, job) {
    return __awaiter(this, void 0, void 0, function* () {
        let dataFeedAccountInfo = yield connection.getAccountInfo(dataFeedAccount.publicKey);
        if (dataFeedAccountInfo == null)
            throw new Error("Failed to fetch information on the datafeed account");
        let transactionInstruction = new web3_js_1.TransactionInstruction({
            keys: [
                { pubkey: dataFeedAccount.publicKey, isSigner: true, isWritable: true },
            ],
            programId: dataFeedAccountInfo.owner,
            data: Buffer.from(compiled_1.SwitchboardInstruction.encodeDelimited(compiled_1.SwitchboardInstruction.create({
                unregisterJobInstruction: compiled_1.SwitchboardInstruction.UnregisterJobInstruction.create({
                    jobPubkey: job.toBuffer()
                })
            })).finish()),
        });
        yield performTransaction(connection, new web3_js_1.Transaction().add(transactionInstruction), [
            payerAccount,
            dataFeedAccount,
        ]);
    });
}
exports.removeFeedJob = removeFeedJob;
/**
 * updateFeed will request a new fulfillment agreement for the aggregator and
 * notify nodes to fulfill the aggregator jobs.
 * @param connection Solana network connection object.
 * @param payerAccount Transaction funder account.
 * @param dataFeedPubkey The public key of the data feed being updated.
 * @param authKey The public key of the authorization account allowing this data feed to use the linked fulfillment manager.
 * @throws Error If authorization fails or if the data feed is not allowed to be updated at the time of calling.
 */
function updateFeed(connection, payerAccount, dataFeedPubkey, authKey) {
    return __awaiter(this, void 0, void 0, function* () {
        let dataFeedAccountInfo = yield connection.getAccountInfo(dataFeedPubkey);
        if (dataFeedAccountInfo == null)
            throw new Error("Failed to fetch information on the datafeed account");
        let aggregator = compiled_1.AggregatorState.decodeDelimited(dataFeedAccountInfo.data.slice(1));
        let fulfillmentManagerStatePubKey = new web3_js_1.PublicKey(aggregator.fulfillmentManagerPubkey);
        let keys = [
            { pubkey: dataFeedPubkey, isSigner: false, isWritable: true },
            { pubkey: fulfillmentManagerStatePubKey, isSigner: false, isWritable: false },
            { pubkey: web3_js_1.SYSVAR_CLOCK_PUBKEY, isSigner: false, isWritable: false },
        ];
        if (authKey != null) {
            keys.push({ pubkey: authKey, isSigner: false, isWritable: false });
        }
        let agreementInstruction = new web3_js_1.TransactionInstruction({
            keys,
            programId: dataFeedAccountInfo.owner,
            data: Buffer.from(compiled_1.SwitchboardInstruction.encodeDelimited(compiled_1.SwitchboardInstruction.create({
                reachFulfillerAgreementInstruction: compiled_1.SwitchboardInstruction.ReachFulfillerAgreementInstruction.create({})
            })).finish()),
        });
        let updateInstruction = new web3_js_1.TransactionInstruction({
            keys: [
                { pubkey: dataFeedPubkey, isSigner: false, isWritable: true },
            ],
            programId: dataFeedAccountInfo.owner,
            data: Buffer.from(compiled_1.SwitchboardInstruction.encodeDelimited(compiled_1.SwitchboardInstruction.create({
                updateAggregateInstruction: compiled_1.SwitchboardInstruction.UpdateAggregateInstruction.create({})
            })).finish()),
        });
        let txAccounts = [payerAccount];
        yield web3_js_1.sendAndConfirmTransaction(connection, new web3_js_1.Transaction()
            .add(agreementInstruction)
            .add(updateInstruction), txAccounts, {
            commitment: connection.commitment,
            preflightCommitment: connection.commitment,
        });
    });
}
exports.updateFeed = updateFeed;
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
function setDataFeedConfigs(connection, payerAccount, dataFeedAccount, configs) {
    return __awaiter(this, void 0, void 0, function* () {
        let dataFeedAccountInfo = yield connection.getAccountInfo(dataFeedAccount.publicKey);
        if (dataFeedAccountInfo == null)
            throw new Error("Failed to fetch information on the datafeed account");
        let keys = [
            { pubkey: dataFeedAccount.publicKey, isSigner: true, isWritable: true }
        ];
        let fmPubkey = null;
        if (configs["fulfillmentManagerPubkey"].length != 0) {
            fmPubkey = new web3_js_1.PublicKey(configs["fulfillmentManagerPubkey"]);
            keys.push({ pubkey: fmPubkey, isSigner: false, isWritable: false });
        }
        let transactionInstruction = new web3_js_1.TransactionInstruction({
            keys,
            programId: dataFeedAccountInfo.owner,
            data: Buffer.from(compiled_1.SwitchboardInstruction.encodeDelimited(compiled_1.SwitchboardInstruction.create({
                setAggregatorConfigsInstruction: compiled_1.SwitchboardInstruction.SetAggregatorConfigsInstruction.create({
                    minConfirmations: configs["minConfirmations"],
                    minUpdateDelaySeconds: configs["minUpdateDelaySeconds"],
                    fulfillmentManagerPubkey: fmPubkey === null || fmPubkey === void 0 ? void 0 : fmPubkey.toBytes(),
                    lock: configs["lock"],
                })
            })).finish()),
        });
        let txAccounts = [payerAccount, dataFeedAccount];
        yield performTransaction(connection, new web3_js_1.Transaction().add(transactionInstruction), txAccounts);
    });
}
exports.setDataFeedConfigs = setDataFeedConfigs;
//  === Fulfillment Manager Utilities ===
/**
 * Permanently sets the account type to a FulfillmentManagerAuth account.
 * @param connection Solana network connection object.
 * @param payerAccount Transaction funder account.
 * @param fulfillmentManagerAccount The account for which type will be set.
 */
function initFulfillmentManagerAccount(connection, payerAccount, fulfillmentManagerAccount) {
    return __awaiter(this, void 0, void 0, function* () {
        yield initAccount(connection, payerAccount, fulfillmentManagerAccount, compiled_1.SwitchboardAccountType.TYPE_FULFILLMENT_MANAGER);
    });
}
exports.initFulfillmentManagerAccount = initFulfillmentManagerAccount;
/**
 * Creates an account and permanently sets the account type to a FulfillmentManagerAuth account.
 * @param connection Solana network connection object.
 * @param payerAccount Transaction funder account.
 * @param switchboardPid The Switchboard Program pubkey.
 * @returns Account New switchboard account that can hold a fulfillment manager.
 */
function createFulfillmentManager(connection, payerAccount, switchboardPid) {
    return __awaiter(this, void 0, void 0, function* () {
        let fulfillmentManagerAccount = yield createOwnedStateAccount(connection, payerAccount, 50000, switchboardPid);
        yield initAccount(connection, payerAccount, fulfillmentManagerAccount, compiled_1.SwitchboardAccountType.TYPE_FULFILLMENT_MANAGER);
        return fulfillmentManagerAccount;
    });
}
exports.createFulfillmentManager = createFulfillmentManager;
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
function setFulfillmentManagerConfigs(connection, payerAccount, fulfillmentManagerAccount, configs) {
    return __awaiter(this, void 0, void 0, function* () {
        let fmAccountInfo = yield connection.getAccountInfo(fulfillmentManagerAccount.publicKey);
        if (fmAccountInfo == null) {
            throw new Error("Failed to fetch information on the Fulfillment Manager account");
        }
        let keys = [
            { pubkey: fulfillmentManagerAccount.publicKey, isSigner: true, isWritable: true }
        ];
        let transactionInstruction = new web3_js_1.TransactionInstruction({
            keys,
            programId: fmAccountInfo.owner,
            data: Buffer.from(compiled_1.SwitchboardInstruction.encodeDelimited(compiled_1.SwitchboardInstruction.create({
                setFulfillmentManagerConfigsInstruction: compiled_1.SwitchboardInstruction.SetFulfillmentManagerConfigsInstruction.create({
                    heartbeatAuthRequired: configs["heartbeatAuthRequired"],
                    usageAuthRequired: configs["usageAuthRequired"],
                    lock: configs["lock"],
                })
            })).finish()),
        });
        let txAccounts = [payerAccount, fulfillmentManagerAccount];
        yield performTransaction(connection, new web3_js_1.Transaction().add(transactionInstruction), txAccounts);
    });
}
exports.setFulfillmentManagerConfigs = setFulfillmentManagerConfigs;
//  === Fulfillment Manager Authorization Utilities ===
/**
 * Permanently sets the account type to a FulfillmentManagerAuth account.
 * @param connection Solana network connection object.
 * @param payerAccount Transaction funder account.
 * @param fulfillmentManagerAuthAccount The account for which type will be set.
 */
function initFulfillmentManagerAuthAccount(connection, payerAccount, fulfillmentManagerAuthAccount) {
    return __awaiter(this, void 0, void 0, function* () {
        yield initAccount(connection, payerAccount, fulfillmentManagerAuthAccount, compiled_1.SwitchboardAccountType.TYPE_FULFILLMENT_MANAGER_AUTH);
    });
}
exports.initFulfillmentManagerAuthAccount = initFulfillmentManagerAuthAccount;
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
 * @returns Account The account holding the new authorization config.
 */
function createFulfillmentManagerAuth(connection, payerAccount, fulfillmentManagerAccount, nomineePubkey, configs) {
    return __awaiter(this, void 0, void 0, function* () {
        let fmAccountInfo = yield connection.getAccountInfo(fulfillmentManagerAccount.publicKey);
        if (fmAccountInfo == null) {
            throw new Error("Failed to fetch account info for " + fulfillmentManagerAccount.publicKey.toString());
        }
        let fulfillmentManagerAuthAccount = yield createOwnedStateAccount(connection, payerAccount, 50000, fmAccountInfo.owner);
        yield initFulfillmentManagerAuthAccount(connection, payerAccount, fulfillmentManagerAuthAccount);
        yield setAuthConfigs(connection, payerAccount, fulfillmentManagerAccount, fulfillmentManagerAuthAccount.publicKey, nomineePubkey, configs);
        return fulfillmentManagerAuthAccount;
    });
}
exports.createFulfillmentManagerAuth = createFulfillmentManagerAuth;
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
function setAuthConfigs(connection, payerAccount, fulfillmentManagerAccount, fulfillmentManagerAuthPubkey, nomineePubkey, configs) {
    return __awaiter(this, void 0, void 0, function* () {
        let fmAccountInfo = yield connection.getAccountInfo(fulfillmentManagerAccount.publicKey);
        if (fmAccountInfo == null) {
            throw new Error("Failed to fetch account info for " + fulfillmentManagerAccount.publicKey.toString());
        }
        let transactionInstruction = new web3_js_1.TransactionInstruction({
            keys: [
                { pubkey: fulfillmentManagerAuthPubkey, isSigner: false, isWritable: true },
                { pubkey: fulfillmentManagerAccount.publicKey, isSigner: true, isWritable: false },
                { pubkey: nomineePubkey, isSigner: false, isWritable: false },
            ],
            programId: fmAccountInfo.owner,
            data: Buffer.from(compiled_1.SwitchboardInstruction.encodeDelimited(compiled_1.SwitchboardInstruction.create({
                registerAuthInstruction: compiled_1.SwitchboardInstruction.RegisterAuthInstruction.create({
                    authorizeHeartbeat: configs["authorizeHeartbeat"],
                    authorizeUsage: configs["authorizeUsage"],
                })
            })).finish()),
        });
        let txAccounts = [payerAccount, fulfillmentManagerAccount];
        yield performTransaction(connection, new web3_js_1.Transaction().add(transactionInstruction), txAccounts);
    });
}
exports.setAuthConfigs = setAuthConfigs;
// === Exported Helpers ===
/**
 * Helper for creating rent exempted accounts.
 * @param connection Solana network connection object.
 * @param payerAccount Transaction funder account.
 * @param size Data size this account will be able to hold
 * @param parent The public key of the program that will own this account.
 */
function createOwnedStateAccount(connection, payerAccount, size, parent) {
    return __awaiter(this, void 0, void 0, function* () {
        const programStateAccount = new web3_js_1.Account();
        let stateAccountPubkey = programStateAccount.publicKey;
        const space = size;
        const lamports = yield connection.getMinimumBalanceForRentExemption(space);
        const transaction = new web3_js_1.Transaction().add(web3_js_1.SystemProgram.createAccount({
            fromPubkey: payerAccount.publicKey,
            newAccountPubkey: stateAccountPubkey,
            lamports,
            space,
            programId: parent,
        }));
        yield performTransaction(connection, transaction, [payerAccount, programStateAccount]);
        return programStateAccount;
    });
}
exports.createOwnedStateAccount = createOwnedStateAccount;
// === Non-Exported helpers ===
// Internal Solana transaction helper.
function performTransaction(connection, transaction, accounts) {
    return __awaiter(this, void 0, void 0, function* () {
        return web3_js_1.sendAndConfirmTransaction(connection, transaction, accounts);
    });
}
// Internal account initialization helper
function initAccount(connection, payerAccount, account, type) {
    return __awaiter(this, void 0, void 0, function* () {
        let accountInfo = yield connection.getAccountInfo(account.publicKey);
        if (accountInfo == null) {
            throw new Error("Failed to fetch information on the provided account.");
        }
        let switchboardInstruction = compiled_1.SwitchboardInstruction.create({
            initInstruction: compiled_1.SwitchboardInstruction.InitInstruction.create({
                type: type
            })
        });
        let transactionInstruction = new web3_js_1.TransactionInstruction({
            keys: [
                { pubkey: account.publicKey, isSigner: true, isWritable: true },
                { pubkey: web3_js_1.SYSVAR_RENT_PUBKEY, isSigner: false, isWritable: false },
            ],
            programId: accountInfo.owner,
            data: Buffer.from(compiled_1.SwitchboardInstruction.encodeDelimited(switchboardInstruction).finish()),
        });
        yield performTransaction(connection, new web3_js_1.Transaction().add(transactionInstruction), [
            payerAccount,
            account,
        ]);
    });
}
