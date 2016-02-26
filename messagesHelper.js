/**
 * Created by hughesl on 2/22/16.
 */


var Promise = require('bluebird');
var querystring = require('querystring');
var https = require('https');
var config = require('./config');
var request = require('request');


getReceiptsFolderID = function(token) {

    return new Promise(function (resolve,reject) {

        get(token, 'https://graph.microsoft.com/v1.0/me/mailFolders').then(function (body) {
            var folders = body.value;

            for (i=0; i < folders.length; i++) {

                if (folders[i].displayName === 'receipts') {
                    resolve(folders[i].id);
                }
            }
        });
    });

}


module.exports.getReceiptsEmails = function(token) {

    return new Promise(function (resolve,reject) {

        getReceiptsFolderID(token).then(function (id) {

            get(token, 'https://graph.microsoft.com/v1.0/me/mailFolders/' + id + '/messages')
                .then(function (messages) {
                   resolve (messages);
                });

        });
    });

}


module.exports.getAllMessages = function(token) {

    return get(token, 'https://graph.microsoft.com/v1.0/me/messages');
}

function get(token, url) {
    return new Promise(function (resolve,reject)
    {

        var options = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        };

        request.get(url, options, function(request,response) {

            var body = JSON.parse(response.body);
            resolve(body);

        });

    });
}