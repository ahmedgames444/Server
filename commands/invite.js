const Discord = require('discord.js')
const fs = require('fs');

module.exports = {
	name: 'invite',
	description: 'Invite the bot',
	commandOptions: null,
    global: true,
	execute(interaction) {
        const ram = process.memoryUsage().heapUsed / 1024 / 1024
        const botAuthor = client.users.cache.get("927761721332989952") //ايدي بوت
        const dir = './commands';

        fs.readdir(dir, (err, files) => {
            const infoembed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Invite Bot')
                .setThumbnail(client.user.displayAvatarURL({ size: 256, format: 'png', dynamic: true }))
                .setDescription(`
                __WOW!__ Greate I was made by <@919719379439071242> You can add me and also join my support server by links below \n **Invite:** [Click Here](https://discord.com/api/oauth2/authorize?client_id=928061511451176961&permissions=8&scope=bot%20applications.commands)\n **Support Server:** [Click Here](https://discord.gg/k2tHWVX7)`)
                .setFooter(client.user.tag, client.user.displayAvatarURL({ size: 256, format: 'png', dynamic: true }))
                .setTimestamp()

            client.api.interactions(interaction.id, interaction.token).callback.post({data: {
                type: 4,
                data: {
                        embeds: [infoembed]
                    }
                }
            })
        });
	},
};
