const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    //clear (aantal) 14

    if(!message.member.hasPremissions("MANAGE_MESSAGES")) return message.reply("Je hebt hier geen pers voor!");

    if(!args[0]) return message.reply("Geef een aantal op a.u.b.");

    if(Number.isInteger(parseInt(args[0]))) {
        
        var amount = parseInt(args[0]) + 1;

        message.channel.bulkDelete(amount).then(() => {

            message.channel.send(`Ik heb ${amount} berichten verwijderd!`).then(msg => msg.delete(3000));

        });

    } else {
        return message.channel.send("Geef een **getal** op");
    }


}

module.exports.help = {
    name: "botinfo"
}