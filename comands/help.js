const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    try{

        var text = "**Achil-Bot** \n\n **__Commands__** \n !info -- toont info menu. \n !botinfo -- toont info menu over de bot. \n !hallo -- De bot zal je gedach zeggen. \n !help -- toont dit menu. \n !youtube/!YouTube/!yt/!YT -- De bot geeft je een linkje naar het YouTube kannaal van A chil. \n !ticket -- Maakt een ticket aan.";

        message.author.send(text);

        message.channel.send("'Ik heb alle commands naar je gestuurd, check snel je privé berichten!'")

    }catch (error){
        message.channel.send("Er is een fout opgetreden! Probeer binnen een aantal minuten opnieuw.");
    }

}

module.exports.help = {
    name: "help"
}