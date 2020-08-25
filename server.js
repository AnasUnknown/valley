const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://valleys.glitch.me/`);
}, 280000);
 

const { Client, RichEmbed } = require("discord.js");
var { Util } = require('discord.js');
const client = new Client({ disableEveryone: true})
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const botversion = require('./package.json').version;
const simpleytapi = require('simple-youtube-api')
const moment = require("moment");
const fs = require('fs');
const util = require("util")
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const guild = require('guild');
const dateFormat = require('dateformat');//npm i dateformat
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
client.login(process.env.BOT_TOKEN);
const queue = new Map();
var table = require('table').table
const Discord = require('discord.js');
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", async message => {
   
  if (message.guild.id != 740376659949256754) return;//اونرز
  if (message.channel.id != 740435235635986432) return;
  if(message.author.id === client.user.id) return;
      if (message.author.send) {
    message.channel.send({files: ["https://cdn.discordapp.com/attachments/730655375933571092/744529654337110026/New_Project_47_630B123.gif"]});

  }
  
     
  
 
   })
client.on("message", async message => {
   
  if (message.guild.id != 740376659949256754) return;//ترست
  if (message.channel.id != 740469275579645963) return;
  if(message.author.id === client.user.id) return;
      if (message.author.send) {
    message.channel.send({files: ["https://cdn.discordapp.com/attachments/730655375933571092/744529654337110026/New_Project_47_630B123.gif"]});

  }
  
     
  
 
   })
client.on("message", async message => {
   
  if (message.guild.id != 740376659949256754) return;//ديسكورد
  if (message.channel.id != 740436098614034562) return;
  if(message.author.id === client.user.id) return;
      if (message.author.send) {
    message.channel.send({files: ["https://cdn.discordapp.com/attachments/730655375933571092/744529654337110026/New_Project_47_630B123.gif"]});

  }
  
     
  
 
   })
client.on("message", async message => {
   
  if (message.guild.id != 740376659949256754) return;
  if (message.channel.id != 740469381191958529) return;
  if(message.author.id === client.user.id) return;
      if (message.author.send) {
    message.channel.send({files: ["https://cdn.discordapp.com/attachments/730655375933571092/744529654337110026/New_Project_47_630B123.gif"]});

  }
  
     
  
 
   })
client.on("message", async message => {
   
  if (message.guild.id != 740376659949256754) return;
  if (message.channel.id != 743010670357774389) return;
  if(message.author.id === client.user.id) return;
      if (message.author.send) {
    message.channel.send({files: ["https://cdn.discordapp.com/attachments/730655375933571092/744529654337110026/New_Project_47_630B123.gif"]});

  }
  
     
  
 
   })
client.on("message", async message => {
   
  if (message.guild.id != 740376659949256754) return;
  if (message.channel.id != 743011192812994561) return;
  if(message.author.id === client.user.id) return;
      if (message.author.send) {
    message.channel.send({files: ["https://cdn.discordapp.com/attachments/730655375933571092/744529654337110026/New_Project_47_630B123.gif"]});

  }
  
     
  
 
   })
client.on("message", async message => {
   
  if (message.guild.id != 740376659949256754) return;
  if (message.channel.id != 740469747036192828) return;
  if(message.author.id === client.user.id) return;
      if (message.author.send) {
    message.channel.send({files: ["https://cdn.discordapp.com/attachments/730655375933571092/744529654337110026/New_Project_47_630B123.gif"]});

  }
  
     
  
 
   })
client.on("message", async message => {
   
  if (message.guild.id != 740376659949256754) return;
  if (message.channel.id != 740470312608464974) return;
  if(message.author.id === client.user.id) return;
      if (message.author.send) {
    message.channel.send({files: ["https://cdn.discordapp.com/attachments/730655375933571092/744529654337110026/New_Project_47_630B123.gif"]});

  }
  
     
  
 
   })
client.on("message", async message => {
   
  if (message.guild.id != 740376659949256754) return;
  if (message.channel.id != 743011261515694081) return;
  if(message.author.id === client.user.id) return;
      if (message.author.send) {
    message.channel.send({files: ["https://cdn.discordapp.com/attachments/730655375933571092/744529654337110026/New_Project_47_630B123.gif"]});

  }
  
     
  
 
   })
