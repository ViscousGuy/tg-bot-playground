const algorithms = require("../data/algorithms");

module.exports = (bot) => {
  bot.command("search_algorithm", (ctx) => {
    ctx.reply("Enter the name of the search algorithm (linear or binary):");

    bot.on("text", (ctx) => {
      const input = ctx.message.text.toLowerCase();

      if (algorithms[input]) {
        ctx.reply(algorithms[input]);
      } else {
        ctx.reply(
          "❌ Invalid input! Please enter either *linear* or *binary*."
        );
      }
    });
  });
};
