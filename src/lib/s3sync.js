var AWS = require('aws-sdk');
var APPPATH = process.cwd();
var fs = require('fs');

if(!process.env.AMAZON_ACCESS_KEY_ID && !process.env.AWS_ACCESS_KEY_ID && !fs.existsSync(APPPATH + '/config.json') ) {
  throw new Error('You must create a `config.json` or set environment variables to use this library'); 
}

AWS.config.loadFromPath(APPPATH + '/config.json');
var s3 = new AWS.S3();
var s3sync = {};

s3sync.sync = function(options, callback) {
  var response;
  var params = { };

 // loop through files
   // Make sure bucket exists if set
     // Create bucket if not existent
   // Set Params
     // encoding, md5, body, ACL (if set), expires, encryption, 
   // Put Object, save Callback for a 'when' statement

  if(typeof callback !== undefined) {
  	return callback(response);
  } else {
 	return response;
  }
};

module.exports = s3sync;
