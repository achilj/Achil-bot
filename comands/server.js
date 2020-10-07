const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    message.delete();

    var botEmbed = new discord.MessageEmbed()
    .setTitle("**__DE FIVEM SERVER?__**")
    .setDescription("*Hier vind je informatie over de wijnpers server!*")
    .setColor("#FF0000")
    .addFields(
        {name: "*__Het IP ADRES:__*", value: "**dewijnpers.serv.nu**"},
        {name: "*__De discord server:__*", value: "https://invite.gg/dewijnpers"}
    )
    .setThumbnail("https://cdn.discordapp.com/icons/302453258100670465/ccda5964ec02251300c46fa8b3d9f6ac.png")
    .setFooter("Made By WIJNPERS", "https://cdn.discordapp.com/icons/302453258100670465/ccda5964ec02251300c46fa8b3d9f6ac.png")
    .setTimestamp("Now")

    return message.channel.send(botEmbed);
}

module.exports.help = {
    name: "server"
}