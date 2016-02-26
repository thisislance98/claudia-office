/*global require, module*/
var ApiBuilder = require('claudia-api-builder');
var	api = module.exports = new ApiBuilder();
var	superb = require('superb');
var config = require('./config');

var authHelper = require('./authHelper');
var messagesHelper = require('./messagesHelper');
var webShotHelper = require('./webShotHelper');


api.get('/onGotCode', function (request) {
	'use strict';

	try {
		return authHelper.getToken(request.queryString.code,config.HOST_URL);
	}
	catch (err)
	{
		return 'got error: ' + err;
	}

//	return request;
}, { success: 302 });

api.post('getImage', function (request) {
	'use sctrict';

	var receivedHtml = request.body.emailHtml;
	var width = request.body.width;
	var height = request.body.height;

	var html = '<!DOCTYPE html> <html> <body> <h1>My First Heading</h1> <p>My first paragraph.</p> </body> </html>';

	return webShotHelper.getImage(300,300,html);

});

api.get('/getReceiptEmails', function (request) {

	'use strict';

//	return messagesHelper.getAllMessages(config.TOKEN);
	return messagesHelper.getReceiptsEmails(config.TOKEN);

});

api.get('/getAllMessages', function (request) {
	'use strict';

	try {
		return messagesHelper.getAllMessages(config.TOKEN);
	}
	catch (err)
	{
		return 'got error: ' + err;
	}

//	return request;
});




