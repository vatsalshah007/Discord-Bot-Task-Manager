const Discord = require('discord.js');

module.exports.run = async (bots, msg, args) => {
    if (msg.member.roles.find(r => r.name === "CEO") || msg.member.roles.find(r => r.name === "Manager")) {
        const user = msg.mentions.users.first();
        if (user){
            const member = msg.guild.member(user);
            if(member){
                // const reason = .slice(30);
                member.kick(reason).then(() =>{
                    msg.reply(`Successfully kicked ${user.tag}`);
                }).catch(err => {
                    msg.reply(`I was unable to kick the user.`);
                    console.log(err);
                });
            } else {
                msg.reply("There is no such member in this server.")
            }
        } else {
            msg.reply("There is no user mentioned. Please mention a user to be kicked.");
        }
    } else {
        msg.reply("You do not have the permission to kick the user.");
    }
}

module.exports.help = {
    name: "kick"
}