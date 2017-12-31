const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!toasty') {
    	message.reply('toasty will better burn.');
  	}
});
client.on('message', message => {
    if (message.content === '!olddyno') {
    	message.reply('Dyno is known to secretly be a stegosauros');
  	}
});
client.on('message', message => {
    if (message.content.contains == '!dyno') {
    	message.reply('Dyno is known to secretly be a stegosauros');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
