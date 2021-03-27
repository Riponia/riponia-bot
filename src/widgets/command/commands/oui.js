const CommandBuilder = require("../classes/CommandBuilder");

module.exports = new CommandBuilder()
  .setName("oui")
  .setOwnersOnly(false)
  .setGuildOnly(false)
  .setRequireArgs(false)
  .setDeletable(false)
  .setCooldown(1)
  .setDisabled(false)
  // eslint-disable-next-line
  .setExecute(async (message, user, args) => {
    await message.channel.send("Bah oui !");
  });