const { MessageEmbed } = require(`discord.js`)
const moment = require("moment")

module.exports = {
  name:"user",
      description: "Shows information, join date, about yourself or a user.",
  options: [
    {
      name: 'user',
      description: 'the targeted user',
      type: "USER"
    }
    ],
    
    commandOptions: null,
    global: true,
    required: true,
  run: async(client, interaction, args)=> {
  let user= interaction.guild.members.cache.get(args[0])
    if(!user) user = interaction.member;
 let time = user.user.createdTimestamp
      let userembed = new MessageEmbed()
        .setColor("RANDOM")
       .setThumbnail(user.displayAvatarURL({ dynamic: true, size: 512 }))
  .addField(`Joined Discord :`, `**${moment(user.user.createdTimestamp).fromNow()}**`, true)
.addField(`Joined Server :`, `**${moment(user.joinedAt).fromNow()}**`, true)
        .setFooter(`${user.user.tag} `, user.user.displayAvatarURL({ dynamic: true }))


client.api.interactions(interaction.id, interaction.token).callback.post({data: {
			type: 4,
			data: {
					embeds: [ballembed]
				}
			}
		})

await interaction.followUp(
  { 
  embeds: [userembed] 
}
                          )
    
    
}
}