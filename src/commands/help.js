module.exports = (bot) => {
  bot.help((ctx) => {
    ctx.reply(`
✅ *Available Commands:*

📜 /quote - Get the Quote of the Day.
😂 /joke - Get a random joke.
💻 /search_algorithm - Enter *linear* or *binary* to get the algorithm code.

👉 Type any command to get started.
`);
  });
};
