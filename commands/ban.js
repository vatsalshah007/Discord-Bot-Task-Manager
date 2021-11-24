const Discord = require ('discord.js');

module.exports.run = async (bots, msg, args) => {
    if (msg.member.roles.find(r => r.name === "CEO") || msg.member.roles.find(r => r.name === "Manager")) {
        const user = msg.mentions.users.first();
        if (user){
            const member = msg.guild.member(user);
            if(member){
                // msg.user.send("You have been banned");
                member.ban("You have been banned").then(() =>{
                    msg.reply(`Successfully banned ${user.tag}`);
                }).catch(err => {
                    msg.reply(`I was unable to ban the user.`);
                    console.log(err);
                });
            } else {
                msg.reply("There is no such member in this server.")
            }
        } else {
            msg.reply("There is no user mentioned. Please mention a user to be banned.");
        }
    } else {
        msg.reply("You do not have the permission to ban the user.");
    }
}

module.exports.help = {
    name: "ban"
}