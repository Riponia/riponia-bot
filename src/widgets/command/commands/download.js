const CommandBuilder = require("../classes/CommandBuilder");

module.exports = new CommandBuilder()
  .setName("download")
  .setAliases(["ip", "server"])
  .setOwnersOnly(false)
  .setGuildOnly(false)
  .setRequireArgs(false)
  .setDeletable(false)
  .setCooldown(1)
  .setDisabled(false)
  // eslint-disable-next-line
  .setExecute(async (message, user, args) => {
    await message.channel.send( 
    "Le Launcheur n'est pas encore disponible pendant la bêta !" +
    "\nFaites ``.beta`` pour plus d'informations.");
  });