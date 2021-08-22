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
 
        return message.channel.send("`v!info` **Information about this bot.**\n`v!invite **The invite link for this bot.**`");

    if (command === `${prefix}info`) 
 
        return message.channel.send("This bot is made by **VossyGamer#1234**. More info coming soon!");

    if (command === `${prefix}invite`) 
 
        return message.channel.send("**At the moment the bot is private, but in the future the bot may become public.** Then the invite link will appear here!");

    if (command === `${prefix}`) 

        return message.channel.send("That's my prefix! :)"); 

});

// Only One Message

// - Code hier -

// Overige

client.login(process.env.token)