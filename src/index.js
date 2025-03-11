const bot = require("./config/bot");
const registerStartCommand = require("./commands/start");
const registerHelpCommand = require("./commands/help");
const registerQuoteCommand = require("./commands/quote");
const registerJokeCommand = require("./commands/joke");
const registerSearchAlgorithmCommand = require("./commands/searchAlgorithm");
const setCommands = require("./commands/setCommands");

registerStartCommand(bot);
registerHelpCommand(bot);
registerQuoteCommand(bot);
registerJokeCommand(bot);
registerSearchAlgorithmCommand(bot);

// Set Telegram Menu Button
setCommands(bot);

bot.launch();

console.log("Bot is running...");
