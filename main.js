// Standaard

const botConfig = require('./botconfig.json');
const Discord = require('discord.js');
// const fs = require('fs');

const client = new Discord.Client();
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

client.once('ready', () => {
    console.log(`${client.user.username} is online.`);

client.user.setActivity("VossyGamer | v!help", { type: "WATCHING" });

});
 
client.on("message", async message => {
 
    if(message.author.bot) return;
 
    if(message.channel.type === "dm") return;
 
    var prefix = botConfig.prefix;
 
    var messageArray = message.content.split(" ");
 
    var command = messageArray[0];
 
    if (command === `${prefix}help`) 
 
        return message.channel.send(

        embed=discord.Embed(title="Vossy's Utilities | Help", description="Information about this bot.", color=0xe47a00),
        embed.add_field(name="Commands:", value="`v!commands`", inline=True),
        embed.add_field(name="(Info) VossyGamer:", value="`v!VossyGamer`", inline=True),
        embed.set_footer(text="Vossy's Utilities "),
        await ctx.send(embed=embed));

    if (command === `${prefix}info`) 
 
        return message.channel.send("This bot is made by **VossyGamer#1234**. More info coming soon!");

    if (command === `${prefix}invite`)
 
        return message.channel.send("**> At the moment the bot is __private__, but in the future the bot may become public.**\n> Then the invite link will appear here!");

    if (command === `${prefix}`) 

        return message.channel.send("That's my prefix! :)"); 

});

// Only One Message

// - Code hier -

// Overige

client.login(process.env.token)