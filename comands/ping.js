const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.channel.send("Pong: " + (message.createdTimestamp - Date.now()) + "ms");

}  

module.exports.ping = {
    name: "ping"
}