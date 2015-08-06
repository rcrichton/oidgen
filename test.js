/* eslint-env node */
var oidgen = require("./index.js");

try {

  var oid = oidgen.convertUUID("f81d4fae-7dec-11d0-a765-00a0c91e6bf6");
  if (oid !== "2.25.329800735698586629295641978511506172918") {
    throw new Error("convertUUID didn't produce the expected output");
  }

  oidgen.random();

} catch(err) {
  console.log(err);
  process.exit(1);
}
