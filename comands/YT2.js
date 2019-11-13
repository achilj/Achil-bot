const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    return message.channel.send("Het YouTube kannaal van A chil: https://www.youtube.com/channel/UCFxes5yxPdIeS6bMn_HZGhA?");

}

module.exports.help = {
    name: "YT"
}