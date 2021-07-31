const botConfig = require('./botconfig.json');
const Discord = require('discord.js');
// const fs = require('fs');

const bot = new Discord.Client();
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

// Only One Message

bot.on('message', (message) => {

    message.guild.channels.find(x => x.name === '<#870624822303010866>')
    
    .overwritePermissions(message.author,{
    
    SEND_MESSAGES: false,
    
    })
    
    })

// Overige

bot.once('ready', () => {
    console.log('Bot is online!');

});

bot.login(process.env.token);
