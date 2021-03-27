require("dotenv").config();
const Discord = require('discord.js');

const client = new Discord.Client();

require("./core/loadWidgetListeners")(client);

// client.on('ready', () => {
//     console.log('I am ready!');
//   });
  
//   // COMMANDES
  
//   client.on('message', message => {
  
//     // .help
//     if (message.content === '.h' || message.content === '.help') {
//       message.channel.send('**Commandes:**\n> ```.help``` ou ```.h```: Affiche cette liste de commandes \n>');
//     }
  
  
//     // .code, .source, .github
//     if (message.content === '.code' || message.content === '.source' || message.content === '.github') {
//       message.channel.send('**https://github.com/Riponia/**');
//     }
    
//     // Commandes d'aide
    
//     // .ip
//     if (message.content === '.server' || message.content === '.ip') {
//       message.channel.send('Pour vous connecter au serveur, téléchargez le Launcheur sur **https://riponia.tk/downloads**');
//     }

client.login(process.env.DISCORD_BOT_TOKEN);
