'use strict';

(() => {
    const sql = require('../sql');
    const moduleConfig = require('../config');
    const HTTPStatus = require('http-status');

    module.exports = async (username, metaObj) => {
        try {

            const userDetail = await sql.getUserDetailByUsername(username, metaObj);
            if (!userDetail) {
                return { status: HTTPStatus.NOT_FOUND, message: moduleConfig.message.notFound };
            }
            return userDetail;
        } catch (err) {
            throw err;
        }
    }
})()