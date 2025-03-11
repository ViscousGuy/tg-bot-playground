module.exports = (bot) => {
  bot.start((ctx) => {
    ctx.reply(
      "Welcome to the Quote Bot authored by Shubham Jain! Available commands: /quote, /help"
    );
  });
};
