const botConfig = require("./botconfig.json");
const discord = require("discord.js");
const fs = require("fs");

const bot = new discord.Client();
bot.commands = new discord.Collection();
bot.aliases = new discord.Collection();

// When a member sends a message to the channel specified below we revoke his permission to write any further messages

client.on('message', (message) => {

    message.guild.channels.find(x => x.name === '<#870624822303010866>') //Replace it with the name of the channel for which you need this feature
    
    .overwritePermissions(message.author,{
    
    SEND_MESSAGES: false,
    
    })
    
    })

bot.once('ready', () => {
    console.log('Bot is online!');
});

bot.login(process.env.token);
