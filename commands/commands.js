const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) => {
    if(msg.member.roles.find(r => r.name === 'CEO') || msg.member.roles.find(r => r.name === 'Manager')) {

        const cmdembed = new Discord.RichEmbed()
            .setTitle('Here is Your List of Commands only for CEO and Manager:')
            .addField('1:- !commands', `This will show you the list of commands that you have access to`)
            .addField('2:- !taskassign', 'This will assign task to the employees(mention the user, then to separate different tasks put a `.` between them. Do not put a `.` after the last task)')
            .addField('3:- !kick', 'This will KICK a member out from the server')
            .addField('4:- !ban', 'This will BAN a member from the server')
            .addField('5:- !clear', 'This will clear certain number of msgs')
            .addField('6:- !done', 'To strike out the task that has been completed')
            .addField('7:- !trello', 'To get the link to the trello project you are working on')
            .addField('8:- !myinfo', 'To get your information')
            .setColor(0x1BBC9B)
            .setFooter('ONLY CEO AND MANAGERS CAN USE THESE COMMANDS');

        msg.channel.send(cmdembed);
        msg.delete(10000).catch(O_o =>{ });
    } else{
        const embed = new Discord.RichEmbed()
        .setTitle('Here is the List of commands for everyone:')
        .addField('1:- !commands', `This will show you the list of commands that you have access to`)
        .addField('2:- !done', 'To strike out the task that has been completed')
        .addField('3:- !trello', 'To get the link to the trello project you are working on')
        .addField('4:- !myinfo', 'To get your information')
        .setColor(0x1BBC9B)
        .setFooter('Use it wisely!');

        msg.channel.send(embed);
        msg.delete(10000).catch(O_o =>{ });
    }  
}

module.exports.help = {
    name: "commands"
}