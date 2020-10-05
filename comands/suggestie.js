const discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
 
    // Vang het idee op.
    var idee = args.join(" ");
 
    // Kijk na als er een idee is meegegeven.
    if (!idee) return message.channel.send("Geen suggestie meegegeven. Typ die er snel achter❤");
 
    // Maak het embed aan.
    var ideeEmbed = new discord.RichEmbed()
        .setTitle("Suggestie")
        .setColor("#00FF00")
        .addField("Suggestie: ", idee)
        .addField("Ingezonden door: ", message.author);
 
    // Vind het kanaal.
    var ideeChannel = message.guild.channels.find(`name`, "suggestie-testie");
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