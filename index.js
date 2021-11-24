const Discord = require("discord.js");
const {token, prefix, version} = require("./config.json");
const botconfig = require("./config.json");
const fs = require("fs");

const bot = new Discord.Client({
    disableEveryone: true
});

bot.commands = new Discord.Collection();

// FOR COMMANDS
fs.readdir("./commands/", (err, files) =>{
    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log("Couldn't finds Commands");
        return;
    }   

    jsfile.forEach((f,i) => {
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
    });
});


// BOT READY

bot.on('ready', () => {
    console.log(`I'm Online Boss!!!`);
});

bot.on('message', msg => {
    let args = msg.content.split(" ");
    let cmd = args[0];
    let cmdfile = bot.commands.get(cmd.slice(prefix.length));
    if(cmdfile) cmdfile.run(bot, msg, args);
});

bot.login(token);