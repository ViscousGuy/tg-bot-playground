const { getQuoteOfTheDay } = require("../services/quoteService");

module.exports = (bot) => {
  bot.command("quote", async (ctx) => {
    const quote = await getQuoteOfTheDay();
    ctx.reply(`Quote: ${quote.q}\nAuthor: ${quote.a}`);
  });
};
