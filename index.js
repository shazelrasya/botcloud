const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjkzOTI2MjU0MTQ3MTQxNzAz.XoIn-g.TV-JranesmyR25jxh4ovGIc1bIE';

const PREFIX = "!";

bot.on('ready', () =>{
    console.log('This bot is online!');
    bot.user.setActivity('Root', {type: 'LISTENING'}).catch(console.error);




})





bot.login(process.env.token);
