const Discord = require('discord.js')

const client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.MessageContent,
        Discord.GatewayIntentBits.GuildMessages,
        Discord.GatewayIntentBits.DirectMessages
    ]
}) 

client.config = require('./config');
client.commands = new Discord.Collection()

require('./src/Structure/Handler/Event')(client);
require('./src/Structure/Handler/Command')(client);

process.on("uncaughtException", err => {console.log(err);})
client.login(client.config.bot.token);