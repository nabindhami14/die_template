(() => {
  const { cbs } = require('proto/bundle');
  const clientLoader = require('client');

  module.exports = {
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

