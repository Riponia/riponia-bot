const CommandBuilder = require("../classes/CommandBuilder");

module.exports = new CommandBuilder()
  .setName("source")
  .setAliases(["code", "github"])
  .setOwnersOnly(false)
  .setGuildOnly(false)
  .setRequireArgs(false)
  .setDeletable(false)
  .setCooldown(1)
  .setDisabled(false)
  // eslint-disable-next-line
  .setExecute(async (message, user, args) => {
    await message.channel.send("https://github.com/Riponia/riponia-bot");
  });