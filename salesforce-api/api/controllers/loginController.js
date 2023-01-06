const { sandboxConfig, prodConfig } = require('./../config/config');
const login = async (req, res) => {
    let redirectUrl = "";
    if (req.body.filter == 'production') {
        redirectUrl = prodConfig.getAuthorizationUrl({ scope: 'api' });
    }
    else if(req.body.filter === 'sandbox') {
        redirectUrl = sandboxConfig.getAuthorizationUrl({ scope: 'api' });
    }
    return res.send({ url: redirectUrl });
}
const login1 = async (req, res) => {
    res.redirect(oauth2.getAuthorizationUrl({ scope: 'api' }));
}
const loginCallBack = async (req, res) => {
    if (!req.query.code) {
        return res.status(500).send({ error: 'Failed to get authorization code from server callback.' });
    }
    const conn = new jsforce.Connection({
        oauth2: prodConfig,
        version: process.env.apiVersion
    });
    conn.authorize(req.query.code, (error, userInfo) => {
        if (error) {
            console.log('authorization error: ' + JSON.stringify(error));
            return res.status(500).send({ error: error });
        }
        // return res.status(200).send({ result: { status: "Success", userInfo } });
        // console.log(userInfo)
        res.redirect(`http://localhost:3000/about/${userInfo.id}`)
    });
};

module.exports = {
    login,
    login1,
    loginCallBack
}
