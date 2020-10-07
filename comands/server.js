const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var icon = message.guild.iconURL;
    
    message.delete();

    var serverEmbed = new discord.RichEmbed()
        .setTitle("De Wijnpers survival:")
        .setDescription("2020-2021")
        .setColor("#FF0000")
        .addField("IP:", "dewijnpers.serv.nu")
        .setThumbnail("https://cdn.discordapp.com/icons/302453258100670465/ccda5964ec02251300c46fa8b3d9f6ac.png")
        .setFooter("Made By DE WIJNPERS");

    return message.channel.send(serverEmbed);

}

module.exports.help = {
    name: "server"
}