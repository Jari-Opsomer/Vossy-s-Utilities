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
 
    // if(message.channel.type === "dm") return;
 
    var prefix = botConfig.prefix;
 
    var messageArray = message.content.split(" ");
 
    var command = messageArray[0];
 
    if (command === `${prefix}help`) {
            const logo =
              'https://i.ibb.co/wRGQGVX/profile-pic-1.png'
        
            const embed = new Discord.MessageEmbed()
              .setTitle("Vossy's Utilities | Help")
              .setDescription('Information about this bot.')
              // .setURL('https://www.youtube.com/channel/UChPrh75CmPP9Ig6jISPnfNA')
              // .setAuthor(message.author.username)
              // .setImage(logo)
              .setThumbnail(logo)
              .setFooter("By: VossyGamer#1234")
              .setColor('#e47a00')
              .addFields(
                {
                  name: 'Commands:',
                  value: '`v!commands`',
                  inline: true,
                },
                {
                  name: '(Info) VossyGamer:',
                  value: '`v!VossyGamer`',
                  inline: true,
                },
                // {
                  // name: 'Field 3',
                  // value: 'Hello world',
                  // inline: true,
                // },
                // {
                  // name: 'Field 4',
                  // value: 'Hello world',
                // }
              )
        
            return message.channel.send(embed)}

    if (command === `${prefix}commands`) {
            const logo =
              'https://i.ibb.co/wRGQGVX/profile-pic-1.png'
        
            const embed = new Discord.MessageEmbed()
              .setTitle("Vossy's Utilities | Commands")
              .setDescription('All commands in this bot.')
              // .setURL('https://www.youtube.com/channel/UChPrh75CmPP9Ig6jISPnfNA')
              // .setAuthor(message.author.username)
              // .setImage(logo)
              .setThumbnail(logo)
              .setFooter("By: VossyGamer#1234")
              .setColor('#e47a00')
              .addFields(
                {
                  name: 'Commands coming soon!',
                  value: 'Just be patient..',
                  inline: true,
                },
                // {
                  // name: '(Info) VossyGamer:',
                  // value: '`v!VossyGamer`',
                  // inline: true,
                // },
                // {
                  // name: 'Field 3',
                  // value: 'Hello world',
                  // inline: true,
                // },
                // {
                  // name: 'Field 4',
                  // value: 'Hello world',
                // }
              )
        
            return message.channel.send(embed)}
            
    if (command === `${prefix}VossyGamer`) {
        const logo =
          'https://i.ibb.co/wRGQGVX/profile-pic-1.png'
    
        const embed = new Discord.MessageEmbed()
          .setTitle("Vossy's Utilities | (Info) VossyGamer")
          .setDescription('Information about VossyGamer.')
          // .setURL('https://www.youtube.com/channel/UChPrh75CmPP9Ig6jISPnfNA')
          // .setAuthor(message.author.username)
          // .setImage(logo)
          .setThumbnail(logo)
          .setFooter("By: VossyGamer#1234")
          .setColor('#e47a00')
          .addFields(
            {
              name: 'Discord Name:',
              value: 'VossyGamer#1234',
              inline: true,
            },
            {
              name: 'Real Name:',
              value: 'Jari ***',
              inline: true,
            },
            {
              name: 'Birthday:',
              value: 'May 4th 2007',
              inline: true,
            },
            {
              name: 'More coming soon!',
              value: 'Just be patient..',
            }
          )
    
        return message.channel.send(embed)}

    if (command === `${prefix}info`) 
 
        return message.channel.send("This bot is made by **VossyGamer#1234**. More info coming soon!");

    if (command === `${prefix}invite`)
 
        return message.channel.send("**> At the moment the bot is __private__, but in the future the bot may become public.**\n> Then the invite link will appear here!");

    if (command === `${prefix}`) 

        return message.channel.send("That's my **prefix**! :)");

    if (command === `@Vossy's Utilities#6991`) 

        return message.channel.send("My **prefix** is `v!`!"); 
  
    // client.on('message', async message => {
      // if (message.channel.type == 'dm') {
          // message.reply("**I don't reply to DM's!**");
        // }
      // });

// Afwerken: Bot wordt vermeldt door gebruiker -> Prefix wordt in bericht naar gebruiker gestuurd (zie hierboven)

});

// Only One Message

// - Code hier -

// Overige

client.login(process.env.token)