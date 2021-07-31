// Standaard

const botConfig = require('./botconfig.json');
const Discord = require('discord.js');
// const fs = require('fs');

const client = new Discord.Client();
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

client.once('ready', () => {
    console.log('Bot is online!');

// Only One Message

client.on('message', (message) => {

    message.guild.channels.find(channel => channel.name === '<#870624822303010866>')
    
    .overwritePermissions(message.author,{
    
    SEND_MESSAGES: false,
    
    })
    
    })

});

// Overige

client.login(process.env.token);
