const Discord = require ("discord.js");

module.exports.run = async (run, msg, args) => {
    const dmembed = new Discord.RichEmbed()
    .setTitle("Helper Embed")
    .setColor(0xFF0000)
    .setDescription("Make sure to use the !help to get access to the commands");

    msg.author.send(dmembed);
}

module.exports.help = {
    name: "dmme" 
}