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


const Discord = require('discord.js')

const client = new Discord.Client()


console.log('Receiving information from Discord') })


client.on('message', (message) => {

message.guild.channels.find(x => x.name === '『🔥』one-message') 

.overwritePermissions(message.author,{

SEND_MESSAGES: false,

})

})

client.login("ODcxMDgwNjU2MDI3OTIyNDg1.YQWHFA.bnOYLNynW7saVnvokZds6shsyDY") 

// Overige

client.login(process.env.token);