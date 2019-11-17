const discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
 
    // Id van category van tickets.
    const categoryId = "644213232906534915";
 
    // Als bericht in ticket kanaal is dan verwijder kanaal ander zend bericht
    if (message.channel.parentID == categoryId) {
 
        message.channel.delete();
 
    } else {
 
        message.channel.send("Gelieve dit commando in een ticket kanaal uit te voeren.");
 
    }
 
    var embedCloseTicket = new discord.RichEmbed()
        .setTitle("Het ticket " + message.channel.name)
        .setDescription("is gesloten. Goed werk!")
        .setColor("#1a1a62")
        .setFooter("ticket gesloten");
 
    // Vind kanaal voor de logs.
    var logChannel = message.guild.channels.find("name", "log");
    if (!logChannel) return message.channel.send("Kanaal bestaat niet");
 
    logChannel.send(embedCloseTicket);
 
}
 
module.exports.help = {
    name: "close",
    description: "Sluit een ticket af"
}