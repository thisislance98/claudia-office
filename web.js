/*global require, module*/
var ApiBuilder = require('claudia-api-builder');
var	api = module.exports = new ApiBuilder();
var	superb = require('superb');
var config = require('./config');

var authHelper = require('./authHelper');

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





