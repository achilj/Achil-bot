const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var icon = message.guild.iconURL;

    var serverEmbed = new discord.RichEmbed()
        .setTitle("Server info:")
        .setDescription("'Altijd interessant!'")
        .setColor("#1a1a62")
        .setThumbnail(icon)
        .addField("Server naam:", message.guild.name)
        .addField("Totaal aantal leden:", message.guild.memberCount)
        .addField("Jij bent gejoint op:", message.member.joinedAt)
        .addField("Gemaakt op:", message.guild.createdAt);

    return message.channel.send(serverEmbed);

}

module.exports.help = {
    name: "info"
}