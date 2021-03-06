const CommandBuilder = require("../classes/CommandBuilder");

module.exports = new CommandBuilder()
  .setName("help")
  .setAliases(["h", "aide"])
  .setOwnersOnly(false)
  .setGuildOnly(false)
  .setRequireArgs(false)
  .setDeletable(false)
  .setCooldown(1)
  .setDisabled(false)
  // eslint-disable-next-line
  .setExecute(async (message, user, args) => {
    await message.channel.send( 
    "**Liste des commandes de Riponia:**" +
    "\n``.help``: Affiche cette liste." +
    "\n``.download``: Donne le lien de la page de téléchargement du Launcheur." +
    "\n``.beta``: Informations sur la bêta de Riponia." +
    "\n\n``.source``: Donne le lien du code source de ce bot.");
  });