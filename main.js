// Standaard

const botConfig = require('./botconfig.json');
const Discord = require('discord.js');
// const fs = require('fs');

const client = new Discord.Client();
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

client.user.setStatus('online', 'VossyGamer#1234') 

client.once('ready', () => {
    console.log('Bot is online!');

})

// Only One Message

// - Code hier -

// Overige

client.login(process.env.token)