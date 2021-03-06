const CommandBuilder = require("../classes/CommandBuilder");

module.exports = new CommandBuilder()
  .setAliases(["p", "pong"])
  .setOwnersOnly(false)
  .setGuildOnly(false)
  .setRequireArgs(false)
  .setDeletable(false)
  .setCooldown(2)
  .setDisabled(false)
  // eslint-disable-next-line
  .setExecute(async (message, user, args) => {
    await message.channel.send(`🏓 ${Math.round(message.client.ws.ping)} ms`);
  });
