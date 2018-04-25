const Discord = require('discord.js');
const bot = new Discord.Client();

console.log('Bot Running');

var rng= [];
var i = 0;
var date = new Date();
var hr = date.getHours();
var min = date.getMinutes();
var detail = date.getUTCDate();
bot.on('message',(message)=>{
	if(message.content == '!duo'){
		//message.reply('Hola'); reply to someone message
		message.channel.send('Hola');
	}
	else if(message.content == '!pull'){
		for(i=0;i<=10;i++){
			x= Math.floor(Math.random()*1000)+1;
			if(i<10){
				if(x<63){
					rng.push(" T6 Ancient");
				}else if(x>=63 && x<81){
					rng.push(" T6 Legendary");
				}else if(x>=81 && x<568){
					rng.push(" T7 Ancient");
				}else if(x>=568 && x<718) {
					rng.push(" T7 Legendary");
				}else if(x>=718 && x<758){
					rng.push(" 100 Fragments");
				}else if(x>=758 && x<774){
					rng.push(" 200 Fragments");
				}else if(x>=774 && x<814){
					rng.push(" 10 Essence");
				}else if(x>=814 && x<830){
					rng.push(" Artifact Fragments");
				}else if(x>=830 && x<878){
					rng.push(" Empty Deluxe Flasks");
				}else if(x>=878 && x<918){
					rng.push(" Fragments of Infinity");
				}else if(x>=918 && x<928){
					rng.push("** ( ͡° ͜ʖ ͡°)Artifact( ͡° ͜ʖ ͡°)**");
				}else if(x>=928 && x<938){
					rng.push("** ★Stone of Infinity★**");
				}else if(x>=938 && x<948){
					rng.push("** <>Unique Weapon<>**");
				}else if(x>=948 && x<978){
					rng.push(" ** -Class Unique Weapon-**");
				}else if(x>=978 && x<991){
					rng.push("** Common Treasure**");
				}else{
					rng.push("*** Unique Treasure***");
				}
			}else{
				if(x<124){
					rng.push(" T7 Ancient");
				}else if(x>=124 && x<462) {
					rng.push(" T7 Legendary");
				}else if(x>=462 && x<522){
					rng.push(" 100 Fragments");
				}else if(x>=522 && x<546){
					rng.push(" 200 Fragments");
				}else if(x>=546 && x<606){
					rng.push(" 10 Essence");
				}else if(x>=606 && x<630){
					rng.push(" Artifact Fragments");
				}else if(x>=630 && x<702){
					rng.push(" Empty Deluxe Flasks");
				}else if(x>=702 && x<762){
					rng.push(" Fragments of Infinity");
				}else if(x>=762 && x<792){
					rng.push("** ( ͡° ͜ʖ ͡°)Artifact( ͡° ͜ʖ ͡°)**");
				}else if(x>=792 && x<822){
					rng.push("** ★Stone of Infinity★**");
				}else if(x>=822 && x<852){
					rng.push("** <>Unique Weapon<>**");
				}else if(x>=852 && x<942){
					rng.push(" ** -Class Unique Weapon-**");
				}else if(x>=942 && x<971){
					rng.push("** Common Treasure**");
				}else{
					rng.push("*** Unique Treasure***");
				}
			}
		}
		var gmuw = Math.floor(Math.random()*10)+1;
		if(gmuw==1){
			rng.push(" ***~GM's Used Underwear~***");
		}

		message.reply("Congratulation you got : "+ rng);
		rng=[];
		i = 0;
	}else if(message.content == '!help'){
		message.channel.send("Say ``!pull`` for a disappointment");
	}else if(message.content == '!satan'){
		message.reply("Hi dipshit");
	}else if (message.content =='!testfor'){
		for(i=0;i<=10;i++){
			message.channel.send(i);
		}
	}else if(message.content=='!hue') {
		message.reply("hueuheuheu")
	}else if(message.content=='!botalive?') {
		message.reply("yeas")
	}else if(message.content=='!tanggal'){
		message.reply(hr+'/n'+min+'/n'+detail);
	}
	//test
	//test commit 2
})






bot.login(process.env.BOT_TOKEN); //bot login duh

