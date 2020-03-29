const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjkzOTI2MjU0MTQ3MTQxNzAz.XoELmQ.8N9tp2ozBX8qMZA4j8dCDfCuwOo';

const PREFIX = "!";

bot.on('ready', () =>{
    console.log('This bot is online!');
    bot.user.setActivity('Root', {type: 'LISTENING'}).catch(console.error);


})


bot.login(process.env.BOT_TOKEN);
