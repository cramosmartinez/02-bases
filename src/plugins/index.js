const {getUUID} = require("../plugins/get-id.plugin.js");
const {getAge} = require("../plugins/get-age.plugin.js");
const { http } = require("../plugins/http-client.plugin.js");
const   buildLogger = require("../plugins/logger.plugin.js");

module.exports = {
    getUUID,
    getAge,
    http,
    buildLogger 
}
