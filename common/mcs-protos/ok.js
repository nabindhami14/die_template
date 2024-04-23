/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const cbs = $root.cbs = (() => {

    /**
     * Namespace cbs.
     * @exports cbs
     * @namespace
     */
    const cbs = {};

    cbs.admin_service = (function() {

        /**
         * Namespace admin_service.
         * @memberof cbs
         * @namespace
         */
        const admin_service = {};

        admin_service.rpc = (function() {

            /**
             * Namespace rpc.
             * @memberof cbs.admin_service
             * @namespace
             */
            const rpc = {};

            rpc.AdminService = (function() {

                /**
                 * Constructs a new AdminService service.
                 * @memberof cbs.admin_service.rpc
                 * @classdesc Represents an AdminService
                 * @extends $protobuf.rpc.Service
                 * @constructor
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 */
                function AdminService(rpcImpl, requestDelimited, responseDelimited) {
                    $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                }

                (AdminService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = AdminService;

                /**
                 * Creates new AdminService service using the specified rpc implementation.
                 * @function create
                 * @memberof cbs.admin_service.rpc.AdminService
                 * @static
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 * @returns {AdminService} RPC service. Useful where requests and/or responses are streamed.
                 */
                AdminService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                    return new this(rpcImpl, requestDelimited, responseDelimited);
                };

                /**
                 * Callback as used by {@link cbs.admin_service.rpc.AdminService#loginAdmin}.
                 * @memberof cbs.admin_service.rpc.AdminService
                 * @typedef loginAdminCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {cbs.admin_service.LoginResponse} [response] LoginResponse
                 */

                /**
                 * Calls loginAdmin.
                 * @function loginAdmin
                 * @memberof cbs.admin_service.rpc.AdminService
                 * @instance
                 * @param {cbs.admin_service.ILoginRequest} request LoginRequest message or plain object
                 * @param {cbs.admin_service.rpc.AdminService.loginAdminCallback} callback Node-style callback called with the error, if any, and LoginResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(AdminService.prototype.loginAdmin = function loginAdmin(request, callback) {
                    return this.rpcCall(loginAdmin, $root.cbs.admin_service.LoginRequest, $root.cbs.admin_service.LoginResponse, request, callback);
                }, "name", { value: "loginAdmin" });

                /**
                 * Calls loginAdmin.
                 * @function loginAdmin
                 * @memberof cbs.admin_service.rpc.AdminService
                 * @instance
                 * @param {cbs.admin_service.ILoginRequest} request LoginRequest message or plain object
                 * @returns {Promise<cbs.admin_service.LoginResponse>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link cbs.admin_service.rpc.AdminService#createCustomer}.
                 * @memberof cbs.admin_service.rpc.AdminService
                 * @typedef createCustomerCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {cbs.admin_service.CreateCustomerResponse} [response] CreateCustomerResponse
                 */

                /**
                 * Calls createCustomer.
                 * @function createCustomer
                 * @memberof cbs.admin_service.rpc.AdminService
                 * @instance
                 * @param {cbs.admin_service.ICreateCustomerRequest} request CreateCustomerRequest message or plain object
                 * @param {cbs.admin_service.rpc.AdminService.createCustomerCallback} callback Node-style callback called with the error, if any, and CreateCustomerResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(AdminService.prototype.createCustomer = function createCustomer(request, callback) {
                    return this.rpcCall(createCustomer, $root.cbs.admin_service.CreateCustomerRequest, $root.cbs.admin_service.CreateCustomerResponse, request, callback);
                }, "name", { value: "createCustomer" });

                /**
                 * Calls createCustomer.
                 * @function createCustomer
                 * @memberof cbs.admin_service.rpc.AdminService
                 * @instance
                 * @param {cbs.admin_service.ICreateCustomerRequest} request CreateCustomerRequest message or plain object
                 * @returns {Promise<cbs.admin_service.CreateCustomerResponse>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link cbs.admin_service.rpc.AdminService#bulkUpload}.
                 * @memberof cbs.admin_service.rpc.AdminService
                 * @typedef bulkUploadCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {cbs.admin_service.BulkUploadResponse} [response] BulkUploadResponse
                 */

                /**
                 * Calls bulkUpload.
                 * @function bulkUpload
                 * @memberof cbs.admin_service.rpc.AdminService
                 * @instance
                 * @param {cbs.admin_service.IBulkUploadRequest} request BulkUploadRequest message or plain object
                 * @param {cbs.admin_service.rpc.AdminService.bulkUploadCallback} callback Node-style callback called with the error, if any, and BulkUploadResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(AdminService.prototype.bulkUpload = function bulkUpload(request, callback) {
                    return this.rpcCall(bulkUpload, $root.cbs.admin_service.BulkUploadRequest, $root.cbs.admin_service.BulkUploadResponse, request, callback);
                }, "name", { value: "bulkUpload" });

                /**
                 * Calls bulkUpload.
                 * @function bulkUpload
                 * @memberof cbs.admin_service.rpc.AdminService
                 * @instance
                 * @param {cbs.admin_service.IBulkUploadRequest} request BulkUploadRequest message or plain object
                 * @returns {Promise<cbs.admin_service.BulkUploadResponse>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link cbs.admin_service.rpc.AdminService#getCustomer}.
                 * @memberof cbs.admin_service.rpc.AdminService
                 * @typedef getCustomerCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {cbs.admin_service.GetCustomerResponse} [response] GetCustomerResponse
                 */

                /**
                 * Calls getCustomer.
                 * @function getCustomer
                 * @memberof cbs.admin_service.rpc.AdminService
                 * @instance
                 * @param {cbs.admin_service.IGetCustomerRequest} request GetCustomerRequest message or plain object
                 * @param {cbs.admin_service.rpc.AdminService.getCustomerCallback} callback Node-style callback called with the error, if any, and GetCustomerResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(AdminService.prototype.getCustomer = function getCustomer(request, callback) {
                    return this.rpcCall(getCustomer, $root.cbs.admin_service.GetCustomerRequest, $root.cbs.admin_service.GetCustomerResponse, request, callback);
                }, "name", { value: "getCustomer" });

                /**
                 * Calls getCustomer.
                 * @function getCustomer
                 * @memberof cbs.admin_service.rpc.AdminService
                 * @instance
                 * @param {cbs.admin_service.IGetCustomerRequest} request GetCustomerRequest message or plain object
                 * @returns {Promise<cbs.admin_service.GetCustomerResponse>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link cbs.admin_service.rpc.AdminService#getCustomers}.
                 * @memberof cbs.admin_service.rpc.AdminService
                 * @typedef getCustomersCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {cbs.admin_service.GetCustomersResponse} [response] GetCustomersResponse
                 */

                /**
                 * Calls getCustomers.
                 * @function getCustomers
                 * @memberof cbs.admin_service.rpc.AdminService
                 * @instance
                 * @param {cbs.admin_service.IGetCustomersRequest} request GetCustomersRequest message or plain object
                 * @param {cbs.admin_service.rpc.AdminService.getCustomersCallback} callback Node-style callback called with the error, if any, and GetCustomersResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(AdminService.prototype.getCustomers = function getCustomers(request, callback) {
                    return this.rpcCall(getCustomers, $root.cbs.admin_service.GetCustomersRequest, $root.cbs.admin_service.GetCustomersResponse, request, callback);
                }, "name", { value: "getCustomers" });

                /**
                 * Calls getCustomers.
                 * @function getCustomers
                 * @memberof cbs.admin_service.rpc.AdminService
                 * @instance
                 * @param {cbs.admin_service.IGetCustomersRequest} request GetCustomersRequest message or plain object
                 * @returns {Promise<cbs.admin_service.GetCustomersResponse>} Promise
                 * @variation 2
                 */

                return AdminService;
            })();

            return rpc;
        })();

        admin_service.LoginRequest = (function() {

            /**
             * Properties of a LoginRequest.
             * @memberof cbs.admin_service
             * @interface ILoginRequest
             * @property {string|null} [email] LoginRequest email
             * @property {string|null} [password] LoginRequest password
             */

            /**
             * Constructs a new LoginRequest.
             * @memberof cbs.admin_service
             * @classdesc Represents a LoginRequest.
             * @implements ILoginRequest
             * @constructor
             * @param {cbs.admin_service.ILoginRequest=} [properties] Properties to set
             */
            function LoginRequest(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LoginRequest email.
             * @member {string} email
             * @memberof cbs.admin_service.LoginRequest
             * @instance
             */
            LoginRequest.prototype.email = "";

            /**
             * LoginRequest password.
             * @member {string} password
             * @memberof cbs.admin_service.LoginRequest
             * @instance
             */
            LoginRequest.prototype.password = "";

            /**
             * Creates a new LoginRequest instance using the specified properties.
             * @function create
             * @memberof cbs.admin_service.LoginRequest
             * @static
             * @param {cbs.admin_service.ILoginRequest=} [properties] Properties to set
             * @returns {cbs.admin_service.LoginRequest} LoginRequest instance
             */
            LoginRequest.create = function create(properties) {
                return new LoginRequest(properties);
            };

            /**
             * Encodes the specified LoginRequest message. Does not implicitly {@link cbs.admin_service.LoginRequest.verify|verify} messages.
             * @function encode
             * @memberof cbs.admin_service.LoginRequest
             * @static
             * @param {cbs.admin_service.ILoginRequest} message LoginRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LoginRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.email);
                if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
                return writer;
            };

            /**
             * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link cbs.admin_service.LoginRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cbs.admin_service.LoginRequest
             * @static
             * @param {cbs.admin_service.ILoginRequest} message LoginRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LoginRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a LoginRequest message from the specified reader or buffer.
             * @function decode
             * @memberof cbs.admin_service.LoginRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cbs.admin_service.LoginRequest} LoginRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LoginRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cbs.admin_service.LoginRequest();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.email = reader.string();
                        break;
                    case 2:
                        message.password = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cbs.admin_service.LoginRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cbs.admin_service.LoginRequest} LoginRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LoginRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a LoginRequest message.
             * @function verify
             * @memberof cbs.admin_service.LoginRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LoginRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.email != null && message.hasOwnProperty("email"))
                    if (!$util.isString(message.email))
                        return "email: string expected";
                if (message.password != null && message.hasOwnProperty("password"))
                    if (!$util.isString(message.password))
                        return "password: string expected";
                return null;
            };

            /**
             * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cbs.admin_service.LoginRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cbs.admin_service.LoginRequest} LoginRequest
             */
            LoginRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.cbs.admin_service.LoginRequest)
                    return object;
                let message = new $root.cbs.admin_service.LoginRequest();
                if (object.email != null)
                    message.email = String(object.email);
                if (object.password != null)
                    message.password = String(object.password);
                return message;
            };

            /**
             * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cbs.admin_service.LoginRequest
             * @static
             * @param {cbs.admin_service.LoginRequest} message LoginRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LoginRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.email = "";
                    object.password = "";
                }
                if (message.email != null && message.hasOwnProperty("email"))
                    object.email = message.email;
                if (message.password != null && message.hasOwnProperty("password"))
                    object.password = message.password;
                return object;
            };

            /**
             * Converts this LoginRequest to JSON.
             * @function toJSON
             * @memberof cbs.admin_service.LoginRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LoginRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return LoginRequest;
        })();

        admin_service.LoginResponse = (function() {

            /**
             * Properties of a LoginResponse.
             * @memberof cbs.admin_service
             * @interface ILoginResponse
             * @property {number|null} [status] LoginResponse status
             * @property {string|null} [accessToken] LoginResponse accessToken
             * @property {string|null} [message] LoginResponse message
             */

            /**
             * Constructs a new LoginResponse.
             * @memberof cbs.admin_service
             * @classdesc Represents a LoginResponse.
             * @implements ILoginResponse
             * @constructor
             * @param {cbs.admin_service.ILoginResponse=} [properties] Properties to set
             */
            function LoginResponse(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LoginResponse status.
             * @member {number} status
             * @memberof cbs.admin_service.LoginResponse
             * @instance
             */
            LoginResponse.prototype.status = 0;

            /**
             * LoginResponse accessToken.
             * @member {string} accessToken
             * @memberof cbs.admin_service.LoginResponse
             * @instance
             */
            LoginResponse.prototype.accessToken = "";

            /**
             * LoginResponse message.
             * @member {string} message
             * @memberof cbs.admin_service.LoginResponse
             * @instance
             */
            LoginResponse.prototype.message = "";

            /**
             * Creates a new LoginResponse instance using the specified properties.
             * @function create
             * @memberof cbs.admin_service.LoginResponse
             * @static
             * @param {cbs.admin_service.ILoginResponse=} [properties] Properties to set
             * @returns {cbs.admin_service.LoginResponse} LoginResponse instance
             */
            LoginResponse.create = function create(properties) {
                return new LoginResponse(properties);
            };

            /**
             * Encodes the specified LoginResponse message. Does not implicitly {@link cbs.admin_service.LoginResponse.verify|verify} messages.
             * @function encode
             * @memberof cbs.admin_service.LoginResponse
             * @static
             * @param {cbs.admin_service.ILoginResponse} message LoginResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LoginResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
                if (message.accessToken != null && Object.hasOwnProperty.call(message, "accessToken"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.accessToken);
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.message);
                return writer;
            };

            /**
             * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link cbs.admin_service.LoginResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cbs.admin_service.LoginResponse
             * @static
             * @param {cbs.admin_service.ILoginResponse} message LoginResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LoginResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a LoginResponse message from the specified reader or buffer.
             * @function decode
             * @memberof cbs.admin_service.LoginResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cbs.admin_service.LoginResponse} LoginResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LoginResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cbs.admin_service.LoginResponse();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.status = reader.int32();
                        break;
                    case 2:
                        message.accessToken = reader.string();
                        break;
                    case 3:
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
             * Decodes a LoginResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cbs.admin_service.LoginResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cbs.admin_service.LoginResponse} LoginResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LoginResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a LoginResponse message.
             * @function verify
             * @memberof cbs.admin_service.LoginResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LoginResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.status != null && message.hasOwnProperty("status"))
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                if (message.accessToken != null && message.hasOwnProperty("accessToken"))
                    if (!$util.isString(message.accessToken))
                        return "accessToken: string expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };

            /**
             * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cbs.admin_service.LoginResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cbs.admin_service.LoginResponse} LoginResponse
             */
            LoginResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.cbs.admin_service.LoginResponse)
                    return object;
                let message = new $root.cbs.admin_service.LoginResponse();
                if (object.status != null)
                    message.status = object.status | 0;
                if (object.accessToken != null)
                    message.accessToken = String(object.accessToken);
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };

            /**
             * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cbs.admin_service.LoginResponse
             * @static
             * @param {cbs.admin_service.LoginResponse} message LoginResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LoginResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.status = 0;
                    object.accessToken = "";
                    object.message = "";
                }
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = message.status;
                if (message.accessToken != null && message.hasOwnProperty("accessToken"))
                    object.accessToken = message.accessToken;
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };

            /**
             * Converts this LoginResponse to JSON.
             * @function toJSON
             * @memberof cbs.admin_service.LoginResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LoginResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return LoginResponse;
        })();

        admin_service.BulkUploadRequest = (function() {

            /**
             * Properties of a BulkUploadRequest.
             * @memberof cbs.admin_service
             * @interface IBulkUploadRequest
             * @property {number|null} [id] BulkUploadRequest id
             * @property {string|null} [filePath] BulkUploadRequest filePath
             */

            /**
             * Constructs a new BulkUploadRequest.
             * @memberof cbs.admin_service
             * @classdesc Represents a BulkUploadRequest.
             * @implements IBulkUploadRequest
             * @constructor
             * @param {cbs.admin_service.IBulkUploadRequest=} [properties] Properties to set
             */
            function BulkUploadRequest(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BulkUploadRequest id.
             * @member {number} id
             * @memberof cbs.admin_service.BulkUploadRequest
             * @instance
             */
            BulkUploadRequest.prototype.id = 0;

            /**
             * BulkUploadRequest filePath.
             * @member {string} filePath
             * @memberof cbs.admin_service.BulkUploadRequest
             * @instance
             */
            BulkUploadRequest.prototype.filePath = "";

            /**
             * Creates a new BulkUploadRequest instance using the specified properties.
             * @function create
             * @memberof cbs.admin_service.BulkUploadRequest
             * @static
             * @param {cbs.admin_service.IBulkUploadRequest=} [properties] Properties to set
             * @returns {cbs.admin_service.BulkUploadRequest} BulkUploadRequest instance
             */
            BulkUploadRequest.create = function create(properties) {
                return new BulkUploadRequest(properties);
            };

            /**
             * Encodes the specified BulkUploadRequest message. Does not implicitly {@link cbs.admin_service.BulkUploadRequest.verify|verify} messages.
             * @function encode
             * @memberof cbs.admin_service.BulkUploadRequest
             * @static
             * @param {cbs.admin_service.IBulkUploadRequest} message BulkUploadRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BulkUploadRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                if (message.filePath != null && Object.hasOwnProperty.call(message, "filePath"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.filePath);
                return writer;
            };

            /**
             * Encodes the specified BulkUploadRequest message, length delimited. Does not implicitly {@link cbs.admin_service.BulkUploadRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cbs.admin_service.BulkUploadRequest
             * @static
             * @param {cbs.admin_service.IBulkUploadRequest} message BulkUploadRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BulkUploadRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BulkUploadRequest message from the specified reader or buffer.
             * @function decode
             * @memberof cbs.admin_service.BulkUploadRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cbs.admin_service.BulkUploadRequest} BulkUploadRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BulkUploadRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cbs.admin_service.BulkUploadRequest();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.int32();
                        break;
                    case 2:
                        message.filePath = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a BulkUploadRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cbs.admin_service.BulkUploadRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cbs.admin_service.BulkUploadRequest} BulkUploadRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BulkUploadRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BulkUploadRequest message.
             * @function verify
             * @memberof cbs.admin_service.BulkUploadRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BulkUploadRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                if (message.filePath != null && message.hasOwnProperty("filePath"))
                    if (!$util.isString(message.filePath))
                        return "filePath: string expected";
                return null;
            };

            /**
             * Creates a BulkUploadRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cbs.admin_service.BulkUploadRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cbs.admin_service.BulkUploadRequest} BulkUploadRequest
             */
            BulkUploadRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.cbs.admin_service.BulkUploadRequest)
                    return object;
                let message = new $root.cbs.admin_service.BulkUploadRequest();
                if (object.id != null)
                    message.id = object.id | 0;
                if (object.filePath != null)
                    message.filePath = String(object.filePath);
                return message;
            };

            /**
             * Creates a plain object from a BulkUploadRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cbs.admin_service.BulkUploadRequest
             * @static
             * @param {cbs.admin_service.BulkUploadRequest} message BulkUploadRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BulkUploadRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.id = 0;
                    object.filePath = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.filePath != null && message.hasOwnProperty("filePath"))
                    object.filePath = message.filePath;
                return object;
            };

            /**
             * Converts this BulkUploadRequest to JSON.
             * @function toJSON
             * @memberof cbs.admin_service.BulkUploadRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BulkUploadRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return BulkUploadRequest;
        })();

        admin_service.BulkUploadResponse = (function() {

            /**
             * Properties of a BulkUploadResponse.
             * @memberof cbs.admin_service
             * @interface IBulkUploadResponse
             * @property {number|null} [status] BulkUploadResponse status
             * @property {string|null} [message] BulkUploadResponse message
             */

            /**
             * Constructs a new BulkUploadResponse.
             * @memberof cbs.admin_service
             * @classdesc Represents a BulkUploadResponse.
             * @implements IBulkUploadResponse
             * @constructor
             * @param {cbs.admin_service.IBulkUploadResponse=} [properties] Properties to set
             */
            function BulkUploadResponse(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BulkUploadResponse status.
             * @member {number} status
             * @memberof cbs.admin_service.BulkUploadResponse
             * @instance
             */
            BulkUploadResponse.prototype.status = 0;

            /**
             * BulkUploadResponse message.
             * @member {string} message
             * @memberof cbs.admin_service.BulkUploadResponse
             * @instance
             */
            BulkUploadResponse.prototype.message = "";

            /**
             * Creates a new BulkUploadResponse instance using the specified properties.
             * @function create
             * @memberof cbs.admin_service.BulkUploadResponse
             * @static
             * @param {cbs.admin_service.IBulkUploadResponse=} [properties] Properties to set
             * @returns {cbs.admin_service.BulkUploadResponse} BulkUploadResponse instance
             */
            BulkUploadResponse.create = function create(properties) {
                return new BulkUploadResponse(properties);
            };

            /**
             * Encodes the specified BulkUploadResponse message. Does not implicitly {@link cbs.admin_service.BulkUploadResponse.verify|verify} messages.
             * @function encode
             * @memberof cbs.admin_service.BulkUploadResponse
             * @static
             * @param {cbs.admin_service.IBulkUploadResponse} message BulkUploadResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BulkUploadResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
                return writer;
            };

            /**
             * Encodes the specified BulkUploadResponse message, length delimited. Does not implicitly {@link cbs.admin_service.BulkUploadResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cbs.admin_service.BulkUploadResponse
             * @static
             * @param {cbs.admin_service.IBulkUploadResponse} message BulkUploadResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BulkUploadResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BulkUploadResponse message from the specified reader or buffer.
             * @function decode
             * @memberof cbs.admin_service.BulkUploadResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cbs.admin_service.BulkUploadResponse} BulkUploadResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BulkUploadResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cbs.admin_service.BulkUploadResponse();
                while (reader.pos < end) {
                    let tag = reader.uint32();
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
             * Decodes a BulkUploadResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cbs.admin_service.BulkUploadResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cbs.admin_service.BulkUploadResponse} BulkUploadResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BulkUploadResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BulkUploadResponse message.
             * @function verify
             * @memberof cbs.admin_service.BulkUploadResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BulkUploadResponse.verify = function verify(message) {
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
             * Creates a BulkUploadResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cbs.admin_service.BulkUploadResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cbs.admin_service.BulkUploadResponse} BulkUploadResponse
             */
            BulkUploadResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.cbs.admin_service.BulkUploadResponse)
                    return object;
                let message = new $root.cbs.admin_service.BulkUploadResponse();
                if (object.status != null)
                    message.status = object.status | 0;
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };

            /**
             * Creates a plain object from a BulkUploadResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cbs.admin_service.BulkUploadResponse
             * @static
             * @param {cbs.admin_service.BulkUploadResponse} message BulkUploadResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BulkUploadResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
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
             * Converts this BulkUploadResponse to JSON.
             * @function toJSON
             * @memberof cbs.admin_service.BulkUploadResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BulkUploadResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return BulkUploadResponse;
        })();

        admin_service.CreateCustomerRequest = (function() {

            /**
             * Properties of a CreateCustomerRequest.
             * @memberof cbs.admin_service
             * @interface ICreateCustomerRequest
             * @property {string|null} [name] CreateCustomerRequest name
             * @property {string|null} [email] CreateCustomerRequest email
             * @property {string|null} [password] CreateCustomerRequest password
             * @property {string|null} [address] CreateCustomerRequest address
             * @property {string|null} [phoneNumber] CreateCustomerRequest phoneNumber
             * @property {string|null} [money] CreateCustomerRequest money
             */

            /**
             * Constructs a new CreateCustomerRequest.
             * @memberof cbs.admin_service
             * @classdesc Represents a CreateCustomerRequest.
             * @implements ICreateCustomerRequest
             * @constructor
             * @param {cbs.admin_service.ICreateCustomerRequest=} [properties] Properties to set
             */
            function CreateCustomerRequest(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CreateCustomerRequest name.
             * @member {string} name
             * @memberof cbs.admin_service.CreateCustomerRequest
             * @instance
             */
            CreateCustomerRequest.prototype.name = "";

            /**
             * CreateCustomerRequest email.
             * @member {string} email
             * @memberof cbs.admin_service.CreateCustomerRequest
             * @instance
             */
            CreateCustomerRequest.prototype.email = "";

            /**
             * CreateCustomerRequest password.
             * @member {string} password
             * @memberof cbs.admin_service.CreateCustomerRequest
             * @instance
             */
            CreateCustomerRequest.prototype.password = "";

            /**
             * CreateCustomerRequest address.
             * @member {string} address
             * @memberof cbs.admin_service.CreateCustomerRequest
             * @instance
             */
            CreateCustomerRequest.prototype.address = "";

            /**
             * CreateCustomerRequest phoneNumber.
             * @member {string} phoneNumber
             * @memberof cbs.admin_service.CreateCustomerRequest
             * @instance
             */
            CreateCustomerRequest.prototype.phoneNumber = "";

            /**
             * CreateCustomerRequest money.
             * @member {string} money
             * @memberof cbs.admin_service.CreateCustomerRequest
             * @instance
             */
            CreateCustomerRequest.prototype.money = "";

            /**
             * Creates a new CreateCustomerRequest instance using the specified properties.
             * @function create
             * @memberof cbs.admin_service.CreateCustomerRequest
             * @static
             * @param {cbs.admin_service.ICreateCustomerRequest=} [properties] Properties to set
             * @returns {cbs.admin_service.CreateCustomerRequest} CreateCustomerRequest instance
             */
            CreateCustomerRequest.create = function create(properties) {
                return new CreateCustomerRequest(properties);
            };

            /**
             * Encodes the specified CreateCustomerRequest message. Does not implicitly {@link cbs.admin_service.CreateCustomerRequest.verify|verify} messages.
             * @function encode
             * @memberof cbs.admin_service.CreateCustomerRequest
             * @static
             * @param {cbs.admin_service.ICreateCustomerRequest} message CreateCustomerRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateCustomerRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.email);
                if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.password);
                if (message.address != null && Object.hasOwnProperty.call(message, "address"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.address);
                if (message.phoneNumber != null && Object.hasOwnProperty.call(message, "phoneNumber"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.phoneNumber);
                if (message.money != null && Object.hasOwnProperty.call(message, "money"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.money);
                return writer;
            };

            /**
             * Encodes the specified CreateCustomerRequest message, length delimited. Does not implicitly {@link cbs.admin_service.CreateCustomerRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cbs.admin_service.CreateCustomerRequest
             * @static
             * @param {cbs.admin_service.ICreateCustomerRequest} message CreateCustomerRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateCustomerRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CreateCustomerRequest message from the specified reader or buffer.
             * @function decode
             * @memberof cbs.admin_service.CreateCustomerRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cbs.admin_service.CreateCustomerRequest} CreateCustomerRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateCustomerRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cbs.admin_service.CreateCustomerRequest();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.email = reader.string();
                        break;
                    case 3:
                        message.password = reader.string();
                        break;
                    case 4:
                        message.address = reader.string();
                        break;
                    case 5:
                        message.phoneNumber = reader.string();
                        break;
                    case 6:
                        message.money = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CreateCustomerRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cbs.admin_service.CreateCustomerRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cbs.admin_service.CreateCustomerRequest} CreateCustomerRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateCustomerRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CreateCustomerRequest message.
             * @function verify
             * @memberof cbs.admin_service.CreateCustomerRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CreateCustomerRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.email != null && message.hasOwnProperty("email"))
                    if (!$util.isString(message.email))
                        return "email: string expected";
                if (message.password != null && message.hasOwnProperty("password"))
                    if (!$util.isString(message.password))
                        return "password: string expected";
                if (message.address != null && message.hasOwnProperty("address"))
                    if (!$util.isString(message.address))
                        return "address: string expected";
                if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber"))
                    if (!$util.isString(message.phoneNumber))
                        return "phoneNumber: string expected";
                if (message.money != null && message.hasOwnProperty("money"))
                    if (!$util.isString(message.money))
                        return "money: string expected";
                return null;
            };

            /**
             * Creates a CreateCustomerRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cbs.admin_service.CreateCustomerRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cbs.admin_service.CreateCustomerRequest} CreateCustomerRequest
             */
            CreateCustomerRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.cbs.admin_service.CreateCustomerRequest)
                    return object;
                let message = new $root.cbs.admin_service.CreateCustomerRequest();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.email != null)
                    message.email = String(object.email);
                if (object.password != null)
                    message.password = String(object.password);
                if (object.address != null)
                    message.address = String(object.address);
                if (object.phoneNumber != null)
                    message.phoneNumber = String(object.phoneNumber);
                if (object.money != null)
                    message.money = String(object.money);
                return message;
            };

            /**
             * Creates a plain object from a CreateCustomerRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cbs.admin_service.CreateCustomerRequest
             * @static
             * @param {cbs.admin_service.CreateCustomerRequest} message CreateCustomerRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CreateCustomerRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.name = "";
                    object.email = "";
                    object.password = "";
                    object.address = "";
                    object.phoneNumber = "";
                    object.money = "";
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.email != null && message.hasOwnProperty("email"))
                    object.email = message.email;
                if (message.password != null && message.hasOwnProperty("password"))
                    object.password = message.password;
                if (message.address != null && message.hasOwnProperty("address"))
                    object.address = message.address;
                if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber"))
                    object.phoneNumber = message.phoneNumber;
                if (message.money != null && message.hasOwnProperty("money"))
                    object.money = message.money;
                return object;
            };

            /**
             * Converts this CreateCustomerRequest to JSON.
             * @function toJSON
             * @memberof cbs.admin_service.CreateCustomerRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CreateCustomerRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return CreateCustomerRequest;
        })();

        admin_service.CreateCustomerResponse = (function() {

            /**
             * Properties of a CreateCustomerResponse.
             * @memberof cbs.admin_service
             * @interface ICreateCustomerResponse
             * @property {string|null} [status] CreateCustomerResponse status
             * @property {string|null} [message] CreateCustomerResponse message
             */

            /**
             * Constructs a new CreateCustomerResponse.
             * @memberof cbs.admin_service
             * @classdesc Represents a CreateCustomerResponse.
             * @implements ICreateCustomerResponse
             * @constructor
             * @param {cbs.admin_service.ICreateCustomerResponse=} [properties] Properties to set
             */
            function CreateCustomerResponse(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CreateCustomerResponse status.
             * @member {string} status
             * @memberof cbs.admin_service.CreateCustomerResponse
             * @instance
             */
            CreateCustomerResponse.prototype.status = "";

            /**
             * CreateCustomerResponse message.
             * @member {string} message
             * @memberof cbs.admin_service.CreateCustomerResponse
             * @instance
             */
            CreateCustomerResponse.prototype.message = "";

            /**
             * Creates a new CreateCustomerResponse instance using the specified properties.
             * @function create
             * @memberof cbs.admin_service.CreateCustomerResponse
             * @static
             * @param {cbs.admin_service.ICreateCustomerResponse=} [properties] Properties to set
             * @returns {cbs.admin_service.CreateCustomerResponse} CreateCustomerResponse instance
             */
            CreateCustomerResponse.create = function create(properties) {
                return new CreateCustomerResponse(properties);
            };

            /**
             * Encodes the specified CreateCustomerResponse message. Does not implicitly {@link cbs.admin_service.CreateCustomerResponse.verify|verify} messages.
             * @function encode
             * @memberof cbs.admin_service.CreateCustomerResponse
             * @static
             * @param {cbs.admin_service.ICreateCustomerResponse} message CreateCustomerResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateCustomerResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.status);
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
                return writer;
            };

            /**
             * Encodes the specified CreateCustomerResponse message, length delimited. Does not implicitly {@link cbs.admin_service.CreateCustomerResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cbs.admin_service.CreateCustomerResponse
             * @static
             * @param {cbs.admin_service.ICreateCustomerResponse} message CreateCustomerResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateCustomerResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CreateCustomerResponse message from the specified reader or buffer.
             * @function decode
             * @memberof cbs.admin_service.CreateCustomerResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cbs.admin_service.CreateCustomerResponse} CreateCustomerResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateCustomerResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cbs.admin_service.CreateCustomerResponse();
                while (reader.pos < end) {
                    let tag = reader.uint32();
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
             * Decodes a CreateCustomerResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cbs.admin_service.CreateCustomerResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cbs.admin_service.CreateCustomerResponse} CreateCustomerResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateCustomerResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CreateCustomerResponse message.
             * @function verify
             * @memberof cbs.admin_service.CreateCustomerResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CreateCustomerResponse.verify = function verify(message) {
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
             * Creates a CreateCustomerResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cbs.admin_service.CreateCustomerResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cbs.admin_service.CreateCustomerResponse} CreateCustomerResponse
             */
            CreateCustomerResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.cbs.admin_service.CreateCustomerResponse)
                    return object;
                let message = new $root.cbs.admin_service.CreateCustomerResponse();
                if (object.status != null)
                    message.status = String(object.status);
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };

            /**
             * Creates a plain object from a CreateCustomerResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cbs.admin_service.CreateCustomerResponse
             * @static
             * @param {cbs.admin_service.CreateCustomerResponse} message CreateCustomerResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CreateCustomerResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
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
             * Converts this CreateCustomerResponse to JSON.
             * @function toJSON
             * @memberof cbs.admin_service.CreateCustomerResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CreateCustomerResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return CreateCustomerResponse;
        })();

        admin_service.Customer = (function() {

            /**
             * Properties of a Customer.
             * @memberof cbs.admin_service
             * @interface ICustomer
             * @property {string|null} [id] Customer id
             * @property {string|null} [name] Customer name
             * @property {string|null} [email] Customer email
             * @property {string|null} [address] Customer address
             * @property {string|null} [phoneNumber] Customer phoneNumber
             * @property {string|null} [money] Customer money
             */

            /**
             * Constructs a new Customer.
             * @memberof cbs.admin_service
             * @classdesc Represents a Customer.
             * @implements ICustomer
             * @constructor
             * @param {cbs.admin_service.ICustomer=} [properties] Properties to set
             */
            function Customer(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Customer id.
             * @member {string} id
             * @memberof cbs.admin_service.Customer
             * @instance
             */
            Customer.prototype.id = "";

            /**
             * Customer name.
             * @member {string} name
             * @memberof cbs.admin_service.Customer
             * @instance
             */
            Customer.prototype.name = "";

            /**
             * Customer email.
             * @member {string} email
             * @memberof cbs.admin_service.Customer
             * @instance
             */
            Customer.prototype.email = "";

            /**
             * Customer address.
             * @member {string} address
             * @memberof cbs.admin_service.Customer
             * @instance
             */
            Customer.prototype.address = "";

            /**
             * Customer phoneNumber.
             * @member {string} phoneNumber
             * @memberof cbs.admin_service.Customer
             * @instance
             */
            Customer.prototype.phoneNumber = "";

            /**
             * Customer money.
             * @member {string} money
             * @memberof cbs.admin_service.Customer
             * @instance
             */
            Customer.prototype.money = "";

            /**
             * Creates a new Customer instance using the specified properties.
             * @function create
             * @memberof cbs.admin_service.Customer
             * @static
             * @param {cbs.admin_service.ICustomer=} [properties] Properties to set
             * @returns {cbs.admin_service.Customer} Customer instance
             */
            Customer.create = function create(properties) {
                return new Customer(properties);
            };

            /**
             * Encodes the specified Customer message. Does not implicitly {@link cbs.admin_service.Customer.verify|verify} messages.
             * @function encode
             * @memberof cbs.admin_service.Customer
             * @static
             * @param {cbs.admin_service.ICustomer} message Customer message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Customer.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.email);
                if (message.address != null && Object.hasOwnProperty.call(message, "address"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.address);
                if (message.phoneNumber != null && Object.hasOwnProperty.call(message, "phoneNumber"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.phoneNumber);
                if (message.money != null && Object.hasOwnProperty.call(message, "money"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.money);
                return writer;
            };

            /**
             * Encodes the specified Customer message, length delimited. Does not implicitly {@link cbs.admin_service.Customer.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cbs.admin_service.Customer
             * @static
             * @param {cbs.admin_service.ICustomer} message Customer message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Customer.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Customer message from the specified reader or buffer.
             * @function decode
             * @memberof cbs.admin_service.Customer
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cbs.admin_service.Customer} Customer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Customer.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cbs.admin_service.Customer();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.name = reader.string();
                        break;
                    case 3:
                        message.email = reader.string();
                        break;
                    case 4:
                        message.address = reader.string();
                        break;
                    case 5:
                        message.phoneNumber = reader.string();
                        break;
                    case 6:
                        message.money = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Customer message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cbs.admin_service.Customer
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cbs.admin_service.Customer} Customer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Customer.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Customer message.
             * @function verify
             * @memberof cbs.admin_service.Customer
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Customer.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
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
                if (message.money != null && message.hasOwnProperty("money"))
                    if (!$util.isString(message.money))
                        return "money: string expected";
                return null;
            };

            /**
             * Creates a Customer message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cbs.admin_service.Customer
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cbs.admin_service.Customer} Customer
             */
            Customer.fromObject = function fromObject(object) {
                if (object instanceof $root.cbs.admin_service.Customer)
                    return object;
                let message = new $root.cbs.admin_service.Customer();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.name != null)
                    message.name = String(object.name);
                if (object.email != null)
                    message.email = String(object.email);
                if (object.address != null)
                    message.address = String(object.address);
                if (object.phoneNumber != null)
                    message.phoneNumber = String(object.phoneNumber);
                if (object.money != null)
                    message.money = String(object.money);
                return message;
            };

            /**
             * Creates a plain object from a Customer message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cbs.admin_service.Customer
             * @static
             * @param {cbs.admin_service.Customer} message Customer
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Customer.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.id = "";
                    object.name = "";
                    object.email = "";
                    object.address = "";
                    object.phoneNumber = "";
                    object.money = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.email != null && message.hasOwnProperty("email"))
                    object.email = message.email;
                if (message.address != null && message.hasOwnProperty("address"))
                    object.address = message.address;
                if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber"))
                    object.phoneNumber = message.phoneNumber;
                if (message.money != null && message.hasOwnProperty("money"))
                    object.money = message.money;
                return object;
            };

            /**
             * Converts this Customer to JSON.
             * @function toJSON
             * @memberof cbs.admin_service.Customer
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Customer.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Customer;
        })();

        admin_service.GetCustomerRequest = (function() {

            /**
             * Properties of a GetCustomerRequest.
             * @memberof cbs.admin_service
             * @interface IGetCustomerRequest
             * @property {number|null} [id] GetCustomerRequest id
             * @property {number|null} [customerId] GetCustomerRequest customerId
             */

            /**
             * Constructs a new GetCustomerRequest.
             * @memberof cbs.admin_service
             * @classdesc Represents a GetCustomerRequest.
             * @implements IGetCustomerRequest
             * @constructor
             * @param {cbs.admin_service.IGetCustomerRequest=} [properties] Properties to set
             */
            function GetCustomerRequest(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GetCustomerRequest id.
             * @member {number} id
             * @memberof cbs.admin_service.GetCustomerRequest
             * @instance
             */
            GetCustomerRequest.prototype.id = 0;

            /**
             * GetCustomerRequest customerId.
             * @member {number} customerId
             * @memberof cbs.admin_service.GetCustomerRequest
             * @instance
             */
            GetCustomerRequest.prototype.customerId = 0;

            /**
             * Creates a new GetCustomerRequest instance using the specified properties.
             * @function create
             * @memberof cbs.admin_service.GetCustomerRequest
             * @static
             * @param {cbs.admin_service.IGetCustomerRequest=} [properties] Properties to set
             * @returns {cbs.admin_service.GetCustomerRequest} GetCustomerRequest instance
             */
            GetCustomerRequest.create = function create(properties) {
                return new GetCustomerRequest(properties);
            };

            /**
             * Encodes the specified GetCustomerRequest message. Does not implicitly {@link cbs.admin_service.GetCustomerRequest.verify|verify} messages.
             * @function encode
             * @memberof cbs.admin_service.GetCustomerRequest
             * @static
             * @param {cbs.admin_service.IGetCustomerRequest} message GetCustomerRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetCustomerRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                if (message.customerId != null && Object.hasOwnProperty.call(message, "customerId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.customerId);
                return writer;
            };

            /**
             * Encodes the specified GetCustomerRequest message, length delimited. Does not implicitly {@link cbs.admin_service.GetCustomerRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cbs.admin_service.GetCustomerRequest
             * @static
             * @param {cbs.admin_service.IGetCustomerRequest} message GetCustomerRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetCustomerRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetCustomerRequest message from the specified reader or buffer.
             * @function decode
             * @memberof cbs.admin_service.GetCustomerRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cbs.admin_service.GetCustomerRequest} GetCustomerRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetCustomerRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cbs.admin_service.GetCustomerRequest();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.int32();
                        break;
                    case 2:
                        message.customerId = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GetCustomerRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cbs.admin_service.GetCustomerRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cbs.admin_service.GetCustomerRequest} GetCustomerRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetCustomerRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetCustomerRequest message.
             * @function verify
             * @memberof cbs.admin_service.GetCustomerRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetCustomerRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                if (message.customerId != null && message.hasOwnProperty("customerId"))
                    if (!$util.isInteger(message.customerId))
                        return "customerId: integer expected";
                return null;
            };

            /**
             * Creates a GetCustomerRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cbs.admin_service.GetCustomerRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cbs.admin_service.GetCustomerRequest} GetCustomerRequest
             */
            GetCustomerRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.cbs.admin_service.GetCustomerRequest)
                    return object;
                let message = new $root.cbs.admin_service.GetCustomerRequest();
                if (object.id != null)
                    message.id = object.id | 0;
                if (object.customerId != null)
                    message.customerId = object.customerId | 0;
                return message;
            };

            /**
             * Creates a plain object from a GetCustomerRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cbs.admin_service.GetCustomerRequest
             * @static
             * @param {cbs.admin_service.GetCustomerRequest} message GetCustomerRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetCustomerRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.id = 0;
                    object.customerId = 0;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.customerId != null && message.hasOwnProperty("customerId"))
                    object.customerId = message.customerId;
                return object;
            };

            /**
             * Converts this GetCustomerRequest to JSON.
             * @function toJSON
             * @memberof cbs.admin_service.GetCustomerRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetCustomerRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return GetCustomerRequest;
        })();

        admin_service.GetCustomerResponse = (function() {

            /**
             * Properties of a GetCustomerResponse.
             * @memberof cbs.admin_service
             * @interface IGetCustomerResponse
             * @property {number|null} [status] GetCustomerResponse status
             * @property {cbs.admin_service.ICustomer|null} [customer] GetCustomerResponse customer
             */

            /**
             * Constructs a new GetCustomerResponse.
             * @memberof cbs.admin_service
             * @classdesc Represents a GetCustomerResponse.
             * @implements IGetCustomerResponse
             * @constructor
             * @param {cbs.admin_service.IGetCustomerResponse=} [properties] Properties to set
             */
            function GetCustomerResponse(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GetCustomerResponse status.
             * @member {number} status
             * @memberof cbs.admin_service.GetCustomerResponse
             * @instance
             */
            GetCustomerResponse.prototype.status = 0;

            /**
             * GetCustomerResponse customer.
             * @member {cbs.admin_service.ICustomer|null|undefined} customer
             * @memberof cbs.admin_service.GetCustomerResponse
             * @instance
             */
            GetCustomerResponse.prototype.customer = null;

            /**
             * Creates a new GetCustomerResponse instance using the specified properties.
             * @function create
             * @memberof cbs.admin_service.GetCustomerResponse
             * @static
             * @param {cbs.admin_service.IGetCustomerResponse=} [properties] Properties to set
             * @returns {cbs.admin_service.GetCustomerResponse} GetCustomerResponse instance
             */
            GetCustomerResponse.create = function create(properties) {
                return new GetCustomerResponse(properties);
            };

            /**
             * Encodes the specified GetCustomerResponse message. Does not implicitly {@link cbs.admin_service.GetCustomerResponse.verify|verify} messages.
             * @function encode
             * @memberof cbs.admin_service.GetCustomerResponse
             * @static
             * @param {cbs.admin_service.IGetCustomerResponse} message GetCustomerResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetCustomerResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
                if (message.customer != null && Object.hasOwnProperty.call(message, "customer"))
                    $root.cbs.admin_service.Customer.encode(message.customer, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified GetCustomerResponse message, length delimited. Does not implicitly {@link cbs.admin_service.GetCustomerResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cbs.admin_service.GetCustomerResponse
             * @static
             * @param {cbs.admin_service.IGetCustomerResponse} message GetCustomerResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetCustomerResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetCustomerResponse message from the specified reader or buffer.
             * @function decode
             * @memberof cbs.admin_service.GetCustomerResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cbs.admin_service.GetCustomerResponse} GetCustomerResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetCustomerResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cbs.admin_service.GetCustomerResponse();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.status = reader.int32();
                        break;
                    case 2:
                        message.customer = $root.cbs.admin_service.Customer.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GetCustomerResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cbs.admin_service.GetCustomerResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cbs.admin_service.GetCustomerResponse} GetCustomerResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetCustomerResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetCustomerResponse message.
             * @function verify
             * @memberof cbs.admin_service.GetCustomerResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetCustomerResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.status != null && message.hasOwnProperty("status"))
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                if (message.customer != null && message.hasOwnProperty("customer")) {
                    let error = $root.cbs.admin_service.Customer.verify(message.customer);
                    if (error)
                        return "customer." + error;
                }
                return null;
            };

            /**
             * Creates a GetCustomerResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cbs.admin_service.GetCustomerResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cbs.admin_service.GetCustomerResponse} GetCustomerResponse
             */
            GetCustomerResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.cbs.admin_service.GetCustomerResponse)
                    return object;
                let message = new $root.cbs.admin_service.GetCustomerResponse();
                if (object.status != null)
                    message.status = object.status | 0;
                if (object.customer != null) {
                    if (typeof object.customer !== "object")
                        throw TypeError(".cbs.admin_service.GetCustomerResponse.customer: object expected");
                    message.customer = $root.cbs.admin_service.Customer.fromObject(object.customer);
                }
                return message;
            };

            /**
             * Creates a plain object from a GetCustomerResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cbs.admin_service.GetCustomerResponse
             * @static
             * @param {cbs.admin_service.GetCustomerResponse} message GetCustomerResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetCustomerResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.status = 0;
                    object.customer = null;
                }
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = message.status;
                if (message.customer != null && message.hasOwnProperty("customer"))
                    object.customer = $root.cbs.admin_service.Customer.toObject(message.customer, options);
                return object;
            };

            /**
             * Converts this GetCustomerResponse to JSON.
             * @function toJSON
             * @memberof cbs.admin_service.GetCustomerResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetCustomerResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return GetCustomerResponse;
        })();

        admin_service.GetCustomersRequest = (function() {

            /**
             * Properties of a GetCustomersRequest.
             * @memberof cbs.admin_service
             * @interface IGetCustomersRequest
             * @property {number|null} [id] GetCustomersRequest id
             */

            /**
             * Constructs a new GetCustomersRequest.
             * @memberof cbs.admin_service
             * @classdesc Represents a GetCustomersRequest.
             * @implements IGetCustomersRequest
             * @constructor
             * @param {cbs.admin_service.IGetCustomersRequest=} [properties] Properties to set
             */
            function GetCustomersRequest(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GetCustomersRequest id.
             * @member {number} id
             * @memberof cbs.admin_service.GetCustomersRequest
             * @instance
             */
            GetCustomersRequest.prototype.id = 0;

            /**
             * Creates a new GetCustomersRequest instance using the specified properties.
             * @function create
             * @memberof cbs.admin_service.GetCustomersRequest
             * @static
             * @param {cbs.admin_service.IGetCustomersRequest=} [properties] Properties to set
             * @returns {cbs.admin_service.GetCustomersRequest} GetCustomersRequest instance
             */
            GetCustomersRequest.create = function create(properties) {
                return new GetCustomersRequest(properties);
            };

            /**
             * Encodes the specified GetCustomersRequest message. Does not implicitly {@link cbs.admin_service.GetCustomersRequest.verify|verify} messages.
             * @function encode
             * @memberof cbs.admin_service.GetCustomersRequest
             * @static
             * @param {cbs.admin_service.IGetCustomersRequest} message GetCustomersRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetCustomersRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                return writer;
            };

            /**
             * Encodes the specified GetCustomersRequest message, length delimited. Does not implicitly {@link cbs.admin_service.GetCustomersRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cbs.admin_service.GetCustomersRequest
             * @static
             * @param {cbs.admin_service.IGetCustomersRequest} message GetCustomersRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetCustomersRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetCustomersRequest message from the specified reader or buffer.
             * @function decode
             * @memberof cbs.admin_service.GetCustomersRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cbs.admin_service.GetCustomersRequest} GetCustomersRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetCustomersRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cbs.admin_service.GetCustomersRequest();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GetCustomersRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cbs.admin_service.GetCustomersRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cbs.admin_service.GetCustomersRequest} GetCustomersRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetCustomersRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetCustomersRequest message.
             * @function verify
             * @memberof cbs.admin_service.GetCustomersRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetCustomersRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                return null;
            };

            /**
             * Creates a GetCustomersRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cbs.admin_service.GetCustomersRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cbs.admin_service.GetCustomersRequest} GetCustomersRequest
             */
            GetCustomersRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.cbs.admin_service.GetCustomersRequest)
                    return object;
                let message = new $root.cbs.admin_service.GetCustomersRequest();
                if (object.id != null)
                    message.id = object.id | 0;
                return message;
            };

            /**
             * Creates a plain object from a GetCustomersRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cbs.admin_service.GetCustomersRequest
             * @static
             * @param {cbs.admin_service.GetCustomersRequest} message GetCustomersRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetCustomersRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.id = 0;
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                return object;
            };

            /**
             * Converts this GetCustomersRequest to JSON.
             * @function toJSON
             * @memberof cbs.admin_service.GetCustomersRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetCustomersRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return GetCustomersRequest;
        })();

        admin_service.GetCustomersResponse = (function() {

            /**
             * Properties of a GetCustomersResponse.
             * @memberof cbs.admin_service
             * @interface IGetCustomersResponse
             * @property {number|null} [status] GetCustomersResponse status
             * @property {Array.<cbs.admin_service.ICustomer>|null} [customers] GetCustomersResponse customers
             */

            /**
             * Constructs a new GetCustomersResponse.
             * @memberof cbs.admin_service
             * @classdesc Represents a GetCustomersResponse.
             * @implements IGetCustomersResponse
             * @constructor
             * @param {cbs.admin_service.IGetCustomersResponse=} [properties] Properties to set
             */
            function GetCustomersResponse(properties) {
                this.customers = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GetCustomersResponse status.
             * @member {number} status
             * @memberof cbs.admin_service.GetCustomersResponse
             * @instance
             */
            GetCustomersResponse.prototype.status = 0;

            /**
             * GetCustomersResponse customers.
             * @member {Array.<cbs.admin_service.ICustomer>} customers
             * @memberof cbs.admin_service.GetCustomersResponse
             * @instance
             */
            GetCustomersResponse.prototype.customers = $util.emptyArray;

            /**
             * Creates a new GetCustomersResponse instance using the specified properties.
             * @function create
             * @memberof cbs.admin_service.GetCustomersResponse
             * @static
             * @param {cbs.admin_service.IGetCustomersResponse=} [properties] Properties to set
             * @returns {cbs.admin_service.GetCustomersResponse} GetCustomersResponse instance
             */
            GetCustomersResponse.create = function create(properties) {
                return new GetCustomersResponse(properties);
            };

            /**
             * Encodes the specified GetCustomersResponse message. Does not implicitly {@link cbs.admin_service.GetCustomersResponse.verify|verify} messages.
             * @function encode
             * @memberof cbs.admin_service.GetCustomersResponse
             * @static
             * @param {cbs.admin_service.IGetCustomersResponse} message GetCustomersResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetCustomersResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
                if (message.customers != null && message.customers.length)
                    for (let i = 0; i < message.customers.length; ++i)
                        $root.cbs.admin_service.Customer.encode(message.customers[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified GetCustomersResponse message, length delimited. Does not implicitly {@link cbs.admin_service.GetCustomersResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cbs.admin_service.GetCustomersResponse
             * @static
             * @param {cbs.admin_service.IGetCustomersResponse} message GetCustomersResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetCustomersResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetCustomersResponse message from the specified reader or buffer.
             * @function decode
             * @memberof cbs.admin_service.GetCustomersResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cbs.admin_service.GetCustomersResponse} GetCustomersResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetCustomersResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cbs.admin_service.GetCustomersResponse();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.status = reader.int32();
                        break;
                    case 2:
                        if (!(message.customers && message.customers.length))
                            message.customers = [];
                        message.customers.push($root.cbs.admin_service.Customer.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GetCustomersResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cbs.admin_service.GetCustomersResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cbs.admin_service.GetCustomersResponse} GetCustomersResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetCustomersResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetCustomersResponse message.
             * @function verify
             * @memberof cbs.admin_service.GetCustomersResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetCustomersResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.status != null && message.hasOwnProperty("status"))
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                if (message.customers != null && message.hasOwnProperty("customers")) {
                    if (!Array.isArray(message.customers))
                        return "customers: array expected";
                    for (let i = 0; i < message.customers.length; ++i) {
                        let error = $root.cbs.admin_service.Customer.verify(message.customers[i]);
                        if (error)
                            return "customers." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a GetCustomersResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cbs.admin_service.GetCustomersResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cbs.admin_service.GetCustomersResponse} GetCustomersResponse
             */
            GetCustomersResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.cbs.admin_service.GetCustomersResponse)
                    return object;
                let message = new $root.cbs.admin_service.GetCustomersResponse();
                if (object.status != null)
                    message.status = object.status | 0;
                if (object.customers) {
                    if (!Array.isArray(object.customers))
                        throw TypeError(".cbs.admin_service.GetCustomersResponse.customers: array expected");
                    message.customers = [];
                    for (let i = 0; i < object.customers.length; ++i) {
                        if (typeof object.customers[i] !== "object")
                            throw TypeError(".cbs.admin_service.GetCustomersResponse.customers: object expected");
                        message.customers[i] = $root.cbs.admin_service.Customer.fromObject(object.customers[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a GetCustomersResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cbs.admin_service.GetCustomersResponse
             * @static
             * @param {cbs.admin_service.GetCustomersResponse} message GetCustomersResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetCustomersResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.customers = [];
                if (options.defaults)
                    object.status = 0;
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = message.status;
                if (message.customers && message.customers.length) {
                    object.customers = [];
                    for (let j = 0; j < message.customers.length; ++j)
                        object.customers[j] = $root.cbs.admin_service.Customer.toObject(message.customers[j], options);
                }
                return object;
            };

            /**
             * Converts this GetCustomersResponse to JSON.
             * @function toJSON
             * @memberof cbs.admin_service.GetCustomersResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetCustomersResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return GetCustomersResponse;
        })();

        return admin_service;
    })();

    cbs.common = (function() {

        /**
         * Namespace common.
         * @memberof cbs
         * @namespace
         */
        const common = {};

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
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
                    for (let keys = Object.keys(message.filter), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.filter[keys[i]]).ldelim();
                if (message.order != null && Object.hasOwnProperty.call(message, "order"))
                    for (let keys = Object.keys(message.order), i = 0; i < keys.length; ++i)
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
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cbs.common.ListRequest(), key, value;
                while (reader.pos < end) {
                    let tag = reader.uint32();
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
                        end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = "";
                        while (reader.pos < end2) {
                            let tag2 = reader.uint32();
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
                        let end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = "";
                        while (reader.pos < end2) {
                            let tag2 = reader.uint32();
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
                    let key = Object.keys(message.filter);
                    for (let i = 0; i < key.length; ++i)
                        if (!$util.isString(message.filter[key[i]]))
                            return "filter: string{k:string} expected";
                }
                if (message.order != null && message.hasOwnProperty("order")) {
                    if (!$util.isObject(message.order))
                        return "order: object expected";
                    let key = Object.keys(message.order);
                    for (let i = 0; i < key.length; ++i)
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
                let message = new $root.cbs.common.ListRequest();
                if (object.currentPage != null)
                    message.currentPage = object.currentPage | 0;
                if (object.perPage != null)
                    message.perPage = object.perPage | 0;
                if (object.filter) {
                    if (typeof object.filter !== "object")
                        throw TypeError(".cbs.common.ListRequest.filter: object expected");
                    message.filter = {};
                    for (let keys = Object.keys(object.filter), i = 0; i < keys.length; ++i)
                        message.filter[keys[i]] = String(object.filter[keys[i]]);
                }
                if (object.order) {
                    if (typeof object.order !== "object")
                        throw TypeError(".cbs.common.ListRequest.order: object expected");
                    message.order = {};
                    for (let keys = Object.keys(object.order), i = 0; i < keys.length; ++i)
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
                let object = {};
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
                let keys2;
                if (message.filter && (keys2 = Object.keys(message.filter)).length) {
                    object.filter = {};
                    for (let j = 0; j < keys2.length; ++j)
                        object.filter[keys2[j]] = message.filter[keys2[j]];
                }
                if (message.order && (keys2 = Object.keys(message.order)).length) {
                    object.order = {};
                    for (let j = 0; j < keys2.length; ++j)
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
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cbs.common.GetRequest();
                while (reader.pos < end) {
                    let tag = reader.uint32();
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
                let message = new $root.cbs.common.GetRequest();
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
                let object = {};
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
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cbs.common.Empty();
                while (reader.pos < end) {
                    let tag = reader.uint32();
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
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cbs.common.Request();
                while (reader.pos < end) {
                    let tag = reader.uint32();
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
                let message = new $root.cbs.common.Request();
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
                let object = {};
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
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cbs.common.DetectChannel();
                while (reader.pos < end) {
                    let tag = reader.uint32();
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
                    let error = $root.cbs.common.Request.verify(message.detectChannel);
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
                let message = new $root.cbs.common.DetectChannel();
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
                let object = {};
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
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cbs.common.Response();
                while (reader.pos < end) {
                    let tag = reader.uint32();
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
                let message = new $root.cbs.common.Response();
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
                let object = {};
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
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cbs.common.MobileCommonResponse();
                while (reader.pos < end) {
                    let tag = reader.uint32();
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
                let message = new $root.cbs.common.MobileCommonResponse();
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
                let object = {};
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
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cbs.common.Pagination();
                while (reader.pos < end) {
                    let tag = reader.uint32();
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
                let message = new $root.cbs.common.Pagination();
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
                let object = {};
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
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cbs.common.Meta();
                while (reader.pos < end) {
                    let tag = reader.uint32();
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
                    let error = $root.cbs.common.Pagination.verify(message.pagination);
                    if (error)
                        return "pagination." + error;
                }
                if (message.response != null && message.hasOwnProperty("response")) {
                    let error = $root.cbs.common.Response.verify(message.response);
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
                let message = new $root.cbs.common.Meta();
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
                let object = {};
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
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
                    for (let i = 0; i < message.uuid.length; ++i)
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
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cbs.common.ApproveRejectRequest();
                while (reader.pos < end) {
                    let tag = reader.uint32();
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
                    for (let i = 0; i < message.uuid.length; ++i)
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
                let message = new $root.cbs.common.ApproveRejectRequest();
                if (object.uuid) {
                    if (!Array.isArray(object.uuid))
                        throw TypeError(".cbs.common.ApproveRejectRequest.uuid: array expected");
                    message.uuid = [];
                    for (let i = 0; i < object.uuid.length; ++i)
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
                let object = {};
                if (options.arrays || options.defaults)
                    object.uuid = [];
                if (options.defaults) {
                    object.action = "";
                    object.remarks = "";
                }
                if (message.uuid && message.uuid.length) {
                    object.uuid = [];
                    for (let j = 0; j < message.uuid.length; ++j)
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
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cbs.common.SingleApproveRejectRequest();
                while (reader.pos < end) {
                    let tag = reader.uint32();
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
                let message = new $root.cbs.common.SingleApproveRejectRequest();
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
                let object = {};
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
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cbs.common.ApproveRejectBatchRequest();
                while (reader.pos < end) {
                    let tag = reader.uint32();
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
                let message = new $root.cbs.common.ApproveRejectBatchRequest();
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
                let object = {};
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
        const customer_auth_service = {};

        customer_auth_service.rpc = (function() {

            /**
             * Namespace rpc.
             * @memberof cbs.customer_auth_service
             * @namespace
             */
            const rpc = {};

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
                 * Callback as used by {@link cbs.customer_auth_service.rpc.CustomerAuthService#healthCheck}.
                 * @memberof cbs.customer_auth_service.rpc.CustomerAuthService
                 * @typedef healthCheckCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {cbs.customer_auth_service.HealthCheckResponse} [response] HealthCheckResponse
                 */

                /**
                 * Calls healthCheck.
                 * @function healthCheck
                 * @memberof cbs.customer_auth_service.rpc.CustomerAuthService
                 * @instance
                 * @param {cbs.customer_auth_service.IHealthCheckRequest} request HealthCheckRequest message or plain object
                 * @param {cbs.customer_auth_service.rpc.CustomerAuthService.healthCheckCallback} callback Node-style callback called with the error, if any, and HealthCheckResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(CustomerAuthService.prototype.healthCheck = function healthCheck(request, callback) {
                    return this.rpcCall(healthCheck, $root.cbs.customer_auth_service.HealthCheckRequest, $root.cbs.customer_auth_service.HealthCheckResponse, request, callback);
                }, "name", { value: "healthCheck" });

                /**
                 * Calls healthCheck.
                 * @function healthCheck
                 * @memberof cbs.customer_auth_service.rpc.CustomerAuthService
                 * @instance
                 * @param {cbs.customer_auth_service.IHealthCheckRequest} request HealthCheckRequest message or plain object
                 * @returns {Promise<cbs.customer_auth_service.HealthCheckResponse>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link cbs.customer_auth_service.rpc.CustomerAuthService#loginCustomer}.
                 * @memberof cbs.customer_auth_service.rpc.CustomerAuthService
                 * @typedef loginCustomerCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {cbs.customer_auth_service.LoginResponse} [response] LoginResponse
                 */

                /**
                 * Calls loginCustomer.
                 * @function loginCustomer
                 * @memberof cbs.customer_auth_service.rpc.CustomerAuthService
                 * @instance
                 * @param {cbs.customer_auth_service.ILoginRequest} request LoginRequest message or plain object
                 * @param {cbs.customer_auth_service.rpc.CustomerAuthService.loginCustomerCallback} callback Node-style callback called with the error, if any, and LoginResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(CustomerAuthService.prototype.loginCustomer = function loginCustomer(request, callback) {
                    return this.rpcCall(loginCustomer, $root.cbs.customer_auth_service.LoginRequest, $root.cbs.customer_auth_service.LoginResponse, request, callback);
                }, "name", { value: "loginCustomer" });

                /**
                 * Calls loginCustomer.
                 * @function loginCustomer
                 * @memberof cbs.customer_auth_service.rpc.CustomerAuthService
                 * @instance
                 * @param {cbs.customer_auth_service.ILoginRequest} request LoginRequest message or plain object
                 * @returns {Promise<cbs.customer_auth_service.LoginResponse>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link cbs.customer_auth_service.rpc.CustomerAuthService#customerProfile}.
                 * @memberof cbs.customer_auth_service.rpc.CustomerAuthService
                 * @typedef customerProfileCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {cbs.customer_auth_service.CustomerProfileResponse} [response] CustomerProfileResponse
                 */

                /**
                 * Calls customerProfile.
                 * @function customerProfile
                 * @memberof cbs.customer_auth_service.rpc.CustomerAuthService
                 * @instance
                 * @param {cbs.customer_auth_service.ICustomerProfileRequest} request CustomerProfileRequest message or plain object
                 * @param {cbs.customer_auth_service.rpc.CustomerAuthService.customerProfileCallback} callback Node-style callback called with the error, if any, and CustomerProfileResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(CustomerAuthService.prototype.customerProfile = function customerProfile(request, callback) {
                    return this.rpcCall(customerProfile, $root.cbs.customer_auth_service.CustomerProfileRequest, $root.cbs.customer_auth_service.CustomerProfileResponse, request, callback);
                }, "name", { value: "customerProfile" });

                /**
                 * Calls customerProfile.
                 * @function customerProfile
                 * @memberof cbs.customer_auth_service.rpc.CustomerAuthService
                 * @instance
                 * @param {cbs.customer_auth_service.ICustomerProfileRequest} request CustomerProfileRequest message or plain object
                 * @returns {Promise<cbs.customer_auth_service.CustomerProfileResponse>} Promise
                 * @variation 2
                 */

                return CustomerAuthService;
            })();

            return rpc;
        })();

        customer_auth_service.LoginRequest = (function() {

            /**
             * Properties of a LoginRequest.
             * @memberof cbs.customer_auth_service
             * @interface ILoginRequest
             * @property {string|null} [email] LoginRequest email
             * @property {string|null} [password] LoginRequest password
             */

            /**
             * Constructs a new LoginRequest.
             * @memberof cbs.customer_auth_service
             * @classdesc Represents a LoginRequest.
             * @implements ILoginRequest
             * @constructor
             * @param {cbs.customer_auth_service.ILoginRequest=} [properties] Properties to set
             */
            function LoginRequest(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LoginRequest email.
             * @member {string} email
             * @memberof cbs.customer_auth_service.LoginRequest
             * @instance
             */
            LoginRequest.prototype.email = "";

            /**
             * LoginRequest password.
             * @member {string} password
             * @memberof cbs.customer_auth_service.LoginRequest
             * @instance
             */
            LoginRequest.prototype.password = "";

            /**
             * Creates a new LoginRequest instance using the specified properties.
             * @function create
             * @memberof cbs.customer_auth_service.LoginRequest
             * @static
             * @param {cbs.customer_auth_service.ILoginRequest=} [properties] Properties to set
             * @returns {cbs.customer_auth_service.LoginRequest} LoginRequest instance
             */
            LoginRequest.create = function create(properties) {
                return new LoginRequest(properties);
            };

            /**
             * Encodes the specified LoginRequest message. Does not implicitly {@link cbs.customer_auth_service.LoginRequest.verify|verify} messages.
             * @function encode
             * @memberof cbs.customer_auth_service.LoginRequest
             * @static
             * @param {cbs.customer_auth_service.ILoginRequest} message LoginRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LoginRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.email);
                if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
                return writer;
            };

            /**
             * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link cbs.customer_auth_service.LoginRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cbs.customer_auth_service.LoginRequest
             * @static
             * @param {cbs.customer_auth_service.ILoginRequest} message LoginRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LoginRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a LoginRequest message from the specified reader or buffer.
             * @function decode
             * @memberof cbs.customer_auth_service.LoginRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cbs.customer_auth_service.LoginRequest} LoginRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LoginRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cbs.customer_auth_service.LoginRequest();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.email = reader.string();
                        break;
                    case 2:
                        message.password = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cbs.customer_auth_service.LoginRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cbs.customer_auth_service.LoginRequest} LoginRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LoginRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a LoginRequest message.
             * @function verify
             * @memberof cbs.customer_auth_service.LoginRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LoginRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.email != null && message.hasOwnProperty("email"))
                    if (!$util.isString(message.email))
                        return "email: string expected";
                if (message.password != null && message.hasOwnProperty("password"))
                    if (!$util.isString(message.password))
                        return "password: string expected";
                return null;
            };

            /**
             * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cbs.customer_auth_service.LoginRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cbs.customer_auth_service.LoginRequest} LoginRequest
             */
            LoginRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.cbs.customer_auth_service.LoginRequest)
                    return object;
                let message = new $root.cbs.customer_auth_service.LoginRequest();
                if (object.email != null)
                    message.email = String(object.email);
                if (object.password != null)
                    message.password = String(object.password);
                return message;
            };

            /**
             * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cbs.customer_auth_service.LoginRequest
             * @static
             * @param {cbs.customer_auth_service.LoginRequest} message LoginRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LoginRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.email = "";
                    object.password = "";
                }
                if (message.email != null && message.hasOwnProperty("email"))
                    object.email = message.email;
                if (message.password != null && message.hasOwnProperty("password"))
                    object.password = message.password;
                return object;
            };

            /**
             * Converts this LoginRequest to JSON.
             * @function toJSON
             * @memberof cbs.customer_auth_service.LoginRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LoginRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return LoginRequest;
        })();

        customer_auth_service.Tokens = (function() {

            /**
             * Properties of a Tokens.
             * @memberof cbs.customer_auth_service
             * @interface ITokens
             * @property {string|null} [accessToken] Tokens accessToken
             * @property {string|null} [refreshToken] Tokens refreshToken
             */

            /**
             * Constructs a new Tokens.
             * @memberof cbs.customer_auth_service
             * @classdesc Represents a Tokens.
             * @implements ITokens
             * @constructor
             * @param {cbs.customer_auth_service.ITokens=} [properties] Properties to set
             */
            function Tokens(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Tokens accessToken.
             * @member {string} accessToken
             * @memberof cbs.customer_auth_service.Tokens
             * @instance
             */
            Tokens.prototype.accessToken = "";

            /**
             * Tokens refreshToken.
             * @member {string} refreshToken
             * @memberof cbs.customer_auth_service.Tokens
             * @instance
             */
            Tokens.prototype.refreshToken = "";

            /**
             * Creates a new Tokens instance using the specified properties.
             * @function create
             * @memberof cbs.customer_auth_service.Tokens
             * @static
             * @param {cbs.customer_auth_service.ITokens=} [properties] Properties to set
             * @returns {cbs.customer_auth_service.Tokens} Tokens instance
             */
            Tokens.create = function create(properties) {
                return new Tokens(properties);
            };

            /**
             * Encodes the specified Tokens message. Does not implicitly {@link cbs.customer_auth_service.Tokens.verify|verify} messages.
             * @function encode
             * @memberof cbs.customer_auth_service.Tokens
             * @static
             * @param {cbs.customer_auth_service.ITokens} message Tokens message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Tokens.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.accessToken != null && Object.hasOwnProperty.call(message, "accessToken"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.accessToken);
                if (message.refreshToken != null && Object.hasOwnProperty.call(message, "refreshToken"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.refreshToken);
                return writer;
            };

            /**
             * Encodes the specified Tokens message, length delimited. Does not implicitly {@link cbs.customer_auth_service.Tokens.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cbs.customer_auth_service.Tokens
             * @static
             * @param {cbs.customer_auth_service.ITokens} message Tokens message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Tokens.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Tokens message from the specified reader or buffer.
             * @function decode
             * @memberof cbs.customer_auth_service.Tokens
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cbs.customer_auth_service.Tokens} Tokens
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Tokens.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cbs.customer_auth_service.Tokens();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.accessToken = reader.string();
                        break;
                    case 2:
                        message.refreshToken = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Tokens message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cbs.customer_auth_service.Tokens
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cbs.customer_auth_service.Tokens} Tokens
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Tokens.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Tokens message.
             * @function verify
             * @memberof cbs.customer_auth_service.Tokens
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Tokens.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.accessToken != null && message.hasOwnProperty("accessToken"))
                    if (!$util.isString(message.accessToken))
                        return "accessToken: string expected";
                if (message.refreshToken != null && message.hasOwnProperty("refreshToken"))
                    if (!$util.isString(message.refreshToken))
                        return "refreshToken: string expected";
                return null;
            };

            /**
             * Creates a Tokens message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cbs.customer_auth_service.Tokens
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cbs.customer_auth_service.Tokens} Tokens
             */
            Tokens.fromObject = function fromObject(object) {
                if (object instanceof $root.cbs.customer_auth_service.Tokens)
                    return object;
                let message = new $root.cbs.customer_auth_service.Tokens();
                if (object.accessToken != null)
                    message.accessToken = String(object.accessToken);
                if (object.refreshToken != null)
                    message.refreshToken = String(object.refreshToken);
                return message;
            };

            /**
             * Creates a plain object from a Tokens message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cbs.customer_auth_service.Tokens
             * @static
             * @param {cbs.customer_auth_service.Tokens} message Tokens
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Tokens.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.accessToken = "";
                    object.refreshToken = "";
                }
                if (message.accessToken != null && message.hasOwnProperty("accessToken"))
                    object.accessToken = message.accessToken;
                if (message.refreshToken != null && message.hasOwnProperty("refreshToken"))
                    object.refreshToken = message.refreshToken;
                return object;
            };

            /**
             * Converts this Tokens to JSON.
             * @function toJSON
             * @memberof cbs.customer_auth_service.Tokens
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Tokens.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Tokens;
        })();

        customer_auth_service.LoginResponse = (function() {

            /**
             * Properties of a LoginResponse.
             * @memberof cbs.customer_auth_service
             * @interface ILoginResponse
             * @property {number|null} [status] LoginResponse status
             * @property {cbs.customer_auth_service.ITokens|null} [tokens] LoginResponse tokens
             * @property {string|null} [message] LoginResponse message
             */

            /**
             * Constructs a new LoginResponse.
             * @memberof cbs.customer_auth_service
             * @classdesc Represents a LoginResponse.
             * @implements ILoginResponse
             * @constructor
             * @param {cbs.customer_auth_service.ILoginResponse=} [properties] Properties to set
             */
            function LoginResponse(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LoginResponse status.
             * @member {number} status
             * @memberof cbs.customer_auth_service.LoginResponse
             * @instance
             */
            LoginResponse.prototype.status = 0;

            /**
             * LoginResponse tokens.
             * @member {cbs.customer_auth_service.ITokens|null|undefined} tokens
             * @memberof cbs.customer_auth_service.LoginResponse
             * @instance
             */
            LoginResponse.prototype.tokens = null;

            /**
             * LoginResponse message.
             * @member {string} message
             * @memberof cbs.customer_auth_service.LoginResponse
             * @instance
             */
            LoginResponse.prototype.message = "";

            /**
             * Creates a new LoginResponse instance using the specified properties.
             * @function create
             * @memberof cbs.customer_auth_service.LoginResponse
             * @static
             * @param {cbs.customer_auth_service.ILoginResponse=} [properties] Properties to set
             * @returns {cbs.customer_auth_service.LoginResponse} LoginResponse instance
             */
            LoginResponse.create = function create(properties) {
                return new LoginResponse(properties);
            };

            /**
             * Encodes the specified LoginResponse message. Does not implicitly {@link cbs.customer_auth_service.LoginResponse.verify|verify} messages.
             * @function encode
             * @memberof cbs.customer_auth_service.LoginResponse
             * @static
             * @param {cbs.customer_auth_service.ILoginResponse} message LoginResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LoginResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
                if (message.tokens != null && Object.hasOwnProperty.call(message, "tokens"))
                    $root.cbs.customer_auth_service.Tokens.encode(message.tokens, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.message);
                return writer;
            };

            /**
             * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link cbs.customer_auth_service.LoginResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cbs.customer_auth_service.LoginResponse
             * @static
             * @param {cbs.customer_auth_service.ILoginResponse} message LoginResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LoginResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a LoginResponse message from the specified reader or buffer.
             * @function decode
             * @memberof cbs.customer_auth_service.LoginResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cbs.customer_auth_service.LoginResponse} LoginResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LoginResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cbs.customer_auth_service.LoginResponse();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.status = reader.int32();
                        break;
                    case 2:
                        message.tokens = $root.cbs.customer_auth_service.Tokens.decode(reader, reader.uint32());
                        break;
                    case 3:
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
             * Decodes a LoginResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cbs.customer_auth_service.LoginResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cbs.customer_auth_service.LoginResponse} LoginResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LoginResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a LoginResponse message.
             * @function verify
             * @memberof cbs.customer_auth_service.LoginResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LoginResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.status != null && message.hasOwnProperty("status"))
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                if (message.tokens != null && message.hasOwnProperty("tokens")) {
                    let error = $root.cbs.customer_auth_service.Tokens.verify(message.tokens);
                    if (error)
                        return "tokens." + error;
                }
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };

            /**
             * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cbs.customer_auth_service.LoginResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cbs.customer_auth_service.LoginResponse} LoginResponse
             */
            LoginResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.cbs.customer_auth_service.LoginResponse)
                    return object;
                let message = new $root.cbs.customer_auth_service.LoginResponse();
                if (object.status != null)
                    message.status = object.status | 0;
                if (object.tokens != null) {
                    if (typeof object.tokens !== "object")
                        throw TypeError(".cbs.customer_auth_service.LoginResponse.tokens: object expected");
                    message.tokens = $root.cbs.customer_auth_service.Tokens.fromObject(object.tokens);
                }
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };

            /**
             * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cbs.customer_auth_service.LoginResponse
             * @static
             * @param {cbs.customer_auth_service.LoginResponse} message LoginResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LoginResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.status = 0;
                    object.tokens = null;
                    object.message = "";
                }
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = message.status;
                if (message.tokens != null && message.hasOwnProperty("tokens"))
                    object.tokens = $root.cbs.customer_auth_service.Tokens.toObject(message.tokens, options);
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };

            /**
             * Converts this LoginResponse to JSON.
             * @function toJSON
             * @memberof cbs.customer_auth_service.LoginResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LoginResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return LoginResponse;
        })();

        customer_auth_service.Customer = (function() {

            /**
             * Properties of a Customer.
             * @memberof cbs.customer_auth_service
             * @interface ICustomer
             * @property {string|null} [id] Customer id
             * @property {string|null} [name] Customer name
             * @property {string|null} [email] Customer email
             * @property {string|null} [address] Customer address
             * @property {string|null} [phoneNumber] Customer phoneNumber
             * @property {string|null} [money] Customer money
             */

            /**
             * Constructs a new Customer.
             * @memberof cbs.customer_auth_service
             * @classdesc Represents a Customer.
             * @implements ICustomer
             * @constructor
             * @param {cbs.customer_auth_service.ICustomer=} [properties] Properties to set
             */
            function Customer(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Customer id.
             * @member {string} id
             * @memberof cbs.customer_auth_service.Customer
             * @instance
             */
            Customer.prototype.id = "";

            /**
             * Customer name.
             * @member {string} name
             * @memberof cbs.customer_auth_service.Customer
             * @instance
             */
            Customer.prototype.name = "";

            /**
             * Customer email.
             * @member {string} email
             * @memberof cbs.customer_auth_service.Customer
             * @instance
             */
            Customer.prototype.email = "";

            /**
             * Customer address.
             * @member {string} address
             * @memberof cbs.customer_auth_service.Customer
             * @instance
             */
            Customer.prototype.address = "";

            /**
             * Customer phoneNumber.
             * @member {string} phoneNumber
             * @memberof cbs.customer_auth_service.Customer
             * @instance
             */
            Customer.prototype.phoneNumber = "";

            /**
             * Customer money.
             * @member {string} money
             * @memberof cbs.customer_auth_service.Customer
             * @instance
             */
            Customer.prototype.money = "";

            /**
             * Creates a new Customer instance using the specified properties.
             * @function create
             * @memberof cbs.customer_auth_service.Customer
             * @static
             * @param {cbs.customer_auth_service.ICustomer=} [properties] Properties to set
             * @returns {cbs.customer_auth_service.Customer} Customer instance
             */
            Customer.create = function create(properties) {
                return new Customer(properties);
            };

            /**
             * Encodes the specified Customer message. Does not implicitly {@link cbs.customer_auth_service.Customer.verify|verify} messages.
             * @function encode
             * @memberof cbs.customer_auth_service.Customer
             * @static
             * @param {cbs.customer_auth_service.ICustomer} message Customer message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Customer.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.email);
                if (message.address != null && Object.hasOwnProperty.call(message, "address"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.address);
                if (message.phoneNumber != null && Object.hasOwnProperty.call(message, "phoneNumber"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.phoneNumber);
                if (message.money != null && Object.hasOwnProperty.call(message, "money"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.money);
                return writer;
            };

            /**
             * Encodes the specified Customer message, length delimited. Does not implicitly {@link cbs.customer_auth_service.Customer.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cbs.customer_auth_service.Customer
             * @static
             * @param {cbs.customer_auth_service.ICustomer} message Customer message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Customer.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Customer message from the specified reader or buffer.
             * @function decode
             * @memberof cbs.customer_auth_service.Customer
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cbs.customer_auth_service.Customer} Customer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Customer.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cbs.customer_auth_service.Customer();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.name = reader.string();
                        break;
                    case 3:
                        message.email = reader.string();
                        break;
                    case 4:
                        message.address = reader.string();
                        break;
                    case 5:
                        message.phoneNumber = reader.string();
                        break;
                    case 6:
                        message.money = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Customer message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cbs.customer_auth_service.Customer
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cbs.customer_auth_service.Customer} Customer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Customer.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Customer message.
             * @function verify
             * @memberof cbs.customer_auth_service.Customer
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Customer.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
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
                if (message.money != null && message.hasOwnProperty("money"))
                    if (!$util.isString(message.money))
                        return "money: string expected";
                return null;
            };

            /**
             * Creates a Customer message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cbs.customer_auth_service.Customer
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cbs.customer_auth_service.Customer} Customer
             */
            Customer.fromObject = function fromObject(object) {
                if (object instanceof $root.cbs.customer_auth_service.Customer)
                    return object;
                let message = new $root.cbs.customer_auth_service.Customer();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.name != null)
                    message.name = String(object.name);
                if (object.email != null)
                    message.email = String(object.email);
                if (object.address != null)
                    message.address = String(object.address);
                if (object.phoneNumber != null)
                    message.phoneNumber = String(object.phoneNumber);
                if (object.money != null)
                    message.money = String(object.money);
                return message;
            };

            /**
             * Creates a plain object from a Customer message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cbs.customer_auth_service.Customer
             * @static
             * @param {cbs.customer_auth_service.Customer} message Customer
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Customer.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.id = "";
                    object.name = "";
                    object.email = "";
                    object.address = "";
                    object.phoneNumber = "";
                    object.money = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.email != null && message.hasOwnProperty("email"))
                    object.email = message.email;
                if (message.address != null && message.hasOwnProperty("address"))
                    object.address = message.address;
                if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber"))
                    object.phoneNumber = message.phoneNumber;
                if (message.money != null && message.hasOwnProperty("money"))
                    object.money = message.money;
                return object;
            };

            /**
             * Converts this Customer to JSON.
             * @function toJSON
             * @memberof cbs.customer_auth_service.Customer
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Customer.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Customer;
        })();

        customer_auth_service.CustomerProfileRequest = (function() {

            /**
             * Properties of a CustomerProfileRequest.
             * @memberof cbs.customer_auth_service
             * @interface ICustomerProfileRequest
             * @property {string|null} [id] CustomerProfileRequest id
             */

            /**
             * Constructs a new CustomerProfileRequest.
             * @memberof cbs.customer_auth_service
             * @classdesc Represents a CustomerProfileRequest.
             * @implements ICustomerProfileRequest
             * @constructor
             * @param {cbs.customer_auth_service.ICustomerProfileRequest=} [properties] Properties to set
             */
            function CustomerProfileRequest(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CustomerProfileRequest id.
             * @member {string} id
             * @memberof cbs.customer_auth_service.CustomerProfileRequest
             * @instance
             */
            CustomerProfileRequest.prototype.id = "";

            /**
             * Creates a new CustomerProfileRequest instance using the specified properties.
             * @function create
             * @memberof cbs.customer_auth_service.CustomerProfileRequest
             * @static
             * @param {cbs.customer_auth_service.ICustomerProfileRequest=} [properties] Properties to set
             * @returns {cbs.customer_auth_service.CustomerProfileRequest} CustomerProfileRequest instance
             */
            CustomerProfileRequest.create = function create(properties) {
                return new CustomerProfileRequest(properties);
            };

            /**
             * Encodes the specified CustomerProfileRequest message. Does not implicitly {@link cbs.customer_auth_service.CustomerProfileRequest.verify|verify} messages.
             * @function encode
             * @memberof cbs.customer_auth_service.CustomerProfileRequest
             * @static
             * @param {cbs.customer_auth_service.ICustomerProfileRequest} message CustomerProfileRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CustomerProfileRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                return writer;
            };

            /**
             * Encodes the specified CustomerProfileRequest message, length delimited. Does not implicitly {@link cbs.customer_auth_service.CustomerProfileRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cbs.customer_auth_service.CustomerProfileRequest
             * @static
             * @param {cbs.customer_auth_service.ICustomerProfileRequest} message CustomerProfileRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CustomerProfileRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CustomerProfileRequest message from the specified reader or buffer.
             * @function decode
             * @memberof cbs.customer_auth_service.CustomerProfileRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cbs.customer_auth_service.CustomerProfileRequest} CustomerProfileRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CustomerProfileRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cbs.customer_auth_service.CustomerProfileRequest();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CustomerProfileRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cbs.customer_auth_service.CustomerProfileRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cbs.customer_auth_service.CustomerProfileRequest} CustomerProfileRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CustomerProfileRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CustomerProfileRequest message.
             * @function verify
             * @memberof cbs.customer_auth_service.CustomerProfileRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CustomerProfileRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                return null;
            };

            /**
             * Creates a CustomerProfileRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cbs.customer_auth_service.CustomerProfileRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cbs.customer_auth_service.CustomerProfileRequest} CustomerProfileRequest
             */
            CustomerProfileRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.cbs.customer_auth_service.CustomerProfileRequest)
                    return object;
                let message = new $root.cbs.customer_auth_service.CustomerProfileRequest();
                if (object.id != null)
                    message.id = String(object.id);
                return message;
            };

            /**
             * Creates a plain object from a CustomerProfileRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cbs.customer_auth_service.CustomerProfileRequest
             * @static
             * @param {cbs.customer_auth_service.CustomerProfileRequest} message CustomerProfileRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CustomerProfileRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.id = "";
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                return object;
            };

            /**
             * Converts this CustomerProfileRequest to JSON.
             * @function toJSON
             * @memberof cbs.customer_auth_service.CustomerProfileRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CustomerProfileRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return CustomerProfileRequest;
        })();

        customer_auth_service.CustomerProfileResponse = (function() {

            /**
             * Properties of a CustomerProfileResponse.
             * @memberof cbs.customer_auth_service
             * @interface ICustomerProfileResponse
             * @property {number|null} [status] CustomerProfileResponse status
             * @property {cbs.customer_auth_service.ICustomer|null} [customer] CustomerProfileResponse customer
             */

            /**
             * Constructs a new CustomerProfileResponse.
             * @memberof cbs.customer_auth_service
             * @classdesc Represents a CustomerProfileResponse.
             * @implements ICustomerProfileResponse
             * @constructor
             * @param {cbs.customer_auth_service.ICustomerProfileResponse=} [properties] Properties to set
             */
            function CustomerProfileResponse(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CustomerProfileResponse status.
             * @member {number} status
             * @memberof cbs.customer_auth_service.CustomerProfileResponse
             * @instance
             */
            CustomerProfileResponse.prototype.status = 0;

            /**
             * CustomerProfileResponse customer.
             * @member {cbs.customer_auth_service.ICustomer|null|undefined} customer
             * @memberof cbs.customer_auth_service.CustomerProfileResponse
             * @instance
             */
            CustomerProfileResponse.prototype.customer = null;

            /**
             * Creates a new CustomerProfileResponse instance using the specified properties.
             * @function create
             * @memberof cbs.customer_auth_service.CustomerProfileResponse
             * @static
             * @param {cbs.customer_auth_service.ICustomerProfileResponse=} [properties] Properties to set
             * @returns {cbs.customer_auth_service.CustomerProfileResponse} CustomerProfileResponse instance
             */
            CustomerProfileResponse.create = function create(properties) {
                return new CustomerProfileResponse(properties);
            };

            /**
             * Encodes the specified CustomerProfileResponse message. Does not implicitly {@link cbs.customer_auth_service.CustomerProfileResponse.verify|verify} messages.
             * @function encode
             * @memberof cbs.customer_auth_service.CustomerProfileResponse
             * @static
             * @param {cbs.customer_auth_service.ICustomerProfileResponse} message CustomerProfileResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CustomerProfileResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
                if (message.customer != null && Object.hasOwnProperty.call(message, "customer"))
                    $root.cbs.customer_auth_service.Customer.encode(message.customer, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified CustomerProfileResponse message, length delimited. Does not implicitly {@link cbs.customer_auth_service.CustomerProfileResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cbs.customer_auth_service.CustomerProfileResponse
             * @static
             * @param {cbs.customer_auth_service.ICustomerProfileResponse} message CustomerProfileResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CustomerProfileResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CustomerProfileResponse message from the specified reader or buffer.
             * @function decode
             * @memberof cbs.customer_auth_service.CustomerProfileResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cbs.customer_auth_service.CustomerProfileResponse} CustomerProfileResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CustomerProfileResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cbs.customer_auth_service.CustomerProfileResponse();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.status = reader.int32();
                        break;
                    case 2:
                        message.customer = $root.cbs.customer_auth_service.Customer.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CustomerProfileResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cbs.customer_auth_service.CustomerProfileResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cbs.customer_auth_service.CustomerProfileResponse} CustomerProfileResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CustomerProfileResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CustomerProfileResponse message.
             * @function verify
             * @memberof cbs.customer_auth_service.CustomerProfileResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CustomerProfileResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.status != null && message.hasOwnProperty("status"))
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                if (message.customer != null && message.hasOwnProperty("customer")) {
                    let error = $root.cbs.customer_auth_service.Customer.verify(message.customer);
                    if (error)
                        return "customer." + error;
                }
                return null;
            };

            /**
             * Creates a CustomerProfileResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cbs.customer_auth_service.CustomerProfileResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cbs.customer_auth_service.CustomerProfileResponse} CustomerProfileResponse
             */
            CustomerProfileResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.cbs.customer_auth_service.CustomerProfileResponse)
                    return object;
                let message = new $root.cbs.customer_auth_service.CustomerProfileResponse();
                if (object.status != null)
                    message.status = object.status | 0;
                if (object.customer != null) {
                    if (typeof object.customer !== "object")
                        throw TypeError(".cbs.customer_auth_service.CustomerProfileResponse.customer: object expected");
                    message.customer = $root.cbs.customer_auth_service.Customer.fromObject(object.customer);
                }
                return message;
            };

            /**
             * Creates a plain object from a CustomerProfileResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cbs.customer_auth_service.CustomerProfileResponse
             * @static
             * @param {cbs.customer_auth_service.CustomerProfileResponse} message CustomerProfileResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CustomerProfileResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.status = 0;
                    object.customer = null;
                }
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = message.status;
                if (message.customer != null && message.hasOwnProperty("customer"))
                    object.customer = $root.cbs.customer_auth_service.Customer.toObject(message.customer, options);
                return object;
            };

            /**
             * Converts this CustomerProfileResponse to JSON.
             * @function toJSON
             * @memberof cbs.customer_auth_service.CustomerProfileResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CustomerProfileResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return CustomerProfileResponse;
        })();

        customer_auth_service.HealthCheckRequest = (function() {

            /**
             * Properties of a HealthCheckRequest.
             * @memberof cbs.customer_auth_service
             * @interface IHealthCheckRequest
             * @property {number|null} [id] HealthCheckRequest id
             * @property {string|null} [name] HealthCheckRequest name
             */

            /**
             * Constructs a new HealthCheckRequest.
             * @memberof cbs.customer_auth_service
             * @classdesc Represents a HealthCheckRequest.
             * @implements IHealthCheckRequest
             * @constructor
             * @param {cbs.customer_auth_service.IHealthCheckRequest=} [properties] Properties to set
             */
            function HealthCheckRequest(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * HealthCheckRequest id.
             * @member {number} id
             * @memberof cbs.customer_auth_service.HealthCheckRequest
             * @instance
             */
            HealthCheckRequest.prototype.id = 0;

            /**
             * HealthCheckRequest name.
             * @member {string} name
             * @memberof cbs.customer_auth_service.HealthCheckRequest
             * @instance
             */
            HealthCheckRequest.prototype.name = "";

            /**
             * Creates a new HealthCheckRequest instance using the specified properties.
             * @function create
             * @memberof cbs.customer_auth_service.HealthCheckRequest
             * @static
             * @param {cbs.customer_auth_service.IHealthCheckRequest=} [properties] Properties to set
             * @returns {cbs.customer_auth_service.HealthCheckRequest} HealthCheckRequest instance
             */
            HealthCheckRequest.create = function create(properties) {
                return new HealthCheckRequest(properties);
            };

            /**
             * Encodes the specified HealthCheckRequest message. Does not implicitly {@link cbs.customer_auth_service.HealthCheckRequest.verify|verify} messages.
             * @function encode
             * @memberof cbs.customer_auth_service.HealthCheckRequest
             * @static
             * @param {cbs.customer_auth_service.IHealthCheckRequest} message HealthCheckRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HealthCheckRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                return writer;
            };

            /**
             * Encodes the specified HealthCheckRequest message, length delimited. Does not implicitly {@link cbs.customer_auth_service.HealthCheckRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cbs.customer_auth_service.HealthCheckRequest
             * @static
             * @param {cbs.customer_auth_service.IHealthCheckRequest} message HealthCheckRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HealthCheckRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a HealthCheckRequest message from the specified reader or buffer.
             * @function decode
             * @memberof cbs.customer_auth_service.HealthCheckRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cbs.customer_auth_service.HealthCheckRequest} HealthCheckRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HealthCheckRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cbs.customer_auth_service.HealthCheckRequest();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.int32();
                        break;
                    case 2:
                        message.name = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a HealthCheckRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cbs.customer_auth_service.HealthCheckRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cbs.customer_auth_service.HealthCheckRequest} HealthCheckRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HealthCheckRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a HealthCheckRequest message.
             * @function verify
             * @memberof cbs.customer_auth_service.HealthCheckRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            HealthCheckRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                return null;
            };

            /**
             * Creates a HealthCheckRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cbs.customer_auth_service.HealthCheckRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cbs.customer_auth_service.HealthCheckRequest} HealthCheckRequest
             */
            HealthCheckRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.cbs.customer_auth_service.HealthCheckRequest)
                    return object;
                let message = new $root.cbs.customer_auth_service.HealthCheckRequest();
                if (object.id != null)
                    message.id = object.id | 0;
                if (object.name != null)
                    message.name = String(object.name);
                return message;
            };

            /**
             * Creates a plain object from a HealthCheckRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cbs.customer_auth_service.HealthCheckRequest
             * @static
             * @param {cbs.customer_auth_service.HealthCheckRequest} message HealthCheckRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            HealthCheckRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.id = 0;
                    object.name = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                return object;
            };

            /**
             * Converts this HealthCheckRequest to JSON.
             * @function toJSON
             * @memberof cbs.customer_auth_service.HealthCheckRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            HealthCheckRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return HealthCheckRequest;
        })();

        customer_auth_service.HealthCheckResponse = (function() {

            /**
             * Properties of a HealthCheckResponse.
             * @memberof cbs.customer_auth_service
             * @interface IHealthCheckResponse
             * @property {number|Long|null} [status] HealthCheckResponse status
             * @property {string|null} [message] HealthCheckResponse message
             */

            /**
             * Constructs a new HealthCheckResponse.
             * @memberof cbs.customer_auth_service
             * @classdesc Represents a HealthCheckResponse.
             * @implements IHealthCheckResponse
             * @constructor
             * @param {cbs.customer_auth_service.IHealthCheckResponse=} [properties] Properties to set
             */
            function HealthCheckResponse(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * HealthCheckResponse status.
             * @member {number|Long} status
             * @memberof cbs.customer_auth_service.HealthCheckResponse
             * @instance
             */
            HealthCheckResponse.prototype.status = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * HealthCheckResponse message.
             * @member {string} message
             * @memberof cbs.customer_auth_service.HealthCheckResponse
             * @instance
             */
            HealthCheckResponse.prototype.message = "";

            /**
             * Creates a new HealthCheckResponse instance using the specified properties.
             * @function create
             * @memberof cbs.customer_auth_service.HealthCheckResponse
             * @static
             * @param {cbs.customer_auth_service.IHealthCheckResponse=} [properties] Properties to set
             * @returns {cbs.customer_auth_service.HealthCheckResponse} HealthCheckResponse instance
             */
            HealthCheckResponse.create = function create(properties) {
                return new HealthCheckResponse(properties);
            };

            /**
             * Encodes the specified HealthCheckResponse message. Does not implicitly {@link cbs.customer_auth_service.HealthCheckResponse.verify|verify} messages.
             * @function encode
             * @memberof cbs.customer_auth_service.HealthCheckResponse
             * @static
             * @param {cbs.customer_auth_service.IHealthCheckResponse} message HealthCheckResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HealthCheckResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.status);
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
                return writer;
            };

            /**
             * Encodes the specified HealthCheckResponse message, length delimited. Does not implicitly {@link cbs.customer_auth_service.HealthCheckResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cbs.customer_auth_service.HealthCheckResponse
             * @static
             * @param {cbs.customer_auth_service.IHealthCheckResponse} message HealthCheckResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HealthCheckResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a HealthCheckResponse message from the specified reader or buffer.
             * @function decode
             * @memberof cbs.customer_auth_service.HealthCheckResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cbs.customer_auth_service.HealthCheckResponse} HealthCheckResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HealthCheckResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cbs.customer_auth_service.HealthCheckResponse();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.status = reader.int64();
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
             * Decodes a HealthCheckResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cbs.customer_auth_service.HealthCheckResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cbs.customer_auth_service.HealthCheckResponse} HealthCheckResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HealthCheckResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a HealthCheckResponse message.
             * @function verify
             * @memberof cbs.customer_auth_service.HealthCheckResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            HealthCheckResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.status != null && message.hasOwnProperty("status"))
                    if (!$util.isInteger(message.status) && !(message.status && $util.isInteger(message.status.low) && $util.isInteger(message.status.high)))
                        return "status: integer|Long expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };

            /**
             * Creates a HealthCheckResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cbs.customer_auth_service.HealthCheckResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cbs.customer_auth_service.HealthCheckResponse} HealthCheckResponse
             */
            HealthCheckResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.cbs.customer_auth_service.HealthCheckResponse)
                    return object;
                let message = new $root.cbs.customer_auth_service.HealthCheckResponse();
                if (object.status != null)
                    if ($util.Long)
                        (message.status = $util.Long.fromValue(object.status)).unsigned = false;
                    else if (typeof object.status === "string")
                        message.status = parseInt(object.status, 10);
                    else if (typeof object.status === "number")
                        message.status = object.status;
                    else if (typeof object.status === "object")
                        message.status = new $util.LongBits(object.status.low >>> 0, object.status.high >>> 0).toNumber();
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };

            /**
             * Creates a plain object from a HealthCheckResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cbs.customer_auth_service.HealthCheckResponse
             * @static
             * @param {cbs.customer_auth_service.HealthCheckResponse} message HealthCheckResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            HealthCheckResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.status = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.status = options.longs === String ? "0" : 0;
                    object.message = "";
                }
                if (message.status != null && message.hasOwnProperty("status"))
                    if (typeof message.status === "number")
                        object.status = options.longs === String ? String(message.status) : message.status;
                    else
                        object.status = options.longs === String ? $util.Long.prototype.toString.call(message.status) : options.longs === Number ? new $util.LongBits(message.status.low >>> 0, message.status.high >>> 0).toNumber() : message.status;
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };

            /**
             * Converts this HealthCheckResponse to JSON.
             * @function toJSON
             * @memberof cbs.customer_auth_service.HealthCheckResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            HealthCheckResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return HealthCheckResponse;
        })();

        return customer_auth_service;
    })();

    cbs.merchant_service = (function() {

        /**
         * Namespace merchant_service.
         * @memberof cbs
         * @namespace
         */
        const merchant_service = {};

        merchant_service.rpc = (function() {

            /**
             * Namespace rpc.
             * @memberof cbs.merchant_service
             * @namespace
             */
            const rpc = {};

            rpc.MerchantService = (function() {

                /**
                 * Constructs a new MerchantService service.
                 * @memberof cbs.merchant_service.rpc
                 * @classdesc Represents a MerchantService
                 * @extends $protobuf.rpc.Service
                 * @constructor
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 */
                function MerchantService(rpcImpl, requestDelimited, responseDelimited) {
                    $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                }

                (MerchantService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = MerchantService;

                /**
                 * Creates new MerchantService service using the specified rpc implementation.
                 * @function create
                 * @memberof cbs.merchant_service.rpc.MerchantService
                 * @static
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 * @returns {MerchantService} RPC service. Useful where requests and/or responses are streamed.
                 */
                MerchantService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                    return new this(rpcImpl, requestDelimited, responseDelimited);
                };

                /**
                 * Callback as used by {@link cbs.merchant_service.rpc.MerchantService#createMerchant}.
                 * @memberof cbs.merchant_service.rpc.MerchantService
                 * @typedef createMerchantCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {cbs.merchant_service.CreateMerchantResponse} [response] CreateMerchantResponse
                 */

                /**
                 * Calls createMerchant.
                 * @function createMerchant
                 * @memberof cbs.merchant_service.rpc.MerchantService
                 * @instance
                 * @param {cbs.merchant_service.ICreateMerchantRequest} request CreateMerchantRequest message or plain object
                 * @param {cbs.merchant_service.rpc.MerchantService.createMerchantCallback} callback Node-style callback called with the error, if any, and CreateMerchantResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(MerchantService.prototype.createMerchant = function createMerchant(request, callback) {
                    return this.rpcCall(createMerchant, $root.cbs.merchant_service.CreateMerchantRequest, $root.cbs.merchant_service.CreateMerchantResponse, request, callback);
                }, "name", { value: "createMerchant" });

                /**
                 * Calls createMerchant.
                 * @function createMerchant
                 * @memberof cbs.merchant_service.rpc.MerchantService
                 * @instance
                 * @param {cbs.merchant_service.ICreateMerchantRequest} request CreateMerchantRequest message or plain object
                 * @returns {Promise<cbs.merchant_service.CreateMerchantResponse>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link cbs.merchant_service.rpc.MerchantService#getMerchants}.
                 * @memberof cbs.merchant_service.rpc.MerchantService
                 * @typedef getMerchantsCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {cbs.merchant_service.GetMerchantsResponse} [response] GetMerchantsResponse
                 */

                /**
                 * Calls getMerchants.
                 * @function getMerchants
                 * @memberof cbs.merchant_service.rpc.MerchantService
                 * @instance
                 * @param {cbs.merchant_service.IGetMerchantsRequest} request GetMerchantsRequest message or plain object
                 * @param {cbs.merchant_service.rpc.MerchantService.getMerchantsCallback} callback Node-style callback called with the error, if any, and GetMerchantsResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(MerchantService.prototype.getMerchants = function getMerchants(request, callback) {
                    return this.rpcCall(getMerchants, $root.cbs.merchant_service.GetMerchantsRequest, $root.cbs.merchant_service.GetMerchantsResponse, request, callback);
                }, "name", { value: "getMerchants" });

                /**
                 * Calls getMerchants.
                 * @function getMerchants
                 * @memberof cbs.merchant_service.rpc.MerchantService
                 * @instance
                 * @param {cbs.merchant_service.IGetMerchantsRequest} request GetMerchantsRequest message or plain object
                 * @returns {Promise<cbs.merchant_service.GetMerchantsResponse>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link cbs.merchant_service.rpc.MerchantService#getMerchant}.
                 * @memberof cbs.merchant_service.rpc.MerchantService
                 * @typedef getMerchantCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {cbs.merchant_service.GetMerchantResponse} [response] GetMerchantResponse
                 */

                /**
                 * Calls getMerchant.
                 * @function getMerchant
                 * @memberof cbs.merchant_service.rpc.MerchantService
                 * @instance
                 * @param {cbs.merchant_service.IGetMerchantRequest} request GetMerchantRequest message or plain object
                 * @param {cbs.merchant_service.rpc.MerchantService.getMerchantCallback} callback Node-style callback called with the error, if any, and GetMerchantResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(MerchantService.prototype.getMerchant = function getMerchant(request, callback) {
                    return this.rpcCall(getMerchant, $root.cbs.merchant_service.GetMerchantRequest, $root.cbs.merchant_service.GetMerchantResponse, request, callback);
                }, "name", { value: "getMerchant" });

                /**
                 * Calls getMerchant.
                 * @function getMerchant
                 * @memberof cbs.merchant_service.rpc.MerchantService
                 * @instance
                 * @param {cbs.merchant_service.IGetMerchantRequest} request GetMerchantRequest message or plain object
                 * @returns {Promise<cbs.merchant_service.GetMerchantResponse>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link cbs.merchant_service.rpc.MerchantService#createPayment}.
                 * @memberof cbs.merchant_service.rpc.MerchantService
                 * @typedef createPaymentCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {cbs.merchant_service.CreatePaymentResponse} [response] CreatePaymentResponse
                 */

                /**
                 * Calls createPayment.
                 * @function createPayment
                 * @memberof cbs.merchant_service.rpc.MerchantService
                 * @instance
                 * @param {cbs.merchant_service.ICreatePaymentRequest} request CreatePaymentRequest message or plain object
                 * @param {cbs.merchant_service.rpc.MerchantService.createPaymentCallback} callback Node-style callback called with the error, if any, and CreatePaymentResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(MerchantService.prototype.createPayment = function createPayment(request, callback) {
                    return this.rpcCall(createPayment, $root.cbs.merchant_service.CreatePaymentRequest, $root.cbs.merchant_service.CreatePaymentResponse, request, callback);
                }, "name", { value: "createPayment" });

                /**
                 * Calls createPayment.
                 * @function createPayment
                 * @memberof cbs.merchant_service.rpc.MerchantService
                 * @instance
                 * @param {cbs.merchant_service.ICreatePaymentRequest} request CreatePaymentRequest message or plain object
                 * @returns {Promise<cbs.merchant_service.CreatePaymentResponse>} Promise
                 * @variation 2
                 */

                return MerchantService;
            })();

            return rpc;
        })();

        /**
         * AuthType enum.
         * @name cbs.merchant_service.AuthType
         * @enum {number}
         * @property {number} BASIC=0 BASIC value
         * @property {number} OAUTH2=1 OAUTH2 value
         * @property {number} JWT=2 JWT value
         */
        merchant_service.AuthType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "BASIC"] = 0;
            values[valuesById[1] = "OAUTH2"] = 1;
            values[valuesById[2] = "JWT"] = 2;
            return values;
        })();

        merchant_service.Merchant = (function() {

            /**
             * Properties of a Merchant.
             * @memberof cbs.merchant_service
             * @interface IMerchant
             * @property {string|null} [name] Merchant name
             * @property {cbs.merchant_service.AuthType|null} [authType] Merchant authType
             * @property {string|null} [username] Merchant username
             * @property {string|null} [password] Merchant password
             * @property {string|null} [accessToken] Merchant accessToken
             * @property {string|null} [token] Merchant token
             */

            /**
             * Constructs a new Merchant.
             * @memberof cbs.merchant_service
             * @classdesc Represents a Merchant.
             * @implements IMerchant
             * @constructor
             * @param {cbs.merchant_service.IMerchant=} [properties] Properties to set
             */
            function Merchant(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Merchant name.
             * @member {string} name
             * @memberof cbs.merchant_service.Merchant
             * @instance
             */
            Merchant.prototype.name = "";

            /**
             * Merchant authType.
             * @member {cbs.merchant_service.AuthType} authType
             * @memberof cbs.merchant_service.Merchant
             * @instance
             */
            Merchant.prototype.authType = 0;

            /**
             * Merchant username.
             * @member {string} username
             * @memberof cbs.merchant_service.Merchant
             * @instance
             */
            Merchant.prototype.username = "";

            /**
             * Merchant password.
             * @member {string} password
             * @memberof cbs.merchant_service.Merchant
             * @instance
             */
            Merchant.prototype.password = "";

            /**
             * Merchant accessToken.
             * @member {string} accessToken
             * @memberof cbs.merchant_service.Merchant
             * @instance
             */
            Merchant.prototype.accessToken = "";

            /**
             * Merchant token.
             * @member {string} token
             * @memberof cbs.merchant_service.Merchant
             * @instance
             */
            Merchant.prototype.token = "";

            /**
             * Creates a new Merchant instance using the specified properties.
             * @function create
             * @memberof cbs.merchant_service.Merchant
             * @static
             * @param {cbs.merchant_service.IMerchant=} [properties] Properties to set
             * @returns {cbs.merchant_service.Merchant} Merchant instance
             */
            Merchant.create = function create(properties) {
                return new Merchant(properties);
            };

            /**
             * Encodes the specified Merchant message. Does not implicitly {@link cbs.merchant_service.Merchant.verify|verify} messages.
             * @function encode
             * @memberof cbs.merchant_service.Merchant
             * @static
             * @param {cbs.merchant_service.IMerchant} message Merchant message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Merchant.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.authType != null && Object.hasOwnProperty.call(message, "authType"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.authType);
                if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.username);
                if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.password);
                if (message.accessToken != null && Object.hasOwnProperty.call(message, "accessToken"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.accessToken);
                if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.token);
                return writer;
            };

            /**
             * Encodes the specified Merchant message, length delimited. Does not implicitly {@link cbs.merchant_service.Merchant.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cbs.merchant_service.Merchant
             * @static
             * @param {cbs.merchant_service.IMerchant} message Merchant message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Merchant.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Merchant message from the specified reader or buffer.
             * @function decode
             * @memberof cbs.merchant_service.Merchant
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cbs.merchant_service.Merchant} Merchant
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Merchant.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cbs.merchant_service.Merchant();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.authType = reader.int32();
                        break;
                    case 3:
                        message.username = reader.string();
                        break;
                    case 4:
                        message.password = reader.string();
                        break;
                    case 5:
                        message.accessToken = reader.string();
                        break;
                    case 6:
                        message.token = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Merchant message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cbs.merchant_service.Merchant
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cbs.merchant_service.Merchant} Merchant
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Merchant.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Merchant message.
             * @function verify
             * @memberof cbs.merchant_service.Merchant
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Merchant.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.authType != null && message.hasOwnProperty("authType"))
                    switch (message.authType) {
                    default:
                        return "authType: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.username != null && message.hasOwnProperty("username"))
                    if (!$util.isString(message.username))
                        return "username: string expected";
                if (message.password != null && message.hasOwnProperty("password"))
                    if (!$util.isString(message.password))
                        return "password: string expected";
                if (message.accessToken != null && message.hasOwnProperty("accessToken"))
                    if (!$util.isString(message.accessToken))
                        return "accessToken: string expected";
                if (message.token != null && message.hasOwnProperty("token"))
                    if (!$util.isString(message.token))
                        return "token: string expected";
                return null;
            };

            /**
             * Creates a Merchant message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cbs.merchant_service.Merchant
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cbs.merchant_service.Merchant} Merchant
             */
            Merchant.fromObject = function fromObject(object) {
                if (object instanceof $root.cbs.merchant_service.Merchant)
                    return object;
                let message = new $root.cbs.merchant_service.Merchant();
                if (object.name != null)
                    message.name = String(object.name);
                switch (object.authType) {
                case "BASIC":
                case 0:
                    message.authType = 0;
                    break;
                case "OAUTH2":
                case 1:
                    message.authType = 1;
                    break;
                case "JWT":
                case 2:
                    message.authType = 2;
                    break;
                }
                if (object.username != null)
                    message.username = String(object.username);
                if (object.password != null)
                    message.password = String(object.password);
                if (object.accessToken != null)
                    message.accessToken = String(object.accessToken);
                if (object.token != null)
                    message.token = String(object.token);
                return message;
            };

            /**
             * Creates a plain object from a Merchant message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cbs.merchant_service.Merchant
             * @static
             * @param {cbs.merchant_service.Merchant} message Merchant
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Merchant.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.name = "";
                    object.authType = options.enums === String ? "BASIC" : 0;
                    object.username = "";
                    object.password = "";
                    object.accessToken = "";
                    object.token = "";
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.authType != null && message.hasOwnProperty("authType"))
                    object.authType = options.enums === String ? $root.cbs.merchant_service.AuthType[message.authType] : message.authType;
                if (message.username != null && message.hasOwnProperty("username"))
                    object.username = message.username;
                if (message.password != null && message.hasOwnProperty("password"))
                    object.password = message.password;
                if (message.accessToken != null && message.hasOwnProperty("accessToken"))
                    object.accessToken = message.accessToken;
                if (message.token != null && message.hasOwnProperty("token"))
                    object.token = message.token;
                return object;
            };

            /**
             * Converts this Merchant to JSON.
             * @function toJSON
             * @memberof cbs.merchant_service.Merchant
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Merchant.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Merchant;
        })();

        merchant_service.CreateMerchantRequest = (function() {

            /**
             * Properties of a CreateMerchantRequest.
             * @memberof cbs.merchant_service
             * @interface ICreateMerchantRequest
             * @property {string|null} [name] CreateMerchantRequest name
             * @property {cbs.merchant_service.AuthType|null} [authType] CreateMerchantRequest authType
             */

            /**
             * Constructs a new CreateMerchantRequest.
             * @memberof cbs.merchant_service
             * @classdesc Represents a CreateMerchantRequest.
             * @implements ICreateMerchantRequest
             * @constructor
             * @param {cbs.merchant_service.ICreateMerchantRequest=} [properties] Properties to set
             */
            function CreateMerchantRequest(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CreateMerchantRequest name.
             * @member {string} name
             * @memberof cbs.merchant_service.CreateMerchantRequest
             * @instance
             */
            CreateMerchantRequest.prototype.name = "";

            /**
             * CreateMerchantRequest authType.
             * @member {cbs.merchant_service.AuthType} authType
             * @memberof cbs.merchant_service.CreateMerchantRequest
             * @instance
             */
            CreateMerchantRequest.prototype.authType = 0;

            /**
             * Creates a new CreateMerchantRequest instance using the specified properties.
             * @function create
             * @memberof cbs.merchant_service.CreateMerchantRequest
             * @static
             * @param {cbs.merchant_service.ICreateMerchantRequest=} [properties] Properties to set
             * @returns {cbs.merchant_service.CreateMerchantRequest} CreateMerchantRequest instance
             */
            CreateMerchantRequest.create = function create(properties) {
                return new CreateMerchantRequest(properties);
            };

            /**
             * Encodes the specified CreateMerchantRequest message. Does not implicitly {@link cbs.merchant_service.CreateMerchantRequest.verify|verify} messages.
             * @function encode
             * @memberof cbs.merchant_service.CreateMerchantRequest
             * @static
             * @param {cbs.merchant_service.ICreateMerchantRequest} message CreateMerchantRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateMerchantRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.authType != null && Object.hasOwnProperty.call(message, "authType"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.authType);
                return writer;
            };

            /**
             * Encodes the specified CreateMerchantRequest message, length delimited. Does not implicitly {@link cbs.merchant_service.CreateMerchantRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cbs.merchant_service.CreateMerchantRequest
             * @static
             * @param {cbs.merchant_service.ICreateMerchantRequest} message CreateMerchantRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateMerchantRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CreateMerchantRequest message from the specified reader or buffer.
             * @function decode
             * @memberof cbs.merchant_service.CreateMerchantRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cbs.merchant_service.CreateMerchantRequest} CreateMerchantRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateMerchantRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cbs.merchant_service.CreateMerchantRequest();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.authType = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CreateMerchantRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cbs.merchant_service.CreateMerchantRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cbs.merchant_service.CreateMerchantRequest} CreateMerchantRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateMerchantRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CreateMerchantRequest message.
             * @function verify
             * @memberof cbs.merchant_service.CreateMerchantRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CreateMerchantRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.authType != null && message.hasOwnProperty("authType"))
                    switch (message.authType) {
                    default:
                        return "authType: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                return null;
            };

            /**
             * Creates a CreateMerchantRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cbs.merchant_service.CreateMerchantRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cbs.merchant_service.CreateMerchantRequest} CreateMerchantRequest
             */
            CreateMerchantRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.cbs.merchant_service.CreateMerchantRequest)
                    return object;
                let message = new $root.cbs.merchant_service.CreateMerchantRequest();
                if (object.name != null)
                    message.name = String(object.name);
                switch (object.authType) {
                case "BASIC":
                case 0:
                    message.authType = 0;
                    break;
                case "OAUTH2":
                case 1:
                    message.authType = 1;
                    break;
                case "JWT":
                case 2:
                    message.authType = 2;
                    break;
                }
                return message;
            };

            /**
             * Creates a plain object from a CreateMerchantRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cbs.merchant_service.CreateMerchantRequest
             * @static
             * @param {cbs.merchant_service.CreateMerchantRequest} message CreateMerchantRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CreateMerchantRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.name = "";
                    object.authType = options.enums === String ? "BASIC" : 0;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.authType != null && message.hasOwnProperty("authType"))
                    object.authType = options.enums === String ? $root.cbs.merchant_service.AuthType[message.authType] : message.authType;
                return object;
            };

            /**
             * Converts this CreateMerchantRequest to JSON.
             * @function toJSON
             * @memberof cbs.merchant_service.CreateMerchantRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CreateMerchantRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return CreateMerchantRequest;
        })();

        merchant_service.CreateMerchantResponse = (function() {

            /**
             * Properties of a CreateMerchantResponse.
             * @memberof cbs.merchant_service
             * @interface ICreateMerchantResponse
             * @property {number|null} [status] CreateMerchantResponse status
             * @property {boolean|null} [success] CreateMerchantResponse success
             * @property {string|null} [message] CreateMerchantResponse message
             */

            /**
             * Constructs a new CreateMerchantResponse.
             * @memberof cbs.merchant_service
             * @classdesc Represents a CreateMerchantResponse.
             * @implements ICreateMerchantResponse
             * @constructor
             * @param {cbs.merchant_service.ICreateMerchantResponse=} [properties] Properties to set
             */
            function CreateMerchantResponse(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CreateMerchantResponse status.
             * @member {number} status
             * @memberof cbs.merchant_service.CreateMerchantResponse
             * @instance
             */
            CreateMerchantResponse.prototype.status = 0;

            /**
             * CreateMerchantResponse success.
             * @member {boolean} success
             * @memberof cbs.merchant_service.CreateMerchantResponse
             * @instance
             */
            CreateMerchantResponse.prototype.success = false;

            /**
             * CreateMerchantResponse message.
             * @member {string} message
             * @memberof cbs.merchant_service.CreateMerchantResponse
             * @instance
             */
            CreateMerchantResponse.prototype.message = "";

            /**
             * Creates a new CreateMerchantResponse instance using the specified properties.
             * @function create
             * @memberof cbs.merchant_service.CreateMerchantResponse
             * @static
             * @param {cbs.merchant_service.ICreateMerchantResponse=} [properties] Properties to set
             * @returns {cbs.merchant_service.CreateMerchantResponse} CreateMerchantResponse instance
             */
            CreateMerchantResponse.create = function create(properties) {
                return new CreateMerchantResponse(properties);
            };

            /**
             * Encodes the specified CreateMerchantResponse message. Does not implicitly {@link cbs.merchant_service.CreateMerchantResponse.verify|verify} messages.
             * @function encode
             * @memberof cbs.merchant_service.CreateMerchantResponse
             * @static
             * @param {cbs.merchant_service.ICreateMerchantResponse} message CreateMerchantResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateMerchantResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
                if (message.success != null && Object.hasOwnProperty.call(message, "success"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.success);
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.message);
                return writer;
            };

            /**
             * Encodes the specified CreateMerchantResponse message, length delimited. Does not implicitly {@link cbs.merchant_service.CreateMerchantResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cbs.merchant_service.CreateMerchantResponse
             * @static
             * @param {cbs.merchant_service.ICreateMerchantResponse} message CreateMerchantResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateMerchantResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CreateMerchantResponse message from the specified reader or buffer.
             * @function decode
             * @memberof cbs.merchant_service.CreateMerchantResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cbs.merchant_service.CreateMerchantResponse} CreateMerchantResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateMerchantResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cbs.merchant_service.CreateMerchantResponse();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.status = reader.int32();
                        break;
                    case 2:
                        message.success = reader.bool();
                        break;
                    case 3:
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
             * Decodes a CreateMerchantResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cbs.merchant_service.CreateMerchantResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cbs.merchant_service.CreateMerchantResponse} CreateMerchantResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateMerchantResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CreateMerchantResponse message.
             * @function verify
             * @memberof cbs.merchant_service.CreateMerchantResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CreateMerchantResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.status != null && message.hasOwnProperty("status"))
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                if (message.success != null && message.hasOwnProperty("success"))
                    if (typeof message.success !== "boolean")
                        return "success: boolean expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };

            /**
             * Creates a CreateMerchantResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cbs.merchant_service.CreateMerchantResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cbs.merchant_service.CreateMerchantResponse} CreateMerchantResponse
             */
            CreateMerchantResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.cbs.merchant_service.CreateMerchantResponse)
                    return object;
                let message = new $root.cbs.merchant_service.CreateMerchantResponse();
                if (object.status != null)
                    message.status = object.status | 0;
                if (object.success != null)
                    message.success = Boolean(object.success);
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };

            /**
             * Creates a plain object from a CreateMerchantResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cbs.merchant_service.CreateMerchantResponse
             * @static
             * @param {cbs.merchant_service.CreateMerchantResponse} message CreateMerchantResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CreateMerchantResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.status = 0;
                    object.success = false;
                    object.message = "";
                }
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = message.status;
                if (message.success != null && message.hasOwnProperty("success"))
                    object.success = message.success;
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };

            /**
             * Converts this CreateMerchantResponse to JSON.
             * @function toJSON
             * @memberof cbs.merchant_service.CreateMerchantResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CreateMerchantResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return CreateMerchantResponse;
        })();

        merchant_service.GMerchant = (function() {

            /**
             * Properties of a GMerchant.
             * @memberof cbs.merchant_service
             * @interface IGMerchant
             * @property {number|null} [id] GMerchant id
             * @property {string|null} [name] GMerchant name
             * @property {cbs.merchant_service.AuthType|null} [authType] GMerchant authType
             * @property {string|null} [createdAt] GMerchant createdAt
             * @property {string|null} [updatedAt] GMerchant updatedAt
             */

            /**
             * Constructs a new GMerchant.
             * @memberof cbs.merchant_service
             * @classdesc Represents a GMerchant.
             * @implements IGMerchant
             * @constructor
             * @param {cbs.merchant_service.IGMerchant=} [properties] Properties to set
             */
            function GMerchant(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GMerchant id.
             * @member {number} id
             * @memberof cbs.merchant_service.GMerchant
             * @instance
             */
            GMerchant.prototype.id = 0;

            /**
             * GMerchant name.
             * @member {string} name
             * @memberof cbs.merchant_service.GMerchant
             * @instance
             */
            GMerchant.prototype.name = "";

            /**
             * GMerchant authType.
             * @member {cbs.merchant_service.AuthType} authType
             * @memberof cbs.merchant_service.GMerchant
             * @instance
             */
            GMerchant.prototype.authType = 0;

            /**
             * GMerchant createdAt.
             * @member {string} createdAt
             * @memberof cbs.merchant_service.GMerchant
             * @instance
             */
            GMerchant.prototype.createdAt = "";

            /**
             * GMerchant updatedAt.
             * @member {string} updatedAt
             * @memberof cbs.merchant_service.GMerchant
             * @instance
             */
            GMerchant.prototype.updatedAt = "";

            /**
             * Creates a new GMerchant instance using the specified properties.
             * @function create
             * @memberof cbs.merchant_service.GMerchant
             * @static
             * @param {cbs.merchant_service.IGMerchant=} [properties] Properties to set
             * @returns {cbs.merchant_service.GMerchant} GMerchant instance
             */
            GMerchant.create = function create(properties) {
                return new GMerchant(properties);
            };

            /**
             * Encodes the specified GMerchant message. Does not implicitly {@link cbs.merchant_service.GMerchant.verify|verify} messages.
             * @function encode
             * @memberof cbs.merchant_service.GMerchant
             * @static
             * @param {cbs.merchant_service.IGMerchant} message GMerchant message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GMerchant.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.authType != null && Object.hasOwnProperty.call(message, "authType"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.authType);
                if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.createdAt);
                if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.updatedAt);
                return writer;
            };

            /**
             * Encodes the specified GMerchant message, length delimited. Does not implicitly {@link cbs.merchant_service.GMerchant.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cbs.merchant_service.GMerchant
             * @static
             * @param {cbs.merchant_service.IGMerchant} message GMerchant message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GMerchant.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GMerchant message from the specified reader or buffer.
             * @function decode
             * @memberof cbs.merchant_service.GMerchant
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cbs.merchant_service.GMerchant} GMerchant
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GMerchant.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cbs.merchant_service.GMerchant();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.int32();
                        break;
                    case 2:
                        message.name = reader.string();
                        break;
                    case 3:
                        message.authType = reader.int32();
                        break;
                    case 4:
                        message.createdAt = reader.string();
                        break;
                    case 5:
                        message.updatedAt = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GMerchant message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cbs.merchant_service.GMerchant
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cbs.merchant_service.GMerchant} GMerchant
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GMerchant.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GMerchant message.
             * @function verify
             * @memberof cbs.merchant_service.GMerchant
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GMerchant.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.authType != null && message.hasOwnProperty("authType"))
                    switch (message.authType) {
                    default:
                        return "authType: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                    if (!$util.isString(message.createdAt))
                        return "createdAt: string expected";
                if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                    if (!$util.isString(message.updatedAt))
                        return "updatedAt: string expected";
                return null;
            };

            /**
             * Creates a GMerchant message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cbs.merchant_service.GMerchant
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cbs.merchant_service.GMerchant} GMerchant
             */
            GMerchant.fromObject = function fromObject(object) {
                if (object instanceof $root.cbs.merchant_service.GMerchant)
                    return object;
                let message = new $root.cbs.merchant_service.GMerchant();
                if (object.id != null)
                    message.id = object.id | 0;
                if (object.name != null)
                    message.name = String(object.name);
                switch (object.authType) {
                case "BASIC":
                case 0:
                    message.authType = 0;
                    break;
                case "OAUTH2":
                case 1:
                    message.authType = 1;
                    break;
                case "JWT":
                case 2:
                    message.authType = 2;
                    break;
                }
                if (object.createdAt != null)
                    message.createdAt = String(object.createdAt);
                if (object.updatedAt != null)
                    message.updatedAt = String(object.updatedAt);
                return message;
            };

            /**
             * Creates a plain object from a GMerchant message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cbs.merchant_service.GMerchant
             * @static
             * @param {cbs.merchant_service.GMerchant} message GMerchant
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GMerchant.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.id = 0;
                    object.name = "";
                    object.authType = options.enums === String ? "BASIC" : 0;
                    object.createdAt = "";
                    object.updatedAt = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.authType != null && message.hasOwnProperty("authType"))
                    object.authType = options.enums === String ? $root.cbs.merchant_service.AuthType[message.authType] : message.authType;
                if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                    object.createdAt = message.createdAt;
                if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                    object.updatedAt = message.updatedAt;
                return object;
            };

            /**
             * Converts this GMerchant to JSON.
             * @function toJSON
             * @memberof cbs.merchant_service.GMerchant
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GMerchant.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return GMerchant;
        })();

        merchant_service.GetMerchantsRequest = (function() {

            /**
             * Properties of a GetMerchantsRequest.
             * @memberof cbs.merchant_service
             * @interface IGetMerchantsRequest
             * @property {number|null} [id] GetMerchantsRequest id
             */

            /**
             * Constructs a new GetMerchantsRequest.
             * @memberof cbs.merchant_service
             * @classdesc Represents a GetMerchantsRequest.
             * @implements IGetMerchantsRequest
             * @constructor
             * @param {cbs.merchant_service.IGetMerchantsRequest=} [properties] Properties to set
             */
            function GetMerchantsRequest(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GetMerchantsRequest id.
             * @member {number} id
             * @memberof cbs.merchant_service.GetMerchantsRequest
             * @instance
             */
            GetMerchantsRequest.prototype.id = 0;

            /**
             * Creates a new GetMerchantsRequest instance using the specified properties.
             * @function create
             * @memberof cbs.merchant_service.GetMerchantsRequest
             * @static
             * @param {cbs.merchant_service.IGetMerchantsRequest=} [properties] Properties to set
             * @returns {cbs.merchant_service.GetMerchantsRequest} GetMerchantsRequest instance
             */
            GetMerchantsRequest.create = function create(properties) {
                return new GetMerchantsRequest(properties);
            };

            /**
             * Encodes the specified GetMerchantsRequest message. Does not implicitly {@link cbs.merchant_service.GetMerchantsRequest.verify|verify} messages.
             * @function encode
             * @memberof cbs.merchant_service.GetMerchantsRequest
             * @static
             * @param {cbs.merchant_service.IGetMerchantsRequest} message GetMerchantsRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetMerchantsRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                return writer;
            };

            /**
             * Encodes the specified GetMerchantsRequest message, length delimited. Does not implicitly {@link cbs.merchant_service.GetMerchantsRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cbs.merchant_service.GetMerchantsRequest
             * @static
             * @param {cbs.merchant_service.IGetMerchantsRequest} message GetMerchantsRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetMerchantsRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetMerchantsRequest message from the specified reader or buffer.
             * @function decode
             * @memberof cbs.merchant_service.GetMerchantsRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cbs.merchant_service.GetMerchantsRequest} GetMerchantsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetMerchantsRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cbs.merchant_service.GetMerchantsRequest();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GetMerchantsRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cbs.merchant_service.GetMerchantsRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cbs.merchant_service.GetMerchantsRequest} GetMerchantsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetMerchantsRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetMerchantsRequest message.
             * @function verify
             * @memberof cbs.merchant_service.GetMerchantsRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetMerchantsRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                return null;
            };

            /**
             * Creates a GetMerchantsRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cbs.merchant_service.GetMerchantsRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cbs.merchant_service.GetMerchantsRequest} GetMerchantsRequest
             */
            GetMerchantsRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.cbs.merchant_service.GetMerchantsRequest)
                    return object;
                let message = new $root.cbs.merchant_service.GetMerchantsRequest();
                if (object.id != null)
                    message.id = object.id | 0;
                return message;
            };

            /**
             * Creates a plain object from a GetMerchantsRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cbs.merchant_service.GetMerchantsRequest
             * @static
             * @param {cbs.merchant_service.GetMerchantsRequest} message GetMerchantsRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetMerchantsRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.id = 0;
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                return object;
            };

            /**
             * Converts this GetMerchantsRequest to JSON.
             * @function toJSON
             * @memberof cbs.merchant_service.GetMerchantsRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetMerchantsRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return GetMerchantsRequest;
        })();

        merchant_service.GetMerchantsResponse = (function() {

            /**
             * Properties of a GetMerchantsResponse.
             * @memberof cbs.merchant_service
             * @interface IGetMerchantsResponse
             * @property {number|null} [status] GetMerchantsResponse status
             * @property {Array.<cbs.merchant_service.IGMerchant>|null} [merchants] GetMerchantsResponse merchants
             * @property {string|null} [message] GetMerchantsResponse message
             */

            /**
             * Constructs a new GetMerchantsResponse.
             * @memberof cbs.merchant_service
             * @classdesc Represents a GetMerchantsResponse.
             * @implements IGetMerchantsResponse
             * @constructor
             * @param {cbs.merchant_service.IGetMerchantsResponse=} [properties] Properties to set
             */
            function GetMerchantsResponse(properties) {
                this.merchants = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GetMerchantsResponse status.
             * @member {number} status
             * @memberof cbs.merchant_service.GetMerchantsResponse
             * @instance
             */
            GetMerchantsResponse.prototype.status = 0;

            /**
             * GetMerchantsResponse merchants.
             * @member {Array.<cbs.merchant_service.IGMerchant>} merchants
             * @memberof cbs.merchant_service.GetMerchantsResponse
             * @instance
             */
            GetMerchantsResponse.prototype.merchants = $util.emptyArray;

            /**
             * GetMerchantsResponse message.
             * @member {string} message
             * @memberof cbs.merchant_service.GetMerchantsResponse
             * @instance
             */
            GetMerchantsResponse.prototype.message = "";

            /**
             * Creates a new GetMerchantsResponse instance using the specified properties.
             * @function create
             * @memberof cbs.merchant_service.GetMerchantsResponse
             * @static
             * @param {cbs.merchant_service.IGetMerchantsResponse=} [properties] Properties to set
             * @returns {cbs.merchant_service.GetMerchantsResponse} GetMerchantsResponse instance
             */
            GetMerchantsResponse.create = function create(properties) {
                return new GetMerchantsResponse(properties);
            };

            /**
             * Encodes the specified GetMerchantsResponse message. Does not implicitly {@link cbs.merchant_service.GetMerchantsResponse.verify|verify} messages.
             * @function encode
             * @memberof cbs.merchant_service.GetMerchantsResponse
             * @static
             * @param {cbs.merchant_service.IGetMerchantsResponse} message GetMerchantsResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetMerchantsResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
                if (message.merchants != null && message.merchants.length)
                    for (let i = 0; i < message.merchants.length; ++i)
                        $root.cbs.merchant_service.GMerchant.encode(message.merchants[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.message);
                return writer;
            };

            /**
             * Encodes the specified GetMerchantsResponse message, length delimited. Does not implicitly {@link cbs.merchant_service.GetMerchantsResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cbs.merchant_service.GetMerchantsResponse
             * @static
             * @param {cbs.merchant_service.IGetMerchantsResponse} message GetMerchantsResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetMerchantsResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetMerchantsResponse message from the specified reader or buffer.
             * @function decode
             * @memberof cbs.merchant_service.GetMerchantsResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cbs.merchant_service.GetMerchantsResponse} GetMerchantsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetMerchantsResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cbs.merchant_service.GetMerchantsResponse();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.status = reader.int32();
                        break;
                    case 2:
                        if (!(message.merchants && message.merchants.length))
                            message.merchants = [];
                        message.merchants.push($root.cbs.merchant_service.GMerchant.decode(reader, reader.uint32()));
                        break;
                    case 3:
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
             * Decodes a GetMerchantsResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cbs.merchant_service.GetMerchantsResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cbs.merchant_service.GetMerchantsResponse} GetMerchantsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetMerchantsResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetMerchantsResponse message.
             * @function verify
             * @memberof cbs.merchant_service.GetMerchantsResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetMerchantsResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.status != null && message.hasOwnProperty("status"))
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                if (message.merchants != null && message.hasOwnProperty("merchants")) {
                    if (!Array.isArray(message.merchants))
                        return "merchants: array expected";
                    for (let i = 0; i < message.merchants.length; ++i) {
                        let error = $root.cbs.merchant_service.GMerchant.verify(message.merchants[i]);
                        if (error)
                            return "merchants." + error;
                    }
                }
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };

            /**
             * Creates a GetMerchantsResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cbs.merchant_service.GetMerchantsResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cbs.merchant_service.GetMerchantsResponse} GetMerchantsResponse
             */
            GetMerchantsResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.cbs.merchant_service.GetMerchantsResponse)
                    return object;
                let message = new $root.cbs.merchant_service.GetMerchantsResponse();
                if (object.status != null)
                    message.status = object.status | 0;
                if (object.merchants) {
                    if (!Array.isArray(object.merchants))
                        throw TypeError(".cbs.merchant_service.GetMerchantsResponse.merchants: array expected");
                    message.merchants = [];
                    for (let i = 0; i < object.merchants.length; ++i) {
                        if (typeof object.merchants[i] !== "object")
                            throw TypeError(".cbs.merchant_service.GetMerchantsResponse.merchants: object expected");
                        message.merchants[i] = $root.cbs.merchant_service.GMerchant.fromObject(object.merchants[i]);
                    }
                }
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };

            /**
             * Creates a plain object from a GetMerchantsResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cbs.merchant_service.GetMerchantsResponse
             * @static
             * @param {cbs.merchant_service.GetMerchantsResponse} message GetMerchantsResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetMerchantsResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.merchants = [];
                if (options.defaults) {
                    object.status = 0;
                    object.message = "";
                }
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = message.status;
                if (message.merchants && message.merchants.length) {
                    object.merchants = [];
                    for (let j = 0; j < message.merchants.length; ++j)
                        object.merchants[j] = $root.cbs.merchant_service.GMerchant.toObject(message.merchants[j], options);
                }
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };

            /**
             * Converts this GetMerchantsResponse to JSON.
             * @function toJSON
             * @memberof cbs.merchant_service.GetMerchantsResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetMerchantsResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return GetMerchantsResponse;
        })();

        merchant_service.GetMerchantRequest = (function() {

            /**
             * Properties of a GetMerchantRequest.
             * @memberof cbs.merchant_service
             * @interface IGetMerchantRequest
             * @property {number|null} [id] GetMerchantRequest id
             * @property {number|null} [merchantId] GetMerchantRequest merchantId
             */

            /**
             * Constructs a new GetMerchantRequest.
             * @memberof cbs.merchant_service
             * @classdesc Represents a GetMerchantRequest.
             * @implements IGetMerchantRequest
             * @constructor
             * @param {cbs.merchant_service.IGetMerchantRequest=} [properties] Properties to set
             */
            function GetMerchantRequest(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GetMerchantRequest id.
             * @member {number} id
             * @memberof cbs.merchant_service.GetMerchantRequest
             * @instance
             */
            GetMerchantRequest.prototype.id = 0;

            /**
             * GetMerchantRequest merchantId.
             * @member {number} merchantId
             * @memberof cbs.merchant_service.GetMerchantRequest
             * @instance
             */
            GetMerchantRequest.prototype.merchantId = 0;

            /**
             * Creates a new GetMerchantRequest instance using the specified properties.
             * @function create
             * @memberof cbs.merchant_service.GetMerchantRequest
             * @static
             * @param {cbs.merchant_service.IGetMerchantRequest=} [properties] Properties to set
             * @returns {cbs.merchant_service.GetMerchantRequest} GetMerchantRequest instance
             */
            GetMerchantRequest.create = function create(properties) {
                return new GetMerchantRequest(properties);
            };

            /**
             * Encodes the specified GetMerchantRequest message. Does not implicitly {@link cbs.merchant_service.GetMerchantRequest.verify|verify} messages.
             * @function encode
             * @memberof cbs.merchant_service.GetMerchantRequest
             * @static
             * @param {cbs.merchant_service.IGetMerchantRequest} message GetMerchantRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetMerchantRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                if (message.merchantId != null && Object.hasOwnProperty.call(message, "merchantId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.merchantId);
                return writer;
            };

            /**
             * Encodes the specified GetMerchantRequest message, length delimited. Does not implicitly {@link cbs.merchant_service.GetMerchantRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cbs.merchant_service.GetMerchantRequest
             * @static
             * @param {cbs.merchant_service.IGetMerchantRequest} message GetMerchantRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetMerchantRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetMerchantRequest message from the specified reader or buffer.
             * @function decode
             * @memberof cbs.merchant_service.GetMerchantRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cbs.merchant_service.GetMerchantRequest} GetMerchantRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetMerchantRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cbs.merchant_service.GetMerchantRequest();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.int32();
                        break;
                    case 2:
                        message.merchantId = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GetMerchantRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cbs.merchant_service.GetMerchantRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cbs.merchant_service.GetMerchantRequest} GetMerchantRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetMerchantRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetMerchantRequest message.
             * @function verify
             * @memberof cbs.merchant_service.GetMerchantRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetMerchantRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                if (message.merchantId != null && message.hasOwnProperty("merchantId"))
                    if (!$util.isInteger(message.merchantId))
                        return "merchantId: integer expected";
                return null;
            };

            /**
             * Creates a GetMerchantRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cbs.merchant_service.GetMerchantRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cbs.merchant_service.GetMerchantRequest} GetMerchantRequest
             */
            GetMerchantRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.cbs.merchant_service.GetMerchantRequest)
                    return object;
                let message = new $root.cbs.merchant_service.GetMerchantRequest();
                if (object.id != null)
                    message.id = object.id | 0;
                if (object.merchantId != null)
                    message.merchantId = object.merchantId | 0;
                return message;
            };

            /**
             * Creates a plain object from a GetMerchantRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cbs.merchant_service.GetMerchantRequest
             * @static
             * @param {cbs.merchant_service.GetMerchantRequest} message GetMerchantRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetMerchantRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.id = 0;
                    object.merchantId = 0;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.merchantId != null && message.hasOwnProperty("merchantId"))
                    object.merchantId = message.merchantId;
                return object;
            };

            /**
             * Converts this GetMerchantRequest to JSON.
             * @function toJSON
             * @memberof cbs.merchant_service.GetMerchantRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetMerchantRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return GetMerchantRequest;
        })();

        merchant_service.GetMerchantResponse = (function() {

            /**
             * Properties of a GetMerchantResponse.
             * @memberof cbs.merchant_service
             * @interface IGetMerchantResponse
             * @property {number|null} [status] GetMerchantResponse status
             * @property {cbs.merchant_service.IGMerchant|null} [merchant] GetMerchantResponse merchant
             * @property {string|null} [message] GetMerchantResponse message
             */

            /**
             * Constructs a new GetMerchantResponse.
             * @memberof cbs.merchant_service
             * @classdesc Represents a GetMerchantResponse.
             * @implements IGetMerchantResponse
             * @constructor
             * @param {cbs.merchant_service.IGetMerchantResponse=} [properties] Properties to set
             */
            function GetMerchantResponse(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GetMerchantResponse status.
             * @member {number} status
             * @memberof cbs.merchant_service.GetMerchantResponse
             * @instance
             */
            GetMerchantResponse.prototype.status = 0;

            /**
             * GetMerchantResponse merchant.
             * @member {cbs.merchant_service.IGMerchant|null|undefined} merchant
             * @memberof cbs.merchant_service.GetMerchantResponse
             * @instance
             */
            GetMerchantResponse.prototype.merchant = null;

            /**
             * GetMerchantResponse message.
             * @member {string} message
             * @memberof cbs.merchant_service.GetMerchantResponse
             * @instance
             */
            GetMerchantResponse.prototype.message = "";

            /**
             * Creates a new GetMerchantResponse instance using the specified properties.
             * @function create
             * @memberof cbs.merchant_service.GetMerchantResponse
             * @static
             * @param {cbs.merchant_service.IGetMerchantResponse=} [properties] Properties to set
             * @returns {cbs.merchant_service.GetMerchantResponse} GetMerchantResponse instance
             */
            GetMerchantResponse.create = function create(properties) {
                return new GetMerchantResponse(properties);
            };

            /**
             * Encodes the specified GetMerchantResponse message. Does not implicitly {@link cbs.merchant_service.GetMerchantResponse.verify|verify} messages.
             * @function encode
             * @memberof cbs.merchant_service.GetMerchantResponse
             * @static
             * @param {cbs.merchant_service.IGetMerchantResponse} message GetMerchantResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetMerchantResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
                if (message.merchant != null && Object.hasOwnProperty.call(message, "merchant"))
                    $root.cbs.merchant_service.GMerchant.encode(message.merchant, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.message);
                return writer;
            };

            /**
             * Encodes the specified GetMerchantResponse message, length delimited. Does not implicitly {@link cbs.merchant_service.GetMerchantResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cbs.merchant_service.GetMerchantResponse
             * @static
             * @param {cbs.merchant_service.IGetMerchantResponse} message GetMerchantResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetMerchantResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetMerchantResponse message from the specified reader or buffer.
             * @function decode
             * @memberof cbs.merchant_service.GetMerchantResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cbs.merchant_service.GetMerchantResponse} GetMerchantResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetMerchantResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cbs.merchant_service.GetMerchantResponse();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.status = reader.int32();
                        break;
                    case 2:
                        message.merchant = $root.cbs.merchant_service.GMerchant.decode(reader, reader.uint32());
                        break;
                    case 3:
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
             * Decodes a GetMerchantResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cbs.merchant_service.GetMerchantResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cbs.merchant_service.GetMerchantResponse} GetMerchantResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetMerchantResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetMerchantResponse message.
             * @function verify
             * @memberof cbs.merchant_service.GetMerchantResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetMerchantResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.status != null && message.hasOwnProperty("status"))
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                if (message.merchant != null && message.hasOwnProperty("merchant")) {
                    let error = $root.cbs.merchant_service.GMerchant.verify(message.merchant);
                    if (error)
                        return "merchant." + error;
                }
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };

            /**
             * Creates a GetMerchantResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cbs.merchant_service.GetMerchantResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cbs.merchant_service.GetMerchantResponse} GetMerchantResponse
             */
            GetMerchantResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.cbs.merchant_service.GetMerchantResponse)
                    return object;
                let message = new $root.cbs.merchant_service.GetMerchantResponse();
                if (object.status != null)
                    message.status = object.status | 0;
                if (object.merchant != null) {
                    if (typeof object.merchant !== "object")
                        throw TypeError(".cbs.merchant_service.GetMerchantResponse.merchant: object expected");
                    message.merchant = $root.cbs.merchant_service.GMerchant.fromObject(object.merchant);
                }
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };

            /**
             * Creates a plain object from a GetMerchantResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cbs.merchant_service.GetMerchantResponse
             * @static
             * @param {cbs.merchant_service.GetMerchantResponse} message GetMerchantResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetMerchantResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.status = 0;
                    object.merchant = null;
                    object.message = "";
                }
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = message.status;
                if (message.merchant != null && message.hasOwnProperty("merchant"))
                    object.merchant = $root.cbs.merchant_service.GMerchant.toObject(message.merchant, options);
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };

            /**
             * Converts this GetMerchantResponse to JSON.
             * @function toJSON
             * @memberof cbs.merchant_service.GetMerchantResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetMerchantResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return GetMerchantResponse;
        })();

        merchant_service.PaymentDetails = (function() {

            /**
             * Properties of a PaymentDetails.
             * @memberof cbs.merchant_service
             * @interface IPaymentDetails
             * @property {number|null} [receiverId] PaymentDetails receiverId
             * @property {number|null} [amount] PaymentDetails amount
             * @property {string|null} [remark] PaymentDetails remark
             */

            /**
             * Constructs a new PaymentDetails.
             * @memberof cbs.merchant_service
             * @classdesc Represents a PaymentDetails.
             * @implements IPaymentDetails
             * @constructor
             * @param {cbs.merchant_service.IPaymentDetails=} [properties] Properties to set
             */
            function PaymentDetails(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PaymentDetails receiverId.
             * @member {number} receiverId
             * @memberof cbs.merchant_service.PaymentDetails
             * @instance
             */
            PaymentDetails.prototype.receiverId = 0;

            /**
             * PaymentDetails amount.
             * @member {number} amount
             * @memberof cbs.merchant_service.PaymentDetails
             * @instance
             */
            PaymentDetails.prototype.amount = 0;

            /**
             * PaymentDetails remark.
             * @member {string} remark
             * @memberof cbs.merchant_service.PaymentDetails
             * @instance
             */
            PaymentDetails.prototype.remark = "";

            /**
             * Creates a new PaymentDetails instance using the specified properties.
             * @function create
             * @memberof cbs.merchant_service.PaymentDetails
             * @static
             * @param {cbs.merchant_service.IPaymentDetails=} [properties] Properties to set
             * @returns {cbs.merchant_service.PaymentDetails} PaymentDetails instance
             */
            PaymentDetails.create = function create(properties) {
                return new PaymentDetails(properties);
            };

            /**
             * Encodes the specified PaymentDetails message. Does not implicitly {@link cbs.merchant_service.PaymentDetails.verify|verify} messages.
             * @function encode
             * @memberof cbs.merchant_service.PaymentDetails
             * @static
             * @param {cbs.merchant_service.IPaymentDetails} message PaymentDetails message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PaymentDetails.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.receiverId != null && Object.hasOwnProperty.call(message, "receiverId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.receiverId);
                if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                    writer.uint32(/* id 2, wireType 1 =*/17).double(message.amount);
                if (message.remark != null && Object.hasOwnProperty.call(message, "remark"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.remark);
                return writer;
            };

            /**
             * Encodes the specified PaymentDetails message, length delimited. Does not implicitly {@link cbs.merchant_service.PaymentDetails.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cbs.merchant_service.PaymentDetails
             * @static
             * @param {cbs.merchant_service.IPaymentDetails} message PaymentDetails message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PaymentDetails.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PaymentDetails message from the specified reader or buffer.
             * @function decode
             * @memberof cbs.merchant_service.PaymentDetails
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cbs.merchant_service.PaymentDetails} PaymentDetails
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PaymentDetails.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cbs.merchant_service.PaymentDetails();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.receiverId = reader.int32();
                        break;
                    case 2:
                        message.amount = reader.double();
                        break;
                    case 3:
                        message.remark = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a PaymentDetails message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cbs.merchant_service.PaymentDetails
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cbs.merchant_service.PaymentDetails} PaymentDetails
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PaymentDetails.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PaymentDetails message.
             * @function verify
             * @memberof cbs.merchant_service.PaymentDetails
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PaymentDetails.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.receiverId != null && message.hasOwnProperty("receiverId"))
                    if (!$util.isInteger(message.receiverId))
                        return "receiverId: integer expected";
                if (message.amount != null && message.hasOwnProperty("amount"))
                    if (typeof message.amount !== "number")
                        return "amount: number expected";
                if (message.remark != null && message.hasOwnProperty("remark"))
                    if (!$util.isString(message.remark))
                        return "remark: string expected";
                return null;
            };

            /**
             * Creates a PaymentDetails message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cbs.merchant_service.PaymentDetails
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cbs.merchant_service.PaymentDetails} PaymentDetails
             */
            PaymentDetails.fromObject = function fromObject(object) {
                if (object instanceof $root.cbs.merchant_service.PaymentDetails)
                    return object;
                let message = new $root.cbs.merchant_service.PaymentDetails();
                if (object.receiverId != null)
                    message.receiverId = object.receiverId | 0;
                if (object.amount != null)
                    message.amount = Number(object.amount);
                if (object.remark != null)
                    message.remark = String(object.remark);
                return message;
            };

            /**
             * Creates a plain object from a PaymentDetails message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cbs.merchant_service.PaymentDetails
             * @static
             * @param {cbs.merchant_service.PaymentDetails} message PaymentDetails
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PaymentDetails.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.receiverId = 0;
                    object.amount = 0;
                    object.remark = "";
                }
                if (message.receiverId != null && message.hasOwnProperty("receiverId"))
                    object.receiverId = message.receiverId;
                if (message.amount != null && message.hasOwnProperty("amount"))
                    object.amount = options.json && !isFinite(message.amount) ? String(message.amount) : message.amount;
                if (message.remark != null && message.hasOwnProperty("remark"))
                    object.remark = message.remark;
                return object;
            };

            /**
             * Converts this PaymentDetails to JSON.
             * @function toJSON
             * @memberof cbs.merchant_service.PaymentDetails
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PaymentDetails.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return PaymentDetails;
        })();

        merchant_service.PaymentCredentials = (function() {

            /**
             * Properties of a PaymentCredentials.
             * @memberof cbs.merchant_service
             * @interface IPaymentCredentials
             * @property {string|null} [username] PaymentCredentials username
             * @property {string|null} [password] PaymentCredentials password
             * @property {string|null} [accessToken] PaymentCredentials accessToken
             * @property {string|null} [token] PaymentCredentials token
             */

            /**
             * Constructs a new PaymentCredentials.
             * @memberof cbs.merchant_service
             * @classdesc Represents a PaymentCredentials.
             * @implements IPaymentCredentials
             * @constructor
             * @param {cbs.merchant_service.IPaymentCredentials=} [properties] Properties to set
             */
            function PaymentCredentials(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PaymentCredentials username.
             * @member {string} username
             * @memberof cbs.merchant_service.PaymentCredentials
             * @instance
             */
            PaymentCredentials.prototype.username = "";

            /**
             * PaymentCredentials password.
             * @member {string} password
             * @memberof cbs.merchant_service.PaymentCredentials
             * @instance
             */
            PaymentCredentials.prototype.password = "";

            /**
             * PaymentCredentials accessToken.
             * @member {string} accessToken
             * @memberof cbs.merchant_service.PaymentCredentials
             * @instance
             */
            PaymentCredentials.prototype.accessToken = "";

            /**
             * PaymentCredentials token.
             * @member {string} token
             * @memberof cbs.merchant_service.PaymentCredentials
             * @instance
             */
            PaymentCredentials.prototype.token = "";

            /**
             * Creates a new PaymentCredentials instance using the specified properties.
             * @function create
             * @memberof cbs.merchant_service.PaymentCredentials
             * @static
             * @param {cbs.merchant_service.IPaymentCredentials=} [properties] Properties to set
             * @returns {cbs.merchant_service.PaymentCredentials} PaymentCredentials instance
             */
            PaymentCredentials.create = function create(properties) {
                return new PaymentCredentials(properties);
            };

            /**
             * Encodes the specified PaymentCredentials message. Does not implicitly {@link cbs.merchant_service.PaymentCredentials.verify|verify} messages.
             * @function encode
             * @memberof cbs.merchant_service.PaymentCredentials
             * @static
             * @param {cbs.merchant_service.IPaymentCredentials} message PaymentCredentials message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PaymentCredentials.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
                if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
                if (message.accessToken != null && Object.hasOwnProperty.call(message, "accessToken"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.accessToken);
                if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.token);
                return writer;
            };

            /**
             * Encodes the specified PaymentCredentials message, length delimited. Does not implicitly {@link cbs.merchant_service.PaymentCredentials.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cbs.merchant_service.PaymentCredentials
             * @static
             * @param {cbs.merchant_service.IPaymentCredentials} message PaymentCredentials message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PaymentCredentials.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PaymentCredentials message from the specified reader or buffer.
             * @function decode
             * @memberof cbs.merchant_service.PaymentCredentials
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cbs.merchant_service.PaymentCredentials} PaymentCredentials
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PaymentCredentials.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cbs.merchant_service.PaymentCredentials();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.username = reader.string();
                        break;
                    case 2:
                        message.password = reader.string();
                        break;
                    case 3:
                        message.accessToken = reader.string();
                        break;
                    case 4:
                        message.token = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a PaymentCredentials message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cbs.merchant_service.PaymentCredentials
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cbs.merchant_service.PaymentCredentials} PaymentCredentials
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PaymentCredentials.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PaymentCredentials message.
             * @function verify
             * @memberof cbs.merchant_service.PaymentCredentials
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PaymentCredentials.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.username != null && message.hasOwnProperty("username"))
                    if (!$util.isString(message.username))
                        return "username: string expected";
                if (message.password != null && message.hasOwnProperty("password"))
                    if (!$util.isString(message.password))
                        return "password: string expected";
                if (message.accessToken != null && message.hasOwnProperty("accessToken"))
                    if (!$util.isString(message.accessToken))
                        return "accessToken: string expected";
                if (message.token != null && message.hasOwnProperty("token"))
                    if (!$util.isString(message.token))
                        return "token: string expected";
                return null;
            };

            /**
             * Creates a PaymentCredentials message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cbs.merchant_service.PaymentCredentials
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cbs.merchant_service.PaymentCredentials} PaymentCredentials
             */
            PaymentCredentials.fromObject = function fromObject(object) {
                if (object instanceof $root.cbs.merchant_service.PaymentCredentials)
                    return object;
                let message = new $root.cbs.merchant_service.PaymentCredentials();
                if (object.username != null)
                    message.username = String(object.username);
                if (object.password != null)
                    message.password = String(object.password);
                if (object.accessToken != null)
                    message.accessToken = String(object.accessToken);
                if (object.token != null)
                    message.token = String(object.token);
                return message;
            };

            /**
             * Creates a plain object from a PaymentCredentials message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cbs.merchant_service.PaymentCredentials
             * @static
             * @param {cbs.merchant_service.PaymentCredentials} message PaymentCredentials
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PaymentCredentials.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.username = "";
                    object.password = "";
                    object.accessToken = "";
                    object.token = "";
                }
                if (message.username != null && message.hasOwnProperty("username"))
                    object.username = message.username;
                if (message.password != null && message.hasOwnProperty("password"))
                    object.password = message.password;
                if (message.accessToken != null && message.hasOwnProperty("accessToken"))
                    object.accessToken = message.accessToken;
                if (message.token != null && message.hasOwnProperty("token"))
                    object.token = message.token;
                return object;
            };

            /**
             * Converts this PaymentCredentials to JSON.
             * @function toJSON
             * @memberof cbs.merchant_service.PaymentCredentials
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PaymentCredentials.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return PaymentCredentials;
        })();

        merchant_service.CreatePaymentRequest = (function() {

            /**
             * Properties of a CreatePaymentRequest.
             * @memberof cbs.merchant_service
             * @interface ICreatePaymentRequest
             * @property {number|null} [merchantId] CreatePaymentRequest merchantId
             * @property {number|null} [senderId] CreatePaymentRequest senderId
             * @property {cbs.merchant_service.AuthType|null} [authType] CreatePaymentRequest authType
             * @property {cbs.merchant_service.IPaymentDetails|null} [paymentDetails] CreatePaymentRequest paymentDetails
             * @property {cbs.merchant_service.IPaymentCredentials|null} [credentials] CreatePaymentRequest credentials
             */

            /**
             * Constructs a new CreatePaymentRequest.
             * @memberof cbs.merchant_service
             * @classdesc Represents a CreatePaymentRequest.
             * @implements ICreatePaymentRequest
             * @constructor
             * @param {cbs.merchant_service.ICreatePaymentRequest=} [properties] Properties to set
             */
            function CreatePaymentRequest(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CreatePaymentRequest merchantId.
             * @member {number} merchantId
             * @memberof cbs.merchant_service.CreatePaymentRequest
             * @instance
             */
            CreatePaymentRequest.prototype.merchantId = 0;

            /**
             * CreatePaymentRequest senderId.
             * @member {number} senderId
             * @memberof cbs.merchant_service.CreatePaymentRequest
             * @instance
             */
            CreatePaymentRequest.prototype.senderId = 0;

            /**
             * CreatePaymentRequest authType.
             * @member {cbs.merchant_service.AuthType} authType
             * @memberof cbs.merchant_service.CreatePaymentRequest
             * @instance
             */
            CreatePaymentRequest.prototype.authType = 0;

            /**
             * CreatePaymentRequest paymentDetails.
             * @member {cbs.merchant_service.IPaymentDetails|null|undefined} paymentDetails
             * @memberof cbs.merchant_service.CreatePaymentRequest
             * @instance
             */
            CreatePaymentRequest.prototype.paymentDetails = null;

            /**
             * CreatePaymentRequest credentials.
             * @member {cbs.merchant_service.IPaymentCredentials|null|undefined} credentials
             * @memberof cbs.merchant_service.CreatePaymentRequest
             * @instance
             */
            CreatePaymentRequest.prototype.credentials = null;

            /**
             * Creates a new CreatePaymentRequest instance using the specified properties.
             * @function create
             * @memberof cbs.merchant_service.CreatePaymentRequest
             * @static
             * @param {cbs.merchant_service.ICreatePaymentRequest=} [properties] Properties to set
             * @returns {cbs.merchant_service.CreatePaymentRequest} CreatePaymentRequest instance
             */
            CreatePaymentRequest.create = function create(properties) {
                return new CreatePaymentRequest(properties);
            };

            /**
             * Encodes the specified CreatePaymentRequest message. Does not implicitly {@link cbs.merchant_service.CreatePaymentRequest.verify|verify} messages.
             * @function encode
             * @memberof cbs.merchant_service.CreatePaymentRequest
             * @static
             * @param {cbs.merchant_service.ICreatePaymentRequest} message CreatePaymentRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreatePaymentRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.merchantId != null && Object.hasOwnProperty.call(message, "merchantId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.merchantId);
                if (message.senderId != null && Object.hasOwnProperty.call(message, "senderId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.senderId);
                if (message.authType != null && Object.hasOwnProperty.call(message, "authType"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.authType);
                if (message.paymentDetails != null && Object.hasOwnProperty.call(message, "paymentDetails"))
                    $root.cbs.merchant_service.PaymentDetails.encode(message.paymentDetails, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.credentials != null && Object.hasOwnProperty.call(message, "credentials"))
                    $root.cbs.merchant_service.PaymentCredentials.encode(message.credentials, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified CreatePaymentRequest message, length delimited. Does not implicitly {@link cbs.merchant_service.CreatePaymentRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cbs.merchant_service.CreatePaymentRequest
             * @static
             * @param {cbs.merchant_service.ICreatePaymentRequest} message CreatePaymentRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreatePaymentRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CreatePaymentRequest message from the specified reader or buffer.
             * @function decode
             * @memberof cbs.merchant_service.CreatePaymentRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cbs.merchant_service.CreatePaymentRequest} CreatePaymentRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreatePaymentRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cbs.merchant_service.CreatePaymentRequest();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.merchantId = reader.int32();
                        break;
                    case 2:
                        message.senderId = reader.int32();
                        break;
                    case 3:
                        message.authType = reader.int32();
                        break;
                    case 4:
                        message.paymentDetails = $root.cbs.merchant_service.PaymentDetails.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.credentials = $root.cbs.merchant_service.PaymentCredentials.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CreatePaymentRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cbs.merchant_service.CreatePaymentRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cbs.merchant_service.CreatePaymentRequest} CreatePaymentRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreatePaymentRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CreatePaymentRequest message.
             * @function verify
             * @memberof cbs.merchant_service.CreatePaymentRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CreatePaymentRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.merchantId != null && message.hasOwnProperty("merchantId"))
                    if (!$util.isInteger(message.merchantId))
                        return "merchantId: integer expected";
                if (message.senderId != null && message.hasOwnProperty("senderId"))
                    if (!$util.isInteger(message.senderId))
                        return "senderId: integer expected";
                if (message.authType != null && message.hasOwnProperty("authType"))
                    switch (message.authType) {
                    default:
                        return "authType: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.paymentDetails != null && message.hasOwnProperty("paymentDetails")) {
                    let error = $root.cbs.merchant_service.PaymentDetails.verify(message.paymentDetails);
                    if (error)
                        return "paymentDetails." + error;
                }
                if (message.credentials != null && message.hasOwnProperty("credentials")) {
                    let error = $root.cbs.merchant_service.PaymentCredentials.verify(message.credentials);
                    if (error)
                        return "credentials." + error;
                }
                return null;
            };

            /**
             * Creates a CreatePaymentRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cbs.merchant_service.CreatePaymentRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cbs.merchant_service.CreatePaymentRequest} CreatePaymentRequest
             */
            CreatePaymentRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.cbs.merchant_service.CreatePaymentRequest)
                    return object;
                let message = new $root.cbs.merchant_service.CreatePaymentRequest();
                if (object.merchantId != null)
                    message.merchantId = object.merchantId | 0;
                if (object.senderId != null)
                    message.senderId = object.senderId | 0;
                switch (object.authType) {
                case "BASIC":
                case 0:
                    message.authType = 0;
                    break;
                case "OAUTH2":
                case 1:
                    message.authType = 1;
                    break;
                case "JWT":
                case 2:
                    message.authType = 2;
                    break;
                }
                if (object.paymentDetails != null) {
                    if (typeof object.paymentDetails !== "object")
                        throw TypeError(".cbs.merchant_service.CreatePaymentRequest.paymentDetails: object expected");
                    message.paymentDetails = $root.cbs.merchant_service.PaymentDetails.fromObject(object.paymentDetails);
                }
                if (object.credentials != null) {
                    if (typeof object.credentials !== "object")
                        throw TypeError(".cbs.merchant_service.CreatePaymentRequest.credentials: object expected");
                    message.credentials = $root.cbs.merchant_service.PaymentCredentials.fromObject(object.credentials);
                }
                return message;
            };

            /**
             * Creates a plain object from a CreatePaymentRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cbs.merchant_service.CreatePaymentRequest
             * @static
             * @param {cbs.merchant_service.CreatePaymentRequest} message CreatePaymentRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CreatePaymentRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.merchantId = 0;
                    object.senderId = 0;
                    object.authType = options.enums === String ? "BASIC" : 0;
                    object.paymentDetails = null;
                    object.credentials = null;
                }
                if (message.merchantId != null && message.hasOwnProperty("merchantId"))
                    object.merchantId = message.merchantId;
                if (message.senderId != null && message.hasOwnProperty("senderId"))
                    object.senderId = message.senderId;
                if (message.authType != null && message.hasOwnProperty("authType"))
                    object.authType = options.enums === String ? $root.cbs.merchant_service.AuthType[message.authType] : message.authType;
                if (message.paymentDetails != null && message.hasOwnProperty("paymentDetails"))
                    object.paymentDetails = $root.cbs.merchant_service.PaymentDetails.toObject(message.paymentDetails, options);
                if (message.credentials != null && message.hasOwnProperty("credentials"))
                    object.credentials = $root.cbs.merchant_service.PaymentCredentials.toObject(message.credentials, options);
                return object;
            };

            /**
             * Converts this CreatePaymentRequest to JSON.
             * @function toJSON
             * @memberof cbs.merchant_service.CreatePaymentRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CreatePaymentRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return CreatePaymentRequest;
        })();

        merchant_service.CreatePaymentResponse = (function() {

            /**
             * Properties of a CreatePaymentResponse.
             * @memberof cbs.merchant_service
             * @interface ICreatePaymentResponse
             * @property {number|null} [status] CreatePaymentResponse status
             * @property {boolean|null} [success] CreatePaymentResponse success
             */

            /**
             * Constructs a new CreatePaymentResponse.
             * @memberof cbs.merchant_service
             * @classdesc Represents a CreatePaymentResponse.
             * @implements ICreatePaymentResponse
             * @constructor
             * @param {cbs.merchant_service.ICreatePaymentResponse=} [properties] Properties to set
             */
            function CreatePaymentResponse(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CreatePaymentResponse status.
             * @member {number} status
             * @memberof cbs.merchant_service.CreatePaymentResponse
             * @instance
             */
            CreatePaymentResponse.prototype.status = 0;

            /**
             * CreatePaymentResponse success.
             * @member {boolean} success
             * @memberof cbs.merchant_service.CreatePaymentResponse
             * @instance
             */
            CreatePaymentResponse.prototype.success = false;

            /**
             * Creates a new CreatePaymentResponse instance using the specified properties.
             * @function create
             * @memberof cbs.merchant_service.CreatePaymentResponse
             * @static
             * @param {cbs.merchant_service.ICreatePaymentResponse=} [properties] Properties to set
             * @returns {cbs.merchant_service.CreatePaymentResponse} CreatePaymentResponse instance
             */
            CreatePaymentResponse.create = function create(properties) {
                return new CreatePaymentResponse(properties);
            };

            /**
             * Encodes the specified CreatePaymentResponse message. Does not implicitly {@link cbs.merchant_service.CreatePaymentResponse.verify|verify} messages.
             * @function encode
             * @memberof cbs.merchant_service.CreatePaymentResponse
             * @static
             * @param {cbs.merchant_service.ICreatePaymentResponse} message CreatePaymentResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreatePaymentResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
                if (message.success != null && Object.hasOwnProperty.call(message, "success"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.success);
                return writer;
            };

            /**
             * Encodes the specified CreatePaymentResponse message, length delimited. Does not implicitly {@link cbs.merchant_service.CreatePaymentResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cbs.merchant_service.CreatePaymentResponse
             * @static
             * @param {cbs.merchant_service.ICreatePaymentResponse} message CreatePaymentResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreatePaymentResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CreatePaymentResponse message from the specified reader or buffer.
             * @function decode
             * @memberof cbs.merchant_service.CreatePaymentResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cbs.merchant_service.CreatePaymentResponse} CreatePaymentResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreatePaymentResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cbs.merchant_service.CreatePaymentResponse();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.status = reader.int32();
                        break;
                    case 2:
                        message.success = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CreatePaymentResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cbs.merchant_service.CreatePaymentResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cbs.merchant_service.CreatePaymentResponse} CreatePaymentResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreatePaymentResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CreatePaymentResponse message.
             * @function verify
             * @memberof cbs.merchant_service.CreatePaymentResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CreatePaymentResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.status != null && message.hasOwnProperty("status"))
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                if (message.success != null && message.hasOwnProperty("success"))
                    if (typeof message.success !== "boolean")
                        return "success: boolean expected";
                return null;
            };

            /**
             * Creates a CreatePaymentResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cbs.merchant_service.CreatePaymentResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cbs.merchant_service.CreatePaymentResponse} CreatePaymentResponse
             */
            CreatePaymentResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.cbs.merchant_service.CreatePaymentResponse)
                    return object;
                let message = new $root.cbs.merchant_service.CreatePaymentResponse();
                if (object.status != null)
                    message.status = object.status | 0;
                if (object.success != null)
                    message.success = Boolean(object.success);
                return message;
            };

            /**
             * Creates a plain object from a CreatePaymentResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cbs.merchant_service.CreatePaymentResponse
             * @static
             * @param {cbs.merchant_service.CreatePaymentResponse} message CreatePaymentResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CreatePaymentResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.status = 0;
                    object.success = false;
                }
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = message.status;
                if (message.success != null && message.hasOwnProperty("success"))
                    object.success = message.success;
                return object;
            };

            /**
             * Converts this CreatePaymentResponse to JSON.
             * @function toJSON
             * @memberof cbs.merchant_service.CreatePaymentResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CreatePaymentResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return CreatePaymentResponse;
        })();

        return merchant_service;
    })();

    return cbs;
})();

export { $root as default };
