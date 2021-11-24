const Discord = require ("discord.js");

module.exports.run = async (run, msg, args) => {

    msg.author.send("pong");
}

module.exports.help = {
    name: "ping" 
}