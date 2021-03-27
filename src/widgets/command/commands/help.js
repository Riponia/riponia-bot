const CommandBuilder = require("../classes/CommandBuilder");

module.exports = new CommandBuilder()
  .setAliases(["h", "help"])
  .setOwnersOnly(false)
  .setGuildOnly(false)
  .setRequireArgs(false)
  .setDeletable(false)
  .setCooldown(10)
  .setDisabled(false)
  // eslint-disable-next-line
  .setExecute(async (message, user, args) => {
    await message.channel.send(`help`);
  });
