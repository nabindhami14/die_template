'use strict';


const { archiveHelper, mysqlHelper, } = require('common/helpers');
((archiveCustomerAuth) => {
    archiveCustomerAuth.customerAuth = async(call,metaData)=>{
        try{
            var query = mysql.format(`Select * from customer_loggedin_sessions where id = ?`,[call.id])
            var [customer] = await mysqlHelper.query(query);
            if(customer.length>0){
                archiveHelper.archive('customer_loggedin_sessions',customer,metaData);
            }
            return true;
        }catch(error){
            console.log(metaData,`Error at archiveCustomerAuth.customerAuth`,error);
            return false
        }
    }
    archiveCustomerAuth.customerFailedAuth = async (call, metaData) => {
        try {
            var query = mysqlHelper.format(`select * from customer_login_failure_attempts where id = ?`, [call.id]);
            var [customer] = await mysqlHelper.query(query);
            if (customer.length > 0) {
                archiveHelper.archive('customer_login_failure_attempts', customer, metaData);
            }
            return true;
        } catch (error) {
            console.error(metaData, `Error at archiveCustomerAuth.customerFailedAuth`, error);
            return false
        }
    }
})(module.exports);