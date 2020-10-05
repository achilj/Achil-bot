const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    try{

        var text = "**Achil-Bot** \n\n **__Commands__** \n !info -- toont info menu. \n !botinfo -- toont info menu over de bot. \n !ping -- toont de snelheid van de bot \n !help -- toont dit menu. \n !server -- toont alle info over de Minecraft server \n !ticket -- Maakt een ticket aan.";

        message.author.send(text);

        message.channel.send("'Ik heb alle commands naar je gestuurd, check snel je privé berichten!'")

        message.delete();

    }catch (error){
        message.channel.send("Er is een fout opgetreden! Probeer binnen een aantal minuten opnieuw.");
    }

}

module.exports.help = {
    name: "help"
}