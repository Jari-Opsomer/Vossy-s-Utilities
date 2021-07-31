const botConfig = require("./botconfig.json");
const discord = require("discord.js");
const fs = require("fs");

const bot = new discord.Client();
bot.commands = new discord.Collection();
bot.aliases = new discord.Collection();


bot.once('ready', () => {
    console.log('Bot is online!');
});

bot.login(process.env.token);
