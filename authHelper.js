/**
 * Created by hughesl on 2/22/16.
 */

var Promise = require('bluebird');
var querystring = require('querystring');
var https = require('https');
var config = require('./config');

module.exports.getToken = function(code, redirect) {

    return new Promise(function (resolve,reject)
    {

        var data = querystring.stringify({
            'grant_type': 'authorization_code',
            'redirect_uri': config.CALLBACK_URL,
            'client_id': config.CLIENT_ID,
            'client_secret': config.CLIENT_SECRET,
            'code': code,
            'resource': 'https://graph.microsoft.com/'
        });

        var options = {
            host: 'login.microsoftonline.com',
            port: 443,
            path: '/common/oauth2/token',
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': Buffer.byteLength(data)
            }
        };

        var req = https.request(options, function (res) {
            res.setEncoding('utf8');
            res.on('data', function (chunk) {
                resolve(redirect + '?token=' + JSON.parse(chunk).access_token);

            });
        });

        req.write(data);
        req.end();
    });

}