(() => {
    module.exports = {
        message: {
            notFound: `Customer doesn't exist.`,
            invalidCredential: 'Invalid credentials',
            userBlock: 'Log in disabled. Please contact your nearest branch.',
            failedLoginAttempt: 'Incorrect Password. You have %number% attempt left',
            accountBlock: 'Your account has been blocked. Please contact your Adminstration',
            dbError: 'Sorry !!! Error occure on database operation',
            loginSuccess: 'Loggedin successfully',
            loginFail: 'Sorry !!! Login Operation failed',
            logoutSuccess: 'Logout successful',
            logoutFaild: 'Logout operation failed',
            changePassword: 'Please change your login password for security purpose',
            deviceNotDetected: 'Sorry !!! Device can not be detected',
            loginFromOtherDevice: 'Trying to login from other device',
            createTransactionPIN: 'Create transaction PIN',
            referenceIdRequired: 'Reference Id required'
        },
        config: {
            tables: {
                customer_login_session: 'customer_loggedin_sessions',
                failed_attempt: 'customer_login_failure_attempts'
            }
        }
    }
})();