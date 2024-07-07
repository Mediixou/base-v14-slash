const Discord = require('discord.js');

module.exports = {
    name: Discord.Events.ClientReady,
    execute(client){
        console.log(`Logged in as ${client.user.tag}!`);

       function Status(){
        client.user.setPresence({
            status: 'online',
            activities: [{
                    type: Discord.ActivityType.Custom,
                    name: 'customname',
                    state: 'Tuto Youtube'
            }]
        })
       } 
       
       Status();
       setInterval(Status, 30000); // Change status every 30 seconds
    }
}