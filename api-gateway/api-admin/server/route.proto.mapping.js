(() => {
  const { cbs } = require('proto/bundle');
  const clientLoader = require('client');

  module.exports = {
    '/api/v1/admin/auth/login': {
      POST: {
        client: clientLoader.adminClient,
        method: 'loginAdmin',
        encode: cbs.admin_service.LoginRequest,
        decode: cbs.admin_service.LoginResponse
      }
    },

    // CUSTOMERS
    '/api/v1/admin/customers': {
      POST: {
        client: clientLoader.adminClient,
        method: 'createCustomer',
        encode: cbs.admin_service.CreateCustomerRequest,
        decode: cbs.admin_service.CreateCustomerResponse
      }
    },
    '/api/v1/admin/customers/bulk-upload': {
      POST: {
        client: clientLoader.adminClient,
        method: 'bulkUpload',
        encode: cbs.admin_service.BulkUploadRequest,
        decode: cbs.admin_service.BulkUploadResponse
      }
    },
    '/api/v1/admin/customer/:customerId': {
      GET: {
        client: clientLoader.adminClient,
        method: 'getCustomer',
        encode: cbs.admin_service.GetCustomerRequest,
        decode: cbs.admin_service.GetCustomerResponse
      }
    },
    '/api/v1/admin/customers': {
      GET: {
        client: clientLoader.adminClient,
        method: 'getCustomers',
        encode: cbs.admin_service.GetCustomersRequest,
        decode: cbs.admin_service.GetCustomersResponse
      }
    },

    // AUTH TYPE
    '/api/v1/admin/auth-types': {
      POST: {
        client: clientLoader.merchantClient,
        method: 'createAuthType',
        encode: cbs.merchant_service.CreateAuthTypeRequest,
        decode: cbs.merchant_service.CreateAuthTypeResponse
      }
    },
    '/api/v1/admin/auth-types': {
      GET: {
        client: clientLoader.merchantClient,
        method: 'getAuthType',
        encode: cbs.merchant_service.GetAuthTypesRequest,
        decode: cbs.merchant_service.GetAuthTypesResponse
      }
    },
    '/api/v1/admin/auth-types/:authtypeId': {
      POST: {
        client: clientLoader.merchantClient,
        method: 'getAuthType',
        encode: cbs.merchant_service.GetAuthTypeRequest,
        decode: cbs.merchant_service.GetAuthTypeResponse
      }
    },


    // MERCHANTS
    '/api/v1/admin/merchants': {
      POST: {
        client: clientLoader.merchantClient,
        method: 'createMerchant',
        encode: cbs.merchant_service.CreateMerchantRequest,
        decode: cbs.merchant_service.CreateMerchantResponse
      }
    },
    '/api/v1/admin/merchants': {
      GET: {
        client: clientLoader.merchantClient,
        method: 'getMerchants',
        encode: cbs.merchant_service.GetMerchantsRequest,
        decode: cbs.merchant_service.GetMerchantsResponse
      }
    },
    '/api/v1/admin/merchants/:merchantId': {
      GET: {
        client: clientLoader.merchantClient,
        method: 'getMerchant',
        encode: cbs.merchant_service.GetMerchantRequest,
        decode: cbs.merchant_service.GetMerchantsResponse
      }
    },
  };
})();

