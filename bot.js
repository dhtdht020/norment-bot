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
    if (message.content === '!dyno') {
    	message.reply('Dyno is known to secretly be a stegosauros');
  	}
});
client.on('message', message => {
    if (message.content === '!ofir') {
    	message.reply('Ofir is known to secretly be Donald Trump');
  	}
});
client.on('message', message => {
    if (message.content === '!trump') {
    	message.reply('Trump is known to secretly be ofir26');
  	}
});
client.on('message', message => {
    if (message.content === '!sesuiro') {
    	message.reply('thicc');
  	}
});
client.on('message', message => {
    if (message.content === '!pipluspi') {
    	message.reply('equels pumpkin pie');
  	}
});
client.on('message', message => {
    if (message.content === '!help') {
    	message.reply('norment.org is your life');
  	}
});
client.on('message', message => {
    if (message.content === 'agree with me pls') {
    	message.reply('I dont agree.');
  	}
});
client.on('message', message => {
    if (message.content === 'galaxia') {
    	message.reply('mwans galaxy in hebrew and that other language');
  	}
});
client.on('message', message => {
    if (message.content === 'sesuiro') {
    	message.reply('rosesui*');
  	}
});
client.on('message', message => {
    if (message.content === 'me rich') {
    	message.reply('we call hax');
  	}
});
client.on('message', message => {
    if (message.content === 'Me rich') {
    	message.reply('we call hax');
  	}
});
// THIS 
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
