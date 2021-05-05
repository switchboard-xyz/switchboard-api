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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.performTransaction = exports.updateFeed = exports.setDataFeedConfigs = exports.addJobToFeed = exports.createFulfillmentManager = exports.initFulfillmentManagerAccount = exports.createDataFeed = exports.initDataFeedAccount = exports.createOwnedStateAccount = void 0;
var web3_js_1 = require("@solana/web3.js");
var compiled_1 = require("./../dist/compiled");
function createOwnedStateAccount(connection, payerAccount, size, parent) {
    return __awaiter(this, void 0, void 0, function () {
        var programStateAccount, stateAccountPubkey, space, lamports, transaction;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    programStateAccount = new web3_js_1.Account();
                    stateAccountPubkey = programStateAccount.publicKey;
                    space = size;
                    return [4 /*yield*/, connection.getMinimumBalanceForRentExemption(space)];
                case 1:
                    lamports = _a.sent();
                    transaction = new web3_js_1.Transaction().add(web3_js_1.SystemProgram.createAccount({
                        fromPubkey: payerAccount.publicKey,
                        newAccountPubkey: stateAccountPubkey,
                        lamports: lamports,
                        space: space,
                        programId: parent,
                    }));
                    return [4 /*yield*/, performTransaction(connection, transaction, [payerAccount, programStateAccount])];
                case 2:
                    _a.sent();
                    return [2 /*return*/, programStateAccount];
            }
        });
    });
}
exports.createOwnedStateAccount = createOwnedStateAccount;
function initAccount(connection, payerAccount, account, type) {
    return __awaiter(this, void 0, void 0, function () {
        var accountInfo, switchboardInstruction, transactionInstruction;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.getAccountInfo(account.publicKey)];
                case 1:
                    accountInfo = _a.sent();
                    if (accountInfo == null) {
                        throw new Error("Failed to fetch information on the provided account.");
                    }
                    switchboardInstruction = compiled_1.SwitchboardInstruction.create({
                        initInstruction: compiled_1.SwitchboardInstruction.InitInstruction.create({
                            type: type
                        })
                    });
                    transactionInstruction = new web3_js_1.TransactionInstruction({
                        keys: [
                            { pubkey: account.publicKey, isSigner: true, isWritable: true },
                            { pubkey: web3_js_1.SYSVAR_RENT_PUBKEY, isSigner: false, isWritable: false },
                        ],
                        programId: accountInfo.owner,
                        data: Buffer.from(compiled_1.SwitchboardInstruction.encodeDelimited(switchboardInstruction).finish()),
                    });
                    return [4 /*yield*/, performTransaction(connection, new web3_js_1.Transaction().add(transactionInstruction), [
                            payerAccount,
                            account,
                        ])];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function initDataFeedAccount(connection, payerAccount, dataFeedAccount) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, initAccount(connection, payerAccount, dataFeedAccount, compiled_1.SwitchboardInstruction.InitInstruction.Type.TYPE_AGGREGATOR)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.initDataFeedAccount = initDataFeedAccount;
function createDataFeed(connection, payerAccount, switchboardPid) {
    return __awaiter(this, void 0, void 0, function () {
        var dataFeedAccount;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, createOwnedStateAccount(connection, payerAccount, 50000, switchboardPid)];
                case 1:
                    dataFeedAccount = _a.sent();
                    return [4 /*yield*/, initAccount(connection, payerAccount, dataFeedAccount, compiled_1.SwitchboardInstruction.InitInstruction.Type.TYPE_AGGREGATOR)];
                case 2:
                    _a.sent();
                    return [2 /*return*/, dataFeedAccount];
            }
        });
    });
}
exports.createDataFeed = createDataFeed;
function initFulfillmentManagerAccount(connection, payerAccount, fulfillmentManagerAccount) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, initAccount(connection, payerAccount, fulfillmentManagerAccount, compiled_1.SwitchboardInstruction.InitInstruction.Type.TYPE_FULFILLMENT_MANAGER)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.initFulfillmentManagerAccount = initFulfillmentManagerAccount;
function createFulfillmentManager(connection, payerAccount, switchboardPid) {
    return __awaiter(this, void 0, void 0, function () {
        var fulfillmentManagerAccount;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, createOwnedStateAccount(connection, payerAccount, 50000, switchboardPid)];
                case 1:
                    fulfillmentManagerAccount = _a.sent();
                    return [4 /*yield*/, initAccount(connection, payerAccount, fulfillmentManagerAccount, compiled_1.SwitchboardInstruction.InitInstruction.Type.TYPE_FULFILLMENT_MANAGER)];
                case 2:
                    _a.sent();
                    return [2 /*return*/, fulfillmentManagerAccount];
            }
        });
    });
}
exports.createFulfillmentManager = createFulfillmentManager;
function addJobToFeed(connection, payerAccount, dataFeedAccount, jobTasks) {
    return __awaiter(this, void 0, void 0, function () {
        var dataFeedAccountInfo, transactionInstruction, _a, _b;
        var _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0: return [4 /*yield*/, connection.getAccountInfo(dataFeedAccount.publicKey)];
                case 1:
                    dataFeedAccountInfo = _e.sent();
                    if (dataFeedAccountInfo == null)
                        throw new Error("Failed to fetch information on the datafeed account");
                    _a = web3_js_1.TransactionInstruction.bind;
                    _c = {};
                    _b = [{ pubkey: dataFeedAccount.publicKey, isSigner: true, isWritable: true }];
                    _d = {};
                    return [4 /*yield*/, createOwnedStateAccount(connection, payerAccount, 5000, dataFeedAccountInfo.owner)];
                case 2:
                    transactionInstruction = new (_a.apply(web3_js_1.TransactionInstruction, [void 0, (_c.keys = _b.concat([
                            (_d.pubkey = (_e.sent()).publicKey, _d.isSigner = false, _d.isWritable = true, _d),
                            { pubkey: web3_js_1.SYSVAR_RENT_PUBKEY, isSigner: false, isWritable: false }
                        ]),
                            _c.programId = dataFeedAccountInfo.owner,
                            _c.data = Buffer.from(compiled_1.SwitchboardInstruction.encodeDelimited(compiled_1.SwitchboardInstruction.create({
                                registerJobInstruction: compiled_1.SwitchboardInstruction.RegisterJobInstruction.create({
                                    job: compiled_1.OracleJob.create({
                                        callbackStatePubkey: dataFeedAccount.publicKey.toBuffer(),
                                        tasks: jobTasks
                                    })
                                })
                            })).finish()),
                            _c)]))();
                    return [4 /*yield*/, performTransaction(connection, new web3_js_1.Transaction().add(transactionInstruction), [
                            payerAccount,
                            dataFeedAccount,
                        ])];
                case 3:
                    _e.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.addJobToFeed = addJobToFeed;
function setDataFeedConfigs(connection, payerAccount, dataFeedAccount, configs, fulfillmentManagerAccount) {
    return __awaiter(this, void 0, void 0, function () {
        var dataFeedAccountInfo, keys, fmPubkey, transactionInstruction, txAccounts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.getAccountInfo(dataFeedAccount.publicKey)];
                case 1:
                    dataFeedAccountInfo = _a.sent();
                    if (dataFeedAccountInfo == null)
                        throw new Error("Failed to fetch information on the datafeed account");
                    keys = [
                        { pubkey: dataFeedAccount.publicKey, isSigner: true, isWritable: true }
                    ];
                    if (configs["fulfillmentManagerPubkey"].length != 0) {
                        fmPubkey = new web3_js_1.PublicKey(configs["fulfillmentManagerPubkey"]);
                        keys.push({ pubkey: fmPubkey, isSigner: false, isWritable: false });
                    }
                    transactionInstruction = new web3_js_1.TransactionInstruction({
                        keys: keys,
                        programId: dataFeedAccountInfo.owner,
                        data: Buffer.from(compiled_1.SwitchboardInstruction.encodeDelimited(compiled_1.SwitchboardInstruction.create({
                            setAggregatorConfigsInstruction: compiled_1.SwitchboardInstruction.SetAggregatorConfigsInstruction.create({
                                minConfirmations: configs["minConfirmations"],
                                minUpdateDelaySeconds: configs["minUpdateDelaySeconds"],
                                fulfillmentManagerPubkey: configs["fulfillmentManagerPubkey"],
                                lock: configs["lock"],
                            })
                        })).finish()),
                    });
                    txAccounts = [payerAccount, dataFeedAccount];
                    if (fulfillmentManagerAccount != null) {
                        txAccounts.push(fulfillmentManagerAccount);
                    }
                    return [4 /*yield*/, performTransaction(connection, new web3_js_1.Transaction().add(transactionInstruction), txAccounts)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.setDataFeedConfigs = setDataFeedConfigs;
function updateFeed(connection, payerAccount, dataFeedPubkey) {
    return __awaiter(this, void 0, void 0, function () {
        var dataFeedAccountInfo, aggregator, fulfillmentManagerStatePubKey, transactionInstruction;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.getAccountInfo(dataFeedPubkey)];
                case 1:
                    dataFeedAccountInfo = _a.sent();
                    if (dataFeedAccountInfo == null)
                        throw new Error("Failed to fetch information on the datafeed account");
                    aggregator = compiled_1.AggregatorState.decodeDelimited(dataFeedAccountInfo.data.slice(1));
                    fulfillmentManagerStatePubKey = new web3_js_1.PublicKey(aggregator.fulfillmentManagerPubkey);
                    transactionInstruction = new web3_js_1.TransactionInstruction({
                        keys: [
                            { pubkey: dataFeedPubkey, isSigner: false, isWritable: true },
                            { pubkey: fulfillmentManagerStatePubKey, isSigner: false, isWritable: false },
                            { pubkey: web3_js_1.SYSVAR_CLOCK_PUBKEY, isSigner: false, isWritable: false },
                        ],
                        programId: dataFeedAccountInfo.owner,
                        data: Buffer.from(compiled_1.SwitchboardInstruction.encodeDelimited(compiled_1.SwitchboardInstruction.create({
                            updateAggregateInstruction: compiled_1.SwitchboardInstruction.UpdateAggregateInstruction.create({})
                        })).finish()),
                    });
                    return [4 /*yield*/, performTransaction(connection, new web3_js_1.Transaction().add(transactionInstruction), [
                            payerAccount,
                        ])];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.updateFeed = updateFeed;
function performTransaction(connection, transaction, accounts) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, web3_js_1.sendAndConfirmTransaction(connection, transaction, accounts)];
        });
    });
}
exports.performTransaction = performTransaction;
