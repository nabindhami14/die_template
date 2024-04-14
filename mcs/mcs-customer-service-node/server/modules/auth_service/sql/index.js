

(() => {
    module.exports = {
      // getTableRecordByUserId: require('./get_table_record_by_id'),
      // deleteTableRecordByUserId: require('./delete_table_record_by_user_id'),
      // updateLoginSessionInfo: require('./update_login_session'),
      // insertLoginSession: require('./insert_login_session'),
      // registerFailedLoginAttempt: require('./insert_failed_login_attempt'),
      // deleteLoginSessionByToken: require('./delete_loginsesson_by_token'),
      // getActiveLoginSessionByUserId: require('./get_login_session_by_userId'),
      // getActiveLoginSessionByProfileId: require('./get_login_session_by_profileId'),
      // deleteTableRecordByProfileId: require('./delete_login_session_by_profile'),
      // getUserDetailByUsername: require('./get_user_by_username'),
      // deleteLoginSessionByUserId: require('./delete_login_session_by_userId')
      createCustomer : require("./create_customer")
    };
  })();