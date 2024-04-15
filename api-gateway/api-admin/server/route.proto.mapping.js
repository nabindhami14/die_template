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
    '/api/v1/admin/customer': {
      POST: {
        client: clientLoader.adminClient,
        method: 'getCustomer',
        encode: cbs.admin_service.GetCustomerRequest,
        decode: cbs.admin_service.GetCustomerResponse
      }
    },
    '/api/v1/admin/customers': {
      POST: {
        client: clientLoader.adminClient,
        method: 'getCustomers',
        encode: cbs.admin_service.GetCustomersRequest,
        decode: cbs.admin_service.GetCustomersResponse
      }
    },
  };
})();

