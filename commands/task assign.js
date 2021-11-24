const Discord = require("discord.js");
const fs = require ("fs");
let emptasks = JSON.parse(fs.readFileSync("./tasks.json", "utf8"));

const {prefix, token, version} = require ("../config.json");


module.exports.run = async (bot, msg, args) => {
    if (!msg.member.hasPermission("MANAGE_MEMBERS")) return msg.reply("you cannot assign tasks");
    let emp = msg.guild.member(msg.mentions.users.first()) || msg.guild.members.get(args[0]);
    if (!emp) return msg.reply("Can't find the employee");
    if (emp.hasPermission("MANAGE_MESSAGES")) return msg.reply("Way above your pay grade to assign tasks");

    if (!emptasks[emp.id]) emptasks[emp.id] = {
        emptasks: null
    };

    let args1 =msg.content.split(".");
    console.log(`${args1}`);
    console.log(`${args1.length}`);
    args = msg.content.substring(prefix.length).split(" ");
    console.log(`${args}`);
    if (msg.channel.name === "general" || msg.channel.name === "tasks") {
        if(args[0] === 'taskassign') {
            if (msg.member.roles.find(r =>r.name === 'CEO') || msg.member.roles.find(r =>r.name === 'Manager')) {
                const user = msg.mentions.users.first();
                // console/log(`${user}`);
                if(user) {
                    const member = msg.guild.member(user);
                    // console.log(`${member}`);
                    if (member) {
                        let tasks =args1.join (`
                        `).slice(34);
                        // console.log(`${tasks.length}`);
                        // let splitedtasks = tasks.split("/n");
                        // console.log(`${splitedtasks}`);
                        // console.log(`${splitedtasks.length}`);
                        // console.log(`${tasks}`);
                        let taskembed = new Discord.RichEmbed()
                        .setTitle('NEW TASKS!!!')
                        .setColor('0x6500fc')
                        .addField('For Employee', `${member} with ID ${member.id}`)
                        .addField('Tasks', tasks)
                        .addField('From', `${msg.author}`)
                        .setFooter(msg.createdAt);
                        // console.log(`${taskembed}`);
                        let taskChannel = msg.guild.channels.find(t=>t.name === 'tasks');
                        // console.log(`${taskChannel}`);
                        if (!taskChannel) return msg.channel.send("Couldn't find the tasks channel")

                        msg.delete().catch(O_o => { });
                        taskChannel.send(taskembed);

                        // ADD TASK TO THE JSON FILE
                        emptasks[emp.id].emptasks = tasks;

                        fs.writeFile("./tasks.JSON", JSON.stringify(emptasks), (err) => {
                            if (err) {
                                console.log(err);
                            }
                        });

                    } else {
                        msg.reply("That user isn't in the Guild");
                        msg.delete(10000).catch(O_o => { });
                    }
                } else {
                    msg.reply("You need to specify the person");
                    msg.delete(10000).catch(O_o => { });
                }
            } else {
                msg.reply("You don't have the permission to assign the tasks");
                msg.delete(10000).catch(O_o => { });
            }
        } else {
            console.log('err');
        }
    } else {
        msg.reply("This is a channel specific command");
        msg.delete(10000).catch(O_o => { });
    }
}

module.exports.help = {
    name: "taskassign"
}