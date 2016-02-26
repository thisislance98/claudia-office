/**
 * Created by hughesl on 2/22/16.
 */


/**
 * Created by hughesl on 2/17/16.
 */



var express = require('express');
var app = express();
var authHelper = require('./authHelper');
var messagesHelper = require('./messagesHelper');
var webShotHelper = require('./webShotHelper');
var config = require('./config');


app.get('/', function (req, res) {

    res.send('Hello World!');
});


app.listen(5010, function () {
    console.log('Example app listening on port 5005!');


    testGetReceiptsEmails();

});

function testGetReceiptsEmails() {

    messagesHelper.getReceiptsEmails(config.TOKEN).then(function(emails) {
        console.log('got emails ');
        console.log(emails);
    });

}

function testGetReceiptsFolder() {

    messagesHelper.getReceiptsFolderID(config.TOKEN).then(function(id) {
        console.log('got id: ' + id);
    });

}

function testWebShot()
{
    var html = '<!DOCTYPE html> <html> <body> <h1>My First Heading</h1> <p>My first paragraph.</p> </body> </html>';
    webShotHelper.getImage(html, 300,300).then(function(image) {
       console.log('got image: ' + image);
    });
}


function testGetAllMessages()
{
    messagesHelper.getAllMessages(token).then(function(resp) {
        console.log(resp);
    });
}

function testGetToken()
{
    authHelper.getToken(code, function (err, data) {

        if (err) {
            console.log(err);
        }
        else
            console.log('got data: ' + data);
    });
}

