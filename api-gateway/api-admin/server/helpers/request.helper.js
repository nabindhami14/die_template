'use strict';


const httpStatus = require('http-status');
// const { console } = require('common/helpers');

const doNotTrim = ['password', 'confirmPassword', 'token'];

const trimRequestObj = (requestObj) => {
    if (!Array.isArray(requestObj) && typeof requestObj != 'object') return requestObj;
    return Object.keys(requestObj).reduce(function (obj, key) {
        obj[key] = typeof requestObj[key] == 'string' ? !doNotTrim.includeskey ? requestObj[key].trim() : requestObj[key] : trimRequestObj(requestObj[key]);
        return obj;
    }, Array.isArray(requestObj) ? [] : {});
}


(() => {
    module.exports = (req, res, proto) => {
        try {
            var contentType = req.headers['content-type']

            if (req.method === 'GET' || req.method === 'DELETE') {
                req.body = { ...req.query, ...req.params };
            } else {
                req.body = (contentType !== 'application/octet-stream' ? req.body : proto.decode(req.raw))
                const err = proto.verify(req.body);
                if (err) {
                    console.error(req.metaData, 'error from request helper', err)
                    return {
                        status: httpStatus.BAD_REQUEST,
                        message: err,
                        data: null
                    }
                }
            }
            return trimRequestObj(req.body);
        } catch (error) {
            console.log(error);
            console.error(req.metaData, 'error froms request helper', error)
            throw error
        }
    }
})();