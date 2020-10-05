module.exports.run = async (bot, message, args) => {

    message.channel.send("**PONG:**" + (message.createdTimestamp - Date.now()) + "ms");

}

module.exports.help = {
    name: "ping"
}