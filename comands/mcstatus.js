const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    ping('dewijnpers.serv.nu', 25565, (error, reponse) =>{
    
      if(error) throw error
      const Embed = new RichEmbed()
      .setTitle('Server Status')
      .addField('Server IP', reponse.host)
      .addField('Server Version', reponse.version)
      .addField('Online Players', reponse.onlinePlayers)
      .addField('Max Players', reponse.maxPlayers)
                
      
    return message.channel.send(Embed);

}

module.exports.help = {
    name: "mcstatus"
}
