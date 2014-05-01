var AWS = require('aws-sdk');
var Q = require('q');
var APPPATH = process.cwd();
var fs = require('fs');

if(!process.env.AMAZON_ACCESS_KEY_ID && !process.env.AWS_ACCESS_KEY_ID && !fs.existsSync(APPPATH + '/config.json') ) {
  throw new Error('You must create a `config.json` or set environment variables to use this library'); 
}

if(fs.exsistsSync(APPPATH + '/config.json')) {
  AWS.config.loadFromPath(APPPATH + '/config.json');
}

var s3 = new AWS.S3();
var s3sync = {};

s3sync.setOptions = function(options) { 
  if(options) { this.options = options; }
  return this.options;
};
s3sync.getOptions = function() {
  return this.options;
};

s3sync.sync = function(files, options) {
  var response;
  var params = { };
  var defer = Q.defer();

  // basic setting of options (probably will alter to an extend instead) 
  if(typeof options !== undefined ) { 
    this.options = options;
  }

  
 options.files.forEach(function() {
 
 });
 // loop through files
   // Make sure bucket exists if set
     // Create bucket if not existent
   // Set Params
     // encoding, md5, body, ACL (if set), expires, encryption, 
   // Put Object, save Callback for a 'when' statement

  return defer;
};

module.exports = s3sync;
