const jokes = require("../data/jokes");

module.exports = (bot) => {
  bot.command("joke", (ctx) => {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    ctx.reply(`😂 Joke: ${randomJoke.q}\n🤣 Answer: ${randomJoke.a}`);
  });
};
