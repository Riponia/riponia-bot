const CommandBuilder = require("../classes/CommandBuilder");

module.exports = new CommandBuilder()
  .setName("beta")
  .setAliases(["b", "alpha"])
  .setOwnersOnly(false)
  .setGuildOnly(false)
  .setRequireArgs(false)
  .setDeletable(false)
  .setCooldown(1)
  .setDisabled(false)
  // eslint-disable-next-line
  .setExecute(async (message, user, args) => {
    await message.channel.send("La bêta n'est pas encore disponible !");
  });