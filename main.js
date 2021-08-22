// Standaard

const botConfig = require('./botconfig.json');
const Discord = require('discord.js');
// const fs = require('fs');

const client = new Discord.Client();
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

client.once('ready', () => {
    console.log(`${client.user.username} is online.`);

client.user.setActivity("v!help", { type: "WATCHING" });

});
 
client.on("message", async message => {
 
    if(message.author.bot) return;
 
    if(message.channel.type === "dm") return;
 
    var prefix = botConfig.prefix;
 
    var messageArray = message.content.split(" ");
 
    var command = messageArray[0];
 
    if (command === `${prefix}help`) 
 
        return message.channel.send("Command coming soon!");

    if (command === `${prefix}`) 

        return message.channel.send("That's my prefix! :)"); 

});

// Only One Message

// - Code hier -

// Overige

client.login(process.env.token)