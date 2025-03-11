module.exports = (bot) => {
  bot.telegram.setMyCommands([
    {
      command: "joke",
      description: "Get a random joke",
    },
    {
      command: "quote",
      description: "Get a quote of the day",
    },
    {
      command: "search_algorithm",
      description: "Get code for an algorithm",
    },
  ]);
};
