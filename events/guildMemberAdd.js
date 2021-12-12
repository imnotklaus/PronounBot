const { Permissions } = require("discord.js");

module.exports = (client, member) => {
  const defaultChannel = member.guild.channels.cache.find(channel => channel.permissionsFor(guild.me).has(Permissions.FLAGS.SEND_MESSAGES));
  defaultChannel.send(`Welcome ${member.user} to this server.`).catch(console.error);
}