const discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
 
    // Vang het idee op.
    var idee = args.join(" ");
 
    // Kijk na als er een idee is meegegeven.
    if (!idee) return message.channel.send("Geen suggestie meegegeven. Typ die er snel achter❤");
    
    //verwijderd bericht.
    message.delete();
 
    // Maak het embed aan.
    var ideeEmbed = new discord.RichEmbed()
        .setTitle("Suggestie van ", message.author)
        .setColor("#00FF00")
        .addField("Suggestie: ", idee)
        .addField("Ingezonden door: ", message.author)
        .setTimestamp()
       	.setFooter('❤AchilCraft❤', 'https://media.discordapp.net/attachments/629335056095117312/738467710828150795/AchilCraftStudios_Development__logo.png');
 
    // Vind het kanaal.
    var ideeChannel = message.guild.channels.find(`name`, "📒suggestie");
    if (!ideeChannel) return message.guild.send("Kan het kanaal niet vinden");
 
    // Verzend het bericht en voeg er reacties aan toe.
    ideeChannel.send(ideeEmbed).then(embedMessage => {
        embedMessage.react('👍');
        embedMessage.react('👎');
    });
 
    // Einde.
 
}
 
module.exports.help = {
    name: "suggestie",
    description: "Geeft een suggestie weer."
}
