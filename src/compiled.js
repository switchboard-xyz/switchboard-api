/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.FulfillmentAgreement = (function() {
    
        /**
         * Properties of a FulfillmentAgreement.
         * @exports IFulfillmentAgreement
         * @interface IFulfillmentAgreement
         * @property {Array.<Uint8Array>|null} [nodePubkeys] FulfillmentAgreement nodePubkeys
         * @property {boolean|null} [requested] FulfillmentAgreement requested
         */
    
        /**
         * Constructs a new FulfillmentAgreement.
         * @exports FulfillmentAgreement
         * @classdesc Represents a FulfillmentAgreement.
         * @implements IFulfillmentAgreement
         * @constructor
         * @param {IFulfillmentAgreement=} [properties] Properties to set
         */
        function FulfillmentAgreement(properties) {
            this.nodePubkeys = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * FulfillmentAgreement nodePubkeys.
         * @member {Array.<Uint8Array>} nodePubkeys
         * @memberof FulfillmentAgreement
         * @instance
         */
        FulfillmentAgreement.prototype.nodePubkeys = $util.emptyArray;
    
        /**
         * FulfillmentAgreement requested.
         * @member {boolean} requested
         * @memberof FulfillmentAgreement
         * @instance
         */
        FulfillmentAgreement.prototype.requested = false;
    
        /**
         * Creates a new FulfillmentAgreement instance using the specified properties.
         * @function create
         * @memberof FulfillmentAgreement
         * @static
         * @param {IFulfillmentAgreement=} [properties] Properties to set
         * @returns {FulfillmentAgreement} FulfillmentAgreement instance
         */
        FulfillmentAgreement.create = function create(properties) {
            return new FulfillmentAgreement(properties);
        };
    
        /**
         * Encodes the specified FulfillmentAgreement message. Does not implicitly {@link FulfillmentAgreement.verify|verify} messages.
         * @function encode
         * @memberof FulfillmentAgreement
         * @static
         * @param {IFulfillmentAgreement} message FulfillmentAgreement message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FulfillmentAgreement.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.nodePubkeys != null && message.nodePubkeys.length)
                for (var i = 0; i < message.nodePubkeys.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.nodePubkeys[i]);
            if (message.requested != null && Object.hasOwnProperty.call(message, "requested"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.requested);
            return writer;
        };
    
        /**
         * Encodes the specified FulfillmentAgreement message, length delimited. Does not implicitly {@link FulfillmentAgreement.verify|verify} messages.
         * @function encodeDelimited
         * @memberof FulfillmentAgreement
         * @static
         * @param {IFulfillmentAgreement} message FulfillmentAgreement message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FulfillmentAgreement.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a FulfillmentAgreement message from the specified reader or buffer.
         * @function decode
         * @memberof FulfillmentAgreement
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {FulfillmentAgreement} FulfillmentAgreement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FulfillmentAgreement.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FulfillmentAgreement();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.nodePubkeys && message.nodePubkeys.length))
                        message.nodePubkeys = [];
                    message.nodePubkeys.push(reader.bytes());
                    break;
                case 3:
                    message.requested = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a FulfillmentAgreement message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof FulfillmentAgreement
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {FulfillmentAgreement} FulfillmentAgreement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FulfillmentAgreement.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a FulfillmentAgreement message.
         * @function verify
         * @memberof FulfillmentAgreement
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FulfillmentAgreement.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.nodePubkeys != null && message.hasOwnProperty("nodePubkeys")) {
                if (!Array.isArray(message.nodePubkeys))
                    return "nodePubkeys: array expected";
                for (var i = 0; i < message.nodePubkeys.length; ++i)
                    if (!(message.nodePubkeys[i] && typeof message.nodePubkeys[i].length === "number" || $util.isString(message.nodePubkeys[i])))
                        return "nodePubkeys: buffer[] expected";
            }
            if (message.requested != null && message.hasOwnProperty("requested"))
                if (typeof message.requested !== "boolean")
                    return "requested: boolean expected";
            return null;
        };
    
        /**
         * Creates a FulfillmentAgreement message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof FulfillmentAgreement
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {FulfillmentAgreement} FulfillmentAgreement
         */
        FulfillmentAgreement.fromObject = function fromObject(object) {
            if (object instanceof $root.FulfillmentAgreement)
                return object;
            var message = new $root.FulfillmentAgreement();
            if (object.nodePubkeys) {
                if (!Array.isArray(object.nodePubkeys))
                    throw TypeError(".FulfillmentAgreement.nodePubkeys: array expected");
                message.nodePubkeys = [];
                for (var i = 0; i < object.nodePubkeys.length; ++i)
                    if (typeof object.nodePubkeys[i] === "string")
                        $util.base64.decode(object.nodePubkeys[i], message.nodePubkeys[i] = $util.newBuffer($util.base64.length(object.nodePubkeys[i])), 0);
                    else if (object.nodePubkeys[i].length)
                        message.nodePubkeys[i] = object.nodePubkeys[i];
            }
            if (object.requested != null)
                message.requested = Boolean(object.requested);
            return message;
        };
    
        /**
         * Creates a plain object from a FulfillmentAgreement message. Also converts values to other types if specified.
         * @function toObject
         * @memberof FulfillmentAgreement
         * @static
         * @param {FulfillmentAgreement} message FulfillmentAgreement
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FulfillmentAgreement.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.nodePubkeys = [];
            if (options.defaults)
                object.requested = false;
            if (message.nodePubkeys && message.nodePubkeys.length) {
                object.nodePubkeys = [];
                for (var j = 0; j < message.nodePubkeys.length; ++j)
                    object.nodePubkeys[j] = options.bytes === String ? $util.base64.encode(message.nodePubkeys[j], 0, message.nodePubkeys[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.nodePubkeys[j]) : message.nodePubkeys[j];
            }
            if (message.requested != null && message.hasOwnProperty("requested"))
                object.requested = message.requested;
            return object;
        };
    
        /**
         * Converts this FulfillmentAgreement to JSON.
         * @function toJSON
         * @memberof FulfillmentAgreement
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FulfillmentAgreement.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return FulfillmentAgreement;
    })();
    
    $root.RoundResult = (function() {
    
        /**
         * Properties of a RoundResult.
         * @exports IRoundResult
         * @interface IRoundResult
         * @property {number|null} [numSuccess] RoundResult numSuccess
         * @property {number|null} [numError] RoundResult numError
         * @property {number|null} [result] RoundResult result
         * @property {number|Long|null} [roundOpenSlot] RoundResult roundOpenSlot
         * @property {number|Long|null} [roundOpenTimestamp] RoundResult roundOpenTimestamp
         * @property {number|null} [minResponse] RoundResult minResponse
         * @property {number|null} [maxResponse] RoundResult maxResponse
         * @property {Array.<number>|null} [medians] RoundResult medians
         */
    
        /**
         * Constructs a new RoundResult.
         * @exports RoundResult
         * @classdesc Represents a RoundResult.
         * @implements IRoundResult
         * @constructor
         * @param {IRoundResult=} [properties] Properties to set
         */
        function RoundResult(properties) {
            this.medians = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * RoundResult numSuccess.
         * @member {number} numSuccess
         * @memberof RoundResult
         * @instance
         */
        RoundResult.prototype.numSuccess = 0;
    
        /**
         * RoundResult numError.
         * @member {number} numError
         * @memberof RoundResult
         * @instance
         */
        RoundResult.prototype.numError = 0;
    
        /**
         * RoundResult result.
         * @member {number} result
         * @memberof RoundResult
         * @instance
         */
        RoundResult.prototype.result = 0;
    
        /**
         * RoundResult roundOpenSlot.
         * @member {number|Long} roundOpenSlot
         * @memberof RoundResult
         * @instance
         */
        RoundResult.prototype.roundOpenSlot = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * RoundResult roundOpenTimestamp.
         * @member {number|Long} roundOpenTimestamp
         * @memberof RoundResult
         * @instance
         */
        RoundResult.prototype.roundOpenTimestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * RoundResult minResponse.
         * @member {number} minResponse
         * @memberof RoundResult
         * @instance
         */
        RoundResult.prototype.minResponse = 0;
    
        /**
         * RoundResult maxResponse.
         * @member {number} maxResponse
         * @memberof RoundResult
         * @instance
         */
        RoundResult.prototype.maxResponse = 0;
    
        /**
         * RoundResult medians.
         * @member {Array.<number>} medians
         * @memberof RoundResult
         * @instance
         */
        RoundResult.prototype.medians = $util.emptyArray;
    
        /**
         * Creates a new RoundResult instance using the specified properties.
         * @function create
         * @memberof RoundResult
         * @static
         * @param {IRoundResult=} [properties] Properties to set
         * @returns {RoundResult} RoundResult instance
         */
        RoundResult.create = function create(properties) {
            return new RoundResult(properties);
        };
    
        /**
         * Encodes the specified RoundResult message. Does not implicitly {@link RoundResult.verify|verify} messages.
         * @function encode
         * @memberof RoundResult
         * @static
         * @param {IRoundResult} message RoundResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoundResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.numSuccess != null && Object.hasOwnProperty.call(message, "numSuccess"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.numSuccess);
            if (message.numError != null && Object.hasOwnProperty.call(message, "numError"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.numError);
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.result);
            if (message.roundOpenSlot != null && Object.hasOwnProperty.call(message, "roundOpenSlot"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.roundOpenSlot);
            if (message.roundOpenTimestamp != null && Object.hasOwnProperty.call(message, "roundOpenTimestamp"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.roundOpenTimestamp);
            if (message.minResponse != null && Object.hasOwnProperty.call(message, "minResponse"))
                writer.uint32(/* id 6, wireType 1 =*/49).double(message.minResponse);
            if (message.maxResponse != null && Object.hasOwnProperty.call(message, "maxResponse"))
                writer.uint32(/* id 7, wireType 1 =*/57).double(message.maxResponse);
            if (message.medians != null && message.medians.length)
                for (var i = 0; i < message.medians.length; ++i)
                    writer.uint32(/* id 8, wireType 1 =*/65).double(message.medians[i]);
            return writer;
        };
    
        /**
         * Encodes the specified RoundResult message, length delimited. Does not implicitly {@link RoundResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof RoundResult
         * @static
         * @param {IRoundResult} message RoundResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoundResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a RoundResult message from the specified reader or buffer.
         * @function decode
         * @memberof RoundResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {RoundResult} RoundResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoundResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RoundResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.numSuccess = reader.int32();
                    break;
                case 2:
                    message.numError = reader.int32();
                    break;
                case 3:
                    message.result = reader.double();
                    break;
                case 4:
                    message.roundOpenSlot = reader.uint64();
                    break;
                case 5:
                    message.roundOpenTimestamp = reader.int64();
                    break;
                case 6:
                    message.minResponse = reader.double();
                    break;
                case 7:
                    message.maxResponse = reader.double();
                    break;
                case 8:
                    if (!(message.medians && message.medians.length))
                        message.medians = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.medians.push(reader.double());
                    } else
                        message.medians.push(reader.double());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a RoundResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof RoundResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {RoundResult} RoundResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoundResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a RoundResult message.
         * @function verify
         * @memberof RoundResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoundResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.numSuccess != null && message.hasOwnProperty("numSuccess"))
                if (!$util.isInteger(message.numSuccess))
                    return "numSuccess: integer expected";
            if (message.numError != null && message.hasOwnProperty("numError"))
                if (!$util.isInteger(message.numError))
                    return "numError: integer expected";
            if (message.result != null && message.hasOwnProperty("result"))
                if (typeof message.result !== "number")
                    return "result: number expected";
            if (message.roundOpenSlot != null && message.hasOwnProperty("roundOpenSlot"))
                if (!$util.isInteger(message.roundOpenSlot) && !(message.roundOpenSlot && $util.isInteger(message.roundOpenSlot.low) && $util.isInteger(message.roundOpenSlot.high)))
                    return "roundOpenSlot: integer|Long expected";
            if (message.roundOpenTimestamp != null && message.hasOwnProperty("roundOpenTimestamp"))
                if (!$util.isInteger(message.roundOpenTimestamp) && !(message.roundOpenTimestamp && $util.isInteger(message.roundOpenTimestamp.low) && $util.isInteger(message.roundOpenTimestamp.high)))
                    return "roundOpenTimestamp: integer|Long expected";
            if (message.minResponse != null && message.hasOwnProperty("minResponse"))
                if (typeof message.minResponse !== "number")
                    return "minResponse: number expected";
            if (message.maxResponse != null && message.hasOwnProperty("maxResponse"))
                if (typeof message.maxResponse !== "number")
                    return "maxResponse: number expected";
            if (message.medians != null && message.hasOwnProperty("medians")) {
                if (!Array.isArray(message.medians))
                    return "medians: array expected";
                for (var i = 0; i < message.medians.length; ++i)
                    if (typeof message.medians[i] !== "number")
                        return "medians: number[] expected";
            }
            return null;
        };
    
        /**
         * Creates a RoundResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof RoundResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {RoundResult} RoundResult
         */
        RoundResult.fromObject = function fromObject(object) {
            if (object instanceof $root.RoundResult)
                return object;
            var message = new $root.RoundResult();
            if (object.numSuccess != null)
                message.numSuccess = object.numSuccess | 0;
            if (object.numError != null)
                message.numError = object.numError | 0;
            if (object.result != null)
                message.result = Number(object.result);
            if (object.roundOpenSlot != null)
                if ($util.Long)
                    (message.roundOpenSlot = $util.Long.fromValue(object.roundOpenSlot)).unsigned = true;
                else if (typeof object.roundOpenSlot === "string")
                    message.roundOpenSlot = parseInt(object.roundOpenSlot, 10);
                else if (typeof object.roundOpenSlot === "number")
                    message.roundOpenSlot = object.roundOpenSlot;
                else if (typeof object.roundOpenSlot === "object")
                    message.roundOpenSlot = new $util.LongBits(object.roundOpenSlot.low >>> 0, object.roundOpenSlot.high >>> 0).toNumber(true);
            if (object.roundOpenTimestamp != null)
                if ($util.Long)
                    (message.roundOpenTimestamp = $util.Long.fromValue(object.roundOpenTimestamp)).unsigned = false;
                else if (typeof object.roundOpenTimestamp === "string")
                    message.roundOpenTimestamp = parseInt(object.roundOpenTimestamp, 10);
                else if (typeof object.roundOpenTimestamp === "number")
                    message.roundOpenTimestamp = object.roundOpenTimestamp;
                else if (typeof object.roundOpenTimestamp === "object")
                    message.roundOpenTimestamp = new $util.LongBits(object.roundOpenTimestamp.low >>> 0, object.roundOpenTimestamp.high >>> 0).toNumber();
            if (object.minResponse != null)
                message.minResponse = Number(object.minResponse);
            if (object.maxResponse != null)
                message.maxResponse = Number(object.maxResponse);
            if (object.medians) {
                if (!Array.isArray(object.medians))
                    throw TypeError(".RoundResult.medians: array expected");
                message.medians = [];
                for (var i = 0; i < object.medians.length; ++i)
                    message.medians[i] = Number(object.medians[i]);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a RoundResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof RoundResult
         * @static
         * @param {RoundResult} message RoundResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoundResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.medians = [];
            if (options.defaults) {
                object.numSuccess = 0;
                object.numError = 0;
                object.result = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.roundOpenSlot = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.roundOpenSlot = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.roundOpenTimestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.roundOpenTimestamp = options.longs === String ? "0" : 0;
                object.minResponse = 0;
                object.maxResponse = 0;
            }
            if (message.numSuccess != null && message.hasOwnProperty("numSuccess"))
                object.numSuccess = message.numSuccess;
            if (message.numError != null && message.hasOwnProperty("numError"))
                object.numError = message.numError;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = options.json && !isFinite(message.result) ? String(message.result) : message.result;
            if (message.roundOpenSlot != null && message.hasOwnProperty("roundOpenSlot"))
                if (typeof message.roundOpenSlot === "number")
                    object.roundOpenSlot = options.longs === String ? String(message.roundOpenSlot) : message.roundOpenSlot;
                else
                    object.roundOpenSlot = options.longs === String ? $util.Long.prototype.toString.call(message.roundOpenSlot) : options.longs === Number ? new $util.LongBits(message.roundOpenSlot.low >>> 0, message.roundOpenSlot.high >>> 0).toNumber(true) : message.roundOpenSlot;
            if (message.roundOpenTimestamp != null && message.hasOwnProperty("roundOpenTimestamp"))
                if (typeof message.roundOpenTimestamp === "number")
                    object.roundOpenTimestamp = options.longs === String ? String(message.roundOpenTimestamp) : message.roundOpenTimestamp;
                else
                    object.roundOpenTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.roundOpenTimestamp) : options.longs === Number ? new $util.LongBits(message.roundOpenTimestamp.low >>> 0, message.roundOpenTimestamp.high >>> 0).toNumber() : message.roundOpenTimestamp;
            if (message.minResponse != null && message.hasOwnProperty("minResponse"))
                object.minResponse = options.json && !isFinite(message.minResponse) ? String(message.minResponse) : message.minResponse;
            if (message.maxResponse != null && message.hasOwnProperty("maxResponse"))
                object.maxResponse = options.json && !isFinite(message.maxResponse) ? String(message.maxResponse) : message.maxResponse;
            if (message.medians && message.medians.length) {
                object.medians = [];
                for (var j = 0; j < message.medians.length; ++j)
                    object.medians[j] = options.json && !isFinite(message.medians[j]) ? String(message.medians[j]) : message.medians[j];
            }
            return object;
        };
    
        /**
         * Converts this RoundResult to JSON.
         * @function toJSON
         * @memberof RoundResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoundResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return RoundResult;
    })();
    
    $root.AggregatorState = (function() {
    
        /**
         * Properties of an AggregatorState.
         * @exports IAggregatorState
         * @interface IAggregatorState
         * @property {number|null} [version] AggregatorState version
         * @property {AggregatorState.IConfigs|null} [configs] AggregatorState configs
         * @property {Uint8Array|null} [fulfillmentManagerPubkey] AggregatorState fulfillmentManagerPubkey
         * @property {Array.<Uint8Array>|null} [jobDefinitionPubkeys] AggregatorState jobDefinitionPubkeys
         * @property {IFulfillmentAgreement|null} [agreement] AggregatorState agreement
         * @property {IRoundResult|null} [currentRoundResult] AggregatorState currentRoundResult
         * @property {IRoundResult|null} [lastRoundResult] AggregatorState lastRoundResult
         */
    
        /**
         * Constructs a new AggregatorState.
         * @exports AggregatorState
         * @classdesc Represents an AggregatorState.
         * @implements IAggregatorState
         * @constructor
         * @param {IAggregatorState=} [properties] Properties to set
         */
        function AggregatorState(properties) {
            this.jobDefinitionPubkeys = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * AggregatorState version.
         * @member {number} version
         * @memberof AggregatorState
         * @instance
         */
        AggregatorState.prototype.version = 0;
    
        /**
         * AggregatorState configs.
         * @member {AggregatorState.IConfigs|null|undefined} configs
         * @memberof AggregatorState
         * @instance
         */
        AggregatorState.prototype.configs = null;
    
        /**
         * AggregatorState fulfillmentManagerPubkey.
         * @member {Uint8Array} fulfillmentManagerPubkey
         * @memberof AggregatorState
         * @instance
         */
        AggregatorState.prototype.fulfillmentManagerPubkey = $util.newBuffer([]);
    
        /**
         * AggregatorState jobDefinitionPubkeys.
         * @member {Array.<Uint8Array>} jobDefinitionPubkeys
         * @memberof AggregatorState
         * @instance
         */
        AggregatorState.prototype.jobDefinitionPubkeys = $util.emptyArray;
    
        /**
         * AggregatorState agreement.
         * @member {IFulfillmentAgreement|null|undefined} agreement
         * @memberof AggregatorState
         * @instance
         */
        AggregatorState.prototype.agreement = null;
    
        /**
         * AggregatorState currentRoundResult.
         * @member {IRoundResult|null|undefined} currentRoundResult
         * @memberof AggregatorState
         * @instance
         */
        AggregatorState.prototype.currentRoundResult = null;
    
        /**
         * AggregatorState lastRoundResult.
         * @member {IRoundResult|null|undefined} lastRoundResult
         * @memberof AggregatorState
         * @instance
         */
        AggregatorState.prototype.lastRoundResult = null;
    
        /**
         * Creates a new AggregatorState instance using the specified properties.
         * @function create
         * @memberof AggregatorState
         * @static
         * @param {IAggregatorState=} [properties] Properties to set
         * @returns {AggregatorState} AggregatorState instance
         */
        AggregatorState.create = function create(properties) {
            return new AggregatorState(properties);
        };
    
        /**
         * Encodes the specified AggregatorState message. Does not implicitly {@link AggregatorState.verify|verify} messages.
         * @function encode
         * @memberof AggregatorState
         * @static
         * @param {IAggregatorState} message AggregatorState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AggregatorState.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.version);
            if (message.configs != null && Object.hasOwnProperty.call(message, "configs"))
                $root.AggregatorState.Configs.encode(message.configs, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.fulfillmentManagerPubkey != null && Object.hasOwnProperty.call(message, "fulfillmentManagerPubkey"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.fulfillmentManagerPubkey);
            if (message.jobDefinitionPubkeys != null && message.jobDefinitionPubkeys.length)
                for (var i = 0; i < message.jobDefinitionPubkeys.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.jobDefinitionPubkeys[i]);
            if (message.agreement != null && Object.hasOwnProperty.call(message, "agreement"))
                $root.FulfillmentAgreement.encode(message.agreement, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.currentRoundResult != null && Object.hasOwnProperty.call(message, "currentRoundResult"))
                $root.RoundResult.encode(message.currentRoundResult, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.lastRoundResult != null && Object.hasOwnProperty.call(message, "lastRoundResult"))
                $root.RoundResult.encode(message.lastRoundResult, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified AggregatorState message, length delimited. Does not implicitly {@link AggregatorState.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AggregatorState
         * @static
         * @param {IAggregatorState} message AggregatorState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AggregatorState.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an AggregatorState message from the specified reader or buffer.
         * @function decode
         * @memberof AggregatorState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AggregatorState} AggregatorState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AggregatorState.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AggregatorState();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.version = reader.uint32();
                    break;
                case 2:
                    message.configs = $root.AggregatorState.Configs.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.fulfillmentManagerPubkey = reader.bytes();
                    break;
                case 4:
                    if (!(message.jobDefinitionPubkeys && message.jobDefinitionPubkeys.length))
                        message.jobDefinitionPubkeys = [];
                    message.jobDefinitionPubkeys.push(reader.bytes());
                    break;
                case 5:
                    message.agreement = $root.FulfillmentAgreement.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.currentRoundResult = $root.RoundResult.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.lastRoundResult = $root.RoundResult.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes an AggregatorState message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AggregatorState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AggregatorState} AggregatorState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AggregatorState.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an AggregatorState message.
         * @function verify
         * @memberof AggregatorState
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AggregatorState.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isInteger(message.version))
                    return "version: integer expected";
            if (message.configs != null && message.hasOwnProperty("configs")) {
                var error = $root.AggregatorState.Configs.verify(message.configs);
                if (error)
                    return "configs." + error;
            }
            if (message.fulfillmentManagerPubkey != null && message.hasOwnProperty("fulfillmentManagerPubkey"))
                if (!(message.fulfillmentManagerPubkey && typeof message.fulfillmentManagerPubkey.length === "number" || $util.isString(message.fulfillmentManagerPubkey)))
                    return "fulfillmentManagerPubkey: buffer expected";
            if (message.jobDefinitionPubkeys != null && message.hasOwnProperty("jobDefinitionPubkeys")) {
                if (!Array.isArray(message.jobDefinitionPubkeys))
                    return "jobDefinitionPubkeys: array expected";
                for (var i = 0; i < message.jobDefinitionPubkeys.length; ++i)
                    if (!(message.jobDefinitionPubkeys[i] && typeof message.jobDefinitionPubkeys[i].length === "number" || $util.isString(message.jobDefinitionPubkeys[i])))
                        return "jobDefinitionPubkeys: buffer[] expected";
            }
            if (message.agreement != null && message.hasOwnProperty("agreement")) {
                var error = $root.FulfillmentAgreement.verify(message.agreement);
                if (error)
                    return "agreement." + error;
            }
            if (message.currentRoundResult != null && message.hasOwnProperty("currentRoundResult")) {
                var error = $root.RoundResult.verify(message.currentRoundResult);
                if (error)
                    return "currentRoundResult." + error;
            }
            if (message.lastRoundResult != null && message.hasOwnProperty("lastRoundResult")) {
                var error = $root.RoundResult.verify(message.lastRoundResult);
                if (error)
                    return "lastRoundResult." + error;
            }
            return null;
        };
    
        /**
         * Creates an AggregatorState message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AggregatorState
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AggregatorState} AggregatorState
         */
        AggregatorState.fromObject = function fromObject(object) {
            if (object instanceof $root.AggregatorState)
                return object;
            var message = new $root.AggregatorState();
            if (object.version != null)
                message.version = object.version >>> 0;
            if (object.configs != null) {
                if (typeof object.configs !== "object")
                    throw TypeError(".AggregatorState.configs: object expected");
                message.configs = $root.AggregatorState.Configs.fromObject(object.configs);
            }
            if (object.fulfillmentManagerPubkey != null)
                if (typeof object.fulfillmentManagerPubkey === "string")
                    $util.base64.decode(object.fulfillmentManagerPubkey, message.fulfillmentManagerPubkey = $util.newBuffer($util.base64.length(object.fulfillmentManagerPubkey)), 0);
                else if (object.fulfillmentManagerPubkey.length)
                    message.fulfillmentManagerPubkey = object.fulfillmentManagerPubkey;
            if (object.jobDefinitionPubkeys) {
                if (!Array.isArray(object.jobDefinitionPubkeys))
                    throw TypeError(".AggregatorState.jobDefinitionPubkeys: array expected");
                message.jobDefinitionPubkeys = [];
                for (var i = 0; i < object.jobDefinitionPubkeys.length; ++i)
                    if (typeof object.jobDefinitionPubkeys[i] === "string")
                        $util.base64.decode(object.jobDefinitionPubkeys[i], message.jobDefinitionPubkeys[i] = $util.newBuffer($util.base64.length(object.jobDefinitionPubkeys[i])), 0);
                    else if (object.jobDefinitionPubkeys[i].length)
                        message.jobDefinitionPubkeys[i] = object.jobDefinitionPubkeys[i];
            }
            if (object.agreement != null) {
                if (typeof object.agreement !== "object")
                    throw TypeError(".AggregatorState.agreement: object expected");
                message.agreement = $root.FulfillmentAgreement.fromObject(object.agreement);
            }
            if (object.currentRoundResult != null) {
                if (typeof object.currentRoundResult !== "object")
                    throw TypeError(".AggregatorState.currentRoundResult: object expected");
                message.currentRoundResult = $root.RoundResult.fromObject(object.currentRoundResult);
            }
            if (object.lastRoundResult != null) {
                if (typeof object.lastRoundResult !== "object")
                    throw TypeError(".AggregatorState.lastRoundResult: object expected");
                message.lastRoundResult = $root.RoundResult.fromObject(object.lastRoundResult);
            }
            return message;
        };
    
        /**
         * Creates a plain object from an AggregatorState message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AggregatorState
         * @static
         * @param {AggregatorState} message AggregatorState
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AggregatorState.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.jobDefinitionPubkeys = [];
            if (options.defaults) {
                object.version = 0;
                object.configs = null;
                if (options.bytes === String)
                    object.fulfillmentManagerPubkey = "";
                else {
                    object.fulfillmentManagerPubkey = [];
                    if (options.bytes !== Array)
                        object.fulfillmentManagerPubkey = $util.newBuffer(object.fulfillmentManagerPubkey);
                }
                object.agreement = null;
                object.currentRoundResult = null;
                object.lastRoundResult = null;
            }
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            if (message.configs != null && message.hasOwnProperty("configs"))
                object.configs = $root.AggregatorState.Configs.toObject(message.configs, options);
            if (message.fulfillmentManagerPubkey != null && message.hasOwnProperty("fulfillmentManagerPubkey"))
                object.fulfillmentManagerPubkey = options.bytes === String ? $util.base64.encode(message.fulfillmentManagerPubkey, 0, message.fulfillmentManagerPubkey.length) : options.bytes === Array ? Array.prototype.slice.call(message.fulfillmentManagerPubkey) : message.fulfillmentManagerPubkey;
            if (message.jobDefinitionPubkeys && message.jobDefinitionPubkeys.length) {
                object.jobDefinitionPubkeys = [];
                for (var j = 0; j < message.jobDefinitionPubkeys.length; ++j)
                    object.jobDefinitionPubkeys[j] = options.bytes === String ? $util.base64.encode(message.jobDefinitionPubkeys[j], 0, message.jobDefinitionPubkeys[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.jobDefinitionPubkeys[j]) : message.jobDefinitionPubkeys[j];
            }
            if (message.agreement != null && message.hasOwnProperty("agreement"))
                object.agreement = $root.FulfillmentAgreement.toObject(message.agreement, options);
            if (message.currentRoundResult != null && message.hasOwnProperty("currentRoundResult"))
                object.currentRoundResult = $root.RoundResult.toObject(message.currentRoundResult, options);
            if (message.lastRoundResult != null && message.hasOwnProperty("lastRoundResult"))
                object.lastRoundResult = $root.RoundResult.toObject(message.lastRoundResult, options);
            return object;
        };
    
        /**
         * Converts this AggregatorState to JSON.
         * @function toJSON
         * @memberof AggregatorState
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AggregatorState.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        AggregatorState.Configs = (function() {
    
            /**
             * Properties of a Configs.
             * @memberof AggregatorState
             * @interface IConfigs
             * @property {boolean|null} [locked] Configs locked
             * @property {number|null} [minConfirmations] Configs minConfirmations
             * @property {number|Long|null} [minUpdateDelaySeconds] Configs minUpdateDelaySeconds
             */
    
            /**
             * Constructs a new Configs.
             * @memberof AggregatorState
             * @classdesc Represents a Configs.
             * @implements IConfigs
             * @constructor
             * @param {AggregatorState.IConfigs=} [properties] Properties to set
             */
            function Configs(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Configs locked.
             * @member {boolean} locked
             * @memberof AggregatorState.Configs
             * @instance
             */
            Configs.prototype.locked = false;
    
            /**
             * Configs minConfirmations.
             * @member {number} minConfirmations
             * @memberof AggregatorState.Configs
             * @instance
             */
            Configs.prototype.minConfirmations = 0;
    
            /**
             * Configs minUpdateDelaySeconds.
             * @member {number|Long} minUpdateDelaySeconds
             * @memberof AggregatorState.Configs
             * @instance
             */
            Configs.prototype.minUpdateDelaySeconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * Creates a new Configs instance using the specified properties.
             * @function create
             * @memberof AggregatorState.Configs
             * @static
             * @param {AggregatorState.IConfigs=} [properties] Properties to set
             * @returns {AggregatorState.Configs} Configs instance
             */
            Configs.create = function create(properties) {
                return new Configs(properties);
            };
    
            /**
             * Encodes the specified Configs message. Does not implicitly {@link AggregatorState.Configs.verify|verify} messages.
             * @function encode
             * @memberof AggregatorState.Configs
             * @static
             * @param {AggregatorState.IConfigs} message Configs message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Configs.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.locked != null && Object.hasOwnProperty.call(message, "locked"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.locked);
                if (message.minConfirmations != null && Object.hasOwnProperty.call(message, "minConfirmations"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.minConfirmations);
                if (message.minUpdateDelaySeconds != null && Object.hasOwnProperty.call(message, "minUpdateDelaySeconds"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.minUpdateDelaySeconds);
                return writer;
            };
    
            /**
             * Encodes the specified Configs message, length delimited. Does not implicitly {@link AggregatorState.Configs.verify|verify} messages.
             * @function encodeDelimited
             * @memberof AggregatorState.Configs
             * @static
             * @param {AggregatorState.IConfigs} message Configs message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Configs.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Configs message from the specified reader or buffer.
             * @function decode
             * @memberof AggregatorState.Configs
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {AggregatorState.Configs} Configs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Configs.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AggregatorState.Configs();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.locked = reader.bool();
                        break;
                    case 2:
                        message.minConfirmations = reader.int32();
                        break;
                    case 3:
                        message.minUpdateDelaySeconds = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Configs message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof AggregatorState.Configs
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {AggregatorState.Configs} Configs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Configs.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Configs message.
             * @function verify
             * @memberof AggregatorState.Configs
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Configs.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.locked != null && message.hasOwnProperty("locked"))
                    if (typeof message.locked !== "boolean")
                        return "locked: boolean expected";
                if (message.minConfirmations != null && message.hasOwnProperty("minConfirmations"))
                    if (!$util.isInteger(message.minConfirmations))
                        return "minConfirmations: integer expected";
                if (message.minUpdateDelaySeconds != null && message.hasOwnProperty("minUpdateDelaySeconds"))
                    if (!$util.isInteger(message.minUpdateDelaySeconds) && !(message.minUpdateDelaySeconds && $util.isInteger(message.minUpdateDelaySeconds.low) && $util.isInteger(message.minUpdateDelaySeconds.high)))
                        return "minUpdateDelaySeconds: integer|Long expected";
                return null;
            };
    
            /**
             * Creates a Configs message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof AggregatorState.Configs
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {AggregatorState.Configs} Configs
             */
            Configs.fromObject = function fromObject(object) {
                if (object instanceof $root.AggregatorState.Configs)
                    return object;
                var message = new $root.AggregatorState.Configs();
                if (object.locked != null)
                    message.locked = Boolean(object.locked);
                if (object.minConfirmations != null)
                    message.minConfirmations = object.minConfirmations | 0;
                if (object.minUpdateDelaySeconds != null)
                    if ($util.Long)
                        (message.minUpdateDelaySeconds = $util.Long.fromValue(object.minUpdateDelaySeconds)).unsigned = false;
                    else if (typeof object.minUpdateDelaySeconds === "string")
                        message.minUpdateDelaySeconds = parseInt(object.minUpdateDelaySeconds, 10);
                    else if (typeof object.minUpdateDelaySeconds === "number")
                        message.minUpdateDelaySeconds = object.minUpdateDelaySeconds;
                    else if (typeof object.minUpdateDelaySeconds === "object")
                        message.minUpdateDelaySeconds = new $util.LongBits(object.minUpdateDelaySeconds.low >>> 0, object.minUpdateDelaySeconds.high >>> 0).toNumber();
                return message;
            };
    
            /**
             * Creates a plain object from a Configs message. Also converts values to other types if specified.
             * @function toObject
             * @memberof AggregatorState.Configs
             * @static
             * @param {AggregatorState.Configs} message Configs
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Configs.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.locked = false;
                    object.minConfirmations = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.minUpdateDelaySeconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.minUpdateDelaySeconds = options.longs === String ? "0" : 0;
                }
                if (message.locked != null && message.hasOwnProperty("locked"))
                    object.locked = message.locked;
                if (message.minConfirmations != null && message.hasOwnProperty("minConfirmations"))
                    object.minConfirmations = message.minConfirmations;
                if (message.minUpdateDelaySeconds != null && message.hasOwnProperty("minUpdateDelaySeconds"))
                    if (typeof message.minUpdateDelaySeconds === "number")
                        object.minUpdateDelaySeconds = options.longs === String ? String(message.minUpdateDelaySeconds) : message.minUpdateDelaySeconds;
                    else
                        object.minUpdateDelaySeconds = options.longs === String ? $util.Long.prototype.toString.call(message.minUpdateDelaySeconds) : options.longs === Number ? new $util.LongBits(message.minUpdateDelaySeconds.low >>> 0, message.minUpdateDelaySeconds.high >>> 0).toNumber() : message.minUpdateDelaySeconds;
                return object;
            };
    
            /**
             * Converts this Configs to JSON.
             * @function toJSON
             * @memberof AggregatorState.Configs
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Configs.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Configs;
        })();
    
        return AggregatorState;
    })();
    
    $root.OracleJob = (function() {
    
        /**
         * Properties of an OracleJob.
         * @exports IOracleJob
         * @interface IOracleJob
         * @property {Array.<OracleJob.ITask>|null} [tasks] OracleJob tasks
         */
    
        /**
         * Constructs a new OracleJob.
         * @exports OracleJob
         * @classdesc Represents an OracleJob.
         * @implements IOracleJob
         * @constructor
         * @param {IOracleJob=} [properties] Properties to set
         */
        function OracleJob(properties) {
            this.tasks = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * OracleJob tasks.
         * @member {Array.<OracleJob.ITask>} tasks
         * @memberof OracleJob
         * @instance
         */
        OracleJob.prototype.tasks = $util.emptyArray;
    
        /**
         * Creates a new OracleJob instance using the specified properties.
         * @function create
         * @memberof OracleJob
         * @static
         * @param {IOracleJob=} [properties] Properties to set
         * @returns {OracleJob} OracleJob instance
         */
        OracleJob.create = function create(properties) {
            return new OracleJob(properties);
        };
    
        /**
         * Encodes the specified OracleJob message. Does not implicitly {@link OracleJob.verify|verify} messages.
         * @function encode
         * @memberof OracleJob
         * @static
         * @param {IOracleJob} message OracleJob message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OracleJob.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tasks != null && message.tasks.length)
                for (var i = 0; i < message.tasks.length; ++i)
                    $root.OracleJob.Task.encode(message.tasks[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified OracleJob message, length delimited. Does not implicitly {@link OracleJob.verify|verify} messages.
         * @function encodeDelimited
         * @memberof OracleJob
         * @static
         * @param {IOracleJob} message OracleJob message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OracleJob.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an OracleJob message from the specified reader or buffer.
         * @function decode
         * @memberof OracleJob
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {OracleJob} OracleJob
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OracleJob.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.OracleJob();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.tasks && message.tasks.length))
                        message.tasks = [];
                    message.tasks.push($root.OracleJob.Task.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes an OracleJob message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof OracleJob
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {OracleJob} OracleJob
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OracleJob.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an OracleJob message.
         * @function verify
         * @memberof OracleJob
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OracleJob.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tasks != null && message.hasOwnProperty("tasks")) {
                if (!Array.isArray(message.tasks))
                    return "tasks: array expected";
                for (var i = 0; i < message.tasks.length; ++i) {
                    var error = $root.OracleJob.Task.verify(message.tasks[i]);
                    if (error)
                        return "tasks." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates an OracleJob message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof OracleJob
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {OracleJob} OracleJob
         */
        OracleJob.fromObject = function fromObject(object) {
            if (object instanceof $root.OracleJob)
                return object;
            var message = new $root.OracleJob();
            if (object.tasks) {
                if (!Array.isArray(object.tasks))
                    throw TypeError(".OracleJob.tasks: array expected");
                message.tasks = [];
                for (var i = 0; i < object.tasks.length; ++i) {
                    if (typeof object.tasks[i] !== "object")
                        throw TypeError(".OracleJob.tasks: object expected");
                    message.tasks[i] = $root.OracleJob.Task.fromObject(object.tasks[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from an OracleJob message. Also converts values to other types if specified.
         * @function toObject
         * @memberof OracleJob
         * @static
         * @param {OracleJob} message OracleJob
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OracleJob.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.tasks = [];
            if (message.tasks && message.tasks.length) {
                object.tasks = [];
                for (var j = 0; j < message.tasks.length; ++j)
                    object.tasks[j] = $root.OracleJob.Task.toObject(message.tasks[j], options);
            }
            return object;
        };
    
        /**
         * Converts this OracleJob to JSON.
         * @function toJSON
         * @memberof OracleJob
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OracleJob.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        OracleJob.HttpTask = (function() {
    
            /**
             * Properties of a HttpTask.
             * @memberof OracleJob
             * @interface IHttpTask
             * @property {string|null} [url] HttpTask url
             * @property {OracleJob.HttpTask.Method|null} [method] HttpTask method
             * @property {Array.<OracleJob.HttpTask.IHeader>|null} [headers] HttpTask headers
             * @property {string|null} [body] HttpTask body
             */
    
            /**
             * Constructs a new HttpTask.
             * @memberof OracleJob
             * @classdesc Represents a HttpTask.
             * @implements IHttpTask
             * @constructor
             * @param {OracleJob.IHttpTask=} [properties] Properties to set
             */
            function HttpTask(properties) {
                this.headers = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * HttpTask url.
             * @member {string} url
             * @memberof OracleJob.HttpTask
             * @instance
             */
            HttpTask.prototype.url = "";
    
            /**
             * HttpTask method.
             * @member {OracleJob.HttpTask.Method} method
             * @memberof OracleJob.HttpTask
             * @instance
             */
            HttpTask.prototype.method = 0;
    
            /**
             * HttpTask headers.
             * @member {Array.<OracleJob.HttpTask.IHeader>} headers
             * @memberof OracleJob.HttpTask
             * @instance
             */
            HttpTask.prototype.headers = $util.emptyArray;
    
            /**
             * HttpTask body.
             * @member {string} body
             * @memberof OracleJob.HttpTask
             * @instance
             */
            HttpTask.prototype.body = "";
    
            /**
             * Creates a new HttpTask instance using the specified properties.
             * @function create
             * @memberof OracleJob.HttpTask
             * @static
             * @param {OracleJob.IHttpTask=} [properties] Properties to set
             * @returns {OracleJob.HttpTask} HttpTask instance
             */
            HttpTask.create = function create(properties) {
                return new HttpTask(properties);
            };
    
            /**
             * Encodes the specified HttpTask message. Does not implicitly {@link OracleJob.HttpTask.verify|verify} messages.
             * @function encode
             * @memberof OracleJob.HttpTask
             * @static
             * @param {OracleJob.IHttpTask} message HttpTask message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HttpTask.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.url);
                if (message.method != null && Object.hasOwnProperty.call(message, "method"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.method);
                if (message.headers != null && message.headers.length)
                    for (var i = 0; i < message.headers.length; ++i)
                        $root.OracleJob.HttpTask.Header.encode(message.headers[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.body != null && Object.hasOwnProperty.call(message, "body"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.body);
                return writer;
            };
    
            /**
             * Encodes the specified HttpTask message, length delimited. Does not implicitly {@link OracleJob.HttpTask.verify|verify} messages.
             * @function encodeDelimited
             * @memberof OracleJob.HttpTask
             * @static
             * @param {OracleJob.IHttpTask} message HttpTask message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HttpTask.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a HttpTask message from the specified reader or buffer.
             * @function decode
             * @memberof OracleJob.HttpTask
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {OracleJob.HttpTask} HttpTask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HttpTask.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.OracleJob.HttpTask();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.url = reader.string();
                        break;
                    case 2:
                        message.method = reader.int32();
                        break;
                    case 3:
                        if (!(message.headers && message.headers.length))
                            message.headers = [];
                        message.headers.push($root.OracleJob.HttpTask.Header.decode(reader, reader.uint32()));
                        break;
                    case 4:
                        message.body = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a HttpTask message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof OracleJob.HttpTask
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {OracleJob.HttpTask} HttpTask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HttpTask.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a HttpTask message.
             * @function verify
             * @memberof OracleJob.HttpTask
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            HttpTask.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.url != null && message.hasOwnProperty("url"))
                    if (!$util.isString(message.url))
                        return "url: string expected";
                if (message.method != null && message.hasOwnProperty("method"))
                    switch (message.method) {
                    default:
                        return "method: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.headers != null && message.hasOwnProperty("headers")) {
                    if (!Array.isArray(message.headers))
                        return "headers: array expected";
                    for (var i = 0; i < message.headers.length; ++i) {
                        var error = $root.OracleJob.HttpTask.Header.verify(message.headers[i]);
                        if (error)
                            return "headers." + error;
                    }
                }
                if (message.body != null && message.hasOwnProperty("body"))
                    if (!$util.isString(message.body))
                        return "body: string expected";
                return null;
            };
    
            /**
             * Creates a HttpTask message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof OracleJob.HttpTask
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {OracleJob.HttpTask} HttpTask
             */
            HttpTask.fromObject = function fromObject(object) {
                if (object instanceof $root.OracleJob.HttpTask)
                    return object;
                var message = new $root.OracleJob.HttpTask();
                if (object.url != null)
                    message.url = String(object.url);
                switch (object.method) {
                case "METHOD_UNKOWN":
                case 0:
                    message.method = 0;
                    break;
                case "METHOD_GET":
                case 1:
                    message.method = 1;
                    break;
                case "METHOD_POST":
                case 2:
                    message.method = 2;
                    break;
                }
                if (object.headers) {
                    if (!Array.isArray(object.headers))
                        throw TypeError(".OracleJob.HttpTask.headers: array expected");
                    message.headers = [];
                    for (var i = 0; i < object.headers.length; ++i) {
                        if (typeof object.headers[i] !== "object")
                            throw TypeError(".OracleJob.HttpTask.headers: object expected");
                        message.headers[i] = $root.OracleJob.HttpTask.Header.fromObject(object.headers[i]);
                    }
                }
                if (object.body != null)
                    message.body = String(object.body);
                return message;
            };
    
            /**
             * Creates a plain object from a HttpTask message. Also converts values to other types if specified.
             * @function toObject
             * @memberof OracleJob.HttpTask
             * @static
             * @param {OracleJob.HttpTask} message HttpTask
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            HttpTask.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.headers = [];
                if (options.defaults) {
                    object.url = "";
                    object.method = options.enums === String ? "METHOD_UNKOWN" : 0;
                    object.body = "";
                }
                if (message.url != null && message.hasOwnProperty("url"))
                    object.url = message.url;
                if (message.method != null && message.hasOwnProperty("method"))
                    object.method = options.enums === String ? $root.OracleJob.HttpTask.Method[message.method] : message.method;
                if (message.headers && message.headers.length) {
                    object.headers = [];
                    for (var j = 0; j < message.headers.length; ++j)
                        object.headers[j] = $root.OracleJob.HttpTask.Header.toObject(message.headers[j], options);
                }
                if (message.body != null && message.hasOwnProperty("body"))
                    object.body = message.body;
                return object;
            };
    
            /**
             * Converts this HttpTask to JSON.
             * @function toJSON
             * @memberof OracleJob.HttpTask
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            HttpTask.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Method enum.
             * @name OracleJob.HttpTask.Method
             * @enum {number}
             * @property {number} METHOD_UNKOWN=0 METHOD_UNKOWN value
             * @property {number} METHOD_GET=1 METHOD_GET value
             * @property {number} METHOD_POST=2 METHOD_POST value
             */
            HttpTask.Method = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "METHOD_UNKOWN"] = 0;
                values[valuesById[1] = "METHOD_GET"] = 1;
                values[valuesById[2] = "METHOD_POST"] = 2;
                return values;
            })();
    
            HttpTask.Header = (function() {
    
                /**
                 * Properties of a Header.
                 * @memberof OracleJob.HttpTask
                 * @interface IHeader
                 * @property {string|null} [key] Header key
                 * @property {string|null} [value] Header value
                 */
    
                /**
                 * Constructs a new Header.
                 * @memberof OracleJob.HttpTask
                 * @classdesc Represents a Header.
                 * @implements IHeader
                 * @constructor
                 * @param {OracleJob.HttpTask.IHeader=} [properties] Properties to set
                 */
                function Header(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Header key.
                 * @member {string} key
                 * @memberof OracleJob.HttpTask.Header
                 * @instance
                 */
                Header.prototype.key = "";
    
                /**
                 * Header value.
                 * @member {string} value
                 * @memberof OracleJob.HttpTask.Header
                 * @instance
                 */
                Header.prototype.value = "";
    
                /**
                 * Creates a new Header instance using the specified properties.
                 * @function create
                 * @memberof OracleJob.HttpTask.Header
                 * @static
                 * @param {OracleJob.HttpTask.IHeader=} [properties] Properties to set
                 * @returns {OracleJob.HttpTask.Header} Header instance
                 */
                Header.create = function create(properties) {
                    return new Header(properties);
                };
    
                /**
                 * Encodes the specified Header message. Does not implicitly {@link OracleJob.HttpTask.Header.verify|verify} messages.
                 * @function encode
                 * @memberof OracleJob.HttpTask.Header
                 * @static
                 * @param {OracleJob.HttpTask.IHeader} message Header message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Header.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
                    if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
                    return writer;
                };
    
                /**
                 * Encodes the specified Header message, length delimited. Does not implicitly {@link OracleJob.HttpTask.Header.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof OracleJob.HttpTask.Header
                 * @static
                 * @param {OracleJob.HttpTask.IHeader} message Header message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Header.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Header message from the specified reader or buffer.
                 * @function decode
                 * @memberof OracleJob.HttpTask.Header
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {OracleJob.HttpTask.Header} Header
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Header.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.OracleJob.HttpTask.Header();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.key = reader.string();
                            break;
                        case 2:
                            message.value = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a Header message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof OracleJob.HttpTask.Header
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {OracleJob.HttpTask.Header} Header
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Header.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Header message.
                 * @function verify
                 * @memberof OracleJob.HttpTask.Header
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Header.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.key != null && message.hasOwnProperty("key"))
                        if (!$util.isString(message.key))
                            return "key: string expected";
                    if (message.value != null && message.hasOwnProperty("value"))
                        if (!$util.isString(message.value))
                            return "value: string expected";
                    return null;
                };
    
                /**
                 * Creates a Header message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof OracleJob.HttpTask.Header
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {OracleJob.HttpTask.Header} Header
                 */
                Header.fromObject = function fromObject(object) {
                    if (object instanceof $root.OracleJob.HttpTask.Header)
                        return object;
                    var message = new $root.OracleJob.HttpTask.Header();
                    if (object.key != null)
                        message.key = String(object.key);
                    if (object.value != null)
                        message.value = String(object.value);
                    return message;
                };
    
                /**
                 * Creates a plain object from a Header message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof OracleJob.HttpTask.Header
                 * @static
                 * @param {OracleJob.HttpTask.Header} message Header
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Header.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.key = "";
                        object.value = "";
                    }
                    if (message.key != null && message.hasOwnProperty("key"))
                        object.key = message.key;
                    if (message.value != null && message.hasOwnProperty("value"))
                        object.value = message.value;
                    return object;
                };
    
                /**
                 * Converts this Header to JSON.
                 * @function toJSON
                 * @memberof OracleJob.HttpTask.Header
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Header.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return Header;
            })();
    
            return HttpTask;
        })();
    
        OracleJob.JsonParseTask = (function() {
    
            /**
             * Properties of a JsonParseTask.
             * @memberof OracleJob
             * @interface IJsonParseTask
             * @property {string|null} [path] JsonParseTask path
             */
    
            /**
             * Constructs a new JsonParseTask.
             * @memberof OracleJob
             * @classdesc Represents a JsonParseTask.
             * @implements IJsonParseTask
             * @constructor
             * @param {OracleJob.IJsonParseTask=} [properties] Properties to set
             */
            function JsonParseTask(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * JsonParseTask path.
             * @member {string} path
             * @memberof OracleJob.JsonParseTask
             * @instance
             */
            JsonParseTask.prototype.path = "";
    
            /**
             * Creates a new JsonParseTask instance using the specified properties.
             * @function create
             * @memberof OracleJob.JsonParseTask
             * @static
             * @param {OracleJob.IJsonParseTask=} [properties] Properties to set
             * @returns {OracleJob.JsonParseTask} JsonParseTask instance
             */
            JsonParseTask.create = function create(properties) {
                return new JsonParseTask(properties);
            };
    
            /**
             * Encodes the specified JsonParseTask message. Does not implicitly {@link OracleJob.JsonParseTask.verify|verify} messages.
             * @function encode
             * @memberof OracleJob.JsonParseTask
             * @static
             * @param {OracleJob.IJsonParseTask} message JsonParseTask message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            JsonParseTask.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.path != null && Object.hasOwnProperty.call(message, "path"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.path);
                return writer;
            };
    
            /**
             * Encodes the specified JsonParseTask message, length delimited. Does not implicitly {@link OracleJob.JsonParseTask.verify|verify} messages.
             * @function encodeDelimited
             * @memberof OracleJob.JsonParseTask
             * @static
             * @param {OracleJob.IJsonParseTask} message JsonParseTask message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            JsonParseTask.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a JsonParseTask message from the specified reader or buffer.
             * @function decode
             * @memberof OracleJob.JsonParseTask
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {OracleJob.JsonParseTask} JsonParseTask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            JsonParseTask.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.OracleJob.JsonParseTask();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.path = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a JsonParseTask message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof OracleJob.JsonParseTask
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {OracleJob.JsonParseTask} JsonParseTask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            JsonParseTask.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a JsonParseTask message.
             * @function verify
             * @memberof OracleJob.JsonParseTask
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            JsonParseTask.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.path != null && message.hasOwnProperty("path"))
                    if (!$util.isString(message.path))
                        return "path: string expected";
                return null;
            };
    
            /**
             * Creates a JsonParseTask message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof OracleJob.JsonParseTask
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {OracleJob.JsonParseTask} JsonParseTask
             */
            JsonParseTask.fromObject = function fromObject(object) {
                if (object instanceof $root.OracleJob.JsonParseTask)
                    return object;
                var message = new $root.OracleJob.JsonParseTask();
                if (object.path != null)
                    message.path = String(object.path);
                return message;
            };
    
            /**
             * Creates a plain object from a JsonParseTask message. Also converts values to other types if specified.
             * @function toObject
             * @memberof OracleJob.JsonParseTask
             * @static
             * @param {OracleJob.JsonParseTask} message JsonParseTask
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            JsonParseTask.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.path = "";
                if (message.path != null && message.hasOwnProperty("path"))
                    object.path = message.path;
                return object;
            };
    
            /**
             * Converts this JsonParseTask to JSON.
             * @function toJSON
             * @memberof OracleJob.JsonParseTask
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            JsonParseTask.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return JsonParseTask;
        })();
    
        OracleJob.MedianTask = (function() {
    
            /**
             * Properties of a MedianTask.
             * @memberof OracleJob
             * @interface IMedianTask
             * @property {Array.<OracleJob.ITask>|null} [tasks] MedianTask tasks
             */
    
            /**
             * Constructs a new MedianTask.
             * @memberof OracleJob
             * @classdesc Represents a MedianTask.
             * @implements IMedianTask
             * @constructor
             * @param {OracleJob.IMedianTask=} [properties] Properties to set
             */
            function MedianTask(properties) {
                this.tasks = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * MedianTask tasks.
             * @member {Array.<OracleJob.ITask>} tasks
             * @memberof OracleJob.MedianTask
             * @instance
             */
            MedianTask.prototype.tasks = $util.emptyArray;
    
            /**
             * Creates a new MedianTask instance using the specified properties.
             * @function create
             * @memberof OracleJob.MedianTask
             * @static
             * @param {OracleJob.IMedianTask=} [properties] Properties to set
             * @returns {OracleJob.MedianTask} MedianTask instance
             */
            MedianTask.create = function create(properties) {
                return new MedianTask(properties);
            };
    
            /**
             * Encodes the specified MedianTask message. Does not implicitly {@link OracleJob.MedianTask.verify|verify} messages.
             * @function encode
             * @memberof OracleJob.MedianTask
             * @static
             * @param {OracleJob.IMedianTask} message MedianTask message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MedianTask.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.tasks != null && message.tasks.length)
                    for (var i = 0; i < message.tasks.length; ++i)
                        $root.OracleJob.Task.encode(message.tasks[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified MedianTask message, length delimited. Does not implicitly {@link OracleJob.MedianTask.verify|verify} messages.
             * @function encodeDelimited
             * @memberof OracleJob.MedianTask
             * @static
             * @param {OracleJob.IMedianTask} message MedianTask message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MedianTask.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a MedianTask message from the specified reader or buffer.
             * @function decode
             * @memberof OracleJob.MedianTask
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {OracleJob.MedianTask} MedianTask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MedianTask.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.OracleJob.MedianTask();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.tasks && message.tasks.length))
                            message.tasks = [];
                        message.tasks.push($root.OracleJob.Task.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a MedianTask message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof OracleJob.MedianTask
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {OracleJob.MedianTask} MedianTask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MedianTask.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a MedianTask message.
             * @function verify
             * @memberof OracleJob.MedianTask
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MedianTask.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.tasks != null && message.hasOwnProperty("tasks")) {
                    if (!Array.isArray(message.tasks))
                        return "tasks: array expected";
                    for (var i = 0; i < message.tasks.length; ++i) {
                        var error = $root.OracleJob.Task.verify(message.tasks[i]);
                        if (error)
                            return "tasks." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a MedianTask message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof OracleJob.MedianTask
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {OracleJob.MedianTask} MedianTask
             */
            MedianTask.fromObject = function fromObject(object) {
                if (object instanceof $root.OracleJob.MedianTask)
                    return object;
                var message = new $root.OracleJob.MedianTask();
                if (object.tasks) {
                    if (!Array.isArray(object.tasks))
                        throw TypeError(".OracleJob.MedianTask.tasks: array expected");
                    message.tasks = [];
                    for (var i = 0; i < object.tasks.length; ++i) {
                        if (typeof object.tasks[i] !== "object")
                            throw TypeError(".OracleJob.MedianTask.tasks: object expected");
                        message.tasks[i] = $root.OracleJob.Task.fromObject(object.tasks[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a MedianTask message. Also converts values to other types if specified.
             * @function toObject
             * @memberof OracleJob.MedianTask
             * @static
             * @param {OracleJob.MedianTask} message MedianTask
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MedianTask.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.tasks = [];
                if (message.tasks && message.tasks.length) {
                    object.tasks = [];
                    for (var j = 0; j < message.tasks.length; ++j)
                        object.tasks[j] = $root.OracleJob.Task.toObject(message.tasks[j], options);
                }
                return object;
            };
    
            /**
             * Converts this MedianTask to JSON.
             * @function toJSON
             * @memberof OracleJob.MedianTask
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MedianTask.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return MedianTask;
        })();
    
        OracleJob.MeanTask = (function() {
    
            /**
             * Properties of a MeanTask.
             * @memberof OracleJob
             * @interface IMeanTask
             * @property {Array.<OracleJob.ITask>|null} [tasks] MeanTask tasks
             */
    
            /**
             * Constructs a new MeanTask.
             * @memberof OracleJob
             * @classdesc Represents a MeanTask.
             * @implements IMeanTask
             * @constructor
             * @param {OracleJob.IMeanTask=} [properties] Properties to set
             */
            function MeanTask(properties) {
                this.tasks = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * MeanTask tasks.
             * @member {Array.<OracleJob.ITask>} tasks
             * @memberof OracleJob.MeanTask
             * @instance
             */
            MeanTask.prototype.tasks = $util.emptyArray;
    
            /**
             * Creates a new MeanTask instance using the specified properties.
             * @function create
             * @memberof OracleJob.MeanTask
             * @static
             * @param {OracleJob.IMeanTask=} [properties] Properties to set
             * @returns {OracleJob.MeanTask} MeanTask instance
             */
            MeanTask.create = function create(properties) {
                return new MeanTask(properties);
            };
    
            /**
             * Encodes the specified MeanTask message. Does not implicitly {@link OracleJob.MeanTask.verify|verify} messages.
             * @function encode
             * @memberof OracleJob.MeanTask
             * @static
             * @param {OracleJob.IMeanTask} message MeanTask message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MeanTask.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.tasks != null && message.tasks.length)
                    for (var i = 0; i < message.tasks.length; ++i)
                        $root.OracleJob.Task.encode(message.tasks[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified MeanTask message, length delimited. Does not implicitly {@link OracleJob.MeanTask.verify|verify} messages.
             * @function encodeDelimited
             * @memberof OracleJob.MeanTask
             * @static
             * @param {OracleJob.IMeanTask} message MeanTask message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MeanTask.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a MeanTask message from the specified reader or buffer.
             * @function decode
             * @memberof OracleJob.MeanTask
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {OracleJob.MeanTask} MeanTask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MeanTask.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.OracleJob.MeanTask();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.tasks && message.tasks.length))
                            message.tasks = [];
                        message.tasks.push($root.OracleJob.Task.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a MeanTask message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof OracleJob.MeanTask
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {OracleJob.MeanTask} MeanTask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MeanTask.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a MeanTask message.
             * @function verify
             * @memberof OracleJob.MeanTask
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MeanTask.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.tasks != null && message.hasOwnProperty("tasks")) {
                    if (!Array.isArray(message.tasks))
                        return "tasks: array expected";
                    for (var i = 0; i < message.tasks.length; ++i) {
                        var error = $root.OracleJob.Task.verify(message.tasks[i]);
                        if (error)
                            return "tasks." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a MeanTask message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof OracleJob.MeanTask
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {OracleJob.MeanTask} MeanTask
             */
            MeanTask.fromObject = function fromObject(object) {
                if (object instanceof $root.OracleJob.MeanTask)
                    return object;
                var message = new $root.OracleJob.MeanTask();
                if (object.tasks) {
                    if (!Array.isArray(object.tasks))
                        throw TypeError(".OracleJob.MeanTask.tasks: array expected");
                    message.tasks = [];
                    for (var i = 0; i < object.tasks.length; ++i) {
                        if (typeof object.tasks[i] !== "object")
                            throw TypeError(".OracleJob.MeanTask.tasks: object expected");
                        message.tasks[i] = $root.OracleJob.Task.fromObject(object.tasks[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a MeanTask message. Also converts values to other types if specified.
             * @function toObject
             * @memberof OracleJob.MeanTask
             * @static
             * @param {OracleJob.MeanTask} message MeanTask
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MeanTask.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.tasks = [];
                if (message.tasks && message.tasks.length) {
                    object.tasks = [];
                    for (var j = 0; j < message.tasks.length; ++j)
                        object.tasks[j] = $root.OracleJob.Task.toObject(message.tasks[j], options);
                }
                return object;
            };
    
            /**
             * Converts this MeanTask to JSON.
             * @function toJSON
             * @memberof OracleJob.MeanTask
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MeanTask.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return MeanTask;
        })();
    
        OracleJob.WebsocketTask = (function() {
    
            /**
             * Properties of a WebsocketTask.
             * @memberof OracleJob
             * @interface IWebsocketTask
             * @property {string|null} [url] WebsocketTask url
             * @property {string|null} [subscription] WebsocketTask subscription
             * @property {number|null} [maxDataAgeSeconds] WebsocketTask maxDataAgeSeconds
             * @property {string|null} [filter] WebsocketTask filter
             */
    
            /**
             * Constructs a new WebsocketTask.
             * @memberof OracleJob
             * @classdesc Represents a WebsocketTask.
             * @implements IWebsocketTask
             * @constructor
             * @param {OracleJob.IWebsocketTask=} [properties] Properties to set
             */
            function WebsocketTask(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * WebsocketTask url.
             * @member {string} url
             * @memberof OracleJob.WebsocketTask
             * @instance
             */
            WebsocketTask.prototype.url = "";
    
            /**
             * WebsocketTask subscription.
             * @member {string} subscription
             * @memberof OracleJob.WebsocketTask
             * @instance
             */
            WebsocketTask.prototype.subscription = "";
    
            /**
             * WebsocketTask maxDataAgeSeconds.
             * @member {number} maxDataAgeSeconds
             * @memberof OracleJob.WebsocketTask
             * @instance
             */
            WebsocketTask.prototype.maxDataAgeSeconds = 0;
    
            /**
             * WebsocketTask filter.
             * @member {string} filter
             * @memberof OracleJob.WebsocketTask
             * @instance
             */
            WebsocketTask.prototype.filter = "";
    
            /**
             * Creates a new WebsocketTask instance using the specified properties.
             * @function create
             * @memberof OracleJob.WebsocketTask
             * @static
             * @param {OracleJob.IWebsocketTask=} [properties] Properties to set
             * @returns {OracleJob.WebsocketTask} WebsocketTask instance
             */
            WebsocketTask.create = function create(properties) {
                return new WebsocketTask(properties);
            };
    
            /**
             * Encodes the specified WebsocketTask message. Does not implicitly {@link OracleJob.WebsocketTask.verify|verify} messages.
             * @function encode
             * @memberof OracleJob.WebsocketTask
             * @static
             * @param {OracleJob.IWebsocketTask} message WebsocketTask message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WebsocketTask.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.url);
                if (message.subscription != null && Object.hasOwnProperty.call(message, "subscription"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.subscription);
                if (message.maxDataAgeSeconds != null && Object.hasOwnProperty.call(message, "maxDataAgeSeconds"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.maxDataAgeSeconds);
                if (message.filter != null && Object.hasOwnProperty.call(message, "filter"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.filter);
                return writer;
            };
    
            /**
             * Encodes the specified WebsocketTask message, length delimited. Does not implicitly {@link OracleJob.WebsocketTask.verify|verify} messages.
             * @function encodeDelimited
             * @memberof OracleJob.WebsocketTask
             * @static
             * @param {OracleJob.IWebsocketTask} message WebsocketTask message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WebsocketTask.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a WebsocketTask message from the specified reader or buffer.
             * @function decode
             * @memberof OracleJob.WebsocketTask
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {OracleJob.WebsocketTask} WebsocketTask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WebsocketTask.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.OracleJob.WebsocketTask();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.url = reader.string();
                        break;
                    case 2:
                        message.subscription = reader.string();
                        break;
                    case 3:
                        message.maxDataAgeSeconds = reader.int32();
                        break;
                    case 4:
                        message.filter = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a WebsocketTask message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof OracleJob.WebsocketTask
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {OracleJob.WebsocketTask} WebsocketTask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WebsocketTask.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a WebsocketTask message.
             * @function verify
             * @memberof OracleJob.WebsocketTask
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            WebsocketTask.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.url != null && message.hasOwnProperty("url"))
                    if (!$util.isString(message.url))
                        return "url: string expected";
                if (message.subscription != null && message.hasOwnProperty("subscription"))
                    if (!$util.isString(message.subscription))
                        return "subscription: string expected";
                if (message.maxDataAgeSeconds != null && message.hasOwnProperty("maxDataAgeSeconds"))
                    if (!$util.isInteger(message.maxDataAgeSeconds))
                        return "maxDataAgeSeconds: integer expected";
                if (message.filter != null && message.hasOwnProperty("filter"))
                    if (!$util.isString(message.filter))
                        return "filter: string expected";
                return null;
            };
    
            /**
             * Creates a WebsocketTask message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof OracleJob.WebsocketTask
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {OracleJob.WebsocketTask} WebsocketTask
             */
            WebsocketTask.fromObject = function fromObject(object) {
                if (object instanceof $root.OracleJob.WebsocketTask)
                    return object;
                var message = new $root.OracleJob.WebsocketTask();
                if (object.url != null)
                    message.url = String(object.url);
                if (object.subscription != null)
                    message.subscription = String(object.subscription);
                if (object.maxDataAgeSeconds != null)
                    message.maxDataAgeSeconds = object.maxDataAgeSeconds | 0;
                if (object.filter != null)
                    message.filter = String(object.filter);
                return message;
            };
    
            /**
             * Creates a plain object from a WebsocketTask message. Also converts values to other types if specified.
             * @function toObject
             * @memberof OracleJob.WebsocketTask
             * @static
             * @param {OracleJob.WebsocketTask} message WebsocketTask
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            WebsocketTask.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.url = "";
                    object.subscription = "";
                    object.maxDataAgeSeconds = 0;
                    object.filter = "";
                }
                if (message.url != null && message.hasOwnProperty("url"))
                    object.url = message.url;
                if (message.subscription != null && message.hasOwnProperty("subscription"))
                    object.subscription = message.subscription;
                if (message.maxDataAgeSeconds != null && message.hasOwnProperty("maxDataAgeSeconds"))
                    object.maxDataAgeSeconds = message.maxDataAgeSeconds;
                if (message.filter != null && message.hasOwnProperty("filter"))
                    object.filter = message.filter;
                return object;
            };
    
            /**
             * Converts this WebsocketTask to JSON.
             * @function toJSON
             * @memberof OracleJob.WebsocketTask
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            WebsocketTask.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return WebsocketTask;
        })();
    
        OracleJob.DivideTask = (function() {
    
            /**
             * Properties of a DivideTask.
             * @memberof OracleJob
             * @interface IDivideTask
             * @property {number|null} [scalar] DivideTask scalar
             * @property {Uint8Array|null} [aggregatorPubkey] DivideTask aggregatorPubkey
             */
    
            /**
             * Constructs a new DivideTask.
             * @memberof OracleJob
             * @classdesc Represents a DivideTask.
             * @implements IDivideTask
             * @constructor
             * @param {OracleJob.IDivideTask=} [properties] Properties to set
             */
            function DivideTask(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * DivideTask scalar.
             * @member {number} scalar
             * @memberof OracleJob.DivideTask
             * @instance
             */
            DivideTask.prototype.scalar = 0;
    
            /**
             * DivideTask aggregatorPubkey.
             * @member {Uint8Array} aggregatorPubkey
             * @memberof OracleJob.DivideTask
             * @instance
             */
            DivideTask.prototype.aggregatorPubkey = $util.newBuffer([]);
    
            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;
    
            /**
             * DivideTask Denominator.
             * @member {"scalar"|"aggregatorPubkey"|undefined} Denominator
             * @memberof OracleJob.DivideTask
             * @instance
             */
            Object.defineProperty(DivideTask.prototype, "Denominator", {
                get: $util.oneOfGetter($oneOfFields = ["scalar", "aggregatorPubkey"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * Creates a new DivideTask instance using the specified properties.
             * @function create
             * @memberof OracleJob.DivideTask
             * @static
             * @param {OracleJob.IDivideTask=} [properties] Properties to set
             * @returns {OracleJob.DivideTask} DivideTask instance
             */
            DivideTask.create = function create(properties) {
                return new DivideTask(properties);
            };
    
            /**
             * Encodes the specified DivideTask message. Does not implicitly {@link OracleJob.DivideTask.verify|verify} messages.
             * @function encode
             * @memberof OracleJob.DivideTask
             * @static
             * @param {OracleJob.IDivideTask} message DivideTask message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DivideTask.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.scalar != null && Object.hasOwnProperty.call(message, "scalar"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.scalar);
                if (message.aggregatorPubkey != null && Object.hasOwnProperty.call(message, "aggregatorPubkey"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.aggregatorPubkey);
                return writer;
            };
    
            /**
             * Encodes the specified DivideTask message, length delimited. Does not implicitly {@link OracleJob.DivideTask.verify|verify} messages.
             * @function encodeDelimited
             * @memberof OracleJob.DivideTask
             * @static
             * @param {OracleJob.IDivideTask} message DivideTask message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DivideTask.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a DivideTask message from the specified reader or buffer.
             * @function decode
             * @memberof OracleJob.DivideTask
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {OracleJob.DivideTask} DivideTask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DivideTask.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.OracleJob.DivideTask();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.scalar = reader.double();
                        break;
                    case 2:
                        message.aggregatorPubkey = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a DivideTask message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof OracleJob.DivideTask
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {OracleJob.DivideTask} DivideTask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DivideTask.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a DivideTask message.
             * @function verify
             * @memberof OracleJob.DivideTask
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DivideTask.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.scalar != null && message.hasOwnProperty("scalar")) {
                    properties.Denominator = 1;
                    if (typeof message.scalar !== "number")
                        return "scalar: number expected";
                }
                if (message.aggregatorPubkey != null && message.hasOwnProperty("aggregatorPubkey")) {
                    if (properties.Denominator === 1)
                        return "Denominator: multiple values";
                    properties.Denominator = 1;
                    if (!(message.aggregatorPubkey && typeof message.aggregatorPubkey.length === "number" || $util.isString(message.aggregatorPubkey)))
                        return "aggregatorPubkey: buffer expected";
                }
                return null;
            };
    
            /**
             * Creates a DivideTask message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof OracleJob.DivideTask
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {OracleJob.DivideTask} DivideTask
             */
            DivideTask.fromObject = function fromObject(object) {
                if (object instanceof $root.OracleJob.DivideTask)
                    return object;
                var message = new $root.OracleJob.DivideTask();
                if (object.scalar != null)
                    message.scalar = Number(object.scalar);
                if (object.aggregatorPubkey != null)
                    if (typeof object.aggregatorPubkey === "string")
                        $util.base64.decode(object.aggregatorPubkey, message.aggregatorPubkey = $util.newBuffer($util.base64.length(object.aggregatorPubkey)), 0);
                    else if (object.aggregatorPubkey.length)
                        message.aggregatorPubkey = object.aggregatorPubkey;
                return message;
            };
    
            /**
             * Creates a plain object from a DivideTask message. Also converts values to other types if specified.
             * @function toObject
             * @memberof OracleJob.DivideTask
             * @static
             * @param {OracleJob.DivideTask} message DivideTask
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DivideTask.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.scalar != null && message.hasOwnProperty("scalar")) {
                    object.scalar = options.json && !isFinite(message.scalar) ? String(message.scalar) : message.scalar;
                    if (options.oneofs)
                        object.Denominator = "scalar";
                }
                if (message.aggregatorPubkey != null && message.hasOwnProperty("aggregatorPubkey")) {
                    object.aggregatorPubkey = options.bytes === String ? $util.base64.encode(message.aggregatorPubkey, 0, message.aggregatorPubkey.length) : options.bytes === Array ? Array.prototype.slice.call(message.aggregatorPubkey) : message.aggregatorPubkey;
                    if (options.oneofs)
                        object.Denominator = "aggregatorPubkey";
                }
                return object;
            };
    
            /**
             * Converts this DivideTask to JSON.
             * @function toJSON
             * @memberof OracleJob.DivideTask
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DivideTask.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return DivideTask;
        })();
    
        OracleJob.Task = (function() {
    
            /**
             * Properties of a Task.
             * @memberof OracleJob
             * @interface ITask
             * @property {OracleJob.IHttpTask|null} [httpTask] Task httpTask
             * @property {OracleJob.IJsonParseTask|null} [jsonParseTask] Task jsonParseTask
             * @property {OracleJob.IMedianTask|null} [medianTask] Task medianTask
             * @property {OracleJob.IMeanTask|null} [meanTask] Task meanTask
             * @property {OracleJob.IWebsocketTask|null} [websocketTask] Task websocketTask
             * @property {OracleJob.IDivideTask|null} [divideTask] Task divideTask
             */
    
            /**
             * Constructs a new Task.
             * @memberof OracleJob
             * @classdesc Represents a Task.
             * @implements ITask
             * @constructor
             * @param {OracleJob.ITask=} [properties] Properties to set
             */
            function Task(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Task httpTask.
             * @member {OracleJob.IHttpTask|null|undefined} httpTask
             * @memberof OracleJob.Task
             * @instance
             */
            Task.prototype.httpTask = null;
    
            /**
             * Task jsonParseTask.
             * @member {OracleJob.IJsonParseTask|null|undefined} jsonParseTask
             * @memberof OracleJob.Task
             * @instance
             */
            Task.prototype.jsonParseTask = null;
    
            /**
             * Task medianTask.
             * @member {OracleJob.IMedianTask|null|undefined} medianTask
             * @memberof OracleJob.Task
             * @instance
             */
            Task.prototype.medianTask = null;
    
            /**
             * Task meanTask.
             * @member {OracleJob.IMeanTask|null|undefined} meanTask
             * @memberof OracleJob.Task
             * @instance
             */
            Task.prototype.meanTask = null;
    
            /**
             * Task websocketTask.
             * @member {OracleJob.IWebsocketTask|null|undefined} websocketTask
             * @memberof OracleJob.Task
             * @instance
             */
            Task.prototype.websocketTask = null;
    
            /**
             * Task divideTask.
             * @member {OracleJob.IDivideTask|null|undefined} divideTask
             * @memberof OracleJob.Task
             * @instance
             */
            Task.prototype.divideTask = null;
    
            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;
    
            /**
             * Task Task.
             * @member {"httpTask"|"jsonParseTask"|"medianTask"|"meanTask"|"websocketTask"|"divideTask"|undefined} Task
             * @memberof OracleJob.Task
             * @instance
             */
            Object.defineProperty(Task.prototype, "Task", {
                get: $util.oneOfGetter($oneOfFields = ["httpTask", "jsonParseTask", "medianTask", "meanTask", "websocketTask", "divideTask"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * Creates a new Task instance using the specified properties.
             * @function create
             * @memberof OracleJob.Task
             * @static
             * @param {OracleJob.ITask=} [properties] Properties to set
             * @returns {OracleJob.Task} Task instance
             */
            Task.create = function create(properties) {
                return new Task(properties);
            };
    
            /**
             * Encodes the specified Task message. Does not implicitly {@link OracleJob.Task.verify|verify} messages.
             * @function encode
             * @memberof OracleJob.Task
             * @static
             * @param {OracleJob.ITask} message Task message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Task.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.httpTask != null && Object.hasOwnProperty.call(message, "httpTask"))
                    $root.OracleJob.HttpTask.encode(message.httpTask, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.jsonParseTask != null && Object.hasOwnProperty.call(message, "jsonParseTask"))
                    $root.OracleJob.JsonParseTask.encode(message.jsonParseTask, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.medianTask != null && Object.hasOwnProperty.call(message, "medianTask"))
                    $root.OracleJob.MedianTask.encode(message.medianTask, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.meanTask != null && Object.hasOwnProperty.call(message, "meanTask"))
                    $root.OracleJob.MeanTask.encode(message.meanTask, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.websocketTask != null && Object.hasOwnProperty.call(message, "websocketTask"))
                    $root.OracleJob.WebsocketTask.encode(message.websocketTask, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.divideTask != null && Object.hasOwnProperty.call(message, "divideTask"))
                    $root.OracleJob.DivideTask.encode(message.divideTask, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified Task message, length delimited. Does not implicitly {@link OracleJob.Task.verify|verify} messages.
             * @function encodeDelimited
             * @memberof OracleJob.Task
             * @static
             * @param {OracleJob.ITask} message Task message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Task.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Task message from the specified reader or buffer.
             * @function decode
             * @memberof OracleJob.Task
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {OracleJob.Task} Task
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Task.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.OracleJob.Task();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.httpTask = $root.OracleJob.HttpTask.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.jsonParseTask = $root.OracleJob.JsonParseTask.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.medianTask = $root.OracleJob.MedianTask.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.meanTask = $root.OracleJob.MeanTask.decode(reader, reader.uint32());
                        break;
                    case 6:
                        message.websocketTask = $root.OracleJob.WebsocketTask.decode(reader, reader.uint32());
                        break;
                    case 7:
                        message.divideTask = $root.OracleJob.DivideTask.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Task message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof OracleJob.Task
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {OracleJob.Task} Task
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Task.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Task message.
             * @function verify
             * @memberof OracleJob.Task
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Task.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.httpTask != null && message.hasOwnProperty("httpTask")) {
                    properties.Task = 1;
                    {
                        var error = $root.OracleJob.HttpTask.verify(message.httpTask);
                        if (error)
                            return "httpTask." + error;
                    }
                }
                if (message.jsonParseTask != null && message.hasOwnProperty("jsonParseTask")) {
                    if (properties.Task === 1)
                        return "Task: multiple values";
                    properties.Task = 1;
                    {
                        var error = $root.OracleJob.JsonParseTask.verify(message.jsonParseTask);
                        if (error)
                            return "jsonParseTask." + error;
                    }
                }
                if (message.medianTask != null && message.hasOwnProperty("medianTask")) {
                    if (properties.Task === 1)
                        return "Task: multiple values";
                    properties.Task = 1;
                    {
                        var error = $root.OracleJob.MedianTask.verify(message.medianTask);
                        if (error)
                            return "medianTask." + error;
                    }
                }
                if (message.meanTask != null && message.hasOwnProperty("meanTask")) {
                    if (properties.Task === 1)
                        return "Task: multiple values";
                    properties.Task = 1;
                    {
                        var error = $root.OracleJob.MeanTask.verify(message.meanTask);
                        if (error)
                            return "meanTask." + error;
                    }
                }
                if (message.websocketTask != null && message.hasOwnProperty("websocketTask")) {
                    if (properties.Task === 1)
                        return "Task: multiple values";
                    properties.Task = 1;
                    {
                        var error = $root.OracleJob.WebsocketTask.verify(message.websocketTask);
                        if (error)
                            return "websocketTask." + error;
                    }
                }
                if (message.divideTask != null && message.hasOwnProperty("divideTask")) {
                    if (properties.Task === 1)
                        return "Task: multiple values";
                    properties.Task = 1;
                    {
                        var error = $root.OracleJob.DivideTask.verify(message.divideTask);
                        if (error)
                            return "divideTask." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a Task message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof OracleJob.Task
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {OracleJob.Task} Task
             */
            Task.fromObject = function fromObject(object) {
                if (object instanceof $root.OracleJob.Task)
                    return object;
                var message = new $root.OracleJob.Task();
                if (object.httpTask != null) {
                    if (typeof object.httpTask !== "object")
                        throw TypeError(".OracleJob.Task.httpTask: object expected");
                    message.httpTask = $root.OracleJob.HttpTask.fromObject(object.httpTask);
                }
                if (object.jsonParseTask != null) {
                    if (typeof object.jsonParseTask !== "object")
                        throw TypeError(".OracleJob.Task.jsonParseTask: object expected");
                    message.jsonParseTask = $root.OracleJob.JsonParseTask.fromObject(object.jsonParseTask);
                }
                if (object.medianTask != null) {
                    if (typeof object.medianTask !== "object")
                        throw TypeError(".OracleJob.Task.medianTask: object expected");
                    message.medianTask = $root.OracleJob.MedianTask.fromObject(object.medianTask);
                }
                if (object.meanTask != null) {
                    if (typeof object.meanTask !== "object")
                        throw TypeError(".OracleJob.Task.meanTask: object expected");
                    message.meanTask = $root.OracleJob.MeanTask.fromObject(object.meanTask);
                }
                if (object.websocketTask != null) {
                    if (typeof object.websocketTask !== "object")
                        throw TypeError(".OracleJob.Task.websocketTask: object expected");
                    message.websocketTask = $root.OracleJob.WebsocketTask.fromObject(object.websocketTask);
                }
                if (object.divideTask != null) {
                    if (typeof object.divideTask !== "object")
                        throw TypeError(".OracleJob.Task.divideTask: object expected");
                    message.divideTask = $root.OracleJob.DivideTask.fromObject(object.divideTask);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a Task message. Also converts values to other types if specified.
             * @function toObject
             * @memberof OracleJob.Task
             * @static
             * @param {OracleJob.Task} message Task
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Task.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.httpTask != null && message.hasOwnProperty("httpTask")) {
                    object.httpTask = $root.OracleJob.HttpTask.toObject(message.httpTask, options);
                    if (options.oneofs)
                        object.Task = "httpTask";
                }
                if (message.jsonParseTask != null && message.hasOwnProperty("jsonParseTask")) {
                    object.jsonParseTask = $root.OracleJob.JsonParseTask.toObject(message.jsonParseTask, options);
                    if (options.oneofs)
                        object.Task = "jsonParseTask";
                }
                if (message.medianTask != null && message.hasOwnProperty("medianTask")) {
                    object.medianTask = $root.OracleJob.MedianTask.toObject(message.medianTask, options);
                    if (options.oneofs)
                        object.Task = "medianTask";
                }
                if (message.meanTask != null && message.hasOwnProperty("meanTask")) {
                    object.meanTask = $root.OracleJob.MeanTask.toObject(message.meanTask, options);
                    if (options.oneofs)
                        object.Task = "meanTask";
                }
                if (message.websocketTask != null && message.hasOwnProperty("websocketTask")) {
                    object.websocketTask = $root.OracleJob.WebsocketTask.toObject(message.websocketTask, options);
                    if (options.oneofs)
                        object.Task = "websocketTask";
                }
                if (message.divideTask != null && message.hasOwnProperty("divideTask")) {
                    object.divideTask = $root.OracleJob.DivideTask.toObject(message.divideTask, options);
                    if (options.oneofs)
                        object.Task = "divideTask";
                }
                return object;
            };
    
            /**
             * Converts this Task to JSON.
             * @function toJSON
             * @memberof OracleJob.Task
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Task.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Task;
        })();
    
        return OracleJob;
    })();
    
    $root.JobPosting = (function() {
    
        /**
         * Properties of a JobPosting.
         * @exports IJobPosting
         * @interface IJobPosting
         * @property {Uint8Array|null} [aggregatorStatePubkey] JobPosting aggregatorStatePubkey
         * @property {Array.<Uint8Array>|null} [nodePubkeys] JobPosting nodePubkeys
         * @property {number|Long|null} [slot] JobPosting slot
         */
    
        /**
         * Constructs a new JobPosting.
         * @exports JobPosting
         * @classdesc Represents a JobPosting.
         * @implements IJobPosting
         * @constructor
         * @param {IJobPosting=} [properties] Properties to set
         */
        function JobPosting(properties) {
            this.nodePubkeys = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * JobPosting aggregatorStatePubkey.
         * @member {Uint8Array} aggregatorStatePubkey
         * @memberof JobPosting
         * @instance
         */
        JobPosting.prototype.aggregatorStatePubkey = $util.newBuffer([]);
    
        /**
         * JobPosting nodePubkeys.
         * @member {Array.<Uint8Array>} nodePubkeys
         * @memberof JobPosting
         * @instance
         */
        JobPosting.prototype.nodePubkeys = $util.emptyArray;
    
        /**
         * JobPosting slot.
         * @member {number|Long} slot
         * @memberof JobPosting
         * @instance
         */
        JobPosting.prototype.slot = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * Creates a new JobPosting instance using the specified properties.
         * @function create
         * @memberof JobPosting
         * @static
         * @param {IJobPosting=} [properties] Properties to set
         * @returns {JobPosting} JobPosting instance
         */
        JobPosting.create = function create(properties) {
            return new JobPosting(properties);
        };
    
        /**
         * Encodes the specified JobPosting message. Does not implicitly {@link JobPosting.verify|verify} messages.
         * @function encode
         * @memberof JobPosting
         * @static
         * @param {IJobPosting} message JobPosting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JobPosting.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.aggregatorStatePubkey != null && Object.hasOwnProperty.call(message, "aggregatorStatePubkey"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.aggregatorStatePubkey);
            if (message.nodePubkeys != null && message.nodePubkeys.length)
                for (var i = 0; i < message.nodePubkeys.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.nodePubkeys[i]);
            if (message.slot != null && Object.hasOwnProperty.call(message, "slot"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.slot);
            return writer;
        };
    
        /**
         * Encodes the specified JobPosting message, length delimited. Does not implicitly {@link JobPosting.verify|verify} messages.
         * @function encodeDelimited
         * @memberof JobPosting
         * @static
         * @param {IJobPosting} message JobPosting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JobPosting.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a JobPosting message from the specified reader or buffer.
         * @function decode
         * @memberof JobPosting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {JobPosting} JobPosting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JobPosting.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.JobPosting();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.aggregatorStatePubkey = reader.bytes();
                    break;
                case 2:
                    if (!(message.nodePubkeys && message.nodePubkeys.length))
                        message.nodePubkeys = [];
                    message.nodePubkeys.push(reader.bytes());
                    break;
                case 3:
                    message.slot = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a JobPosting message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof JobPosting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {JobPosting} JobPosting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JobPosting.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a JobPosting message.
         * @function verify
         * @memberof JobPosting
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JobPosting.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.aggregatorStatePubkey != null && message.hasOwnProperty("aggregatorStatePubkey"))
                if (!(message.aggregatorStatePubkey && typeof message.aggregatorStatePubkey.length === "number" || $util.isString(message.aggregatorStatePubkey)))
                    return "aggregatorStatePubkey: buffer expected";
            if (message.nodePubkeys != null && message.hasOwnProperty("nodePubkeys")) {
                if (!Array.isArray(message.nodePubkeys))
                    return "nodePubkeys: array expected";
                for (var i = 0; i < message.nodePubkeys.length; ++i)
                    if (!(message.nodePubkeys[i] && typeof message.nodePubkeys[i].length === "number" || $util.isString(message.nodePubkeys[i])))
                        return "nodePubkeys: buffer[] expected";
            }
            if (message.slot != null && message.hasOwnProperty("slot"))
                if (!$util.isInteger(message.slot) && !(message.slot && $util.isInteger(message.slot.low) && $util.isInteger(message.slot.high)))
                    return "slot: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a JobPosting message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof JobPosting
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {JobPosting} JobPosting
         */
        JobPosting.fromObject = function fromObject(object) {
            if (object instanceof $root.JobPosting)
                return object;
            var message = new $root.JobPosting();
            if (object.aggregatorStatePubkey != null)
                if (typeof object.aggregatorStatePubkey === "string")
                    $util.base64.decode(object.aggregatorStatePubkey, message.aggregatorStatePubkey = $util.newBuffer($util.base64.length(object.aggregatorStatePubkey)), 0);
                else if (object.aggregatorStatePubkey.length)
                    message.aggregatorStatePubkey = object.aggregatorStatePubkey;
            if (object.nodePubkeys) {
                if (!Array.isArray(object.nodePubkeys))
                    throw TypeError(".JobPosting.nodePubkeys: array expected");
                message.nodePubkeys = [];
                for (var i = 0; i < object.nodePubkeys.length; ++i)
                    if (typeof object.nodePubkeys[i] === "string")
                        $util.base64.decode(object.nodePubkeys[i], message.nodePubkeys[i] = $util.newBuffer($util.base64.length(object.nodePubkeys[i])), 0);
                    else if (object.nodePubkeys[i].length)
                        message.nodePubkeys[i] = object.nodePubkeys[i];
            }
            if (object.slot != null)
                if ($util.Long)
                    (message.slot = $util.Long.fromValue(object.slot)).unsigned = true;
                else if (typeof object.slot === "string")
                    message.slot = parseInt(object.slot, 10);
                else if (typeof object.slot === "number")
                    message.slot = object.slot;
                else if (typeof object.slot === "object")
                    message.slot = new $util.LongBits(object.slot.low >>> 0, object.slot.high >>> 0).toNumber(true);
            return message;
        };
    
        /**
         * Creates a plain object from a JobPosting message. Also converts values to other types if specified.
         * @function toObject
         * @memberof JobPosting
         * @static
         * @param {JobPosting} message JobPosting
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JobPosting.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.nodePubkeys = [];
            if (options.defaults) {
                if (options.bytes === String)
                    object.aggregatorStatePubkey = "";
                else {
                    object.aggregatorStatePubkey = [];
                    if (options.bytes !== Array)
                        object.aggregatorStatePubkey = $util.newBuffer(object.aggregatorStatePubkey);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.slot = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.slot = options.longs === String ? "0" : 0;
            }
            if (message.aggregatorStatePubkey != null && message.hasOwnProperty("aggregatorStatePubkey"))
                object.aggregatorStatePubkey = options.bytes === String ? $util.base64.encode(message.aggregatorStatePubkey, 0, message.aggregatorStatePubkey.length) : options.bytes === Array ? Array.prototype.slice.call(message.aggregatorStatePubkey) : message.aggregatorStatePubkey;
            if (message.nodePubkeys && message.nodePubkeys.length) {
                object.nodePubkeys = [];
                for (var j = 0; j < message.nodePubkeys.length; ++j)
                    object.nodePubkeys[j] = options.bytes === String ? $util.base64.encode(message.nodePubkeys[j], 0, message.nodePubkeys[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.nodePubkeys[j]) : message.nodePubkeys[j];
            }
            if (message.slot != null && message.hasOwnProperty("slot"))
                if (typeof message.slot === "number")
                    object.slot = options.longs === String ? String(message.slot) : message.slot;
                else
                    object.slot = options.longs === String ? $util.Long.prototype.toString.call(message.slot) : options.longs === Number ? new $util.LongBits(message.slot.low >>> 0, message.slot.high >>> 0).toNumber(true) : message.slot;
            return object;
        };
    
        /**
         * Converts this JobPosting to JSON.
         * @function toJSON
         * @memberof JobPosting
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JobPosting.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return JobPosting;
    })();
    
    $root.JobResult = (function() {
    
        /**
         * Properties of a JobResult.
         * @exports IJobResult
         * @interface IJobResult
         * @property {Uint8Array|null} [nodePubkey] JobResult nodePubkey
         * @property {number|null} [result] JobResult result
         * @property {boolean|null} [error] JobResult error
         */
    
        /**
         * Constructs a new JobResult.
         * @exports JobResult
         * @classdesc Represents a JobResult.
         * @implements IJobResult
         * @constructor
         * @param {IJobResult=} [properties] Properties to set
         */
        function JobResult(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * JobResult nodePubkey.
         * @member {Uint8Array} nodePubkey
         * @memberof JobResult
         * @instance
         */
        JobResult.prototype.nodePubkey = $util.newBuffer([]);
    
        /**
         * JobResult result.
         * @member {number} result
         * @memberof JobResult
         * @instance
         */
        JobResult.prototype.result = 0;
    
        /**
         * JobResult error.
         * @member {boolean} error
         * @memberof JobResult
         * @instance
         */
        JobResult.prototype.error = false;
    
        /**
         * Creates a new JobResult instance using the specified properties.
         * @function create
         * @memberof JobResult
         * @static
         * @param {IJobResult=} [properties] Properties to set
         * @returns {JobResult} JobResult instance
         */
        JobResult.create = function create(properties) {
            return new JobResult(properties);
        };
    
        /**
         * Encodes the specified JobResult message. Does not implicitly {@link JobResult.verify|verify} messages.
         * @function encode
         * @memberof JobResult
         * @static
         * @param {IJobResult} message JobResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JobResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.nodePubkey != null && Object.hasOwnProperty.call(message, "nodePubkey"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.nodePubkey);
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.result);
            if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.error);
            return writer;
        };
    
        /**
         * Encodes the specified JobResult message, length delimited. Does not implicitly {@link JobResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof JobResult
         * @static
         * @param {IJobResult} message JobResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JobResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a JobResult message from the specified reader or buffer.
         * @function decode
         * @memberof JobResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {JobResult} JobResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JobResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.JobResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.nodePubkey = reader.bytes();
                    break;
                case 3:
                    message.result = reader.double();
                    break;
                case 4:
                    message.error = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a JobResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof JobResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {JobResult} JobResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JobResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a JobResult message.
         * @function verify
         * @memberof JobResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JobResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.nodePubkey != null && message.hasOwnProperty("nodePubkey"))
                if (!(message.nodePubkey && typeof message.nodePubkey.length === "number" || $util.isString(message.nodePubkey)))
                    return "nodePubkey: buffer expected";
            if (message.result != null && message.hasOwnProperty("result"))
                if (typeof message.result !== "number")
                    return "result: number expected";
            if (message.error != null && message.hasOwnProperty("error"))
                if (typeof message.error !== "boolean")
                    return "error: boolean expected";
            return null;
        };
    
        /**
         * Creates a JobResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof JobResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {JobResult} JobResult
         */
        JobResult.fromObject = function fromObject(object) {
            if (object instanceof $root.JobResult)
                return object;
            var message = new $root.JobResult();
            if (object.nodePubkey != null)
                if (typeof object.nodePubkey === "string")
                    $util.base64.decode(object.nodePubkey, message.nodePubkey = $util.newBuffer($util.base64.length(object.nodePubkey)), 0);
                else if (object.nodePubkey.length)
                    message.nodePubkey = object.nodePubkey;
            if (object.result != null)
                message.result = Number(object.result);
            if (object.error != null)
                message.error = Boolean(object.error);
            return message;
        };
    
        /**
         * Creates a plain object from a JobResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof JobResult
         * @static
         * @param {JobResult} message JobResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JobResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.nodePubkey = "";
                else {
                    object.nodePubkey = [];
                    if (options.bytes !== Array)
                        object.nodePubkey = $util.newBuffer(object.nodePubkey);
                }
                object.result = 0;
                object.error = false;
            }
            if (message.nodePubkey != null && message.hasOwnProperty("nodePubkey"))
                object.nodePubkey = options.bytes === String ? $util.base64.encode(message.nodePubkey, 0, message.nodePubkey.length) : options.bytes === Array ? Array.prototype.slice.call(message.nodePubkey) : message.nodePubkey;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = options.json && !isFinite(message.result) ? String(message.result) : message.result;
            if (message.error != null && message.hasOwnProperty("error"))
                object.error = message.error;
            return object;
        };
    
        /**
         * Converts this JobResult to JSON.
         * @function toJSON
         * @memberof JobResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JobResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return JobResult;
    })();
    
    $root.FulfillmentEntry = (function() {
    
        /**
         * Properties of a FulfillmentEntry.
         * @exports IFulfillmentEntry
         * @interface IFulfillmentEntry
         * @property {Uint8Array|null} [nodePubkey] FulfillmentEntry nodePubkey
         * @property {number|null} [leaseCount] FulfillmentEntry leaseCount
         * @property {number|null} [slotExpiration] FulfillmentEntry slotExpiration
         */
    
        /**
         * Constructs a new FulfillmentEntry.
         * @exports FulfillmentEntry
         * @classdesc Represents a FulfillmentEntry.
         * @implements IFulfillmentEntry
         * @constructor
         * @param {IFulfillmentEntry=} [properties] Properties to set
         */
        function FulfillmentEntry(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * FulfillmentEntry nodePubkey.
         * @member {Uint8Array} nodePubkey
         * @memberof FulfillmentEntry
         * @instance
         */
        FulfillmentEntry.prototype.nodePubkey = $util.newBuffer([]);
    
        /**
         * FulfillmentEntry leaseCount.
         * @member {number} leaseCount
         * @memberof FulfillmentEntry
         * @instance
         */
        FulfillmentEntry.prototype.leaseCount = 0;
    
        /**
         * FulfillmentEntry slotExpiration.
         * @member {number} slotExpiration
         * @memberof FulfillmentEntry
         * @instance
         */
        FulfillmentEntry.prototype.slotExpiration = 0;
    
        /**
         * Creates a new FulfillmentEntry instance using the specified properties.
         * @function create
         * @memberof FulfillmentEntry
         * @static
         * @param {IFulfillmentEntry=} [properties] Properties to set
         * @returns {FulfillmentEntry} FulfillmentEntry instance
         */
        FulfillmentEntry.create = function create(properties) {
            return new FulfillmentEntry(properties);
        };
    
        /**
         * Encodes the specified FulfillmentEntry message. Does not implicitly {@link FulfillmentEntry.verify|verify} messages.
         * @function encode
         * @memberof FulfillmentEntry
         * @static
         * @param {IFulfillmentEntry} message FulfillmentEntry message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FulfillmentEntry.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.nodePubkey != null && Object.hasOwnProperty.call(message, "nodePubkey"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.nodePubkey);
            if (message.leaseCount != null && Object.hasOwnProperty.call(message, "leaseCount"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.leaseCount);
            if (message.slotExpiration != null && Object.hasOwnProperty.call(message, "slotExpiration"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.slotExpiration);
            return writer;
        };
    
        /**
         * Encodes the specified FulfillmentEntry message, length delimited. Does not implicitly {@link FulfillmentEntry.verify|verify} messages.
         * @function encodeDelimited
         * @memberof FulfillmentEntry
         * @static
         * @param {IFulfillmentEntry} message FulfillmentEntry message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FulfillmentEntry.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a FulfillmentEntry message from the specified reader or buffer.
         * @function decode
         * @memberof FulfillmentEntry
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {FulfillmentEntry} FulfillmentEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FulfillmentEntry.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FulfillmentEntry();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.nodePubkey = reader.bytes();
                    break;
                case 2:
                    message.leaseCount = reader.int32();
                    break;
                case 3:
                    message.slotExpiration = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a FulfillmentEntry message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof FulfillmentEntry
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {FulfillmentEntry} FulfillmentEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FulfillmentEntry.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a FulfillmentEntry message.
         * @function verify
         * @memberof FulfillmentEntry
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FulfillmentEntry.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.nodePubkey != null && message.hasOwnProperty("nodePubkey"))
                if (!(message.nodePubkey && typeof message.nodePubkey.length === "number" || $util.isString(message.nodePubkey)))
                    return "nodePubkey: buffer expected";
            if (message.leaseCount != null && message.hasOwnProperty("leaseCount"))
                if (!$util.isInteger(message.leaseCount))
                    return "leaseCount: integer expected";
            if (message.slotExpiration != null && message.hasOwnProperty("slotExpiration"))
                if (!$util.isInteger(message.slotExpiration))
                    return "slotExpiration: integer expected";
            return null;
        };
    
        /**
         * Creates a FulfillmentEntry message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof FulfillmentEntry
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {FulfillmentEntry} FulfillmentEntry
         */
        FulfillmentEntry.fromObject = function fromObject(object) {
            if (object instanceof $root.FulfillmentEntry)
                return object;
            var message = new $root.FulfillmentEntry();
            if (object.nodePubkey != null)
                if (typeof object.nodePubkey === "string")
                    $util.base64.decode(object.nodePubkey, message.nodePubkey = $util.newBuffer($util.base64.length(object.nodePubkey)), 0);
                else if (object.nodePubkey.length)
                    message.nodePubkey = object.nodePubkey;
            if (object.leaseCount != null)
                message.leaseCount = object.leaseCount | 0;
            if (object.slotExpiration != null)
                message.slotExpiration = object.slotExpiration | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a FulfillmentEntry message. Also converts values to other types if specified.
         * @function toObject
         * @memberof FulfillmentEntry
         * @static
         * @param {FulfillmentEntry} message FulfillmentEntry
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FulfillmentEntry.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.nodePubkey = "";
                else {
                    object.nodePubkey = [];
                    if (options.bytes !== Array)
                        object.nodePubkey = $util.newBuffer(object.nodePubkey);
                }
                object.leaseCount = 0;
                object.slotExpiration = 0;
            }
            if (message.nodePubkey != null && message.hasOwnProperty("nodePubkey"))
                object.nodePubkey = options.bytes === String ? $util.base64.encode(message.nodePubkey, 0, message.nodePubkey.length) : options.bytes === Array ? Array.prototype.slice.call(message.nodePubkey) : message.nodePubkey;
            if (message.leaseCount != null && message.hasOwnProperty("leaseCount"))
                object.leaseCount = message.leaseCount;
            if (message.slotExpiration != null && message.hasOwnProperty("slotExpiration"))
                object.slotExpiration = message.slotExpiration;
            return object;
        };
    
        /**
         * Converts this FulfillmentEntry to JSON.
         * @function toJSON
         * @memberof FulfillmentEntry
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FulfillmentEntry.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return FulfillmentEntry;
    })();
    
    $root.FulfillmentManagerAuth = (function() {
    
        /**
         * Properties of a FulfillmentManagerAuth.
         * @exports IFulfillmentManagerAuth
         * @interface IFulfillmentManagerAuth
         * @property {Uint8Array|null} [nomineePubkey] FulfillmentManagerAuth nomineePubkey
         * @property {Uint8Array|null} [fulfillmentManagerPubkey] FulfillmentManagerAuth fulfillmentManagerPubkey
         * @property {boolean|null} [authorizeHeartbeat] FulfillmentManagerAuth authorizeHeartbeat
         * @property {boolean|null} [authorizeUsage] FulfillmentManagerAuth authorizeUsage
         */
    
        /**
         * Constructs a new FulfillmentManagerAuth.
         * @exports FulfillmentManagerAuth
         * @classdesc Represents a FulfillmentManagerAuth.
         * @implements IFulfillmentManagerAuth
         * @constructor
         * @param {IFulfillmentManagerAuth=} [properties] Properties to set
         */
        function FulfillmentManagerAuth(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * FulfillmentManagerAuth nomineePubkey.
         * @member {Uint8Array} nomineePubkey
         * @memberof FulfillmentManagerAuth
         * @instance
         */
        FulfillmentManagerAuth.prototype.nomineePubkey = $util.newBuffer([]);
    
        /**
         * FulfillmentManagerAuth fulfillmentManagerPubkey.
         * @member {Uint8Array} fulfillmentManagerPubkey
         * @memberof FulfillmentManagerAuth
         * @instance
         */
        FulfillmentManagerAuth.prototype.fulfillmentManagerPubkey = $util.newBuffer([]);
    
        /**
         * FulfillmentManagerAuth authorizeHeartbeat.
         * @member {boolean} authorizeHeartbeat
         * @memberof FulfillmentManagerAuth
         * @instance
         */
        FulfillmentManagerAuth.prototype.authorizeHeartbeat = false;
    
        /**
         * FulfillmentManagerAuth authorizeUsage.
         * @member {boolean} authorizeUsage
         * @memberof FulfillmentManagerAuth
         * @instance
         */
        FulfillmentManagerAuth.prototype.authorizeUsage = false;
    
        /**
         * Creates a new FulfillmentManagerAuth instance using the specified properties.
         * @function create
         * @memberof FulfillmentManagerAuth
         * @static
         * @param {IFulfillmentManagerAuth=} [properties] Properties to set
         * @returns {FulfillmentManagerAuth} FulfillmentManagerAuth instance
         */
        FulfillmentManagerAuth.create = function create(properties) {
            return new FulfillmentManagerAuth(properties);
        };
    
        /**
         * Encodes the specified FulfillmentManagerAuth message. Does not implicitly {@link FulfillmentManagerAuth.verify|verify} messages.
         * @function encode
         * @memberof FulfillmentManagerAuth
         * @static
         * @param {IFulfillmentManagerAuth} message FulfillmentManagerAuth message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FulfillmentManagerAuth.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.nomineePubkey != null && Object.hasOwnProperty.call(message, "nomineePubkey"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.nomineePubkey);
            if (message.fulfillmentManagerPubkey != null && Object.hasOwnProperty.call(message, "fulfillmentManagerPubkey"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.fulfillmentManagerPubkey);
            if (message.authorizeHeartbeat != null && Object.hasOwnProperty.call(message, "authorizeHeartbeat"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.authorizeHeartbeat);
            if (message.authorizeUsage != null && Object.hasOwnProperty.call(message, "authorizeUsage"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.authorizeUsage);
            return writer;
        };
    
        /**
         * Encodes the specified FulfillmentManagerAuth message, length delimited. Does not implicitly {@link FulfillmentManagerAuth.verify|verify} messages.
         * @function encodeDelimited
         * @memberof FulfillmentManagerAuth
         * @static
         * @param {IFulfillmentManagerAuth} message FulfillmentManagerAuth message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FulfillmentManagerAuth.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a FulfillmentManagerAuth message from the specified reader or buffer.
         * @function decode
         * @memberof FulfillmentManagerAuth
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {FulfillmentManagerAuth} FulfillmentManagerAuth
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FulfillmentManagerAuth.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FulfillmentManagerAuth();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.nomineePubkey = reader.bytes();
                    break;
                case 2:
                    message.fulfillmentManagerPubkey = reader.bytes();
                    break;
                case 3:
                    message.authorizeHeartbeat = reader.bool();
                    break;
                case 4:
                    message.authorizeUsage = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a FulfillmentManagerAuth message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof FulfillmentManagerAuth
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {FulfillmentManagerAuth} FulfillmentManagerAuth
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FulfillmentManagerAuth.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a FulfillmentManagerAuth message.
         * @function verify
         * @memberof FulfillmentManagerAuth
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FulfillmentManagerAuth.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.nomineePubkey != null && message.hasOwnProperty("nomineePubkey"))
                if (!(message.nomineePubkey && typeof message.nomineePubkey.length === "number" || $util.isString(message.nomineePubkey)))
                    return "nomineePubkey: buffer expected";
            if (message.fulfillmentManagerPubkey != null && message.hasOwnProperty("fulfillmentManagerPubkey"))
                if (!(message.fulfillmentManagerPubkey && typeof message.fulfillmentManagerPubkey.length === "number" || $util.isString(message.fulfillmentManagerPubkey)))
                    return "fulfillmentManagerPubkey: buffer expected";
            if (message.authorizeHeartbeat != null && message.hasOwnProperty("authorizeHeartbeat"))
                if (typeof message.authorizeHeartbeat !== "boolean")
                    return "authorizeHeartbeat: boolean expected";
            if (message.authorizeUsage != null && message.hasOwnProperty("authorizeUsage"))
                if (typeof message.authorizeUsage !== "boolean")
                    return "authorizeUsage: boolean expected";
            return null;
        };
    
        /**
         * Creates a FulfillmentManagerAuth message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof FulfillmentManagerAuth
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {FulfillmentManagerAuth} FulfillmentManagerAuth
         */
        FulfillmentManagerAuth.fromObject = function fromObject(object) {
            if (object instanceof $root.FulfillmentManagerAuth)
                return object;
            var message = new $root.FulfillmentManagerAuth();
            if (object.nomineePubkey != null)
                if (typeof object.nomineePubkey === "string")
                    $util.base64.decode(object.nomineePubkey, message.nomineePubkey = $util.newBuffer($util.base64.length(object.nomineePubkey)), 0);
                else if (object.nomineePubkey.length)
                    message.nomineePubkey = object.nomineePubkey;
            if (object.fulfillmentManagerPubkey != null)
                if (typeof object.fulfillmentManagerPubkey === "string")
                    $util.base64.decode(object.fulfillmentManagerPubkey, message.fulfillmentManagerPubkey = $util.newBuffer($util.base64.length(object.fulfillmentManagerPubkey)), 0);
                else if (object.fulfillmentManagerPubkey.length)
                    message.fulfillmentManagerPubkey = object.fulfillmentManagerPubkey;
            if (object.authorizeHeartbeat != null)
                message.authorizeHeartbeat = Boolean(object.authorizeHeartbeat);
            if (object.authorizeUsage != null)
                message.authorizeUsage = Boolean(object.authorizeUsage);
            return message;
        };
    
        /**
         * Creates a plain object from a FulfillmentManagerAuth message. Also converts values to other types if specified.
         * @function toObject
         * @memberof FulfillmentManagerAuth
         * @static
         * @param {FulfillmentManagerAuth} message FulfillmentManagerAuth
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FulfillmentManagerAuth.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.nomineePubkey = "";
                else {
                    object.nomineePubkey = [];
                    if (options.bytes !== Array)
                        object.nomineePubkey = $util.newBuffer(object.nomineePubkey);
                }
                if (options.bytes === String)
                    object.fulfillmentManagerPubkey = "";
                else {
                    object.fulfillmentManagerPubkey = [];
                    if (options.bytes !== Array)
                        object.fulfillmentManagerPubkey = $util.newBuffer(object.fulfillmentManagerPubkey);
                }
                object.authorizeHeartbeat = false;
                object.authorizeUsage = false;
            }
            if (message.nomineePubkey != null && message.hasOwnProperty("nomineePubkey"))
                object.nomineePubkey = options.bytes === String ? $util.base64.encode(message.nomineePubkey, 0, message.nomineePubkey.length) : options.bytes === Array ? Array.prototype.slice.call(message.nomineePubkey) : message.nomineePubkey;
            if (message.fulfillmentManagerPubkey != null && message.hasOwnProperty("fulfillmentManagerPubkey"))
                object.fulfillmentManagerPubkey = options.bytes === String ? $util.base64.encode(message.fulfillmentManagerPubkey, 0, message.fulfillmentManagerPubkey.length) : options.bytes === Array ? Array.prototype.slice.call(message.fulfillmentManagerPubkey) : message.fulfillmentManagerPubkey;
            if (message.authorizeHeartbeat != null && message.hasOwnProperty("authorizeHeartbeat"))
                object.authorizeHeartbeat = message.authorizeHeartbeat;
            if (message.authorizeUsage != null && message.hasOwnProperty("authorizeUsage"))
                object.authorizeUsage = message.authorizeUsage;
            return object;
        };
    
        /**
         * Converts this FulfillmentManagerAuth to JSON.
         * @function toJSON
         * @memberof FulfillmentManagerAuth
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FulfillmentManagerAuth.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return FulfillmentManagerAuth;
    })();
    
    $root.FulfillmentManagerState = (function() {
    
        /**
         * Properties of a FulfillmentManagerState.
         * @exports IFulfillmentManagerState
         * @interface IFulfillmentManagerState
         * @property {number|null} [version] FulfillmentManagerState version
         * @property {FulfillmentManagerState.IConfigs|null} [configs] FulfillmentManagerState configs
         * @property {Array.<IFulfillmentEntry>|null} [entries] FulfillmentManagerState entries
         */
    
        /**
         * Constructs a new FulfillmentManagerState.
         * @exports FulfillmentManagerState
         * @classdesc Represents a FulfillmentManagerState.
         * @implements IFulfillmentManagerState
         * @constructor
         * @param {IFulfillmentManagerState=} [properties] Properties to set
         */
        function FulfillmentManagerState(properties) {
            this.entries = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * FulfillmentManagerState version.
         * @member {number} version
         * @memberof FulfillmentManagerState
         * @instance
         */
        FulfillmentManagerState.prototype.version = 0;
    
        /**
         * FulfillmentManagerState configs.
         * @member {FulfillmentManagerState.IConfigs|null|undefined} configs
         * @memberof FulfillmentManagerState
         * @instance
         */
        FulfillmentManagerState.prototype.configs = null;
    
        /**
         * FulfillmentManagerState entries.
         * @member {Array.<IFulfillmentEntry>} entries
         * @memberof FulfillmentManagerState
         * @instance
         */
        FulfillmentManagerState.prototype.entries = $util.emptyArray;
    
        /**
         * Creates a new FulfillmentManagerState instance using the specified properties.
         * @function create
         * @memberof FulfillmentManagerState
         * @static
         * @param {IFulfillmentManagerState=} [properties] Properties to set
         * @returns {FulfillmentManagerState} FulfillmentManagerState instance
         */
        FulfillmentManagerState.create = function create(properties) {
            return new FulfillmentManagerState(properties);
        };
    
        /**
         * Encodes the specified FulfillmentManagerState message. Does not implicitly {@link FulfillmentManagerState.verify|verify} messages.
         * @function encode
         * @memberof FulfillmentManagerState
         * @static
         * @param {IFulfillmentManagerState} message FulfillmentManagerState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FulfillmentManagerState.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.version);
            if (message.configs != null && Object.hasOwnProperty.call(message, "configs"))
                $root.FulfillmentManagerState.Configs.encode(message.configs, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.entries != null && message.entries.length)
                for (var i = 0; i < message.entries.length; ++i)
                    $root.FulfillmentEntry.encode(message.entries[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified FulfillmentManagerState message, length delimited. Does not implicitly {@link FulfillmentManagerState.verify|verify} messages.
         * @function encodeDelimited
         * @memberof FulfillmentManagerState
         * @static
         * @param {IFulfillmentManagerState} message FulfillmentManagerState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FulfillmentManagerState.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a FulfillmentManagerState message from the specified reader or buffer.
         * @function decode
         * @memberof FulfillmentManagerState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {FulfillmentManagerState} FulfillmentManagerState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FulfillmentManagerState.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FulfillmentManagerState();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.version = reader.int32();
                    break;
                case 2:
                    message.configs = $root.FulfillmentManagerState.Configs.decode(reader, reader.uint32());
                    break;
                case 3:
                    if (!(message.entries && message.entries.length))
                        message.entries = [];
                    message.entries.push($root.FulfillmentEntry.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a FulfillmentManagerState message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof FulfillmentManagerState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {FulfillmentManagerState} FulfillmentManagerState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FulfillmentManagerState.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a FulfillmentManagerState message.
         * @function verify
         * @memberof FulfillmentManagerState
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FulfillmentManagerState.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isInteger(message.version))
                    return "version: integer expected";
            if (message.configs != null && message.hasOwnProperty("configs")) {
                var error = $root.FulfillmentManagerState.Configs.verify(message.configs);
                if (error)
                    return "configs." + error;
            }
            if (message.entries != null && message.hasOwnProperty("entries")) {
                if (!Array.isArray(message.entries))
                    return "entries: array expected";
                for (var i = 0; i < message.entries.length; ++i) {
                    var error = $root.FulfillmentEntry.verify(message.entries[i]);
                    if (error)
                        return "entries." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a FulfillmentManagerState message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof FulfillmentManagerState
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {FulfillmentManagerState} FulfillmentManagerState
         */
        FulfillmentManagerState.fromObject = function fromObject(object) {
            if (object instanceof $root.FulfillmentManagerState)
                return object;
            var message = new $root.FulfillmentManagerState();
            if (object.version != null)
                message.version = object.version | 0;
            if (object.configs != null) {
                if (typeof object.configs !== "object")
                    throw TypeError(".FulfillmentManagerState.configs: object expected");
                message.configs = $root.FulfillmentManagerState.Configs.fromObject(object.configs);
            }
            if (object.entries) {
                if (!Array.isArray(object.entries))
                    throw TypeError(".FulfillmentManagerState.entries: array expected");
                message.entries = [];
                for (var i = 0; i < object.entries.length; ++i) {
                    if (typeof object.entries[i] !== "object")
                        throw TypeError(".FulfillmentManagerState.entries: object expected");
                    message.entries[i] = $root.FulfillmentEntry.fromObject(object.entries[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a FulfillmentManagerState message. Also converts values to other types if specified.
         * @function toObject
         * @memberof FulfillmentManagerState
         * @static
         * @param {FulfillmentManagerState} message FulfillmentManagerState
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FulfillmentManagerState.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.entries = [];
            if (options.defaults) {
                object.version = 0;
                object.configs = null;
            }
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            if (message.configs != null && message.hasOwnProperty("configs"))
                object.configs = $root.FulfillmentManagerState.Configs.toObject(message.configs, options);
            if (message.entries && message.entries.length) {
                object.entries = [];
                for (var j = 0; j < message.entries.length; ++j)
                    object.entries[j] = $root.FulfillmentEntry.toObject(message.entries[j], options);
            }
            return object;
        };
    
        /**
         * Converts this FulfillmentManagerState to JSON.
         * @function toJSON
         * @memberof FulfillmentManagerState
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FulfillmentManagerState.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        FulfillmentManagerState.Configs = (function() {
    
            /**
             * Properties of a Configs.
             * @memberof FulfillmentManagerState
             * @interface IConfigs
             * @property {boolean|null} [heartbeatAuthRequired] Configs heartbeatAuthRequired
             * @property {boolean|null} [usageAuthRequired] Configs usageAuthRequired
             * @property {boolean|null} [locked] Configs locked
             */
    
            /**
             * Constructs a new Configs.
             * @memberof FulfillmentManagerState
             * @classdesc Represents a Configs.
             * @implements IConfigs
             * @constructor
             * @param {FulfillmentManagerState.IConfigs=} [properties] Properties to set
             */
            function Configs(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Configs heartbeatAuthRequired.
             * @member {boolean} heartbeatAuthRequired
             * @memberof FulfillmentManagerState.Configs
             * @instance
             */
            Configs.prototype.heartbeatAuthRequired = false;
    
            /**
             * Configs usageAuthRequired.
             * @member {boolean} usageAuthRequired
             * @memberof FulfillmentManagerState.Configs
             * @instance
             */
            Configs.prototype.usageAuthRequired = false;
    
            /**
             * Configs locked.
             * @member {boolean} locked
             * @memberof FulfillmentManagerState.Configs
             * @instance
             */
            Configs.prototype.locked = false;
    
            /**
             * Creates a new Configs instance using the specified properties.
             * @function create
             * @memberof FulfillmentManagerState.Configs
             * @static
             * @param {FulfillmentManagerState.IConfigs=} [properties] Properties to set
             * @returns {FulfillmentManagerState.Configs} Configs instance
             */
            Configs.create = function create(properties) {
                return new Configs(properties);
            };
    
            /**
             * Encodes the specified Configs message. Does not implicitly {@link FulfillmentManagerState.Configs.verify|verify} messages.
             * @function encode
             * @memberof FulfillmentManagerState.Configs
             * @static
             * @param {FulfillmentManagerState.IConfigs} message Configs message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Configs.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.heartbeatAuthRequired != null && Object.hasOwnProperty.call(message, "heartbeatAuthRequired"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.heartbeatAuthRequired);
                if (message.usageAuthRequired != null && Object.hasOwnProperty.call(message, "usageAuthRequired"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.usageAuthRequired);
                if (message.locked != null && Object.hasOwnProperty.call(message, "locked"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.locked);
                return writer;
            };
    
            /**
             * Encodes the specified Configs message, length delimited. Does not implicitly {@link FulfillmentManagerState.Configs.verify|verify} messages.
             * @function encodeDelimited
             * @memberof FulfillmentManagerState.Configs
             * @static
             * @param {FulfillmentManagerState.IConfigs} message Configs message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Configs.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Configs message from the specified reader or buffer.
             * @function decode
             * @memberof FulfillmentManagerState.Configs
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {FulfillmentManagerState.Configs} Configs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Configs.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FulfillmentManagerState.Configs();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.heartbeatAuthRequired = reader.bool();
                        break;
                    case 2:
                        message.usageAuthRequired = reader.bool();
                        break;
                    case 3:
                        message.locked = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Configs message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof FulfillmentManagerState.Configs
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {FulfillmentManagerState.Configs} Configs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Configs.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Configs message.
             * @function verify
             * @memberof FulfillmentManagerState.Configs
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Configs.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.heartbeatAuthRequired != null && message.hasOwnProperty("heartbeatAuthRequired"))
                    if (typeof message.heartbeatAuthRequired !== "boolean")
                        return "heartbeatAuthRequired: boolean expected";
                if (message.usageAuthRequired != null && message.hasOwnProperty("usageAuthRequired"))
                    if (typeof message.usageAuthRequired !== "boolean")
                        return "usageAuthRequired: boolean expected";
                if (message.locked != null && message.hasOwnProperty("locked"))
                    if (typeof message.locked !== "boolean")
                        return "locked: boolean expected";
                return null;
            };
    
            /**
             * Creates a Configs message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof FulfillmentManagerState.Configs
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {FulfillmentManagerState.Configs} Configs
             */
            Configs.fromObject = function fromObject(object) {
                if (object instanceof $root.FulfillmentManagerState.Configs)
                    return object;
                var message = new $root.FulfillmentManagerState.Configs();
                if (object.heartbeatAuthRequired != null)
                    message.heartbeatAuthRequired = Boolean(object.heartbeatAuthRequired);
                if (object.usageAuthRequired != null)
                    message.usageAuthRequired = Boolean(object.usageAuthRequired);
                if (object.locked != null)
                    message.locked = Boolean(object.locked);
                return message;
            };
    
            /**
             * Creates a plain object from a Configs message. Also converts values to other types if specified.
             * @function toObject
             * @memberof FulfillmentManagerState.Configs
             * @static
             * @param {FulfillmentManagerState.Configs} message Configs
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Configs.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.heartbeatAuthRequired = false;
                    object.usageAuthRequired = false;
                    object.locked = false;
                }
                if (message.heartbeatAuthRequired != null && message.hasOwnProperty("heartbeatAuthRequired"))
                    object.heartbeatAuthRequired = message.heartbeatAuthRequired;
                if (message.usageAuthRequired != null && message.hasOwnProperty("usageAuthRequired"))
                    object.usageAuthRequired = message.usageAuthRequired;
                if (message.locked != null && message.hasOwnProperty("locked"))
                    object.locked = message.locked;
                return object;
            };
    
            /**
             * Converts this Configs to JSON.
             * @function toJSON
             * @memberof FulfillmentManagerState.Configs
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Configs.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Configs;
        })();
    
        return FulfillmentManagerState;
    })();
    
    $root.SwitchboardInstruction = (function() {
    
        /**
         * Properties of a SwitchboardInstruction.
         * @exports ISwitchboardInstruction
         * @interface ISwitchboardInstruction
         * @property {SwitchboardInstruction.IInitInstruction|null} [initInstruction] SwitchboardInstruction initInstruction
         * @property {SwitchboardInstruction.IRegisterJobInstruction|null} [registerJobInstruction] SwitchboardInstruction registerJobInstruction
         * @property {SwitchboardInstruction.IUnregisterJobInstruction|null} [unregisterJobInstruction] SwitchboardInstruction unregisterJobInstruction
         * @property {SwitchboardInstruction.IUpdateAggregateInstruction|null} [updateAggregateInstruction] SwitchboardInstruction updateAggregateInstruction
         * @property {SwitchboardInstruction.IGetAggregateInstruction|null} [getAggregateInstruction] SwitchboardInstruction getAggregateInstruction
         * @property {SwitchboardInstruction.ISaveResultInstruction|null} [saveResultInstruction] SwitchboardInstruction saveResultInstruction
         * @property {SwitchboardInstruction.ISetAggregatorConfigsInstruction|null} [setAggregatorConfigsInstruction] SwitchboardInstruction setAggregatorConfigsInstruction
         * @property {SwitchboardInstruction.ISetFulfillmentManagerConfigsInstruction|null} [setFulfillmentManagerConfigsInstruction] SwitchboardInstruction setFulfillmentManagerConfigsInstruction
         * @property {SwitchboardInstruction.IHeartbeatInstruction|null} [heartbeatInstruction] SwitchboardInstruction heartbeatInstruction
         * @property {SwitchboardInstruction.IRegisterAuthInstruction|null} [registerAuthInstruction] SwitchboardInstruction registerAuthInstruction
         * @property {SwitchboardInstruction.IReachFulfillerAgreementInstruction|null} [reachFulfillerAgreementInstruction] SwitchboardInstruction reachFulfillerAgreementInstruction
         * @property {SwitchboardInstruction.IRemoveFulfillerInstruction|null} [removeFulfillerInstruction] SwitchboardInstruction removeFulfillerInstruction
         */
    
        /**
         * Constructs a new SwitchboardInstruction.
         * @exports SwitchboardInstruction
         * @classdesc Represents a SwitchboardInstruction.
         * @implements ISwitchboardInstruction
         * @constructor
         * @param {ISwitchboardInstruction=} [properties] Properties to set
         */
        function SwitchboardInstruction(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * SwitchboardInstruction initInstruction.
         * @member {SwitchboardInstruction.IInitInstruction|null|undefined} initInstruction
         * @memberof SwitchboardInstruction
         * @instance
         */
        SwitchboardInstruction.prototype.initInstruction = null;
    
        /**
         * SwitchboardInstruction registerJobInstruction.
         * @member {SwitchboardInstruction.IRegisterJobInstruction|null|undefined} registerJobInstruction
         * @memberof SwitchboardInstruction
         * @instance
         */
        SwitchboardInstruction.prototype.registerJobInstruction = null;
    
        /**
         * SwitchboardInstruction unregisterJobInstruction.
         * @member {SwitchboardInstruction.IUnregisterJobInstruction|null|undefined} unregisterJobInstruction
         * @memberof SwitchboardInstruction
         * @instance
         */
        SwitchboardInstruction.prototype.unregisterJobInstruction = null;
    
        /**
         * SwitchboardInstruction updateAggregateInstruction.
         * @member {SwitchboardInstruction.IUpdateAggregateInstruction|null|undefined} updateAggregateInstruction
         * @memberof SwitchboardInstruction
         * @instance
         */
        SwitchboardInstruction.prototype.updateAggregateInstruction = null;
    
        /**
         * SwitchboardInstruction getAggregateInstruction.
         * @member {SwitchboardInstruction.IGetAggregateInstruction|null|undefined} getAggregateInstruction
         * @memberof SwitchboardInstruction
         * @instance
         */
        SwitchboardInstruction.prototype.getAggregateInstruction = null;
    
        /**
         * SwitchboardInstruction saveResultInstruction.
         * @member {SwitchboardInstruction.ISaveResultInstruction|null|undefined} saveResultInstruction
         * @memberof SwitchboardInstruction
         * @instance
         */
        SwitchboardInstruction.prototype.saveResultInstruction = null;
    
        /**
         * SwitchboardInstruction setAggregatorConfigsInstruction.
         * @member {SwitchboardInstruction.ISetAggregatorConfigsInstruction|null|undefined} setAggregatorConfigsInstruction
         * @memberof SwitchboardInstruction
         * @instance
         */
        SwitchboardInstruction.prototype.setAggregatorConfigsInstruction = null;
    
        /**
         * SwitchboardInstruction setFulfillmentManagerConfigsInstruction.
         * @member {SwitchboardInstruction.ISetFulfillmentManagerConfigsInstruction|null|undefined} setFulfillmentManagerConfigsInstruction
         * @memberof SwitchboardInstruction
         * @instance
         */
        SwitchboardInstruction.prototype.setFulfillmentManagerConfigsInstruction = null;
    
        /**
         * SwitchboardInstruction heartbeatInstruction.
         * @member {SwitchboardInstruction.IHeartbeatInstruction|null|undefined} heartbeatInstruction
         * @memberof SwitchboardInstruction
         * @instance
         */
        SwitchboardInstruction.prototype.heartbeatInstruction = null;
    
        /**
         * SwitchboardInstruction registerAuthInstruction.
         * @member {SwitchboardInstruction.IRegisterAuthInstruction|null|undefined} registerAuthInstruction
         * @memberof SwitchboardInstruction
         * @instance
         */
        SwitchboardInstruction.prototype.registerAuthInstruction = null;
    
        /**
         * SwitchboardInstruction reachFulfillerAgreementInstruction.
         * @member {SwitchboardInstruction.IReachFulfillerAgreementInstruction|null|undefined} reachFulfillerAgreementInstruction
         * @memberof SwitchboardInstruction
         * @instance
         */
        SwitchboardInstruction.prototype.reachFulfillerAgreementInstruction = null;
    
        /**
         * SwitchboardInstruction removeFulfillerInstruction.
         * @member {SwitchboardInstruction.IRemoveFulfillerInstruction|null|undefined} removeFulfillerInstruction
         * @memberof SwitchboardInstruction
         * @instance
         */
        SwitchboardInstruction.prototype.removeFulfillerInstruction = null;
    
        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;
    
        /**
         * SwitchboardInstruction instruction.
         * @member {"initInstruction"|"registerJobInstruction"|"unregisterJobInstruction"|"updateAggregateInstruction"|"getAggregateInstruction"|"saveResultInstruction"|"setAggregatorConfigsInstruction"|"setFulfillmentManagerConfigsInstruction"|"heartbeatInstruction"|"registerAuthInstruction"|"reachFulfillerAgreementInstruction"|"removeFulfillerInstruction"|undefined} instruction
         * @memberof SwitchboardInstruction
         * @instance
         */
        Object.defineProperty(SwitchboardInstruction.prototype, "instruction", {
            get: $util.oneOfGetter($oneOfFields = ["initInstruction", "registerJobInstruction", "unregisterJobInstruction", "updateAggregateInstruction", "getAggregateInstruction", "saveResultInstruction", "setAggregatorConfigsInstruction", "setFulfillmentManagerConfigsInstruction", "heartbeatInstruction", "registerAuthInstruction", "reachFulfillerAgreementInstruction", "removeFulfillerInstruction"]),
            set: $util.oneOfSetter($oneOfFields)
        });
    
        /**
         * Creates a new SwitchboardInstruction instance using the specified properties.
         * @function create
         * @memberof SwitchboardInstruction
         * @static
         * @param {ISwitchboardInstruction=} [properties] Properties to set
         * @returns {SwitchboardInstruction} SwitchboardInstruction instance
         */
        SwitchboardInstruction.create = function create(properties) {
            return new SwitchboardInstruction(properties);
        };
    
        /**
         * Encodes the specified SwitchboardInstruction message. Does not implicitly {@link SwitchboardInstruction.verify|verify} messages.
         * @function encode
         * @memberof SwitchboardInstruction
         * @static
         * @param {ISwitchboardInstruction} message SwitchboardInstruction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SwitchboardInstruction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.initInstruction != null && Object.hasOwnProperty.call(message, "initInstruction"))
                $root.SwitchboardInstruction.InitInstruction.encode(message.initInstruction, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.registerJobInstruction != null && Object.hasOwnProperty.call(message, "registerJobInstruction"))
                $root.SwitchboardInstruction.RegisterJobInstruction.encode(message.registerJobInstruction, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.unregisterJobInstruction != null && Object.hasOwnProperty.call(message, "unregisterJobInstruction"))
                $root.SwitchboardInstruction.UnregisterJobInstruction.encode(message.unregisterJobInstruction, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.updateAggregateInstruction != null && Object.hasOwnProperty.call(message, "updateAggregateInstruction"))
                $root.SwitchboardInstruction.UpdateAggregateInstruction.encode(message.updateAggregateInstruction, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.getAggregateInstruction != null && Object.hasOwnProperty.call(message, "getAggregateInstruction"))
                $root.SwitchboardInstruction.GetAggregateInstruction.encode(message.getAggregateInstruction, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.saveResultInstruction != null && Object.hasOwnProperty.call(message, "saveResultInstruction"))
                $root.SwitchboardInstruction.SaveResultInstruction.encode(message.saveResultInstruction, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.setAggregatorConfigsInstruction != null && Object.hasOwnProperty.call(message, "setAggregatorConfigsInstruction"))
                $root.SwitchboardInstruction.SetAggregatorConfigsInstruction.encode(message.setAggregatorConfigsInstruction, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.setFulfillmentManagerConfigsInstruction != null && Object.hasOwnProperty.call(message, "setFulfillmentManagerConfigsInstruction"))
                $root.SwitchboardInstruction.SetFulfillmentManagerConfigsInstruction.encode(message.setFulfillmentManagerConfigsInstruction, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.heartbeatInstruction != null && Object.hasOwnProperty.call(message, "heartbeatInstruction"))
                $root.SwitchboardInstruction.HeartbeatInstruction.encode(message.heartbeatInstruction, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.registerAuthInstruction != null && Object.hasOwnProperty.call(message, "registerAuthInstruction"))
                $root.SwitchboardInstruction.RegisterAuthInstruction.encode(message.registerAuthInstruction, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.reachFulfillerAgreementInstruction != null && Object.hasOwnProperty.call(message, "reachFulfillerAgreementInstruction"))
                $root.SwitchboardInstruction.ReachFulfillerAgreementInstruction.encode(message.reachFulfillerAgreementInstruction, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.removeFulfillerInstruction != null && Object.hasOwnProperty.call(message, "removeFulfillerInstruction"))
                $root.SwitchboardInstruction.RemoveFulfillerInstruction.encode(message.removeFulfillerInstruction, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified SwitchboardInstruction message, length delimited. Does not implicitly {@link SwitchboardInstruction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SwitchboardInstruction
         * @static
         * @param {ISwitchboardInstruction} message SwitchboardInstruction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SwitchboardInstruction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a SwitchboardInstruction message from the specified reader or buffer.
         * @function decode
         * @memberof SwitchboardInstruction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SwitchboardInstruction} SwitchboardInstruction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SwitchboardInstruction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SwitchboardInstruction();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.initInstruction = $root.SwitchboardInstruction.InitInstruction.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.registerJobInstruction = $root.SwitchboardInstruction.RegisterJobInstruction.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.unregisterJobInstruction = $root.SwitchboardInstruction.UnregisterJobInstruction.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.updateAggregateInstruction = $root.SwitchboardInstruction.UpdateAggregateInstruction.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.getAggregateInstruction = $root.SwitchboardInstruction.GetAggregateInstruction.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.saveResultInstruction = $root.SwitchboardInstruction.SaveResultInstruction.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.setAggregatorConfigsInstruction = $root.SwitchboardInstruction.SetAggregatorConfigsInstruction.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.setFulfillmentManagerConfigsInstruction = $root.SwitchboardInstruction.SetFulfillmentManagerConfigsInstruction.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.heartbeatInstruction = $root.SwitchboardInstruction.HeartbeatInstruction.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.registerAuthInstruction = $root.SwitchboardInstruction.RegisterAuthInstruction.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.reachFulfillerAgreementInstruction = $root.SwitchboardInstruction.ReachFulfillerAgreementInstruction.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.removeFulfillerInstruction = $root.SwitchboardInstruction.RemoveFulfillerInstruction.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a SwitchboardInstruction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SwitchboardInstruction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SwitchboardInstruction} SwitchboardInstruction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SwitchboardInstruction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a SwitchboardInstruction message.
         * @function verify
         * @memberof SwitchboardInstruction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SwitchboardInstruction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.initInstruction != null && message.hasOwnProperty("initInstruction")) {
                properties.instruction = 1;
                {
                    var error = $root.SwitchboardInstruction.InitInstruction.verify(message.initInstruction);
                    if (error)
                        return "initInstruction." + error;
                }
            }
            if (message.registerJobInstruction != null && message.hasOwnProperty("registerJobInstruction")) {
                if (properties.instruction === 1)
                    return "instruction: multiple values";
                properties.instruction = 1;
                {
                    var error = $root.SwitchboardInstruction.RegisterJobInstruction.verify(message.registerJobInstruction);
                    if (error)
                        return "registerJobInstruction." + error;
                }
            }
            if (message.unregisterJobInstruction != null && message.hasOwnProperty("unregisterJobInstruction")) {
                if (properties.instruction === 1)
                    return "instruction: multiple values";
                properties.instruction = 1;
                {
                    var error = $root.SwitchboardInstruction.UnregisterJobInstruction.verify(message.unregisterJobInstruction);
                    if (error)
                        return "unregisterJobInstruction." + error;
                }
            }
            if (message.updateAggregateInstruction != null && message.hasOwnProperty("updateAggregateInstruction")) {
                if (properties.instruction === 1)
                    return "instruction: multiple values";
                properties.instruction = 1;
                {
                    var error = $root.SwitchboardInstruction.UpdateAggregateInstruction.verify(message.updateAggregateInstruction);
                    if (error)
                        return "updateAggregateInstruction." + error;
                }
            }
            if (message.getAggregateInstruction != null && message.hasOwnProperty("getAggregateInstruction")) {
                if (properties.instruction === 1)
                    return "instruction: multiple values";
                properties.instruction = 1;
                {
                    var error = $root.SwitchboardInstruction.GetAggregateInstruction.verify(message.getAggregateInstruction);
                    if (error)
                        return "getAggregateInstruction." + error;
                }
            }
            if (message.saveResultInstruction != null && message.hasOwnProperty("saveResultInstruction")) {
                if (properties.instruction === 1)
                    return "instruction: multiple values";
                properties.instruction = 1;
                {
                    var error = $root.SwitchboardInstruction.SaveResultInstruction.verify(message.saveResultInstruction);
                    if (error)
                        return "saveResultInstruction." + error;
                }
            }
            if (message.setAggregatorConfigsInstruction != null && message.hasOwnProperty("setAggregatorConfigsInstruction")) {
                if (properties.instruction === 1)
                    return "instruction: multiple values";
                properties.instruction = 1;
                {
                    var error = $root.SwitchboardInstruction.SetAggregatorConfigsInstruction.verify(message.setAggregatorConfigsInstruction);
                    if (error)
                        return "setAggregatorConfigsInstruction." + error;
                }
            }
            if (message.setFulfillmentManagerConfigsInstruction != null && message.hasOwnProperty("setFulfillmentManagerConfigsInstruction")) {
                if (properties.instruction === 1)
                    return "instruction: multiple values";
                properties.instruction = 1;
                {
                    var error = $root.SwitchboardInstruction.SetFulfillmentManagerConfigsInstruction.verify(message.setFulfillmentManagerConfigsInstruction);
                    if (error)
                        return "setFulfillmentManagerConfigsInstruction." + error;
                }
            }
            if (message.heartbeatInstruction != null && message.hasOwnProperty("heartbeatInstruction")) {
                if (properties.instruction === 1)
                    return "instruction: multiple values";
                properties.instruction = 1;
                {
                    var error = $root.SwitchboardInstruction.HeartbeatInstruction.verify(message.heartbeatInstruction);
                    if (error)
                        return "heartbeatInstruction." + error;
                }
            }
            if (message.registerAuthInstruction != null && message.hasOwnProperty("registerAuthInstruction")) {
                if (properties.instruction === 1)
                    return "instruction: multiple values";
                properties.instruction = 1;
                {
                    var error = $root.SwitchboardInstruction.RegisterAuthInstruction.verify(message.registerAuthInstruction);
                    if (error)
                        return "registerAuthInstruction." + error;
                }
            }
            if (message.reachFulfillerAgreementInstruction != null && message.hasOwnProperty("reachFulfillerAgreementInstruction")) {
                if (properties.instruction === 1)
                    return "instruction: multiple values";
                properties.instruction = 1;
                {
                    var error = $root.SwitchboardInstruction.ReachFulfillerAgreementInstruction.verify(message.reachFulfillerAgreementInstruction);
                    if (error)
                        return "reachFulfillerAgreementInstruction." + error;
                }
            }
            if (message.removeFulfillerInstruction != null && message.hasOwnProperty("removeFulfillerInstruction")) {
                if (properties.instruction === 1)
                    return "instruction: multiple values";
                properties.instruction = 1;
                {
                    var error = $root.SwitchboardInstruction.RemoveFulfillerInstruction.verify(message.removeFulfillerInstruction);
                    if (error)
                        return "removeFulfillerInstruction." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a SwitchboardInstruction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SwitchboardInstruction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SwitchboardInstruction} SwitchboardInstruction
         */
        SwitchboardInstruction.fromObject = function fromObject(object) {
            if (object instanceof $root.SwitchboardInstruction)
                return object;
            var message = new $root.SwitchboardInstruction();
            if (object.initInstruction != null) {
                if (typeof object.initInstruction !== "object")
                    throw TypeError(".SwitchboardInstruction.initInstruction: object expected");
                message.initInstruction = $root.SwitchboardInstruction.InitInstruction.fromObject(object.initInstruction);
            }
            if (object.registerJobInstruction != null) {
                if (typeof object.registerJobInstruction !== "object")
                    throw TypeError(".SwitchboardInstruction.registerJobInstruction: object expected");
                message.registerJobInstruction = $root.SwitchboardInstruction.RegisterJobInstruction.fromObject(object.registerJobInstruction);
            }
            if (object.unregisterJobInstruction != null) {
                if (typeof object.unregisterJobInstruction !== "object")
                    throw TypeError(".SwitchboardInstruction.unregisterJobInstruction: object expected");
                message.unregisterJobInstruction = $root.SwitchboardInstruction.UnregisterJobInstruction.fromObject(object.unregisterJobInstruction);
            }
            if (object.updateAggregateInstruction != null) {
                if (typeof object.updateAggregateInstruction !== "object")
                    throw TypeError(".SwitchboardInstruction.updateAggregateInstruction: object expected");
                message.updateAggregateInstruction = $root.SwitchboardInstruction.UpdateAggregateInstruction.fromObject(object.updateAggregateInstruction);
            }
            if (object.getAggregateInstruction != null) {
                if (typeof object.getAggregateInstruction !== "object")
                    throw TypeError(".SwitchboardInstruction.getAggregateInstruction: object expected");
                message.getAggregateInstruction = $root.SwitchboardInstruction.GetAggregateInstruction.fromObject(object.getAggregateInstruction);
            }
            if (object.saveResultInstruction != null) {
                if (typeof object.saveResultInstruction !== "object")
                    throw TypeError(".SwitchboardInstruction.saveResultInstruction: object expected");
                message.saveResultInstruction = $root.SwitchboardInstruction.SaveResultInstruction.fromObject(object.saveResultInstruction);
            }
            if (object.setAggregatorConfigsInstruction != null) {
                if (typeof object.setAggregatorConfigsInstruction !== "object")
                    throw TypeError(".SwitchboardInstruction.setAggregatorConfigsInstruction: object expected");
                message.setAggregatorConfigsInstruction = $root.SwitchboardInstruction.SetAggregatorConfigsInstruction.fromObject(object.setAggregatorConfigsInstruction);
            }
            if (object.setFulfillmentManagerConfigsInstruction != null) {
                if (typeof object.setFulfillmentManagerConfigsInstruction !== "object")
                    throw TypeError(".SwitchboardInstruction.setFulfillmentManagerConfigsInstruction: object expected");
                message.setFulfillmentManagerConfigsInstruction = $root.SwitchboardInstruction.SetFulfillmentManagerConfigsInstruction.fromObject(object.setFulfillmentManagerConfigsInstruction);
            }
            if (object.heartbeatInstruction != null) {
                if (typeof object.heartbeatInstruction !== "object")
                    throw TypeError(".SwitchboardInstruction.heartbeatInstruction: object expected");
                message.heartbeatInstruction = $root.SwitchboardInstruction.HeartbeatInstruction.fromObject(object.heartbeatInstruction);
            }
            if (object.registerAuthInstruction != null) {
                if (typeof object.registerAuthInstruction !== "object")
                    throw TypeError(".SwitchboardInstruction.registerAuthInstruction: object expected");
                message.registerAuthInstruction = $root.SwitchboardInstruction.RegisterAuthInstruction.fromObject(object.registerAuthInstruction);
            }
            if (object.reachFulfillerAgreementInstruction != null) {
                if (typeof object.reachFulfillerAgreementInstruction !== "object")
                    throw TypeError(".SwitchboardInstruction.reachFulfillerAgreementInstruction: object expected");
                message.reachFulfillerAgreementInstruction = $root.SwitchboardInstruction.ReachFulfillerAgreementInstruction.fromObject(object.reachFulfillerAgreementInstruction);
            }
            if (object.removeFulfillerInstruction != null) {
                if (typeof object.removeFulfillerInstruction !== "object")
                    throw TypeError(".SwitchboardInstruction.removeFulfillerInstruction: object expected");
                message.removeFulfillerInstruction = $root.SwitchboardInstruction.RemoveFulfillerInstruction.fromObject(object.removeFulfillerInstruction);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a SwitchboardInstruction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SwitchboardInstruction
         * @static
         * @param {SwitchboardInstruction} message SwitchboardInstruction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SwitchboardInstruction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.initInstruction != null && message.hasOwnProperty("initInstruction")) {
                object.initInstruction = $root.SwitchboardInstruction.InitInstruction.toObject(message.initInstruction, options);
                if (options.oneofs)
                    object.instruction = "initInstruction";
            }
            if (message.registerJobInstruction != null && message.hasOwnProperty("registerJobInstruction")) {
                object.registerJobInstruction = $root.SwitchboardInstruction.RegisterJobInstruction.toObject(message.registerJobInstruction, options);
                if (options.oneofs)
                    object.instruction = "registerJobInstruction";
            }
            if (message.unregisterJobInstruction != null && message.hasOwnProperty("unregisterJobInstruction")) {
                object.unregisterJobInstruction = $root.SwitchboardInstruction.UnregisterJobInstruction.toObject(message.unregisterJobInstruction, options);
                if (options.oneofs)
                    object.instruction = "unregisterJobInstruction";
            }
            if (message.updateAggregateInstruction != null && message.hasOwnProperty("updateAggregateInstruction")) {
                object.updateAggregateInstruction = $root.SwitchboardInstruction.UpdateAggregateInstruction.toObject(message.updateAggregateInstruction, options);
                if (options.oneofs)
                    object.instruction = "updateAggregateInstruction";
            }
            if (message.getAggregateInstruction != null && message.hasOwnProperty("getAggregateInstruction")) {
                object.getAggregateInstruction = $root.SwitchboardInstruction.GetAggregateInstruction.toObject(message.getAggregateInstruction, options);
                if (options.oneofs)
                    object.instruction = "getAggregateInstruction";
            }
            if (message.saveResultInstruction != null && message.hasOwnProperty("saveResultInstruction")) {
                object.saveResultInstruction = $root.SwitchboardInstruction.SaveResultInstruction.toObject(message.saveResultInstruction, options);
                if (options.oneofs)
                    object.instruction = "saveResultInstruction";
            }
            if (message.setAggregatorConfigsInstruction != null && message.hasOwnProperty("setAggregatorConfigsInstruction")) {
                object.setAggregatorConfigsInstruction = $root.SwitchboardInstruction.SetAggregatorConfigsInstruction.toObject(message.setAggregatorConfigsInstruction, options);
                if (options.oneofs)
                    object.instruction = "setAggregatorConfigsInstruction";
            }
            if (message.setFulfillmentManagerConfigsInstruction != null && message.hasOwnProperty("setFulfillmentManagerConfigsInstruction")) {
                object.setFulfillmentManagerConfigsInstruction = $root.SwitchboardInstruction.SetFulfillmentManagerConfigsInstruction.toObject(message.setFulfillmentManagerConfigsInstruction, options);
                if (options.oneofs)
                    object.instruction = "setFulfillmentManagerConfigsInstruction";
            }
            if (message.heartbeatInstruction != null && message.hasOwnProperty("heartbeatInstruction")) {
                object.heartbeatInstruction = $root.SwitchboardInstruction.HeartbeatInstruction.toObject(message.heartbeatInstruction, options);
                if (options.oneofs)
                    object.instruction = "heartbeatInstruction";
            }
            if (message.registerAuthInstruction != null && message.hasOwnProperty("registerAuthInstruction")) {
                object.registerAuthInstruction = $root.SwitchboardInstruction.RegisterAuthInstruction.toObject(message.registerAuthInstruction, options);
                if (options.oneofs)
                    object.instruction = "registerAuthInstruction";
            }
            if (message.reachFulfillerAgreementInstruction != null && message.hasOwnProperty("reachFulfillerAgreementInstruction")) {
                object.reachFulfillerAgreementInstruction = $root.SwitchboardInstruction.ReachFulfillerAgreementInstruction.toObject(message.reachFulfillerAgreementInstruction, options);
                if (options.oneofs)
                    object.instruction = "reachFulfillerAgreementInstruction";
            }
            if (message.removeFulfillerInstruction != null && message.hasOwnProperty("removeFulfillerInstruction")) {
                object.removeFulfillerInstruction = $root.SwitchboardInstruction.RemoveFulfillerInstruction.toObject(message.removeFulfillerInstruction, options);
                if (options.oneofs)
                    object.instruction = "removeFulfillerInstruction";
            }
            return object;
        };
    
        /**
         * Converts this SwitchboardInstruction to JSON.
         * @function toJSON
         * @memberof SwitchboardInstruction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SwitchboardInstruction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        SwitchboardInstruction.InitInstruction = (function() {
    
            /**
             * Properties of an InitInstruction.
             * @memberof SwitchboardInstruction
             * @interface IInitInstruction
             * @property {SwitchboardAccountType|null} [type] InitInstruction type
             */
    
            /**
             * Constructs a new InitInstruction.
             * @memberof SwitchboardInstruction
             * @classdesc Represents an InitInstruction.
             * @implements IInitInstruction
             * @constructor
             * @param {SwitchboardInstruction.IInitInstruction=} [properties] Properties to set
             */
            function InitInstruction(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * InitInstruction type.
             * @member {SwitchboardAccountType} type
             * @memberof SwitchboardInstruction.InitInstruction
             * @instance
             */
            InitInstruction.prototype.type = 0;
    
            /**
             * Creates a new InitInstruction instance using the specified properties.
             * @function create
             * @memberof SwitchboardInstruction.InitInstruction
             * @static
             * @param {SwitchboardInstruction.IInitInstruction=} [properties] Properties to set
             * @returns {SwitchboardInstruction.InitInstruction} InitInstruction instance
             */
            InitInstruction.create = function create(properties) {
                return new InitInstruction(properties);
            };
    
            /**
             * Encodes the specified InitInstruction message. Does not implicitly {@link SwitchboardInstruction.InitInstruction.verify|verify} messages.
             * @function encode
             * @memberof SwitchboardInstruction.InitInstruction
             * @static
             * @param {SwitchboardInstruction.IInitInstruction} message InitInstruction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InitInstruction.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                return writer;
            };
    
            /**
             * Encodes the specified InitInstruction message, length delimited. Does not implicitly {@link SwitchboardInstruction.InitInstruction.verify|verify} messages.
             * @function encodeDelimited
             * @memberof SwitchboardInstruction.InitInstruction
             * @static
             * @param {SwitchboardInstruction.IInitInstruction} message InitInstruction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InitInstruction.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an InitInstruction message from the specified reader or buffer.
             * @function decode
             * @memberof SwitchboardInstruction.InitInstruction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {SwitchboardInstruction.InitInstruction} InitInstruction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InitInstruction.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SwitchboardInstruction.InitInstruction();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.type = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an InitInstruction message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof SwitchboardInstruction.InitInstruction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {SwitchboardInstruction.InitInstruction} InitInstruction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InitInstruction.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an InitInstruction message.
             * @function verify
             * @memberof SwitchboardInstruction.InitInstruction
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            InitInstruction.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.type != null && message.hasOwnProperty("type"))
                    switch (message.type) {
                    default:
                        return "type: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                        break;
                    }
                return null;
            };
    
            /**
             * Creates an InitInstruction message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof SwitchboardInstruction.InitInstruction
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {SwitchboardInstruction.InitInstruction} InitInstruction
             */
            InitInstruction.fromObject = function fromObject(object) {
                if (object instanceof $root.SwitchboardInstruction.InitInstruction)
                    return object;
                var message = new $root.SwitchboardInstruction.InitInstruction();
                switch (object.type) {
                case "TYPE_UNINITIALIZED":
                case 0:
                    message.type = 0;
                    break;
                case "TYPE_AGGREGATOR":
                case 1:
                    message.type = 1;
                    break;
                case "TYPE_FULFILLMENT_MANAGER":
                case 2:
                    message.type = 2;
                    break;
                case "TYPE_JOB_DEFINITION":
                case 3:
                    message.type = 3;
                    break;
                case "TYPE_FULFILLMENT_MANAGER_AUTH":
                case 4:
                    message.type = 4;
                    break;
                }
                return message;
            };
    
            /**
             * Creates a plain object from an InitInstruction message. Also converts values to other types if specified.
             * @function toObject
             * @memberof SwitchboardInstruction.InitInstruction
             * @static
             * @param {SwitchboardInstruction.InitInstruction} message InitInstruction
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            InitInstruction.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.type = options.enums === String ? "TYPE_UNINITIALIZED" : 0;
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = options.enums === String ? $root.SwitchboardAccountType[message.type] : message.type;
                return object;
            };
    
            /**
             * Converts this InitInstruction to JSON.
             * @function toJSON
             * @memberof SwitchboardInstruction.InitInstruction
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            InitInstruction.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return InitInstruction;
        })();
    
        SwitchboardInstruction.RegisterJobInstruction = (function() {
    
            /**
             * Properties of a RegisterJobInstruction.
             * @memberof SwitchboardInstruction
             * @interface IRegisterJobInstruction
             * @property {IOracleJob|null} [job] RegisterJobInstruction job
             */
    
            /**
             * Constructs a new RegisterJobInstruction.
             * @memberof SwitchboardInstruction
             * @classdesc Represents a RegisterJobInstruction.
             * @implements IRegisterJobInstruction
             * @constructor
             * @param {SwitchboardInstruction.IRegisterJobInstruction=} [properties] Properties to set
             */
            function RegisterJobInstruction(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * RegisterJobInstruction job.
             * @member {IOracleJob|null|undefined} job
             * @memberof SwitchboardInstruction.RegisterJobInstruction
             * @instance
             */
            RegisterJobInstruction.prototype.job = null;
    
            /**
             * Creates a new RegisterJobInstruction instance using the specified properties.
             * @function create
             * @memberof SwitchboardInstruction.RegisterJobInstruction
             * @static
             * @param {SwitchboardInstruction.IRegisterJobInstruction=} [properties] Properties to set
             * @returns {SwitchboardInstruction.RegisterJobInstruction} RegisterJobInstruction instance
             */
            RegisterJobInstruction.create = function create(properties) {
                return new RegisterJobInstruction(properties);
            };
    
            /**
             * Encodes the specified RegisterJobInstruction message. Does not implicitly {@link SwitchboardInstruction.RegisterJobInstruction.verify|verify} messages.
             * @function encode
             * @memberof SwitchboardInstruction.RegisterJobInstruction
             * @static
             * @param {SwitchboardInstruction.IRegisterJobInstruction} message RegisterJobInstruction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RegisterJobInstruction.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.job != null && Object.hasOwnProperty.call(message, "job"))
                    $root.OracleJob.encode(message.job, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified RegisterJobInstruction message, length delimited. Does not implicitly {@link SwitchboardInstruction.RegisterJobInstruction.verify|verify} messages.
             * @function encodeDelimited
             * @memberof SwitchboardInstruction.RegisterJobInstruction
             * @static
             * @param {SwitchboardInstruction.IRegisterJobInstruction} message RegisterJobInstruction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RegisterJobInstruction.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a RegisterJobInstruction message from the specified reader or buffer.
             * @function decode
             * @memberof SwitchboardInstruction.RegisterJobInstruction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {SwitchboardInstruction.RegisterJobInstruction} RegisterJobInstruction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RegisterJobInstruction.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SwitchboardInstruction.RegisterJobInstruction();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.job = $root.OracleJob.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a RegisterJobInstruction message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof SwitchboardInstruction.RegisterJobInstruction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {SwitchboardInstruction.RegisterJobInstruction} RegisterJobInstruction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RegisterJobInstruction.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a RegisterJobInstruction message.
             * @function verify
             * @memberof SwitchboardInstruction.RegisterJobInstruction
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RegisterJobInstruction.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.job != null && message.hasOwnProperty("job")) {
                    var error = $root.OracleJob.verify(message.job);
                    if (error)
                        return "job." + error;
                }
                return null;
            };
    
            /**
             * Creates a RegisterJobInstruction message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof SwitchboardInstruction.RegisterJobInstruction
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {SwitchboardInstruction.RegisterJobInstruction} RegisterJobInstruction
             */
            RegisterJobInstruction.fromObject = function fromObject(object) {
                if (object instanceof $root.SwitchboardInstruction.RegisterJobInstruction)
                    return object;
                var message = new $root.SwitchboardInstruction.RegisterJobInstruction();
                if (object.job != null) {
                    if (typeof object.job !== "object")
                        throw TypeError(".SwitchboardInstruction.RegisterJobInstruction.job: object expected");
                    message.job = $root.OracleJob.fromObject(object.job);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a RegisterJobInstruction message. Also converts values to other types if specified.
             * @function toObject
             * @memberof SwitchboardInstruction.RegisterJobInstruction
             * @static
             * @param {SwitchboardInstruction.RegisterJobInstruction} message RegisterJobInstruction
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RegisterJobInstruction.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.job = null;
                if (message.job != null && message.hasOwnProperty("job"))
                    object.job = $root.OracleJob.toObject(message.job, options);
                return object;
            };
    
            /**
             * Converts this RegisterJobInstruction to JSON.
             * @function toJSON
             * @memberof SwitchboardInstruction.RegisterJobInstruction
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RegisterJobInstruction.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return RegisterJobInstruction;
        })();
    
        SwitchboardInstruction.UnregisterJobInstruction = (function() {
    
            /**
             * Properties of an UnregisterJobInstruction.
             * @memberof SwitchboardInstruction
             * @interface IUnregisterJobInstruction
             * @property {Uint8Array|null} [jobPubkey] UnregisterJobInstruction jobPubkey
             */
    
            /**
             * Constructs a new UnregisterJobInstruction.
             * @memberof SwitchboardInstruction
             * @classdesc Represents an UnregisterJobInstruction.
             * @implements IUnregisterJobInstruction
             * @constructor
             * @param {SwitchboardInstruction.IUnregisterJobInstruction=} [properties] Properties to set
             */
            function UnregisterJobInstruction(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * UnregisterJobInstruction jobPubkey.
             * @member {Uint8Array} jobPubkey
             * @memberof SwitchboardInstruction.UnregisterJobInstruction
             * @instance
             */
            UnregisterJobInstruction.prototype.jobPubkey = $util.newBuffer([]);
    
            /**
             * Creates a new UnregisterJobInstruction instance using the specified properties.
             * @function create
             * @memberof SwitchboardInstruction.UnregisterJobInstruction
             * @static
             * @param {SwitchboardInstruction.IUnregisterJobInstruction=} [properties] Properties to set
             * @returns {SwitchboardInstruction.UnregisterJobInstruction} UnregisterJobInstruction instance
             */
            UnregisterJobInstruction.create = function create(properties) {
                return new UnregisterJobInstruction(properties);
            };
    
            /**
             * Encodes the specified UnregisterJobInstruction message. Does not implicitly {@link SwitchboardInstruction.UnregisterJobInstruction.verify|verify} messages.
             * @function encode
             * @memberof SwitchboardInstruction.UnregisterJobInstruction
             * @static
             * @param {SwitchboardInstruction.IUnregisterJobInstruction} message UnregisterJobInstruction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UnregisterJobInstruction.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.jobPubkey != null && Object.hasOwnProperty.call(message, "jobPubkey"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.jobPubkey);
                return writer;
            };
    
            /**
             * Encodes the specified UnregisterJobInstruction message, length delimited. Does not implicitly {@link SwitchboardInstruction.UnregisterJobInstruction.verify|verify} messages.
             * @function encodeDelimited
             * @memberof SwitchboardInstruction.UnregisterJobInstruction
             * @static
             * @param {SwitchboardInstruction.IUnregisterJobInstruction} message UnregisterJobInstruction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UnregisterJobInstruction.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an UnregisterJobInstruction message from the specified reader or buffer.
             * @function decode
             * @memberof SwitchboardInstruction.UnregisterJobInstruction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {SwitchboardInstruction.UnregisterJobInstruction} UnregisterJobInstruction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UnregisterJobInstruction.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SwitchboardInstruction.UnregisterJobInstruction();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.jobPubkey = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an UnregisterJobInstruction message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof SwitchboardInstruction.UnregisterJobInstruction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {SwitchboardInstruction.UnregisterJobInstruction} UnregisterJobInstruction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UnregisterJobInstruction.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an UnregisterJobInstruction message.
             * @function verify
             * @memberof SwitchboardInstruction.UnregisterJobInstruction
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UnregisterJobInstruction.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.jobPubkey != null && message.hasOwnProperty("jobPubkey"))
                    if (!(message.jobPubkey && typeof message.jobPubkey.length === "number" || $util.isString(message.jobPubkey)))
                        return "jobPubkey: buffer expected";
                return null;
            };
    
            /**
             * Creates an UnregisterJobInstruction message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof SwitchboardInstruction.UnregisterJobInstruction
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {SwitchboardInstruction.UnregisterJobInstruction} UnregisterJobInstruction
             */
            UnregisterJobInstruction.fromObject = function fromObject(object) {
                if (object instanceof $root.SwitchboardInstruction.UnregisterJobInstruction)
                    return object;
                var message = new $root.SwitchboardInstruction.UnregisterJobInstruction();
                if (object.jobPubkey != null)
                    if (typeof object.jobPubkey === "string")
                        $util.base64.decode(object.jobPubkey, message.jobPubkey = $util.newBuffer($util.base64.length(object.jobPubkey)), 0);
                    else if (object.jobPubkey.length)
                        message.jobPubkey = object.jobPubkey;
                return message;
            };
    
            /**
             * Creates a plain object from an UnregisterJobInstruction message. Also converts values to other types if specified.
             * @function toObject
             * @memberof SwitchboardInstruction.UnregisterJobInstruction
             * @static
             * @param {SwitchboardInstruction.UnregisterJobInstruction} message UnregisterJobInstruction
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UnregisterJobInstruction.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    if (options.bytes === String)
                        object.jobPubkey = "";
                    else {
                        object.jobPubkey = [];
                        if (options.bytes !== Array)
                            object.jobPubkey = $util.newBuffer(object.jobPubkey);
                    }
                if (message.jobPubkey != null && message.hasOwnProperty("jobPubkey"))
                    object.jobPubkey = options.bytes === String ? $util.base64.encode(message.jobPubkey, 0, message.jobPubkey.length) : options.bytes === Array ? Array.prototype.slice.call(message.jobPubkey) : message.jobPubkey;
                return object;
            };
    
            /**
             * Converts this UnregisterJobInstruction to JSON.
             * @function toJSON
             * @memberof SwitchboardInstruction.UnregisterJobInstruction
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UnregisterJobInstruction.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return UnregisterJobInstruction;
        })();
    
        SwitchboardInstruction.UpdateAggregateInstruction = (function() {
    
            /**
             * Properties of an UpdateAggregateInstruction.
             * @memberof SwitchboardInstruction
             * @interface IUpdateAggregateInstruction
             */
    
            /**
             * Constructs a new UpdateAggregateInstruction.
             * @memberof SwitchboardInstruction
             * @classdesc Represents an UpdateAggregateInstruction.
             * @implements IUpdateAggregateInstruction
             * @constructor
             * @param {SwitchboardInstruction.IUpdateAggregateInstruction=} [properties] Properties to set
             */
            function UpdateAggregateInstruction(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Creates a new UpdateAggregateInstruction instance using the specified properties.
             * @function create
             * @memberof SwitchboardInstruction.UpdateAggregateInstruction
             * @static
             * @param {SwitchboardInstruction.IUpdateAggregateInstruction=} [properties] Properties to set
             * @returns {SwitchboardInstruction.UpdateAggregateInstruction} UpdateAggregateInstruction instance
             */
            UpdateAggregateInstruction.create = function create(properties) {
                return new UpdateAggregateInstruction(properties);
            };
    
            /**
             * Encodes the specified UpdateAggregateInstruction message. Does not implicitly {@link SwitchboardInstruction.UpdateAggregateInstruction.verify|verify} messages.
             * @function encode
             * @memberof SwitchboardInstruction.UpdateAggregateInstruction
             * @static
             * @param {SwitchboardInstruction.IUpdateAggregateInstruction} message UpdateAggregateInstruction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateAggregateInstruction.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
    
            /**
             * Encodes the specified UpdateAggregateInstruction message, length delimited. Does not implicitly {@link SwitchboardInstruction.UpdateAggregateInstruction.verify|verify} messages.
             * @function encodeDelimited
             * @memberof SwitchboardInstruction.UpdateAggregateInstruction
             * @static
             * @param {SwitchboardInstruction.IUpdateAggregateInstruction} message UpdateAggregateInstruction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateAggregateInstruction.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an UpdateAggregateInstruction message from the specified reader or buffer.
             * @function decode
             * @memberof SwitchboardInstruction.UpdateAggregateInstruction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {SwitchboardInstruction.UpdateAggregateInstruction} UpdateAggregateInstruction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateAggregateInstruction.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SwitchboardInstruction.UpdateAggregateInstruction();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an UpdateAggregateInstruction message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof SwitchboardInstruction.UpdateAggregateInstruction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {SwitchboardInstruction.UpdateAggregateInstruction} UpdateAggregateInstruction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateAggregateInstruction.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an UpdateAggregateInstruction message.
             * @function verify
             * @memberof SwitchboardInstruction.UpdateAggregateInstruction
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UpdateAggregateInstruction.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };
    
            /**
             * Creates an UpdateAggregateInstruction message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof SwitchboardInstruction.UpdateAggregateInstruction
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {SwitchboardInstruction.UpdateAggregateInstruction} UpdateAggregateInstruction
             */
            UpdateAggregateInstruction.fromObject = function fromObject(object) {
                if (object instanceof $root.SwitchboardInstruction.UpdateAggregateInstruction)
                    return object;
                return new $root.SwitchboardInstruction.UpdateAggregateInstruction();
            };
    
            /**
             * Creates a plain object from an UpdateAggregateInstruction message. Also converts values to other types if specified.
             * @function toObject
             * @memberof SwitchboardInstruction.UpdateAggregateInstruction
             * @static
             * @param {SwitchboardInstruction.UpdateAggregateInstruction} message UpdateAggregateInstruction
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UpdateAggregateInstruction.toObject = function toObject() {
                return {};
            };
    
            /**
             * Converts this UpdateAggregateInstruction to JSON.
             * @function toJSON
             * @memberof SwitchboardInstruction.UpdateAggregateInstruction
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UpdateAggregateInstruction.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return UpdateAggregateInstruction;
        })();
    
        SwitchboardInstruction.GetAggregateInstruction = (function() {
    
            /**
             * Properties of a GetAggregateInstruction.
             * @memberof SwitchboardInstruction
             * @interface IGetAggregateInstruction
             */
    
            /**
             * Constructs a new GetAggregateInstruction.
             * @memberof SwitchboardInstruction
             * @classdesc Represents a GetAggregateInstruction.
             * @implements IGetAggregateInstruction
             * @constructor
             * @param {SwitchboardInstruction.IGetAggregateInstruction=} [properties] Properties to set
             */
            function GetAggregateInstruction(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Creates a new GetAggregateInstruction instance using the specified properties.
             * @function create
             * @memberof SwitchboardInstruction.GetAggregateInstruction
             * @static
             * @param {SwitchboardInstruction.IGetAggregateInstruction=} [properties] Properties to set
             * @returns {SwitchboardInstruction.GetAggregateInstruction} GetAggregateInstruction instance
             */
            GetAggregateInstruction.create = function create(properties) {
                return new GetAggregateInstruction(properties);
            };
    
            /**
             * Encodes the specified GetAggregateInstruction message. Does not implicitly {@link SwitchboardInstruction.GetAggregateInstruction.verify|verify} messages.
             * @function encode
             * @memberof SwitchboardInstruction.GetAggregateInstruction
             * @static
             * @param {SwitchboardInstruction.IGetAggregateInstruction} message GetAggregateInstruction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetAggregateInstruction.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
    
            /**
             * Encodes the specified GetAggregateInstruction message, length delimited. Does not implicitly {@link SwitchboardInstruction.GetAggregateInstruction.verify|verify} messages.
             * @function encodeDelimited
             * @memberof SwitchboardInstruction.GetAggregateInstruction
             * @static
             * @param {SwitchboardInstruction.IGetAggregateInstruction} message GetAggregateInstruction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetAggregateInstruction.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a GetAggregateInstruction message from the specified reader or buffer.
             * @function decode
             * @memberof SwitchboardInstruction.GetAggregateInstruction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {SwitchboardInstruction.GetAggregateInstruction} GetAggregateInstruction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetAggregateInstruction.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SwitchboardInstruction.GetAggregateInstruction();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a GetAggregateInstruction message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof SwitchboardInstruction.GetAggregateInstruction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {SwitchboardInstruction.GetAggregateInstruction} GetAggregateInstruction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetAggregateInstruction.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a GetAggregateInstruction message.
             * @function verify
             * @memberof SwitchboardInstruction.GetAggregateInstruction
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetAggregateInstruction.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };
    
            /**
             * Creates a GetAggregateInstruction message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof SwitchboardInstruction.GetAggregateInstruction
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {SwitchboardInstruction.GetAggregateInstruction} GetAggregateInstruction
             */
            GetAggregateInstruction.fromObject = function fromObject(object) {
                if (object instanceof $root.SwitchboardInstruction.GetAggregateInstruction)
                    return object;
                return new $root.SwitchboardInstruction.GetAggregateInstruction();
            };
    
            /**
             * Creates a plain object from a GetAggregateInstruction message. Also converts values to other types if specified.
             * @function toObject
             * @memberof SwitchboardInstruction.GetAggregateInstruction
             * @static
             * @param {SwitchboardInstruction.GetAggregateInstruction} message GetAggregateInstruction
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetAggregateInstruction.toObject = function toObject() {
                return {};
            };
    
            /**
             * Converts this GetAggregateInstruction to JSON.
             * @function toJSON
             * @memberof SwitchboardInstruction.GetAggregateInstruction
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetAggregateInstruction.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return GetAggregateInstruction;
        })();
    
        SwitchboardInstruction.SetAggregatorConfigsInstruction = (function() {
    
            /**
             * Properties of a SetAggregatorConfigsInstruction.
             * @memberof SwitchboardInstruction
             * @interface ISetAggregatorConfigsInstruction
             * @property {number|null} [minConfirmations] SetAggregatorConfigsInstruction minConfirmations
             * @property {number|Long|null} [minUpdateDelaySeconds] SetAggregatorConfigsInstruction minUpdateDelaySeconds
             * @property {Uint8Array|null} [fulfillmentManagerPubkey] SetAggregatorConfigsInstruction fulfillmentManagerPubkey
             * @property {boolean|null} [lock] SetAggregatorConfigsInstruction lock
             */
    
            /**
             * Constructs a new SetAggregatorConfigsInstruction.
             * @memberof SwitchboardInstruction
             * @classdesc Represents a SetAggregatorConfigsInstruction.
             * @implements ISetAggregatorConfigsInstruction
             * @constructor
             * @param {SwitchboardInstruction.ISetAggregatorConfigsInstruction=} [properties] Properties to set
             */
            function SetAggregatorConfigsInstruction(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * SetAggregatorConfigsInstruction minConfirmations.
             * @member {number} minConfirmations
             * @memberof SwitchboardInstruction.SetAggregatorConfigsInstruction
             * @instance
             */
            SetAggregatorConfigsInstruction.prototype.minConfirmations = 0;
    
            /**
             * SetAggregatorConfigsInstruction minUpdateDelaySeconds.
             * @member {number|Long} minUpdateDelaySeconds
             * @memberof SwitchboardInstruction.SetAggregatorConfigsInstruction
             * @instance
             */
            SetAggregatorConfigsInstruction.prototype.minUpdateDelaySeconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * SetAggregatorConfigsInstruction fulfillmentManagerPubkey.
             * @member {Uint8Array} fulfillmentManagerPubkey
             * @memberof SwitchboardInstruction.SetAggregatorConfigsInstruction
             * @instance
             */
            SetAggregatorConfigsInstruction.prototype.fulfillmentManagerPubkey = $util.newBuffer([]);
    
            /**
             * SetAggregatorConfigsInstruction lock.
             * @member {boolean} lock
             * @memberof SwitchboardInstruction.SetAggregatorConfigsInstruction
             * @instance
             */
            SetAggregatorConfigsInstruction.prototype.lock = false;
    
            /**
             * Creates a new SetAggregatorConfigsInstruction instance using the specified properties.
             * @function create
             * @memberof SwitchboardInstruction.SetAggregatorConfigsInstruction
             * @static
             * @param {SwitchboardInstruction.ISetAggregatorConfigsInstruction=} [properties] Properties to set
             * @returns {SwitchboardInstruction.SetAggregatorConfigsInstruction} SetAggregatorConfigsInstruction instance
             */
            SetAggregatorConfigsInstruction.create = function create(properties) {
                return new SetAggregatorConfigsInstruction(properties);
            };
    
            /**
             * Encodes the specified SetAggregatorConfigsInstruction message. Does not implicitly {@link SwitchboardInstruction.SetAggregatorConfigsInstruction.verify|verify} messages.
             * @function encode
             * @memberof SwitchboardInstruction.SetAggregatorConfigsInstruction
             * @static
             * @param {SwitchboardInstruction.ISetAggregatorConfigsInstruction} message SetAggregatorConfigsInstruction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SetAggregatorConfigsInstruction.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.minConfirmations != null && Object.hasOwnProperty.call(message, "minConfirmations"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.minConfirmations);
                if (message.minUpdateDelaySeconds != null && Object.hasOwnProperty.call(message, "minUpdateDelaySeconds"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.minUpdateDelaySeconds);
                if (message.fulfillmentManagerPubkey != null && Object.hasOwnProperty.call(message, "fulfillmentManagerPubkey"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.fulfillmentManagerPubkey);
                if (message.lock != null && Object.hasOwnProperty.call(message, "lock"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.lock);
                return writer;
            };
    
            /**
             * Encodes the specified SetAggregatorConfigsInstruction message, length delimited. Does not implicitly {@link SwitchboardInstruction.SetAggregatorConfigsInstruction.verify|verify} messages.
             * @function encodeDelimited
             * @memberof SwitchboardInstruction.SetAggregatorConfigsInstruction
             * @static
             * @param {SwitchboardInstruction.ISetAggregatorConfigsInstruction} message SetAggregatorConfigsInstruction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SetAggregatorConfigsInstruction.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a SetAggregatorConfigsInstruction message from the specified reader or buffer.
             * @function decode
             * @memberof SwitchboardInstruction.SetAggregatorConfigsInstruction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {SwitchboardInstruction.SetAggregatorConfigsInstruction} SetAggregatorConfigsInstruction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SetAggregatorConfigsInstruction.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SwitchboardInstruction.SetAggregatorConfigsInstruction();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.minConfirmations = reader.int32();
                        break;
                    case 2:
                        message.minUpdateDelaySeconds = reader.int64();
                        break;
                    case 3:
                        message.fulfillmentManagerPubkey = reader.bytes();
                        break;
                    case 5:
                        message.lock = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a SetAggregatorConfigsInstruction message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof SwitchboardInstruction.SetAggregatorConfigsInstruction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {SwitchboardInstruction.SetAggregatorConfigsInstruction} SetAggregatorConfigsInstruction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SetAggregatorConfigsInstruction.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a SetAggregatorConfigsInstruction message.
             * @function verify
             * @memberof SwitchboardInstruction.SetAggregatorConfigsInstruction
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SetAggregatorConfigsInstruction.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.minConfirmations != null && message.hasOwnProperty("minConfirmations"))
                    if (!$util.isInteger(message.minConfirmations))
                        return "minConfirmations: integer expected";
                if (message.minUpdateDelaySeconds != null && message.hasOwnProperty("minUpdateDelaySeconds"))
                    if (!$util.isInteger(message.minUpdateDelaySeconds) && !(message.minUpdateDelaySeconds && $util.isInteger(message.minUpdateDelaySeconds.low) && $util.isInteger(message.minUpdateDelaySeconds.high)))
                        return "minUpdateDelaySeconds: integer|Long expected";
                if (message.fulfillmentManagerPubkey != null && message.hasOwnProperty("fulfillmentManagerPubkey"))
                    if (!(message.fulfillmentManagerPubkey && typeof message.fulfillmentManagerPubkey.length === "number" || $util.isString(message.fulfillmentManagerPubkey)))
                        return "fulfillmentManagerPubkey: buffer expected";
                if (message.lock != null && message.hasOwnProperty("lock"))
                    if (typeof message.lock !== "boolean")
                        return "lock: boolean expected";
                return null;
            };
    
            /**
             * Creates a SetAggregatorConfigsInstruction message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof SwitchboardInstruction.SetAggregatorConfigsInstruction
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {SwitchboardInstruction.SetAggregatorConfigsInstruction} SetAggregatorConfigsInstruction
             */
            SetAggregatorConfigsInstruction.fromObject = function fromObject(object) {
                if (object instanceof $root.SwitchboardInstruction.SetAggregatorConfigsInstruction)
                    return object;
                var message = new $root.SwitchboardInstruction.SetAggregatorConfigsInstruction();
                if (object.minConfirmations != null)
                    message.minConfirmations = object.minConfirmations | 0;
                if (object.minUpdateDelaySeconds != null)
                    if ($util.Long)
                        (message.minUpdateDelaySeconds = $util.Long.fromValue(object.minUpdateDelaySeconds)).unsigned = false;
                    else if (typeof object.minUpdateDelaySeconds === "string")
                        message.minUpdateDelaySeconds = parseInt(object.minUpdateDelaySeconds, 10);
                    else if (typeof object.minUpdateDelaySeconds === "number")
                        message.minUpdateDelaySeconds = object.minUpdateDelaySeconds;
                    else if (typeof object.minUpdateDelaySeconds === "object")
                        message.minUpdateDelaySeconds = new $util.LongBits(object.minUpdateDelaySeconds.low >>> 0, object.minUpdateDelaySeconds.high >>> 0).toNumber();
                if (object.fulfillmentManagerPubkey != null)
                    if (typeof object.fulfillmentManagerPubkey === "string")
                        $util.base64.decode(object.fulfillmentManagerPubkey, message.fulfillmentManagerPubkey = $util.newBuffer($util.base64.length(object.fulfillmentManagerPubkey)), 0);
                    else if (object.fulfillmentManagerPubkey.length)
                        message.fulfillmentManagerPubkey = object.fulfillmentManagerPubkey;
                if (object.lock != null)
                    message.lock = Boolean(object.lock);
                return message;
            };
    
            /**
             * Creates a plain object from a SetAggregatorConfigsInstruction message. Also converts values to other types if specified.
             * @function toObject
             * @memberof SwitchboardInstruction.SetAggregatorConfigsInstruction
             * @static
             * @param {SwitchboardInstruction.SetAggregatorConfigsInstruction} message SetAggregatorConfigsInstruction
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SetAggregatorConfigsInstruction.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.minConfirmations = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.minUpdateDelaySeconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.minUpdateDelaySeconds = options.longs === String ? "0" : 0;
                    if (options.bytes === String)
                        object.fulfillmentManagerPubkey = "";
                    else {
                        object.fulfillmentManagerPubkey = [];
                        if (options.bytes !== Array)
                            object.fulfillmentManagerPubkey = $util.newBuffer(object.fulfillmentManagerPubkey);
                    }
                    object.lock = false;
                }
                if (message.minConfirmations != null && message.hasOwnProperty("minConfirmations"))
                    object.minConfirmations = message.minConfirmations;
                if (message.minUpdateDelaySeconds != null && message.hasOwnProperty("minUpdateDelaySeconds"))
                    if (typeof message.minUpdateDelaySeconds === "number")
                        object.minUpdateDelaySeconds = options.longs === String ? String(message.minUpdateDelaySeconds) : message.minUpdateDelaySeconds;
                    else
                        object.minUpdateDelaySeconds = options.longs === String ? $util.Long.prototype.toString.call(message.minUpdateDelaySeconds) : options.longs === Number ? new $util.LongBits(message.minUpdateDelaySeconds.low >>> 0, message.minUpdateDelaySeconds.high >>> 0).toNumber() : message.minUpdateDelaySeconds;
                if (message.fulfillmentManagerPubkey != null && message.hasOwnProperty("fulfillmentManagerPubkey"))
                    object.fulfillmentManagerPubkey = options.bytes === String ? $util.base64.encode(message.fulfillmentManagerPubkey, 0, message.fulfillmentManagerPubkey.length) : options.bytes === Array ? Array.prototype.slice.call(message.fulfillmentManagerPubkey) : message.fulfillmentManagerPubkey;
                if (message.lock != null && message.hasOwnProperty("lock"))
                    object.lock = message.lock;
                return object;
            };
    
            /**
             * Converts this SetAggregatorConfigsInstruction to JSON.
             * @function toJSON
             * @memberof SwitchboardInstruction.SetAggregatorConfigsInstruction
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SetAggregatorConfigsInstruction.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return SetAggregatorConfigsInstruction;
        })();
    
        SwitchboardInstruction.SetFulfillmentManagerConfigsInstruction = (function() {
    
            /**
             * Properties of a SetFulfillmentManagerConfigsInstruction.
             * @memberof SwitchboardInstruction
             * @interface ISetFulfillmentManagerConfigsInstruction
             * @property {boolean|null} [heartbeatAuthRequired] SetFulfillmentManagerConfigsInstruction heartbeatAuthRequired
             * @property {boolean|null} [usageAuthRequired] SetFulfillmentManagerConfigsInstruction usageAuthRequired
             * @property {boolean|null} [lock] SetFulfillmentManagerConfigsInstruction lock
             */
    
            /**
             * Constructs a new SetFulfillmentManagerConfigsInstruction.
             * @memberof SwitchboardInstruction
             * @classdesc Represents a SetFulfillmentManagerConfigsInstruction.
             * @implements ISetFulfillmentManagerConfigsInstruction
             * @constructor
             * @param {SwitchboardInstruction.ISetFulfillmentManagerConfigsInstruction=} [properties] Properties to set
             */
            function SetFulfillmentManagerConfigsInstruction(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * SetFulfillmentManagerConfigsInstruction heartbeatAuthRequired.
             * @member {boolean} heartbeatAuthRequired
             * @memberof SwitchboardInstruction.SetFulfillmentManagerConfigsInstruction
             * @instance
             */
            SetFulfillmentManagerConfigsInstruction.prototype.heartbeatAuthRequired = false;
    
            /**
             * SetFulfillmentManagerConfigsInstruction usageAuthRequired.
             * @member {boolean} usageAuthRequired
             * @memberof SwitchboardInstruction.SetFulfillmentManagerConfigsInstruction
             * @instance
             */
            SetFulfillmentManagerConfigsInstruction.prototype.usageAuthRequired = false;
    
            /**
             * SetFulfillmentManagerConfigsInstruction lock.
             * @member {boolean} lock
             * @memberof SwitchboardInstruction.SetFulfillmentManagerConfigsInstruction
             * @instance
             */
            SetFulfillmentManagerConfigsInstruction.prototype.lock = false;
    
            /**
             * Creates a new SetFulfillmentManagerConfigsInstruction instance using the specified properties.
             * @function create
             * @memberof SwitchboardInstruction.SetFulfillmentManagerConfigsInstruction
             * @static
             * @param {SwitchboardInstruction.ISetFulfillmentManagerConfigsInstruction=} [properties] Properties to set
             * @returns {SwitchboardInstruction.SetFulfillmentManagerConfigsInstruction} SetFulfillmentManagerConfigsInstruction instance
             */
            SetFulfillmentManagerConfigsInstruction.create = function create(properties) {
                return new SetFulfillmentManagerConfigsInstruction(properties);
            };
    
            /**
             * Encodes the specified SetFulfillmentManagerConfigsInstruction message. Does not implicitly {@link SwitchboardInstruction.SetFulfillmentManagerConfigsInstruction.verify|verify} messages.
             * @function encode
             * @memberof SwitchboardInstruction.SetFulfillmentManagerConfigsInstruction
             * @static
             * @param {SwitchboardInstruction.ISetFulfillmentManagerConfigsInstruction} message SetFulfillmentManagerConfigsInstruction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SetFulfillmentManagerConfigsInstruction.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.heartbeatAuthRequired != null && Object.hasOwnProperty.call(message, "heartbeatAuthRequired"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.heartbeatAuthRequired);
                if (message.usageAuthRequired != null && Object.hasOwnProperty.call(message, "usageAuthRequired"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.usageAuthRequired);
                if (message.lock != null && Object.hasOwnProperty.call(message, "lock"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.lock);
                return writer;
            };
    
            /**
             * Encodes the specified SetFulfillmentManagerConfigsInstruction message, length delimited. Does not implicitly {@link SwitchboardInstruction.SetFulfillmentManagerConfigsInstruction.verify|verify} messages.
             * @function encodeDelimited
             * @memberof SwitchboardInstruction.SetFulfillmentManagerConfigsInstruction
             * @static
             * @param {SwitchboardInstruction.ISetFulfillmentManagerConfigsInstruction} message SetFulfillmentManagerConfigsInstruction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SetFulfillmentManagerConfigsInstruction.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a SetFulfillmentManagerConfigsInstruction message from the specified reader or buffer.
             * @function decode
             * @memberof SwitchboardInstruction.SetFulfillmentManagerConfigsInstruction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {SwitchboardInstruction.SetFulfillmentManagerConfigsInstruction} SetFulfillmentManagerConfigsInstruction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SetFulfillmentManagerConfigsInstruction.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SwitchboardInstruction.SetFulfillmentManagerConfigsInstruction();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.heartbeatAuthRequired = reader.bool();
                        break;
                    case 2:
                        message.usageAuthRequired = reader.bool();
                        break;
                    case 3:
                        message.lock = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a SetFulfillmentManagerConfigsInstruction message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof SwitchboardInstruction.SetFulfillmentManagerConfigsInstruction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {SwitchboardInstruction.SetFulfillmentManagerConfigsInstruction} SetFulfillmentManagerConfigsInstruction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SetFulfillmentManagerConfigsInstruction.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a SetFulfillmentManagerConfigsInstruction message.
             * @function verify
             * @memberof SwitchboardInstruction.SetFulfillmentManagerConfigsInstruction
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SetFulfillmentManagerConfigsInstruction.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.heartbeatAuthRequired != null && message.hasOwnProperty("heartbeatAuthRequired"))
                    if (typeof message.heartbeatAuthRequired !== "boolean")
                        return "heartbeatAuthRequired: boolean expected";
                if (message.usageAuthRequired != null && message.hasOwnProperty("usageAuthRequired"))
                    if (typeof message.usageAuthRequired !== "boolean")
                        return "usageAuthRequired: boolean expected";
                if (message.lock != null && message.hasOwnProperty("lock"))
                    if (typeof message.lock !== "boolean")
                        return "lock: boolean expected";
                return null;
            };
    
            /**
             * Creates a SetFulfillmentManagerConfigsInstruction message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof SwitchboardInstruction.SetFulfillmentManagerConfigsInstruction
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {SwitchboardInstruction.SetFulfillmentManagerConfigsInstruction} SetFulfillmentManagerConfigsInstruction
             */
            SetFulfillmentManagerConfigsInstruction.fromObject = function fromObject(object) {
                if (object instanceof $root.SwitchboardInstruction.SetFulfillmentManagerConfigsInstruction)
                    return object;
                var message = new $root.SwitchboardInstruction.SetFulfillmentManagerConfigsInstruction();
                if (object.heartbeatAuthRequired != null)
                    message.heartbeatAuthRequired = Boolean(object.heartbeatAuthRequired);
                if (object.usageAuthRequired != null)
                    message.usageAuthRequired = Boolean(object.usageAuthRequired);
                if (object.lock != null)
                    message.lock = Boolean(object.lock);
                return message;
            };
    
            /**
             * Creates a plain object from a SetFulfillmentManagerConfigsInstruction message. Also converts values to other types if specified.
             * @function toObject
             * @memberof SwitchboardInstruction.SetFulfillmentManagerConfigsInstruction
             * @static
             * @param {SwitchboardInstruction.SetFulfillmentManagerConfigsInstruction} message SetFulfillmentManagerConfigsInstruction
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SetFulfillmentManagerConfigsInstruction.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.heartbeatAuthRequired = false;
                    object.usageAuthRequired = false;
                    object.lock = false;
                }
                if (message.heartbeatAuthRequired != null && message.hasOwnProperty("heartbeatAuthRequired"))
                    object.heartbeatAuthRequired = message.heartbeatAuthRequired;
                if (message.usageAuthRequired != null && message.hasOwnProperty("usageAuthRequired"))
                    object.usageAuthRequired = message.usageAuthRequired;
                if (message.lock != null && message.hasOwnProperty("lock"))
                    object.lock = message.lock;
                return object;
            };
    
            /**
             * Converts this SetFulfillmentManagerConfigsInstruction to JSON.
             * @function toJSON
             * @memberof SwitchboardInstruction.SetFulfillmentManagerConfigsInstruction
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SetFulfillmentManagerConfigsInstruction.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return SetFulfillmentManagerConfigsInstruction;
        })();
    
        SwitchboardInstruction.SaveResultInstruction = (function() {
    
            /**
             * Properties of a SaveResultInstruction.
             * @memberof SwitchboardInstruction
             * @interface ISaveResultInstruction
             * @property {number|null} [nodeIdx] SaveResultInstruction nodeIdx
             * @property {number|null} [result] SaveResultInstruction result
             * @property {boolean|null} [error] SaveResultInstruction error
             * @property {number|Long|null} [roundSlot] SaveResultInstruction roundSlot
             */
    
            /**
             * Constructs a new SaveResultInstruction.
             * @memberof SwitchboardInstruction
             * @classdesc Represents a SaveResultInstruction.
             * @implements ISaveResultInstruction
             * @constructor
             * @param {SwitchboardInstruction.ISaveResultInstruction=} [properties] Properties to set
             */
            function SaveResultInstruction(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * SaveResultInstruction nodeIdx.
             * @member {number} nodeIdx
             * @memberof SwitchboardInstruction.SaveResultInstruction
             * @instance
             */
            SaveResultInstruction.prototype.nodeIdx = 0;
    
            /**
             * SaveResultInstruction result.
             * @member {number} result
             * @memberof SwitchboardInstruction.SaveResultInstruction
             * @instance
             */
            SaveResultInstruction.prototype.result = 0;
    
            /**
             * SaveResultInstruction error.
             * @member {boolean} error
             * @memberof SwitchboardInstruction.SaveResultInstruction
             * @instance
             */
            SaveResultInstruction.prototype.error = false;
    
            /**
             * SaveResultInstruction roundSlot.
             * @member {number|Long} roundSlot
             * @memberof SwitchboardInstruction.SaveResultInstruction
             * @instance
             */
            SaveResultInstruction.prototype.roundSlot = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Creates a new SaveResultInstruction instance using the specified properties.
             * @function create
             * @memberof SwitchboardInstruction.SaveResultInstruction
             * @static
             * @param {SwitchboardInstruction.ISaveResultInstruction=} [properties] Properties to set
             * @returns {SwitchboardInstruction.SaveResultInstruction} SaveResultInstruction instance
             */
            SaveResultInstruction.create = function create(properties) {
                return new SaveResultInstruction(properties);
            };
    
            /**
             * Encodes the specified SaveResultInstruction message. Does not implicitly {@link SwitchboardInstruction.SaveResultInstruction.verify|verify} messages.
             * @function encode
             * @memberof SwitchboardInstruction.SaveResultInstruction
             * @static
             * @param {SwitchboardInstruction.ISaveResultInstruction} message SaveResultInstruction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SaveResultInstruction.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.nodeIdx != null && Object.hasOwnProperty.call(message, "nodeIdx"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.nodeIdx);
                if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                    writer.uint32(/* id 4, wireType 1 =*/33).double(message.result);
                if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.error);
                if (message.roundSlot != null && Object.hasOwnProperty.call(message, "roundSlot"))
                    writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.roundSlot);
                return writer;
            };
    
            /**
             * Encodes the specified SaveResultInstruction message, length delimited. Does not implicitly {@link SwitchboardInstruction.SaveResultInstruction.verify|verify} messages.
             * @function encodeDelimited
             * @memberof SwitchboardInstruction.SaveResultInstruction
             * @static
             * @param {SwitchboardInstruction.ISaveResultInstruction} message SaveResultInstruction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SaveResultInstruction.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a SaveResultInstruction message from the specified reader or buffer.
             * @function decode
             * @memberof SwitchboardInstruction.SaveResultInstruction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {SwitchboardInstruction.SaveResultInstruction} SaveResultInstruction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SaveResultInstruction.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SwitchboardInstruction.SaveResultInstruction();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 2:
                        message.nodeIdx = reader.uint32();
                        break;
                    case 4:
                        message.result = reader.double();
                        break;
                    case 5:
                        message.error = reader.bool();
                        break;
                    case 6:
                        message.roundSlot = reader.uint64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a SaveResultInstruction message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof SwitchboardInstruction.SaveResultInstruction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {SwitchboardInstruction.SaveResultInstruction} SaveResultInstruction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SaveResultInstruction.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a SaveResultInstruction message.
             * @function verify
             * @memberof SwitchboardInstruction.SaveResultInstruction
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SaveResultInstruction.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.nodeIdx != null && message.hasOwnProperty("nodeIdx"))
                    if (!$util.isInteger(message.nodeIdx))
                        return "nodeIdx: integer expected";
                if (message.result != null && message.hasOwnProperty("result"))
                    if (typeof message.result !== "number")
                        return "result: number expected";
                if (message.error != null && message.hasOwnProperty("error"))
                    if (typeof message.error !== "boolean")
                        return "error: boolean expected";
                if (message.roundSlot != null && message.hasOwnProperty("roundSlot"))
                    if (!$util.isInteger(message.roundSlot) && !(message.roundSlot && $util.isInteger(message.roundSlot.low) && $util.isInteger(message.roundSlot.high)))
                        return "roundSlot: integer|Long expected";
                return null;
            };
    
            /**
             * Creates a SaveResultInstruction message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof SwitchboardInstruction.SaveResultInstruction
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {SwitchboardInstruction.SaveResultInstruction} SaveResultInstruction
             */
            SaveResultInstruction.fromObject = function fromObject(object) {
                if (object instanceof $root.SwitchboardInstruction.SaveResultInstruction)
                    return object;
                var message = new $root.SwitchboardInstruction.SaveResultInstruction();
                if (object.nodeIdx != null)
                    message.nodeIdx = object.nodeIdx >>> 0;
                if (object.result != null)
                    message.result = Number(object.result);
                if (object.error != null)
                    message.error = Boolean(object.error);
                if (object.roundSlot != null)
                    if ($util.Long)
                        (message.roundSlot = $util.Long.fromValue(object.roundSlot)).unsigned = true;
                    else if (typeof object.roundSlot === "string")
                        message.roundSlot = parseInt(object.roundSlot, 10);
                    else if (typeof object.roundSlot === "number")
                        message.roundSlot = object.roundSlot;
                    else if (typeof object.roundSlot === "object")
                        message.roundSlot = new $util.LongBits(object.roundSlot.low >>> 0, object.roundSlot.high >>> 0).toNumber(true);
                return message;
            };
    
            /**
             * Creates a plain object from a SaveResultInstruction message. Also converts values to other types if specified.
             * @function toObject
             * @memberof SwitchboardInstruction.SaveResultInstruction
             * @static
             * @param {SwitchboardInstruction.SaveResultInstruction} message SaveResultInstruction
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SaveResultInstruction.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.nodeIdx = 0;
                    object.result = 0;
                    object.error = false;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.roundSlot = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.roundSlot = options.longs === String ? "0" : 0;
                }
                if (message.nodeIdx != null && message.hasOwnProperty("nodeIdx"))
                    object.nodeIdx = message.nodeIdx;
                if (message.result != null && message.hasOwnProperty("result"))
                    object.result = options.json && !isFinite(message.result) ? String(message.result) : message.result;
                if (message.error != null && message.hasOwnProperty("error"))
                    object.error = message.error;
                if (message.roundSlot != null && message.hasOwnProperty("roundSlot"))
                    if (typeof message.roundSlot === "number")
                        object.roundSlot = options.longs === String ? String(message.roundSlot) : message.roundSlot;
                    else
                        object.roundSlot = options.longs === String ? $util.Long.prototype.toString.call(message.roundSlot) : options.longs === Number ? new $util.LongBits(message.roundSlot.low >>> 0, message.roundSlot.high >>> 0).toNumber(true) : message.roundSlot;
                return object;
            };
    
            /**
             * Converts this SaveResultInstruction to JSON.
             * @function toJSON
             * @memberof SwitchboardInstruction.SaveResultInstruction
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SaveResultInstruction.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return SaveResultInstruction;
        })();
    
        SwitchboardInstruction.HeartbeatInstruction = (function() {
    
            /**
             * Properties of a HeartbeatInstruction.
             * @memberof SwitchboardInstruction
             * @interface IHeartbeatInstruction
             * @property {number|Long|null} [leaseCount] HeartbeatInstruction leaseCount
             * @property {number|Long|null} [slotExpiration] HeartbeatInstruction slotExpiration
             */
    
            /**
             * Constructs a new HeartbeatInstruction.
             * @memberof SwitchboardInstruction
             * @classdesc Represents a HeartbeatInstruction.
             * @implements IHeartbeatInstruction
             * @constructor
             * @param {SwitchboardInstruction.IHeartbeatInstruction=} [properties] Properties to set
             */
            function HeartbeatInstruction(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * HeartbeatInstruction leaseCount.
             * @member {number|Long} leaseCount
             * @memberof SwitchboardInstruction.HeartbeatInstruction
             * @instance
             */
            HeartbeatInstruction.prototype.leaseCount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * HeartbeatInstruction slotExpiration.
             * @member {number|Long} slotExpiration
             * @memberof SwitchboardInstruction.HeartbeatInstruction
             * @instance
             */
            HeartbeatInstruction.prototype.slotExpiration = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * Creates a new HeartbeatInstruction instance using the specified properties.
             * @function create
             * @memberof SwitchboardInstruction.HeartbeatInstruction
             * @static
             * @param {SwitchboardInstruction.IHeartbeatInstruction=} [properties] Properties to set
             * @returns {SwitchboardInstruction.HeartbeatInstruction} HeartbeatInstruction instance
             */
            HeartbeatInstruction.create = function create(properties) {
                return new HeartbeatInstruction(properties);
            };
    
            /**
             * Encodes the specified HeartbeatInstruction message. Does not implicitly {@link SwitchboardInstruction.HeartbeatInstruction.verify|verify} messages.
             * @function encode
             * @memberof SwitchboardInstruction.HeartbeatInstruction
             * @static
             * @param {SwitchboardInstruction.IHeartbeatInstruction} message HeartbeatInstruction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HeartbeatInstruction.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.leaseCount != null && Object.hasOwnProperty.call(message, "leaseCount"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.leaseCount);
                if (message.slotExpiration != null && Object.hasOwnProperty.call(message, "slotExpiration"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.slotExpiration);
                return writer;
            };
    
            /**
             * Encodes the specified HeartbeatInstruction message, length delimited. Does not implicitly {@link SwitchboardInstruction.HeartbeatInstruction.verify|verify} messages.
             * @function encodeDelimited
             * @memberof SwitchboardInstruction.HeartbeatInstruction
             * @static
             * @param {SwitchboardInstruction.IHeartbeatInstruction} message HeartbeatInstruction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HeartbeatInstruction.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a HeartbeatInstruction message from the specified reader or buffer.
             * @function decode
             * @memberof SwitchboardInstruction.HeartbeatInstruction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {SwitchboardInstruction.HeartbeatInstruction} HeartbeatInstruction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HeartbeatInstruction.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SwitchboardInstruction.HeartbeatInstruction();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.leaseCount = reader.int64();
                        break;
                    case 2:
                        message.slotExpiration = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a HeartbeatInstruction message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof SwitchboardInstruction.HeartbeatInstruction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {SwitchboardInstruction.HeartbeatInstruction} HeartbeatInstruction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HeartbeatInstruction.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a HeartbeatInstruction message.
             * @function verify
             * @memberof SwitchboardInstruction.HeartbeatInstruction
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            HeartbeatInstruction.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.leaseCount != null && message.hasOwnProperty("leaseCount"))
                    if (!$util.isInteger(message.leaseCount) && !(message.leaseCount && $util.isInteger(message.leaseCount.low) && $util.isInteger(message.leaseCount.high)))
                        return "leaseCount: integer|Long expected";
                if (message.slotExpiration != null && message.hasOwnProperty("slotExpiration"))
                    if (!$util.isInteger(message.slotExpiration) && !(message.slotExpiration && $util.isInteger(message.slotExpiration.low) && $util.isInteger(message.slotExpiration.high)))
                        return "slotExpiration: integer|Long expected";
                return null;
            };
    
            /**
             * Creates a HeartbeatInstruction message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof SwitchboardInstruction.HeartbeatInstruction
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {SwitchboardInstruction.HeartbeatInstruction} HeartbeatInstruction
             */
            HeartbeatInstruction.fromObject = function fromObject(object) {
                if (object instanceof $root.SwitchboardInstruction.HeartbeatInstruction)
                    return object;
                var message = new $root.SwitchboardInstruction.HeartbeatInstruction();
                if (object.leaseCount != null)
                    if ($util.Long)
                        (message.leaseCount = $util.Long.fromValue(object.leaseCount)).unsigned = false;
                    else if (typeof object.leaseCount === "string")
                        message.leaseCount = parseInt(object.leaseCount, 10);
                    else if (typeof object.leaseCount === "number")
                        message.leaseCount = object.leaseCount;
                    else if (typeof object.leaseCount === "object")
                        message.leaseCount = new $util.LongBits(object.leaseCount.low >>> 0, object.leaseCount.high >>> 0).toNumber();
                if (object.slotExpiration != null)
                    if ($util.Long)
                        (message.slotExpiration = $util.Long.fromValue(object.slotExpiration)).unsigned = false;
                    else if (typeof object.slotExpiration === "string")
                        message.slotExpiration = parseInt(object.slotExpiration, 10);
                    else if (typeof object.slotExpiration === "number")
                        message.slotExpiration = object.slotExpiration;
                    else if (typeof object.slotExpiration === "object")
                        message.slotExpiration = new $util.LongBits(object.slotExpiration.low >>> 0, object.slotExpiration.high >>> 0).toNumber();
                return message;
            };
    
            /**
             * Creates a plain object from a HeartbeatInstruction message. Also converts values to other types if specified.
             * @function toObject
             * @memberof SwitchboardInstruction.HeartbeatInstruction
             * @static
             * @param {SwitchboardInstruction.HeartbeatInstruction} message HeartbeatInstruction
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            HeartbeatInstruction.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.leaseCount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.leaseCount = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.slotExpiration = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.slotExpiration = options.longs === String ? "0" : 0;
                }
                if (message.leaseCount != null && message.hasOwnProperty("leaseCount"))
                    if (typeof message.leaseCount === "number")
                        object.leaseCount = options.longs === String ? String(message.leaseCount) : message.leaseCount;
                    else
                        object.leaseCount = options.longs === String ? $util.Long.prototype.toString.call(message.leaseCount) : options.longs === Number ? new $util.LongBits(message.leaseCount.low >>> 0, message.leaseCount.high >>> 0).toNumber() : message.leaseCount;
                if (message.slotExpiration != null && message.hasOwnProperty("slotExpiration"))
                    if (typeof message.slotExpiration === "number")
                        object.slotExpiration = options.longs === String ? String(message.slotExpiration) : message.slotExpiration;
                    else
                        object.slotExpiration = options.longs === String ? $util.Long.prototype.toString.call(message.slotExpiration) : options.longs === Number ? new $util.LongBits(message.slotExpiration.low >>> 0, message.slotExpiration.high >>> 0).toNumber() : message.slotExpiration;
                return object;
            };
    
            /**
             * Converts this HeartbeatInstruction to JSON.
             * @function toJSON
             * @memberof SwitchboardInstruction.HeartbeatInstruction
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            HeartbeatInstruction.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return HeartbeatInstruction;
        })();
    
        SwitchboardInstruction.RegisterAuthInstruction = (function() {
    
            /**
             * Properties of a RegisterAuthInstruction.
             * @memberof SwitchboardInstruction
             * @interface IRegisterAuthInstruction
             * @property {boolean|null} [authorizeHeartbeat] RegisterAuthInstruction authorizeHeartbeat
             * @property {boolean|null} [authorizeUsage] RegisterAuthInstruction authorizeUsage
             */
    
            /**
             * Constructs a new RegisterAuthInstruction.
             * @memberof SwitchboardInstruction
             * @classdesc Represents a RegisterAuthInstruction.
             * @implements IRegisterAuthInstruction
             * @constructor
             * @param {SwitchboardInstruction.IRegisterAuthInstruction=} [properties] Properties to set
             */
            function RegisterAuthInstruction(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * RegisterAuthInstruction authorizeHeartbeat.
             * @member {boolean} authorizeHeartbeat
             * @memberof SwitchboardInstruction.RegisterAuthInstruction
             * @instance
             */
            RegisterAuthInstruction.prototype.authorizeHeartbeat = false;
    
            /**
             * RegisterAuthInstruction authorizeUsage.
             * @member {boolean} authorizeUsage
             * @memberof SwitchboardInstruction.RegisterAuthInstruction
             * @instance
             */
            RegisterAuthInstruction.prototype.authorizeUsage = false;
    
            /**
             * Creates a new RegisterAuthInstruction instance using the specified properties.
             * @function create
             * @memberof SwitchboardInstruction.RegisterAuthInstruction
             * @static
             * @param {SwitchboardInstruction.IRegisterAuthInstruction=} [properties] Properties to set
             * @returns {SwitchboardInstruction.RegisterAuthInstruction} RegisterAuthInstruction instance
             */
            RegisterAuthInstruction.create = function create(properties) {
                return new RegisterAuthInstruction(properties);
            };
    
            /**
             * Encodes the specified RegisterAuthInstruction message. Does not implicitly {@link SwitchboardInstruction.RegisterAuthInstruction.verify|verify} messages.
             * @function encode
             * @memberof SwitchboardInstruction.RegisterAuthInstruction
             * @static
             * @param {SwitchboardInstruction.IRegisterAuthInstruction} message RegisterAuthInstruction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RegisterAuthInstruction.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.authorizeHeartbeat != null && Object.hasOwnProperty.call(message, "authorizeHeartbeat"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.authorizeHeartbeat);
                if (message.authorizeUsage != null && Object.hasOwnProperty.call(message, "authorizeUsage"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.authorizeUsage);
                return writer;
            };
    
            /**
             * Encodes the specified RegisterAuthInstruction message, length delimited. Does not implicitly {@link SwitchboardInstruction.RegisterAuthInstruction.verify|verify} messages.
             * @function encodeDelimited
             * @memberof SwitchboardInstruction.RegisterAuthInstruction
             * @static
             * @param {SwitchboardInstruction.IRegisterAuthInstruction} message RegisterAuthInstruction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RegisterAuthInstruction.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a RegisterAuthInstruction message from the specified reader or buffer.
             * @function decode
             * @memberof SwitchboardInstruction.RegisterAuthInstruction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {SwitchboardInstruction.RegisterAuthInstruction} RegisterAuthInstruction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RegisterAuthInstruction.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SwitchboardInstruction.RegisterAuthInstruction();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.authorizeHeartbeat = reader.bool();
                        break;
                    case 2:
                        message.authorizeUsage = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a RegisterAuthInstruction message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof SwitchboardInstruction.RegisterAuthInstruction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {SwitchboardInstruction.RegisterAuthInstruction} RegisterAuthInstruction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RegisterAuthInstruction.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a RegisterAuthInstruction message.
             * @function verify
             * @memberof SwitchboardInstruction.RegisterAuthInstruction
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RegisterAuthInstruction.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.authorizeHeartbeat != null && message.hasOwnProperty("authorizeHeartbeat"))
                    if (typeof message.authorizeHeartbeat !== "boolean")
                        return "authorizeHeartbeat: boolean expected";
                if (message.authorizeUsage != null && message.hasOwnProperty("authorizeUsage"))
                    if (typeof message.authorizeUsage !== "boolean")
                        return "authorizeUsage: boolean expected";
                return null;
            };
    
            /**
             * Creates a RegisterAuthInstruction message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof SwitchboardInstruction.RegisterAuthInstruction
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {SwitchboardInstruction.RegisterAuthInstruction} RegisterAuthInstruction
             */
            RegisterAuthInstruction.fromObject = function fromObject(object) {
                if (object instanceof $root.SwitchboardInstruction.RegisterAuthInstruction)
                    return object;
                var message = new $root.SwitchboardInstruction.RegisterAuthInstruction();
                if (object.authorizeHeartbeat != null)
                    message.authorizeHeartbeat = Boolean(object.authorizeHeartbeat);
                if (object.authorizeUsage != null)
                    message.authorizeUsage = Boolean(object.authorizeUsage);
                return message;
            };
    
            /**
             * Creates a plain object from a RegisterAuthInstruction message. Also converts values to other types if specified.
             * @function toObject
             * @memberof SwitchboardInstruction.RegisterAuthInstruction
             * @static
             * @param {SwitchboardInstruction.RegisterAuthInstruction} message RegisterAuthInstruction
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RegisterAuthInstruction.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.authorizeHeartbeat = false;
                    object.authorizeUsage = false;
                }
                if (message.authorizeHeartbeat != null && message.hasOwnProperty("authorizeHeartbeat"))
                    object.authorizeHeartbeat = message.authorizeHeartbeat;
                if (message.authorizeUsage != null && message.hasOwnProperty("authorizeUsage"))
                    object.authorizeUsage = message.authorizeUsage;
                return object;
            };
    
            /**
             * Converts this RegisterAuthInstruction to JSON.
             * @function toJSON
             * @memberof SwitchboardInstruction.RegisterAuthInstruction
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RegisterAuthInstruction.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return RegisterAuthInstruction;
        })();
    
        SwitchboardInstruction.ReachFulfillerAgreementInstruction = (function() {
    
            /**
             * Properties of a ReachFulfillerAgreementInstruction.
             * @memberof SwitchboardInstruction
             * @interface IReachFulfillerAgreementInstruction
             */
    
            /**
             * Constructs a new ReachFulfillerAgreementInstruction.
             * @memberof SwitchboardInstruction
             * @classdesc Represents a ReachFulfillerAgreementInstruction.
             * @implements IReachFulfillerAgreementInstruction
             * @constructor
             * @param {SwitchboardInstruction.IReachFulfillerAgreementInstruction=} [properties] Properties to set
             */
            function ReachFulfillerAgreementInstruction(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Creates a new ReachFulfillerAgreementInstruction instance using the specified properties.
             * @function create
             * @memberof SwitchboardInstruction.ReachFulfillerAgreementInstruction
             * @static
             * @param {SwitchboardInstruction.IReachFulfillerAgreementInstruction=} [properties] Properties to set
             * @returns {SwitchboardInstruction.ReachFulfillerAgreementInstruction} ReachFulfillerAgreementInstruction instance
             */
            ReachFulfillerAgreementInstruction.create = function create(properties) {
                return new ReachFulfillerAgreementInstruction(properties);
            };
    
            /**
             * Encodes the specified ReachFulfillerAgreementInstruction message. Does not implicitly {@link SwitchboardInstruction.ReachFulfillerAgreementInstruction.verify|verify} messages.
             * @function encode
             * @memberof SwitchboardInstruction.ReachFulfillerAgreementInstruction
             * @static
             * @param {SwitchboardInstruction.IReachFulfillerAgreementInstruction} message ReachFulfillerAgreementInstruction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReachFulfillerAgreementInstruction.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
    
            /**
             * Encodes the specified ReachFulfillerAgreementInstruction message, length delimited. Does not implicitly {@link SwitchboardInstruction.ReachFulfillerAgreementInstruction.verify|verify} messages.
             * @function encodeDelimited
             * @memberof SwitchboardInstruction.ReachFulfillerAgreementInstruction
             * @static
             * @param {SwitchboardInstruction.IReachFulfillerAgreementInstruction} message ReachFulfillerAgreementInstruction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReachFulfillerAgreementInstruction.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ReachFulfillerAgreementInstruction message from the specified reader or buffer.
             * @function decode
             * @memberof SwitchboardInstruction.ReachFulfillerAgreementInstruction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {SwitchboardInstruction.ReachFulfillerAgreementInstruction} ReachFulfillerAgreementInstruction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReachFulfillerAgreementInstruction.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SwitchboardInstruction.ReachFulfillerAgreementInstruction();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a ReachFulfillerAgreementInstruction message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof SwitchboardInstruction.ReachFulfillerAgreementInstruction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {SwitchboardInstruction.ReachFulfillerAgreementInstruction} ReachFulfillerAgreementInstruction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReachFulfillerAgreementInstruction.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a ReachFulfillerAgreementInstruction message.
             * @function verify
             * @memberof SwitchboardInstruction.ReachFulfillerAgreementInstruction
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ReachFulfillerAgreementInstruction.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };
    
            /**
             * Creates a ReachFulfillerAgreementInstruction message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof SwitchboardInstruction.ReachFulfillerAgreementInstruction
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {SwitchboardInstruction.ReachFulfillerAgreementInstruction} ReachFulfillerAgreementInstruction
             */
            ReachFulfillerAgreementInstruction.fromObject = function fromObject(object) {
                if (object instanceof $root.SwitchboardInstruction.ReachFulfillerAgreementInstruction)
                    return object;
                return new $root.SwitchboardInstruction.ReachFulfillerAgreementInstruction();
            };
    
            /**
             * Creates a plain object from a ReachFulfillerAgreementInstruction message. Also converts values to other types if specified.
             * @function toObject
             * @memberof SwitchboardInstruction.ReachFulfillerAgreementInstruction
             * @static
             * @param {SwitchboardInstruction.ReachFulfillerAgreementInstruction} message ReachFulfillerAgreementInstruction
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ReachFulfillerAgreementInstruction.toObject = function toObject() {
                return {};
            };
    
            /**
             * Converts this ReachFulfillerAgreementInstruction to JSON.
             * @function toJSON
             * @memberof SwitchboardInstruction.ReachFulfillerAgreementInstruction
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ReachFulfillerAgreementInstruction.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return ReachFulfillerAgreementInstruction;
        })();
    
        SwitchboardInstruction.RemoveFulfillerInstruction = (function() {
    
            /**
             * Properties of a RemoveFulfillerInstruction.
             * @memberof SwitchboardInstruction
             * @interface IRemoveFulfillerInstruction
             */
    
            /**
             * Constructs a new RemoveFulfillerInstruction.
             * @memberof SwitchboardInstruction
             * @classdesc Represents a RemoveFulfillerInstruction.
             * @implements IRemoveFulfillerInstruction
             * @constructor
             * @param {SwitchboardInstruction.IRemoveFulfillerInstruction=} [properties] Properties to set
             */
            function RemoveFulfillerInstruction(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Creates a new RemoveFulfillerInstruction instance using the specified properties.
             * @function create
             * @memberof SwitchboardInstruction.RemoveFulfillerInstruction
             * @static
             * @param {SwitchboardInstruction.IRemoveFulfillerInstruction=} [properties] Properties to set
             * @returns {SwitchboardInstruction.RemoveFulfillerInstruction} RemoveFulfillerInstruction instance
             */
            RemoveFulfillerInstruction.create = function create(properties) {
                return new RemoveFulfillerInstruction(properties);
            };
    
            /**
             * Encodes the specified RemoveFulfillerInstruction message. Does not implicitly {@link SwitchboardInstruction.RemoveFulfillerInstruction.verify|verify} messages.
             * @function encode
             * @memberof SwitchboardInstruction.RemoveFulfillerInstruction
             * @static
             * @param {SwitchboardInstruction.IRemoveFulfillerInstruction} message RemoveFulfillerInstruction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RemoveFulfillerInstruction.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
    
            /**
             * Encodes the specified RemoveFulfillerInstruction message, length delimited. Does not implicitly {@link SwitchboardInstruction.RemoveFulfillerInstruction.verify|verify} messages.
             * @function encodeDelimited
             * @memberof SwitchboardInstruction.RemoveFulfillerInstruction
             * @static
             * @param {SwitchboardInstruction.IRemoveFulfillerInstruction} message RemoveFulfillerInstruction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RemoveFulfillerInstruction.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a RemoveFulfillerInstruction message from the specified reader or buffer.
             * @function decode
             * @memberof SwitchboardInstruction.RemoveFulfillerInstruction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {SwitchboardInstruction.RemoveFulfillerInstruction} RemoveFulfillerInstruction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RemoveFulfillerInstruction.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SwitchboardInstruction.RemoveFulfillerInstruction();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a RemoveFulfillerInstruction message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof SwitchboardInstruction.RemoveFulfillerInstruction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {SwitchboardInstruction.RemoveFulfillerInstruction} RemoveFulfillerInstruction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RemoveFulfillerInstruction.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a RemoveFulfillerInstruction message.
             * @function verify
             * @memberof SwitchboardInstruction.RemoveFulfillerInstruction
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RemoveFulfillerInstruction.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };
    
            /**
             * Creates a RemoveFulfillerInstruction message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof SwitchboardInstruction.RemoveFulfillerInstruction
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {SwitchboardInstruction.RemoveFulfillerInstruction} RemoveFulfillerInstruction
             */
            RemoveFulfillerInstruction.fromObject = function fromObject(object) {
                if (object instanceof $root.SwitchboardInstruction.RemoveFulfillerInstruction)
                    return object;
                return new $root.SwitchboardInstruction.RemoveFulfillerInstruction();
            };
    
            /**
             * Creates a plain object from a RemoveFulfillerInstruction message. Also converts values to other types if specified.
             * @function toObject
             * @memberof SwitchboardInstruction.RemoveFulfillerInstruction
             * @static
             * @param {SwitchboardInstruction.RemoveFulfillerInstruction} message RemoveFulfillerInstruction
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RemoveFulfillerInstruction.toObject = function toObject() {
                return {};
            };
    
            /**
             * Converts this RemoveFulfillerInstruction to JSON.
             * @function toJSON
             * @memberof SwitchboardInstruction.RemoveFulfillerInstruction
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RemoveFulfillerInstruction.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return RemoveFulfillerInstruction;
        })();
    
        return SwitchboardInstruction;
    })();
    
    /**
     * SwitchboardAccountType enum.
     * @exports SwitchboardAccountType
     * @enum {number}
     * @property {number} TYPE_UNINITIALIZED=0 TYPE_UNINITIALIZED value
     * @property {number} TYPE_AGGREGATOR=1 TYPE_AGGREGATOR value
     * @property {number} TYPE_FULFILLMENT_MANAGER=2 TYPE_FULFILLMENT_MANAGER value
     * @property {number} TYPE_JOB_DEFINITION=3 TYPE_JOB_DEFINITION value
     * @property {number} TYPE_FULFILLMENT_MANAGER_AUTH=4 TYPE_FULFILLMENT_MANAGER_AUTH value
     */
    $root.SwitchboardAccountType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "TYPE_UNINITIALIZED"] = 0;
        values[valuesById[1] = "TYPE_AGGREGATOR"] = 1;
        values[valuesById[2] = "TYPE_FULFILLMENT_MANAGER"] = 2;
        values[valuesById[3] = "TYPE_JOB_DEFINITION"] = 3;
        values[valuesById[4] = "TYPE_FULFILLMENT_MANAGER_AUTH"] = 4;
        return values;
    })();

    return $root;
});
