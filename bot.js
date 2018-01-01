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

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
