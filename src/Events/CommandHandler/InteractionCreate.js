const Discord = require("discord.js")

module.exports = {
    name: Discord.Events.InteractionCreate,
    execute(interaction, client) {
        if(interaction.channel === null) return
        if(!interaction.isCommand()) return
        if(!client.commands.has(interaction.commandName)) return
        try {
            const command = client.commands.get(interaction.commandName)

            console.log(`[CMD-SLASH] ${interaction.guild.name} | #${interaction.channel.name} | ${interaction.user.tag} | /${interaction.commandName}`);
    
               command.execute(client, interaction);

        } catch (error) {
            console.error(error)
        }
    }
}