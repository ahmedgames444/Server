module.exports = {
  name: "emoji",
  aliases: ['link'],
  description: "Get Emoji Url link",  
  run: async(client, message, args) => {
    const discord = require("discord.js");
    if (!args[0]) return message.reply({content: 'اكتب الايموجي', allowedMentions: { repliedUser: false } });
    const lro = discord.Util.parseEmoji(args[0]);
    if (!lro.name || !lro.id) return message.reply({content: 'لايوجد ايموجي مثل هذا'});
    const loryn = `${lro.name}: https://cdn.discordapp.com/emojis/${lro.id}.${lro.animated ? "gif" : "png"}`;
    message.reply(loryn);
    
  }
} 