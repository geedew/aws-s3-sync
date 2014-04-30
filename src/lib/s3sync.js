var AWS = require('aws-sdk');
var APPPATH = process.cwd();
var fs = require('fs');

if(!process.env.AMAZON_ACCESS_KEY_ID && !process.env.AWS_ACCESS_KEY_ID && !fs.existsSync(APPPATH + '/config.json') ) {
  throw new Error('You must create a `config.json` or set environment variables to use this library'); 
}

AWS.config.loadFromPath(APPPATH + '/config.json');
var s3 = new AWS.S3();
var s3sync = {};

module.exports = s3sync;
