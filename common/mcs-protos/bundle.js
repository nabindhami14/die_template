/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.cbs = (function() {

    /**
     * Namespace cbs.
     * @exports cbs
     * @namespace
     */
    var cbs = {};

    cbs.common = (function() {

        /**
         * Namespace common.
         * @memberof cbs
         * @namespace
         */
        var common = {};

        common.ListRequest = (function() {

            /**
             * Properties of a ListRequest.
             * @memberof cbs.common
             * @interface IListRequest
             * @property {number|null} [currentPage] ListRequest currentPage
             * @property {number|null} [perPage] ListRequest perPage
             * @property {Object.<string,string>|null} [filter] ListRequest filter
             * @property {Object.<string,string>|null} [order] ListRequest order
             * @property {string|null} [exportType] ListRequest exportType
             */

            /**
             * Constructs a new ListRequest.
             * @memberof cbs.common
             * @classdesc Represents a ListRequest.
             * @implements IListRequest
             * @constructor
             * @param {cbs.common.IListRequest=} [properties] Properties to set
             */
            function ListRequest(properties) {
                this.filter = {};
                this.order = {};
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ListRequest currentPage.
             * @member {number} currentPage
             * @memberof cbs.common.ListRequest
             * @instance
             */
            ListRequest.prototype.currentPage = 0;

            /**
             * ListRequest perPage.
             * @member {number} perPage
             * @memberof cbs.common.ListRequest
             * @instance
             */
            ListRequest.prototype.perPage = 0;

            /**
             * ListRequest filter.
             * @member {Object.<string,string>} filter
             * @memberof cbs.common.ListRequest
             * @instance
             */
            ListRequest.prototype.filter = $util.emptyObject;

            /**
             * ListRequest order.
             * @member {Object.<string,string>} order
             * @memberof cbs.common.ListRequest
             * @instance
             */
            ListRequest.prototype.order = $util.emptyObject;

            /**
             * ListRequest exportType.
             * @member {string} exportType
             * @memberof cbs.common.ListRequest
             * @instance
             */
            ListRequest.prototype.exportType = "";

            /**
             * Creates a new ListRequest instance using the specified properties.
             * @function create
             * @memberof cbs.common.ListRequest
             * @static
             * @param {cbs.common.IListRequest=} [properties] Properties to set
             * @returns {cbs.common.ListRequest} ListRequest instance
             */
            ListRequest.create = function create(properties) {
                return new ListRequest(properties);
            };

            /**
             * Encodes the specified ListRequest message. Does not implicitly {@link cbs.common.ListRequest.verify|verify} messages.
             * @function encode
             * @memberof cbs.common.ListRequest
             * @static
             * @param {cbs.common.IListRequest} message ListRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ListRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.currentPage != null && Object.hasOwnProperty.call(message, "currentPage"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.currentPage);
                if (message.perPage != null && Object.hasOwnProperty.call(message, "perPage"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.perPage);
                if (message.filter != null && Object.hasOwnProperty.call(message, "filter"))
                    for (var keys = Object.keys(message.filter), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.filter[keys[i]]).ldelim();
                if (message.order != null && Object.hasOwnProperty.call(message, "order"))
                    for (var keys = Object.keys(message.order), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 4, wireType 2 =*/34).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.order[keys[i]]).ldelim();
                if (message.exportType != null && Object.hasOwnProperty.call(message, "exportType"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.exportType);
                return writer;
            };

            /**
             * Encodes the specified ListRequest message, length delimited. Does not implicitly {@link cbs.common.ListRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cbs.common.ListRequest
             * @static
             * @param {cbs.common.IListRequest} message ListRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ListRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ListRequest message from the specified reader or buffer.
             * @function decode
             * @memberof cbs.common.ListRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cbs.common.ListRequest} ListRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ListRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cbs.common.ListRequest(), key, value;
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.currentPage = reader.int32();
                        break;
                    case 2:
                        message.perPage = reader.int32();
                        break;
                    case 3:
                        if (message.filter === $util.emptyObject)
                            message.filter = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = "";
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = reader.string();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.filter[key] = value;
                        break;
                    case 4:
                        if (message.order === $util.emptyObject)
                            message.order = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = "";
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = reader.string();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.order[key] = value;
                        break;
                    case 5:
                        message.exportType = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ListRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cbs.common.ListRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cbs.common.ListRequest} ListRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ListRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ListRequest message.
             * @function verify
             * @memberof cbs.common.ListRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ListRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.currentPage != null && message.hasOwnProperty("currentPage"))
                    if (!$util.isInteger(message.currentPage))
                        return "currentPage: integer expected";
                if (message.perPage != null && message.hasOwnProperty("perPage"))
                    if (!$util.isInteger(message.perPage))
                        return "perPage: integer expected";
                if (message.filter != null && message.hasOwnProperty("filter")) {
                    if (!$util.isObject(message.filter))
                        return "filter: object expected";
                    var key = Object.keys(message.filter);
                    for (var i = 0; i < key.length; ++i)
                        if (!$util.isString(message.filter[key[i]]))
                            return "filter: string{k:string} expected";
                }
                if (message.order != null && message.hasOwnProperty("order")) {
                    if (!$util.isObject(message.order))
                        return "order: object expected";
                    var key = Object.keys(message.order);
                    for (var i = 0; i < key.length; ++i)
                        if (!$util.isString(message.order[key[i]]))
                            return "order: string{k:string} expected";
                }
                if (message.exportType != null && message.hasOwnProperty("exportType"))
                    if (!$util.isString(message.exportType))
                        return "exportType: string expected";
                return null;
            };

            /**
             * Creates a ListRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cbs.common.ListRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cbs.common.ListRequest} ListRequest
             */
            ListRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.cbs.common.ListRequest)
                    return object;
                var message = new $root.cbs.common.ListRequest();
                if (object.currentPage != null)
                    message.currentPage = object.currentPage | 0;
                if (object.perPage != null)
                    message.perPage = object.perPage | 0;
                if (object.filter) {
                    if (typeof object.filter !== "object")
                        throw TypeError(".cbs.common.ListRequest.filter: object expected");
                    message.filter = {};
                    for (var keys = Object.keys(object.filter), i = 0; i < keys.length; ++i)
                        message.filter[keys[i]] = String(object.filter[keys[i]]);
                }
                if (object.order) {
                    if (typeof object.order !== "object")
                        throw TypeError(".cbs.common.ListRequest.order: object expected");
                    message.order = {};
                    for (var keys = Object.keys(object.order), i = 0; i < keys.length; ++i)
                        message.order[keys[i]] = String(object.order[keys[i]]);
                }
                if (object.exportType != null)
                    message.exportType = String(object.exportType);
                return message;
            };

            /**
             * Creates a plain object from a ListRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cbs.common.ListRequest
             * @static
             * @param {cbs.common.ListRequest} message ListRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ListRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.objects || options.defaults) {
                    object.filter = {};
                    object.order = {};
                }
                if (options.defaults) {
                    object.currentPage = 0;
                    object.perPage = 0;
                    object.exportType = "";
                }
                if (message.currentPage != null && message.hasOwnProperty("currentPage"))
                    object.currentPage = message.currentPage;
                if (message.perPage != null && message.hasOwnProperty("perPage"))
                    object.perPage = message.perPage;
                var keys2;
                if (message.filter && (keys2 = Object.keys(message.filter)).length) {
                    object.filter = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.filter[keys2[j]] = message.filter[keys2[j]];
                }
                if (message.order && (keys2 = Object.keys(message.order)).length) {
                    object.order = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.order[keys2[j]] = message.order[keys2[j]];
                }
                if (message.exportType != null && message.hasOwnProperty("exportType"))
                    object.exportType = message.exportType;
                return object;
            };

            /**
             * Converts this ListRequest to JSON.
             * @function toJSON
             * @memberof cbs.common.ListRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ListRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ListRequest;
        })();

        common.GetRequest = (function() {

            /**
             * Properties of a GetRequest.
             * @memberof cbs.common
             * @interface IGetRequest
             * @property {string|null} [uuid] GetRequest uuid
             */

            /**
             * Constructs a new GetRequest.
             * @memberof cbs.common
             * @classdesc Represents a GetRequest.
             * @implements IGetRequest
             * @constructor
             * @param {cbs.common.IGetRequest=} [properties] Properties to set
             */
            function GetRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GetRequest uuid.
             * @member {string} uuid
             * @memberof cbs.common.GetRequest
             * @instance
             */
            GetRequest.prototype.uuid = "";

            /**
             * Creates a new GetRequest instance using the specified properties.
             * @function create
             * @memberof cbs.common.GetRequest
             * @static
             * @param {cbs.common.IGetRequest=} [properties] Properties to set
             * @returns {cbs.common.GetRequest} GetRequest instance
             */
            GetRequest.create = function create(properties) {
                return new GetRequest(properties);
            };

            /**
             * Encodes the specified GetRequest message. Does not implicitly {@link cbs.common.GetRequest.verify|verify} messages.
             * @function encode
             * @memberof cbs.common.GetRequest
             * @static
             * @param {cbs.common.IGetRequest} message GetRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.uuid);
                return writer;
            };

            /**
             * Encodes the specified GetRequest message, length delimited. Does not implicitly {@link cbs.common.GetRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cbs.common.GetRequest
             * @static
             * @param {cbs.common.IGetRequest} message GetRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetRequest message from the specified reader or buffer.
             * @function decode
             * @memberof cbs.common.GetRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cbs.common.GetRequest} GetRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cbs.common.GetRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.uuid = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GetRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cbs.common.GetRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cbs.common.GetRequest} GetRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetRequest message.
             * @function verify
             * @memberof cbs.common.GetRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.uuid != null && message.hasOwnProperty("uuid"))
                    if (!$util.isString(message.uuid))
                        return "uuid: string expected";
                return null;
            };

            /**
             * Creates a GetRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cbs.common.GetRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cbs.common.GetRequest} GetRequest
             */
            GetRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.cbs.common.GetRequest)
                    return object;
                var message = new $root.cbs.common.GetRequest();
                if (object.uuid != null)
                    message.uuid = String(object.uuid);
                return message;
            };

            /**
             * Creates a plain object from a GetRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cbs.common.GetRequest
             * @static
             * @param {cbs.common.GetRequest} message GetRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.uuid = "";
                if (message.uuid != null && message.hasOwnProperty("uuid"))
                    object.uuid = message.uuid;
                return object;
            };

            /**
             * Converts this GetRequest to JSON.
             * @function toJSON
             * @memberof cbs.common.GetRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return GetRequest;
        })();

        common.Empty = (function() {

            /**
             * Properties of an Empty.
             * @memberof cbs.common
             * @interface IEmpty
             */

            /**
             * Constructs a new Empty.
             * @memberof cbs.common
             * @classdesc Represents an Empty.
             * @implements IEmpty
             * @constructor
             * @param {cbs.common.IEmpty=} [properties] Properties to set
             */
            function Empty(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new Empty instance using the specified properties.
             * @function create
             * @memberof cbs.common.Empty
             * @static
             * @param {cbs.common.IEmpty=} [properties] Properties to set
             * @returns {cbs.common.Empty} Empty instance
             */
            Empty.create = function create(properties) {
                return new Empty(properties);
            };

            /**
             * Encodes the specified Empty message. Does not implicitly {@link cbs.common.Empty.verify|verify} messages.
             * @function encode
             * @memberof cbs.common.Empty
             * @static
             * @param {cbs.common.IEmpty} message Empty message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Empty.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link cbs.common.Empty.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cbs.common.Empty
             * @static
             * @param {cbs.common.IEmpty} message Empty message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Empty.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @function decode
             * @memberof cbs.common.Empty
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cbs.common.Empty} Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Empty.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cbs.common.Empty();
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
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cbs.common.Empty
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cbs.common.Empty} Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Empty.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Empty message.
             * @function verify
             * @memberof cbs.common.Empty
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Empty.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cbs.common.Empty
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cbs.common.Empty} Empty
             */
            Empty.fromObject = function fromObject(object) {
                if (object instanceof $root.cbs.common.Empty)
                    return object;
                return new $root.cbs.common.Empty();
            };

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cbs.common.Empty
             * @static
             * @param {cbs.common.Empty} message Empty
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Empty.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this Empty to JSON.
             * @function toJSON
             * @memberof cbs.common.Empty
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Empty.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Empty;
        })();

        common.Request = (function() {

            /**
             * Properties of a Request.
             * @memberof cbs.common
             * @interface IRequest
             * @property {string|null} [uniqueIdentifier] Request uniqueIdentifier
             */

            /**
             * Constructs a new Request.
             * @memberof cbs.common
             * @classdesc Represents a Request.
             * @implements IRequest
             * @constructor
             * @param {cbs.common.IRequest=} [properties] Properties to set
             */
            function Request(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Request uniqueIdentifier.
             * @member {string} uniqueIdentifier
             * @memberof cbs.common.Request
             * @instance
             */
            Request.prototype.uniqueIdentifier = "";

            /**
             * Creates a new Request instance using the specified properties.
             * @function create
             * @memberof cbs.common.Request
             * @static
             * @param {cbs.common.IRequest=} [properties] Properties to set
             * @returns {cbs.common.Request} Request instance
             */
            Request.create = function create(properties) {
                return new Request(properties);
            };

            /**
             * Encodes the specified Request message. Does not implicitly {@link cbs.common.Request.verify|verify} messages.
             * @function encode
             * @memberof cbs.common.Request
             * @static
             * @param {cbs.common.IRequest} message Request message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Request.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uniqueIdentifier != null && Object.hasOwnProperty.call(message, "uniqueIdentifier"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.uniqueIdentifier);
                return writer;
            };

            /**
             * Encodes the specified Request message, length delimited. Does not implicitly {@link cbs.common.Request.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cbs.common.Request
             * @static
             * @param {cbs.common.IRequest} message Request message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Request.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Request message from the specified reader or buffer.
             * @function decode
             * @memberof cbs.common.Request
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cbs.common.Request} Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Request.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cbs.common.Request();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.uniqueIdentifier = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Request message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cbs.common.Request
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cbs.common.Request} Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Request.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Request message.
             * @function verify
             * @memberof cbs.common.Request
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Request.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.uniqueIdentifier != null && message.hasOwnProperty("uniqueIdentifier"))
                    if (!$util.isString(message.uniqueIdentifier))
                        return "uniqueIdentifier: string expected";
                return null;
            };

            /**
             * Creates a Request message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cbs.common.Request
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cbs.common.Request} Request
             */
            Request.fromObject = function fromObject(object) {
                if (object instanceof $root.cbs.common.Request)
                    return object;
                var message = new $root.cbs.common.Request();
                if (object.uniqueIdentifier != null)
                    message.uniqueIdentifier = String(object.uniqueIdentifier);
                return message;
            };

            /**
             * Creates a plain object from a Request message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cbs.common.Request
             * @static
             * @param {cbs.common.Request} message Request
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Request.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.uniqueIdentifier = "";
                if (message.uniqueIdentifier != null && message.hasOwnProperty("uniqueIdentifier"))
                    object.uniqueIdentifier = message.uniqueIdentifier;
                return object;
            };

            /**
             * Converts this Request to JSON.
             * @function toJSON
             * @memberof cbs.common.Request
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Request.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Request;
        })();

        common.DetectChannel = (function() {

            /**
             * Properties of a DetectChannel.
             * @memberof cbs.common
             * @interface IDetectChannel
             * @property {cbs.common.IRequest|null} [detectChannel] DetectChannel detectChannel
             */

            /**
             * Constructs a new DetectChannel.
             * @memberof cbs.common
             * @classdesc Represents a DetectChannel.
             * @implements IDetectChannel
             * @constructor
             * @param {cbs.common.IDetectChannel=} [properties] Properties to set
             */
            function DetectChannel(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DetectChannel detectChannel.
             * @member {cbs.common.IRequest|null|undefined} detectChannel
             * @memberof cbs.common.DetectChannel
             * @instance
             */
            DetectChannel.prototype.detectChannel = null;

            /**
             * Creates a new DetectChannel instance using the specified properties.
             * @function create
             * @memberof cbs.common.DetectChannel
             * @static
             * @param {cbs.common.IDetectChannel=} [properties] Properties to set
             * @returns {cbs.common.DetectChannel} DetectChannel instance
             */
            DetectChannel.create = function create(properties) {
                return new DetectChannel(properties);
            };

            /**
             * Encodes the specified DetectChannel message. Does not implicitly {@link cbs.common.DetectChannel.verify|verify} messages.
             * @function encode
             * @memberof cbs.common.DetectChannel
             * @static
             * @param {cbs.common.IDetectChannel} message DetectChannel message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DetectChannel.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.detectChannel != null && Object.hasOwnProperty.call(message, "detectChannel"))
                    $root.cbs.common.Request.encode(message.detectChannel, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified DetectChannel message, length delimited. Does not implicitly {@link cbs.common.DetectChannel.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cbs.common.DetectChannel
             * @static
             * @param {cbs.common.IDetectChannel} message DetectChannel message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DetectChannel.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DetectChannel message from the specified reader or buffer.
             * @function decode
             * @memberof cbs.common.DetectChannel
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cbs.common.DetectChannel} DetectChannel
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DetectChannel.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cbs.common.DetectChannel();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.detectChannel = $root.cbs.common.Request.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DetectChannel message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cbs.common.DetectChannel
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cbs.common.DetectChannel} DetectChannel
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DetectChannel.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DetectChannel message.
             * @function verify
             * @memberof cbs.common.DetectChannel
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DetectChannel.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.detectChannel != null && message.hasOwnProperty("detectChannel")) {
                    var error = $root.cbs.common.Request.verify(message.detectChannel);
                    if (error)
                        return "detectChannel." + error;
                }
                return null;
            };

            /**
             * Creates a DetectChannel message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cbs.common.DetectChannel
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cbs.common.DetectChannel} DetectChannel
             */
            DetectChannel.fromObject = function fromObject(object) {
                if (object instanceof $root.cbs.common.DetectChannel)
                    return object;
                var message = new $root.cbs.common.DetectChannel();
                if (object.detectChannel != null) {
                    if (typeof object.detectChannel !== "object")
                        throw TypeError(".cbs.common.DetectChannel.detectChannel: object expected");
                    message.detectChannel = $root.cbs.common.Request.fromObject(object.detectChannel);
                }
                return message;
            };

            /**
             * Creates a plain object from a DetectChannel message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cbs.common.DetectChannel
             * @static
             * @param {cbs.common.DetectChannel} message DetectChannel
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DetectChannel.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.detectChannel = null;
                if (message.detectChannel != null && message.hasOwnProperty("detectChannel"))
                    object.detectChannel = $root.cbs.common.Request.toObject(message.detectChannel, options);
                return object;
            };

            /**
             * Converts this DetectChannel to JSON.
             * @function toJSON
             * @memberof cbs.common.DetectChannel
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DetectChannel.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return DetectChannel;
        })();

        common.Response = (function() {

            /**
             * Properties of a Response.
             * @memberof cbs.common
             * @interface IResponse
             * @property {number|null} [status] Response status
             * @property {string|null} [message] Response message
             */

            /**
             * Constructs a new Response.
             * @memberof cbs.common
             * @classdesc Represents a Response.
             * @implements IResponse
             * @constructor
             * @param {cbs.common.IResponse=} [properties] Properties to set
             */
            function Response(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Response status.
             * @member {number} status
             * @memberof cbs.common.Response
             * @instance
             */
            Response.prototype.status = 0;

            /**
             * Response message.
             * @member {string} message
             * @memberof cbs.common.Response
             * @instance
             */
            Response.prototype.message = "";

            /**
             * Creates a new Response instance using the specified properties.
             * @function create
             * @memberof cbs.common.Response
             * @static
             * @param {cbs.common.IResponse=} [properties] Properties to set
             * @returns {cbs.common.Response} Response instance
             */
            Response.create = function create(properties) {
                return new Response(properties);
            };

            /**
             * Encodes the specified Response message. Does not implicitly {@link cbs.common.Response.verify|verify} messages.
             * @function encode
             * @memberof cbs.common.Response
             * @static
             * @param {cbs.common.IResponse} message Response message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Response.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
                return writer;
            };

            /**
             * Encodes the specified Response message, length delimited. Does not implicitly {@link cbs.common.Response.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cbs.common.Response
             * @static
             * @param {cbs.common.IResponse} message Response message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Response.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Response message from the specified reader or buffer.
             * @function decode
             * @memberof cbs.common.Response
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cbs.common.Response} Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Response.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cbs.common.Response();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.status = reader.int32();
                        break;
                    case 2:
                        message.message = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Response message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cbs.common.Response
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cbs.common.Response} Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Response.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Response message.
             * @function verify
             * @memberof cbs.common.Response
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Response.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.status != null && message.hasOwnProperty("status"))
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };

            /**
             * Creates a Response message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cbs.common.Response
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cbs.common.Response} Response
             */
            Response.fromObject = function fromObject(object) {
                if (object instanceof $root.cbs.common.Response)
                    return object;
                var message = new $root.cbs.common.Response();
                if (object.status != null)
                    message.status = object.status | 0;
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };

            /**
             * Creates a plain object from a Response message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cbs.common.Response
             * @static
             * @param {cbs.common.Response} message Response
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Response.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.status = 0;
                    object.message = "";
                }
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = message.status;
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };

            /**
             * Converts this Response to JSON.
             * @function toJSON
             * @memberof cbs.common.Response
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Response.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Response;
        })();

        common.MobileCommonResponse = (function() {

            /**
             * Properties of a MobileCommonResponse.
             * @memberof cbs.common
             * @interface IMobileCommonResponse
             * @property {number|null} [status] MobileCommonResponse status
             * @property {string|null} [message] MobileCommonResponse message
             * @property {boolean|null} [registerDevice] MobileCommonResponse registerDevice
             */

            /**
             * Constructs a new MobileCommonResponse.
             * @memberof cbs.common
             * @classdesc Represents a MobileCommonResponse.
             * @implements IMobileCommonResponse
             * @constructor
             * @param {cbs.common.IMobileCommonResponse=} [properties] Properties to set
             */
            function MobileCommonResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MobileCommonResponse status.
             * @member {number} status
             * @memberof cbs.common.MobileCommonResponse
             * @instance
             */
            MobileCommonResponse.prototype.status = 0;

            /**
             * MobileCommonResponse message.
             * @member {string} message
             * @memberof cbs.common.MobileCommonResponse
             * @instance
             */
            MobileCommonResponse.prototype.message = "";

            /**
             * MobileCommonResponse registerDevice.
             * @member {boolean} registerDevice
             * @memberof cbs.common.MobileCommonResponse
             * @instance
             */
            MobileCommonResponse.prototype.registerDevice = false;

            /**
             * Creates a new MobileCommonResponse instance using the specified properties.
             * @function create
             * @memberof cbs.common.MobileCommonResponse
             * @static
             * @param {cbs.common.IMobileCommonResponse=} [properties] Properties to set
             * @returns {cbs.common.MobileCommonResponse} MobileCommonResponse instance
             */
            MobileCommonResponse.create = function create(properties) {
                return new MobileCommonResponse(properties);
            };

            /**
             * Encodes the specified MobileCommonResponse message. Does not implicitly {@link cbs.common.MobileCommonResponse.verify|verify} messages.
             * @function encode
             * @memberof cbs.common.MobileCommonResponse
             * @static
             * @param {cbs.common.IMobileCommonResponse} message MobileCommonResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MobileCommonResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
                if (message.registerDevice != null && Object.hasOwnProperty.call(message, "registerDevice"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.registerDevice);
                return writer;
            };

            /**
             * Encodes the specified MobileCommonResponse message, length delimited. Does not implicitly {@link cbs.common.MobileCommonResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cbs.common.MobileCommonResponse
             * @static
             * @param {cbs.common.IMobileCommonResponse} message MobileCommonResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MobileCommonResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MobileCommonResponse message from the specified reader or buffer.
             * @function decode
             * @memberof cbs.common.MobileCommonResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cbs.common.MobileCommonResponse} MobileCommonResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MobileCommonResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cbs.common.MobileCommonResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.status = reader.int32();
                        break;
                    case 2:
                        message.message = reader.string();
                        break;
                    case 3:
                        message.registerDevice = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MobileCommonResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cbs.common.MobileCommonResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cbs.common.MobileCommonResponse} MobileCommonResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MobileCommonResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MobileCommonResponse message.
             * @function verify
             * @memberof cbs.common.MobileCommonResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MobileCommonResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.status != null && message.hasOwnProperty("status"))
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                if (message.registerDevice != null && message.hasOwnProperty("registerDevice"))
                    if (typeof message.registerDevice !== "boolean")
                        return "registerDevice: boolean expected";
                return null;
            };

            /**
             * Creates a MobileCommonResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cbs.common.MobileCommonResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cbs.common.MobileCommonResponse} MobileCommonResponse
             */
            MobileCommonResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.cbs.common.MobileCommonResponse)
                    return object;
                var message = new $root.cbs.common.MobileCommonResponse();
                if (object.status != null)
                    message.status = object.status | 0;
                if (object.message != null)
                    message.message = String(object.message);
                if (object.registerDevice != null)
                    message.registerDevice = Boolean(object.registerDevice);
                return message;
            };

            /**
             * Creates a plain object from a MobileCommonResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cbs.common.MobileCommonResponse
             * @static
             * @param {cbs.common.MobileCommonResponse} message MobileCommonResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MobileCommonResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.status = 0;
                    object.message = "";
                    object.registerDevice = false;
                }
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = message.status;
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                if (message.registerDevice != null && message.hasOwnProperty("registerDevice"))
                    object.registerDevice = message.registerDevice;
                return object;
            };

            /**
             * Converts this MobileCommonResponse to JSON.
             * @function toJSON
             * @memberof cbs.common.MobileCommonResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MobileCommonResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MobileCommonResponse;
        })();

        common.Pagination = (function() {

            /**
             * Properties of a Pagination.
             * @memberof cbs.common
             * @interface IPagination
             * @property {number|null} [currentPage] Pagination currentPage
             * @property {number|null} [totalItem] Pagination totalItem
             * @property {number|null} [totalPage] Pagination totalPage
             * @property {number|null} [perPage] Pagination perPage
             */

            /**
             * Constructs a new Pagination.
             * @memberof cbs.common
             * @classdesc Represents a Pagination.
             * @implements IPagination
             * @constructor
             * @param {cbs.common.IPagination=} [properties] Properties to set
             */
            function Pagination(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Pagination currentPage.
             * @member {number} currentPage
             * @memberof cbs.common.Pagination
             * @instance
             */
            Pagination.prototype.currentPage = 0;

            /**
             * Pagination totalItem.
             * @member {number} totalItem
             * @memberof cbs.common.Pagination
             * @instance
             */
            Pagination.prototype.totalItem = 0;

            /**
             * Pagination totalPage.
             * @member {number} totalPage
             * @memberof cbs.common.Pagination
             * @instance
             */
            Pagination.prototype.totalPage = 0;

            /**
             * Pagination perPage.
             * @member {number} perPage
             * @memberof cbs.common.Pagination
             * @instance
             */
            Pagination.prototype.perPage = 0;

            /**
             * Creates a new Pagination instance using the specified properties.
             * @function create
             * @memberof cbs.common.Pagination
             * @static
             * @param {cbs.common.IPagination=} [properties] Properties to set
             * @returns {cbs.common.Pagination} Pagination instance
             */
            Pagination.create = function create(properties) {
                return new Pagination(properties);
            };

            /**
             * Encodes the specified Pagination message. Does not implicitly {@link cbs.common.Pagination.verify|verify} messages.
             * @function encode
             * @memberof cbs.common.Pagination
             * @static
             * @param {cbs.common.IPagination} message Pagination message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Pagination.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.currentPage != null && Object.hasOwnProperty.call(message, "currentPage"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.currentPage);
                if (message.totalItem != null && Object.hasOwnProperty.call(message, "totalItem"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.totalItem);
                if (message.totalPage != null && Object.hasOwnProperty.call(message, "totalPage"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.totalPage);
                if (message.perPage != null && Object.hasOwnProperty.call(message, "perPage"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.perPage);
                return writer;
            };

            /**
             * Encodes the specified Pagination message, length delimited. Does not implicitly {@link cbs.common.Pagination.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cbs.common.Pagination
             * @static
             * @param {cbs.common.IPagination} message Pagination message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Pagination.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Pagination message from the specified reader or buffer.
             * @function decode
             * @memberof cbs.common.Pagination
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cbs.common.Pagination} Pagination
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Pagination.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cbs.common.Pagination();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.currentPage = reader.int32();
                        break;
                    case 2:
                        message.totalItem = reader.int32();
                        break;
                    case 3:
                        message.totalPage = reader.int32();
                        break;
                    case 4:
                        message.perPage = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Pagination message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cbs.common.Pagination
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cbs.common.Pagination} Pagination
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Pagination.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Pagination message.
             * @function verify
             * @memberof cbs.common.Pagination
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Pagination.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.currentPage != null && message.hasOwnProperty("currentPage"))
                    if (!$util.isInteger(message.currentPage))
                        return "currentPage: integer expected";
                if (message.totalItem != null && message.hasOwnProperty("totalItem"))
                    if (!$util.isInteger(message.totalItem))
                        return "totalItem: integer expected";
                if (message.totalPage != null && message.hasOwnProperty("totalPage"))
                    if (!$util.isInteger(message.totalPage))
                        return "totalPage: integer expected";
                if (message.perPage != null && message.hasOwnProperty("perPage"))
                    if (!$util.isInteger(message.perPage))
                        return "perPage: integer expected";
                return null;
            };

            /**
             * Creates a Pagination message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cbs.common.Pagination
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cbs.common.Pagination} Pagination
             */
            Pagination.fromObject = function fromObject(object) {
                if (object instanceof $root.cbs.common.Pagination)
                    return object;
                var message = new $root.cbs.common.Pagination();
                if (object.currentPage != null)
                    message.currentPage = object.currentPage | 0;
                if (object.totalItem != null)
                    message.totalItem = object.totalItem | 0;
                if (object.totalPage != null)
                    message.totalPage = object.totalPage | 0;
                if (object.perPage != null)
                    message.perPage = object.perPage | 0;
                return message;
            };

            /**
             * Creates a plain object from a Pagination message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cbs.common.Pagination
             * @static
             * @param {cbs.common.Pagination} message Pagination
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Pagination.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.currentPage = 0;
                    object.totalItem = 0;
                    object.totalPage = 0;
                    object.perPage = 0;
                }
                if (message.currentPage != null && message.hasOwnProperty("currentPage"))
                    object.currentPage = message.currentPage;
                if (message.totalItem != null && message.hasOwnProperty("totalItem"))
                    object.totalItem = message.totalItem;
                if (message.totalPage != null && message.hasOwnProperty("totalPage"))
                    object.totalPage = message.totalPage;
                if (message.perPage != null && message.hasOwnProperty("perPage"))
                    object.perPage = message.perPage;
                return object;
            };

            /**
             * Converts this Pagination to JSON.
             * @function toJSON
             * @memberof cbs.common.Pagination
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Pagination.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Pagination;
        })();

        common.Meta = (function() {

            /**
             * Properties of a Meta.
             * @memberof cbs.common
             * @interface IMeta
             * @property {cbs.common.IPagination|null} [pagination] Meta pagination
             * @property {cbs.common.IResponse|null} [response] Meta response
             */

            /**
             * Constructs a new Meta.
             * @memberof cbs.common
             * @classdesc Represents a Meta.
             * @implements IMeta
             * @constructor
             * @param {cbs.common.IMeta=} [properties] Properties to set
             */
            function Meta(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Meta pagination.
             * @member {cbs.common.IPagination|null|undefined} pagination
             * @memberof cbs.common.Meta
             * @instance
             */
            Meta.prototype.pagination = null;

            /**
             * Meta response.
             * @member {cbs.common.IResponse|null|undefined} response
             * @memberof cbs.common.Meta
             * @instance
             */
            Meta.prototype.response = null;

            /**
             * Creates a new Meta instance using the specified properties.
             * @function create
             * @memberof cbs.common.Meta
             * @static
             * @param {cbs.common.IMeta=} [properties] Properties to set
             * @returns {cbs.common.Meta} Meta instance
             */
            Meta.create = function create(properties) {
                return new Meta(properties);
            };

            /**
             * Encodes the specified Meta message. Does not implicitly {@link cbs.common.Meta.verify|verify} messages.
             * @function encode
             * @memberof cbs.common.Meta
             * @static
             * @param {cbs.common.IMeta} message Meta message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Meta.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.pagination != null && Object.hasOwnProperty.call(message, "pagination"))
                    $root.cbs.common.Pagination.encode(message.pagination, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.response != null && Object.hasOwnProperty.call(message, "response"))
                    $root.cbs.common.Response.encode(message.response, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Meta message, length delimited. Does not implicitly {@link cbs.common.Meta.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cbs.common.Meta
             * @static
             * @param {cbs.common.IMeta} message Meta message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Meta.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Meta message from the specified reader or buffer.
             * @function decode
             * @memberof cbs.common.Meta
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cbs.common.Meta} Meta
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Meta.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cbs.common.Meta();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.pagination = $root.cbs.common.Pagination.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.response = $root.cbs.common.Response.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Meta message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cbs.common.Meta
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cbs.common.Meta} Meta
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Meta.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Meta message.
             * @function verify
             * @memberof cbs.common.Meta
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Meta.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.pagination != null && message.hasOwnProperty("pagination")) {
                    var error = $root.cbs.common.Pagination.verify(message.pagination);
                    if (error)
                        return "pagination." + error;
                }
                if (message.response != null && message.hasOwnProperty("response")) {
                    var error = $root.cbs.common.Response.verify(message.response);
                    if (error)
                        return "response." + error;
                }
                return null;
            };

            /**
             * Creates a Meta message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cbs.common.Meta
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cbs.common.Meta} Meta
             */
            Meta.fromObject = function fromObject(object) {
                if (object instanceof $root.cbs.common.Meta)
                    return object;
                var message = new $root.cbs.common.Meta();
                if (object.pagination != null) {
                    if (typeof object.pagination !== "object")
                        throw TypeError(".cbs.common.Meta.pagination: object expected");
                    message.pagination = $root.cbs.common.Pagination.fromObject(object.pagination);
                }
                if (object.response != null) {
                    if (typeof object.response !== "object")
                        throw TypeError(".cbs.common.Meta.response: object expected");
                    message.response = $root.cbs.common.Response.fromObject(object.response);
                }
                return message;
            };

            /**
             * Creates a plain object from a Meta message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cbs.common.Meta
             * @static
             * @param {cbs.common.Meta} message Meta
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Meta.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.pagination = null;
                    object.response = null;
                }
                if (message.pagination != null && message.hasOwnProperty("pagination"))
                    object.pagination = $root.cbs.common.Pagination.toObject(message.pagination, options);
                if (message.response != null && message.hasOwnProperty("response"))
                    object.response = $root.cbs.common.Response.toObject(message.response, options);
                return object;
            };

            /**
             * Converts this Meta to JSON.
             * @function toJSON
             * @memberof cbs.common.Meta
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Meta.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Meta;
        })();

        common.ApproveRejectRequest = (function() {

            /**
             * Properties of an ApproveRejectRequest.
             * @memberof cbs.common
             * @interface IApproveRejectRequest
             * @property {Array.<string>|null} [uuid] ApproveRejectRequest uuid
             * @property {string|null} [action] ApproveRejectRequest action
             * @property {string|null} [remarks] ApproveRejectRequest remarks
             */

            /**
             * Constructs a new ApproveRejectRequest.
             * @memberof cbs.common
             * @classdesc Represents an ApproveRejectRequest.
             * @implements IApproveRejectRequest
             * @constructor
             * @param {cbs.common.IApproveRejectRequest=} [properties] Properties to set
             */
            function ApproveRejectRequest(properties) {
                this.uuid = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ApproveRejectRequest uuid.
             * @member {Array.<string>} uuid
             * @memberof cbs.common.ApproveRejectRequest
             * @instance
             */
            ApproveRejectRequest.prototype.uuid = $util.emptyArray;

            /**
             * ApproveRejectRequest action.
             * @member {string} action
             * @memberof cbs.common.ApproveRejectRequest
             * @instance
             */
            ApproveRejectRequest.prototype.action = "";

            /**
             * ApproveRejectRequest remarks.
             * @member {string} remarks
             * @memberof cbs.common.ApproveRejectRequest
             * @instance
             */
            ApproveRejectRequest.prototype.remarks = "";

            /**
             * Creates a new ApproveRejectRequest instance using the specified properties.
             * @function create
             * @memberof cbs.common.ApproveRejectRequest
             * @static
             * @param {cbs.common.IApproveRejectRequest=} [properties] Properties to set
             * @returns {cbs.common.ApproveRejectRequest} ApproveRejectRequest instance
             */
            ApproveRejectRequest.create = function create(properties) {
                return new ApproveRejectRequest(properties);
            };

            /**
             * Encodes the specified ApproveRejectRequest message. Does not implicitly {@link cbs.common.ApproveRejectRequest.verify|verify} messages.
             * @function encode
             * @memberof cbs.common.ApproveRejectRequest
             * @static
             * @param {cbs.common.IApproveRejectRequest} message ApproveRejectRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ApproveRejectRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uuid != null && message.uuid.length)
                    for (var i = 0; i < message.uuid.length; ++i)
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.uuid[i]);
                if (message.action != null && Object.hasOwnProperty.call(message, "action"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.action);
                if (message.remarks != null && Object.hasOwnProperty.call(message, "remarks"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.remarks);
                return writer;
            };

            /**
             * Encodes the specified ApproveRejectRequest message, length delimited. Does not implicitly {@link cbs.common.ApproveRejectRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cbs.common.ApproveRejectRequest
             * @static
             * @param {cbs.common.IApproveRejectRequest} message ApproveRejectRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ApproveRejectRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an ApproveRejectRequest message from the specified reader or buffer.
             * @function decode
             * @memberof cbs.common.ApproveRejectRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cbs.common.ApproveRejectRequest} ApproveRejectRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ApproveRejectRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cbs.common.ApproveRejectRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.uuid && message.uuid.length))
                            message.uuid = [];
                        message.uuid.push(reader.string());
                        break;
                    case 2:
                        message.action = reader.string();
                        break;
                    case 3:
                        message.remarks = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an ApproveRejectRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cbs.common.ApproveRejectRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cbs.common.ApproveRejectRequest} ApproveRejectRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ApproveRejectRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an ApproveRejectRequest message.
             * @function verify
             * @memberof cbs.common.ApproveRejectRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ApproveRejectRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.uuid != null && message.hasOwnProperty("uuid")) {
                    if (!Array.isArray(message.uuid))
                        return "uuid: array expected";
                    for (var i = 0; i < message.uuid.length; ++i)
                        if (!$util.isString(message.uuid[i]))
                            return "uuid: string[] expected";
                }
                if (message.action != null && message.hasOwnProperty("action"))
                    if (!$util.isString(message.action))
                        return "action: string expected";
                if (message.remarks != null && message.hasOwnProperty("remarks"))
                    if (!$util.isString(message.remarks))
                        return "remarks: string expected";
                return null;
            };

            /**
             * Creates an ApproveRejectRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cbs.common.ApproveRejectRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cbs.common.ApproveRejectRequest} ApproveRejectRequest
             */
            ApproveRejectRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.cbs.common.ApproveRejectRequest)
                    return object;
                var message = new $root.cbs.common.ApproveRejectRequest();
                if (object.uuid) {
                    if (!Array.isArray(object.uuid))
                        throw TypeError(".cbs.common.ApproveRejectRequest.uuid: array expected");
                    message.uuid = [];
                    for (var i = 0; i < object.uuid.length; ++i)
                        message.uuid[i] = String(object.uuid[i]);
                }
                if (object.action != null)
                    message.action = String(object.action);
                if (object.remarks != null)
                    message.remarks = String(object.remarks);
                return message;
            };

            /**
             * Creates a plain object from an ApproveRejectRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cbs.common.ApproveRejectRequest
             * @static
             * @param {cbs.common.ApproveRejectRequest} message ApproveRejectRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ApproveRejectRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uuid = [];
                if (options.defaults) {
                    object.action = "";
                    object.remarks = "";
                }
                if (message.uuid && message.uuid.length) {
                    object.uuid = [];
                    for (var j = 0; j < message.uuid.length; ++j)
                        object.uuid[j] = message.uuid[j];
                }
                if (message.action != null && message.hasOwnProperty("action"))
                    object.action = message.action;
                if (message.remarks != null && message.hasOwnProperty("remarks"))
                    object.remarks = message.remarks;
                return object;
            };

            /**
             * Converts this ApproveRejectRequest to JSON.
             * @function toJSON
             * @memberof cbs.common.ApproveRejectRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ApproveRejectRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ApproveRejectRequest;
        })();

        common.SingleApproveRejectRequest = (function() {

            /**
             * Properties of a SingleApproveRejectRequest.
             * @memberof cbs.common
             * @interface ISingleApproveRejectRequest
             * @property {string|null} [uuid] SingleApproveRejectRequest uuid
             * @property {string|null} [action] SingleApproveRejectRequest action
             * @property {string|null} [remarks] SingleApproveRejectRequest remarks
             */

            /**
             * Constructs a new SingleApproveRejectRequest.
             * @memberof cbs.common
             * @classdesc Represents a SingleApproveRejectRequest.
             * @implements ISingleApproveRejectRequest
             * @constructor
             * @param {cbs.common.ISingleApproveRejectRequest=} [properties] Properties to set
             */
            function SingleApproveRejectRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SingleApproveRejectRequest uuid.
             * @member {string} uuid
             * @memberof cbs.common.SingleApproveRejectRequest
             * @instance
             */
            SingleApproveRejectRequest.prototype.uuid = "";

            /**
             * SingleApproveRejectRequest action.
             * @member {string} action
             * @memberof cbs.common.SingleApproveRejectRequest
             * @instance
             */
            SingleApproveRejectRequest.prototype.action = "";

            /**
             * SingleApproveRejectRequest remarks.
             * @member {string} remarks
             * @memberof cbs.common.SingleApproveRejectRequest
             * @instance
             */
            SingleApproveRejectRequest.prototype.remarks = "";

            /**
             * Creates a new SingleApproveRejectRequest instance using the specified properties.
             * @function create
             * @memberof cbs.common.SingleApproveRejectRequest
             * @static
             * @param {cbs.common.ISingleApproveRejectRequest=} [properties] Properties to set
             * @returns {cbs.common.SingleApproveRejectRequest} SingleApproveRejectRequest instance
             */
            SingleApproveRejectRequest.create = function create(properties) {
                return new SingleApproveRejectRequest(properties);
            };

            /**
             * Encodes the specified SingleApproveRejectRequest message. Does not implicitly {@link cbs.common.SingleApproveRejectRequest.verify|verify} messages.
             * @function encode
             * @memberof cbs.common.SingleApproveRejectRequest
             * @static
             * @param {cbs.common.ISingleApproveRejectRequest} message SingleApproveRejectRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SingleApproveRejectRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.uuid);
                if (message.action != null && Object.hasOwnProperty.call(message, "action"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.action);
                if (message.remarks != null && Object.hasOwnProperty.call(message, "remarks"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.remarks);
                return writer;
            };

            /**
             * Encodes the specified SingleApproveRejectRequest message, length delimited. Does not implicitly {@link cbs.common.SingleApproveRejectRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cbs.common.SingleApproveRejectRequest
             * @static
             * @param {cbs.common.ISingleApproveRejectRequest} message SingleApproveRejectRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SingleApproveRejectRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SingleApproveRejectRequest message from the specified reader or buffer.
             * @function decode
             * @memberof cbs.common.SingleApproveRejectRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cbs.common.SingleApproveRejectRequest} SingleApproveRejectRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SingleApproveRejectRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cbs.common.SingleApproveRejectRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.uuid = reader.string();
                        break;
                    case 2:
                        message.action = reader.string();
                        break;
                    case 3:
                        message.remarks = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SingleApproveRejectRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cbs.common.SingleApproveRejectRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cbs.common.SingleApproveRejectRequest} SingleApproveRejectRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SingleApproveRejectRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SingleApproveRejectRequest message.
             * @function verify
             * @memberof cbs.common.SingleApproveRejectRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SingleApproveRejectRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.uuid != null && message.hasOwnProperty("uuid"))
                    if (!$util.isString(message.uuid))
                        return "uuid: string expected";
                if (message.action != null && message.hasOwnProperty("action"))
                    if (!$util.isString(message.action))
                        return "action: string expected";
                if (message.remarks != null && message.hasOwnProperty("remarks"))
                    if (!$util.isString(message.remarks))
                        return "remarks: string expected";
                return null;
            };

            /**
             * Creates a SingleApproveRejectRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cbs.common.SingleApproveRejectRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cbs.common.SingleApproveRejectRequest} SingleApproveRejectRequest
             */
            SingleApproveRejectRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.cbs.common.SingleApproveRejectRequest)
                    return object;
                var message = new $root.cbs.common.SingleApproveRejectRequest();
                if (object.uuid != null)
                    message.uuid = String(object.uuid);
                if (object.action != null)
                    message.action = String(object.action);
                if (object.remarks != null)
                    message.remarks = String(object.remarks);
                return message;
            };

            /**
             * Creates a plain object from a SingleApproveRejectRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cbs.common.SingleApproveRejectRequest
             * @static
             * @param {cbs.common.SingleApproveRejectRequest} message SingleApproveRejectRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SingleApproveRejectRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.uuid = "";
                    object.action = "";
                    object.remarks = "";
                }
                if (message.uuid != null && message.hasOwnProperty("uuid"))
                    object.uuid = message.uuid;
                if (message.action != null && message.hasOwnProperty("action"))
                    object.action = message.action;
                if (message.remarks != null && message.hasOwnProperty("remarks"))
                    object.remarks = message.remarks;
                return object;
            };

            /**
             * Converts this SingleApproveRejectRequest to JSON.
             * @function toJSON
             * @memberof cbs.common.SingleApproveRejectRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SingleApproveRejectRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return SingleApproveRejectRequest;
        })();

        common.ApproveRejectBatchRequest = (function() {

            /**
             * Properties of an ApproveRejectBatchRequest.
             * @memberof cbs.common
             * @interface IApproveRejectBatchRequest
             * @property {string|null} [batchId] ApproveRejectBatchRequest batchId
             * @property {string|null} [action] ApproveRejectBatchRequest action
             * @property {string|null} [remarks] ApproveRejectBatchRequest remarks
             */

            /**
             * Constructs a new ApproveRejectBatchRequest.
             * @memberof cbs.common
             * @classdesc Represents an ApproveRejectBatchRequest.
             * @implements IApproveRejectBatchRequest
             * @constructor
             * @param {cbs.common.IApproveRejectBatchRequest=} [properties] Properties to set
             */
            function ApproveRejectBatchRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ApproveRejectBatchRequest batchId.
             * @member {string} batchId
             * @memberof cbs.common.ApproveRejectBatchRequest
             * @instance
             */
            ApproveRejectBatchRequest.prototype.batchId = "";

            /**
             * ApproveRejectBatchRequest action.
             * @member {string} action
             * @memberof cbs.common.ApproveRejectBatchRequest
             * @instance
             */
            ApproveRejectBatchRequest.prototype.action = "";

            /**
             * ApproveRejectBatchRequest remarks.
             * @member {string} remarks
             * @memberof cbs.common.ApproveRejectBatchRequest
             * @instance
             */
            ApproveRejectBatchRequest.prototype.remarks = "";

            /**
             * Creates a new ApproveRejectBatchRequest instance using the specified properties.
             * @function create
             * @memberof cbs.common.ApproveRejectBatchRequest
             * @static
             * @param {cbs.common.IApproveRejectBatchRequest=} [properties] Properties to set
             * @returns {cbs.common.ApproveRejectBatchRequest} ApproveRejectBatchRequest instance
             */
            ApproveRejectBatchRequest.create = function create(properties) {
                return new ApproveRejectBatchRequest(properties);
            };

            /**
             * Encodes the specified ApproveRejectBatchRequest message. Does not implicitly {@link cbs.common.ApproveRejectBatchRequest.verify|verify} messages.
             * @function encode
             * @memberof cbs.common.ApproveRejectBatchRequest
             * @static
             * @param {cbs.common.IApproveRejectBatchRequest} message ApproveRejectBatchRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ApproveRejectBatchRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.batchId != null && Object.hasOwnProperty.call(message, "batchId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.batchId);
                if (message.action != null && Object.hasOwnProperty.call(message, "action"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.action);
                if (message.remarks != null && Object.hasOwnProperty.call(message, "remarks"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.remarks);
                return writer;
            };

            /**
             * Encodes the specified ApproveRejectBatchRequest message, length delimited. Does not implicitly {@link cbs.common.ApproveRejectBatchRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cbs.common.ApproveRejectBatchRequest
             * @static
             * @param {cbs.common.IApproveRejectBatchRequest} message ApproveRejectBatchRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ApproveRejectBatchRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an ApproveRejectBatchRequest message from the specified reader or buffer.
             * @function decode
             * @memberof cbs.common.ApproveRejectBatchRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cbs.common.ApproveRejectBatchRequest} ApproveRejectBatchRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ApproveRejectBatchRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cbs.common.ApproveRejectBatchRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.batchId = reader.string();
                        break;
                    case 2:
                        message.action = reader.string();
                        break;
                    case 3:
                        message.remarks = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an ApproveRejectBatchRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cbs.common.ApproveRejectBatchRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cbs.common.ApproveRejectBatchRequest} ApproveRejectBatchRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ApproveRejectBatchRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an ApproveRejectBatchRequest message.
             * @function verify
             * @memberof cbs.common.ApproveRejectBatchRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ApproveRejectBatchRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.batchId != null && message.hasOwnProperty("batchId"))
                    if (!$util.isString(message.batchId))
                        return "batchId: string expected";
                if (message.action != null && message.hasOwnProperty("action"))
                    if (!$util.isString(message.action))
                        return "action: string expected";
                if (message.remarks != null && message.hasOwnProperty("remarks"))
                    if (!$util.isString(message.remarks))
                        return "remarks: string expected";
                return null;
            };

            /**
             * Creates an ApproveRejectBatchRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cbs.common.ApproveRejectBatchRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cbs.common.ApproveRejectBatchRequest} ApproveRejectBatchRequest
             */
            ApproveRejectBatchRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.cbs.common.ApproveRejectBatchRequest)
                    return object;
                var message = new $root.cbs.common.ApproveRejectBatchRequest();
                if (object.batchId != null)
                    message.batchId = String(object.batchId);
                if (object.action != null)
                    message.action = String(object.action);
                if (object.remarks != null)
                    message.remarks = String(object.remarks);
                return message;
            };

            /**
             * Creates a plain object from an ApproveRejectBatchRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cbs.common.ApproveRejectBatchRequest
             * @static
             * @param {cbs.common.ApproveRejectBatchRequest} message ApproveRejectBatchRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ApproveRejectBatchRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.batchId = "";
                    object.action = "";
                    object.remarks = "";
                }
                if (message.batchId != null && message.hasOwnProperty("batchId"))
                    object.batchId = message.batchId;
                if (message.action != null && message.hasOwnProperty("action"))
                    object.action = message.action;
                if (message.remarks != null && message.hasOwnProperty("remarks"))
                    object.remarks = message.remarks;
                return object;
            };

            /**
             * Converts this ApproveRejectBatchRequest to JSON.
             * @function toJSON
             * @memberof cbs.common.ApproveRejectBatchRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ApproveRejectBatchRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ApproveRejectBatchRequest;
        })();

        return common;
    })();

    cbs.customer_auth_service = (function() {

        /**
         * Namespace customer_auth_service.
         * @memberof cbs
         * @namespace
         */
        var customer_auth_service = {};

        customer_auth_service.rpc = (function() {

            /**
             * Namespace rpc.
             * @memberof cbs.customer_auth_service
             * @namespace
             */
            var rpc = {};

            rpc.CustomerAuthService = (function() {

                /**
                 * Constructs a new CustomerAuthService service.
                 * @memberof cbs.customer_auth_service.rpc
                 * @classdesc Represents a CustomerAuthService
                 * @extends $protobuf.rpc.Service
                 * @constructor
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 */
                function CustomerAuthService(rpcImpl, requestDelimited, responseDelimited) {
                    $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                }

                (CustomerAuthService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = CustomerAuthService;

                /**
                 * Creates new CustomerAuthService service using the specified rpc implementation.
                 * @function create
                 * @memberof cbs.customer_auth_service.rpc.CustomerAuthService
                 * @static
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 * @returns {CustomerAuthService} RPC service. Useful where requests and/or responses are streamed.
                 */
                CustomerAuthService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                    return new this(rpcImpl, requestDelimited, responseDelimited);
                };

                /**
                 * Callback as used by {@link cbs.customer_auth_service.rpc.CustomerAuthService#registerCustomer}.
                 * @memberof cbs.customer_auth_service.rpc.CustomerAuthService
                 * @typedef registerCustomerCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {cbs.customer_auth_service.RegisterResponse} [response] RegisterResponse
                 */

                /**
                 * Calls registerCustomer.
                 * @function registerCustomer
                 * @memberof cbs.customer_auth_service.rpc.CustomerAuthService
                 * @instance
                 * @param {cbs.customer_auth_service.IRegisterRequest} request RegisterRequest message or plain object
                 * @param {cbs.customer_auth_service.rpc.CustomerAuthService.registerCustomerCallback} callback Node-style callback called with the error, if any, and RegisterResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(CustomerAuthService.prototype.registerCustomer = function registerCustomer(request, callback) {
                    return this.rpcCall(registerCustomer, $root.cbs.customer_auth_service.RegisterRequest, $root.cbs.customer_auth_service.RegisterResponse, request, callback);
                }, "name", { value: "registerCustomer" });

                /**
                 * Calls registerCustomer.
                 * @function registerCustomer
                 * @memberof cbs.customer_auth_service.rpc.CustomerAuthService
                 * @instance
                 * @param {cbs.customer_auth_service.IRegisterRequest} request RegisterRequest message or plain object
                 * @returns {Promise<cbs.customer_auth_service.RegisterResponse>} Promise
                 * @variation 2
                 */

                return CustomerAuthService;
            })();

            return rpc;
        })();

        customer_auth_service.RegisterRequest = (function() {

            /**
             * Properties of a RegisterRequest.
             * @memberof cbs.customer_auth_service
             * @interface IRegisterRequest
             * @property {string|null} [name] RegisterRequest name
             * @property {string|null} [email] RegisterRequest email
             * @property {string|null} [address] RegisterRequest address
             * @property {string|null} [phoneNumber] RegisterRequest phoneNumber
             */

            /**
             * Constructs a new RegisterRequest.
             * @memberof cbs.customer_auth_service
             * @classdesc Represents a RegisterRequest.
             * @implements IRegisterRequest
             * @constructor
             * @param {cbs.customer_auth_service.IRegisterRequest=} [properties] Properties to set
             */
            function RegisterRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RegisterRequest name.
             * @member {string} name
             * @memberof cbs.customer_auth_service.RegisterRequest
             * @instance
             */
            RegisterRequest.prototype.name = "";

            /**
             * RegisterRequest email.
             * @member {string} email
             * @memberof cbs.customer_auth_service.RegisterRequest
             * @instance
             */
            RegisterRequest.prototype.email = "";

            /**
             * RegisterRequest address.
             * @member {string} address
             * @memberof cbs.customer_auth_service.RegisterRequest
             * @instance
             */
            RegisterRequest.prototype.address = "";

            /**
             * RegisterRequest phoneNumber.
             * @member {string} phoneNumber
             * @memberof cbs.customer_auth_service.RegisterRequest
             * @instance
             */
            RegisterRequest.prototype.phoneNumber = "";

            /**
             * Creates a new RegisterRequest instance using the specified properties.
             * @function create
             * @memberof cbs.customer_auth_service.RegisterRequest
             * @static
             * @param {cbs.customer_auth_service.IRegisterRequest=} [properties] Properties to set
             * @returns {cbs.customer_auth_service.RegisterRequest} RegisterRequest instance
             */
            RegisterRequest.create = function create(properties) {
                return new RegisterRequest(properties);
            };

            /**
             * Encodes the specified RegisterRequest message. Does not implicitly {@link cbs.customer_auth_service.RegisterRequest.verify|verify} messages.
             * @function encode
             * @memberof cbs.customer_auth_service.RegisterRequest
             * @static
             * @param {cbs.customer_auth_service.IRegisterRequest} message RegisterRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RegisterRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.email);
                if (message.address != null && Object.hasOwnProperty.call(message, "address"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.address);
                if (message.phoneNumber != null && Object.hasOwnProperty.call(message, "phoneNumber"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.phoneNumber);
                return writer;
            };

            /**
             * Encodes the specified RegisterRequest message, length delimited. Does not implicitly {@link cbs.customer_auth_service.RegisterRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cbs.customer_auth_service.RegisterRequest
             * @static
             * @param {cbs.customer_auth_service.IRegisterRequest} message RegisterRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RegisterRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RegisterRequest message from the specified reader or buffer.
             * @function decode
             * @memberof cbs.customer_auth_service.RegisterRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cbs.customer_auth_service.RegisterRequest} RegisterRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RegisterRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cbs.customer_auth_service.RegisterRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.email = reader.string();
                        break;
                    case 3:
                        message.address = reader.string();
                        break;
                    case 4:
                        message.phoneNumber = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a RegisterRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cbs.customer_auth_service.RegisterRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cbs.customer_auth_service.RegisterRequest} RegisterRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RegisterRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RegisterRequest message.
             * @function verify
             * @memberof cbs.customer_auth_service.RegisterRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RegisterRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.email != null && message.hasOwnProperty("email"))
                    if (!$util.isString(message.email))
                        return "email: string expected";
                if (message.address != null && message.hasOwnProperty("address"))
                    if (!$util.isString(message.address))
                        return "address: string expected";
                if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber"))
                    if (!$util.isString(message.phoneNumber))
                        return "phoneNumber: string expected";
                return null;
            };

            /**
             * Creates a RegisterRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cbs.customer_auth_service.RegisterRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cbs.customer_auth_service.RegisterRequest} RegisterRequest
             */
            RegisterRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.cbs.customer_auth_service.RegisterRequest)
                    return object;
                var message = new $root.cbs.customer_auth_service.RegisterRequest();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.email != null)
                    message.email = String(object.email);
                if (object.address != null)
                    message.address = String(object.address);
                if (object.phoneNumber != null)
                    message.phoneNumber = String(object.phoneNumber);
                return message;
            };

            /**
             * Creates a plain object from a RegisterRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cbs.customer_auth_service.RegisterRequest
             * @static
             * @param {cbs.customer_auth_service.RegisterRequest} message RegisterRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RegisterRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.email = "";
                    object.address = "";
                    object.phoneNumber = "";
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.email != null && message.hasOwnProperty("email"))
                    object.email = message.email;
                if (message.address != null && message.hasOwnProperty("address"))
                    object.address = message.address;
                if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber"))
                    object.phoneNumber = message.phoneNumber;
                return object;
            };

            /**
             * Converts this RegisterRequest to JSON.
             * @function toJSON
             * @memberof cbs.customer_auth_service.RegisterRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RegisterRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return RegisterRequest;
        })();

        customer_auth_service.RegisterResponse = (function() {

            /**
             * Properties of a RegisterResponse.
             * @memberof cbs.customer_auth_service
             * @interface IRegisterResponse
             * @property {string|null} [status] RegisterResponse status
             * @property {string|null} [message] RegisterResponse message
             */

            /**
             * Constructs a new RegisterResponse.
             * @memberof cbs.customer_auth_service
             * @classdesc Represents a RegisterResponse.
             * @implements IRegisterResponse
             * @constructor
             * @param {cbs.customer_auth_service.IRegisterResponse=} [properties] Properties to set
             */
            function RegisterResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RegisterResponse status.
             * @member {string} status
             * @memberof cbs.customer_auth_service.RegisterResponse
             * @instance
             */
            RegisterResponse.prototype.status = "";

            /**
             * RegisterResponse message.
             * @member {string} message
             * @memberof cbs.customer_auth_service.RegisterResponse
             * @instance
             */
            RegisterResponse.prototype.message = "";

            /**
             * Creates a new RegisterResponse instance using the specified properties.
             * @function create
             * @memberof cbs.customer_auth_service.RegisterResponse
             * @static
             * @param {cbs.customer_auth_service.IRegisterResponse=} [properties] Properties to set
             * @returns {cbs.customer_auth_service.RegisterResponse} RegisterResponse instance
             */
            RegisterResponse.create = function create(properties) {
                return new RegisterResponse(properties);
            };

            /**
             * Encodes the specified RegisterResponse message. Does not implicitly {@link cbs.customer_auth_service.RegisterResponse.verify|verify} messages.
             * @function encode
             * @memberof cbs.customer_auth_service.RegisterResponse
             * @static
             * @param {cbs.customer_auth_service.IRegisterResponse} message RegisterResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RegisterResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.status);
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
                return writer;
            };

            /**
             * Encodes the specified RegisterResponse message, length delimited. Does not implicitly {@link cbs.customer_auth_service.RegisterResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cbs.customer_auth_service.RegisterResponse
             * @static
             * @param {cbs.customer_auth_service.IRegisterResponse} message RegisterResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RegisterResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RegisterResponse message from the specified reader or buffer.
             * @function decode
             * @memberof cbs.customer_auth_service.RegisterResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cbs.customer_auth_service.RegisterResponse} RegisterResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RegisterResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cbs.customer_auth_service.RegisterResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.status = reader.string();
                        break;
                    case 2:
                        message.message = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a RegisterResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cbs.customer_auth_service.RegisterResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cbs.customer_auth_service.RegisterResponse} RegisterResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RegisterResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RegisterResponse message.
             * @function verify
             * @memberof cbs.customer_auth_service.RegisterResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RegisterResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.status != null && message.hasOwnProperty("status"))
                    if (!$util.isString(message.status))
                        return "status: string expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };

            /**
             * Creates a RegisterResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cbs.customer_auth_service.RegisterResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cbs.customer_auth_service.RegisterResponse} RegisterResponse
             */
            RegisterResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.cbs.customer_auth_service.RegisterResponse)
                    return object;
                var message = new $root.cbs.customer_auth_service.RegisterResponse();
                if (object.status != null)
                    message.status = String(object.status);
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };

            /**
             * Creates a plain object from a RegisterResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cbs.customer_auth_service.RegisterResponse
             * @static
             * @param {cbs.customer_auth_service.RegisterResponse} message RegisterResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RegisterResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.status = "";
                    object.message = "";
                }
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = message.status;
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };

            /**
             * Converts this RegisterResponse to JSON.
             * @function toJSON
             * @memberof cbs.customer_auth_service.RegisterResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RegisterResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return RegisterResponse;
        })();

        return customer_auth_service;
    })();

    return cbs;
})();

module.exports = $root;
