const Server = require("./Server");
const { getServerConfig } = require("./Config");

(async function main(){
   let configServer = getServerConfig(); 
   await Server.init(configServer);
})()