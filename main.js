// Standaard

const botConfig = require('./botconfig.json');
const Discord = require('discord.js');
// const fs = require('fs');

const client = new Discord.Client();
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

client.once('ready', () => {
    console.log('Bot is online!');

})

// Only One Message

// - Code hier -

// Overige

@client.event
async def on_message(message):
    if message.author == client.user:
        return

    if message.content.startswith('v!help'):
        await message.channel.send('Hello!')

client.login(process.env.token)