/* eslint-env node */
var uuid = require("uuid");
var bignum = require("bignum");

exports.random = function() {
  return exports.convertUUID(uuid.v4());
};

exports.convertUUID = function(uuid) {
  return "2.25." + bignum(uuid.replace(/-/g, "", "g"), 16).toString();
};
