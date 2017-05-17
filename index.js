'use strict';

// this is included implicitly by Lambda
// it can be used to access other AWS
// services such as S3, DynamoDB, etc
var AWS = require('aws-sdk');

// Responses
var successResponse = {
	'statusCode': 200,
	'body': 'Request Successful'
};

var failResponse = {
	'statusCode': 500,
	'body': 'Request Unsuccessful'
};

exports.handler = function(event, context, callback) {

	// process JSON payload and send response

	//...

	// exit function for a successful response 
	//callback(null, successResponse);

	// exit function for an unsuccessful response 
	//callback(err, failResponse);
};