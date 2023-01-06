jsforce = require('jsforce');
const prodConfig = new jsforce.OAuth2({
    loginUrl: process.env.loginUrl,
    clientId: process.env.consumerKey,
    clientSecret: process.env.consumerSecret,
    redirectUri: process.env.callbackUrl
});
const sandboxConfig = new jsforce.OAuth2({
    loginUrl: process.env.sandboxUrl,
    clientId: process.env.consumerKey,
    clientSecret: process.env.consumerSecret,
    redirectUri: process.env.callbackUrl
});
module.exports = {
    prodConfig,
    sandboxConfig
}
