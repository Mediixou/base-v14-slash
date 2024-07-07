const Discord = require('discord.js');

class commands {
    constructor() { 
        this.name = "ping",
        this.description = "Permets de voir le ping du bot."
    }
    async execute(client, interaction) {

        const pings = new Discord.EmbedBuilder()
        .setColor('#0099ff')
        .setTitle('Ping')
        .setDescription('Ping du bot :ping_pong: : ' + Math.round(client.ws.ping) +'ms')
        .setTimestamp();

        interaction.reply({ embeds: [pings] });
    }
}

module.exports = commands;