# Algorithm Bot 🤖

This is a Telegram Bot built using **Node.js** and **Telegraf.js** that provides:

- Random Quotes
- Random Jokes
- Algorithm Code (like Binary Search, Linear Search, etc.)

The bot also supports a **custom command menu** for easy command selection.

---

## 🚀 Features

- **/joke** - Get a random joke
- **/quote** - Get a random quote of the day
- **/search_algorithm** - Get code for a specific algorithm (like Binary Search, Linear Search)

---

## 💻 Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file

In the root directory, create a file called **`.env`** and add the following:

```
BOT_TOKEN=YOUR_TELEGRAM_BOT_TOKEN
```

> 💡 **Note:** You can get your Telegram Bot Token from [BotFather](https://t.me/BotFather).

### 4. Run the bot

```bash
npx nodemon
```

---

## ✅ Usage

Once the bot is running:

1. **Go to Telegram** and search for your bot.
2. Click the **Start** button.
3. You can now use the following commands:

```
/joke - Get a random joke
/quote - Get an inspirational quote
/search_algorithm - Get code for algorithms like Binary Search, Linear Search, etc.
```

## 📜 Available Commands

| Command             | Description                                      |
| ------------------- | ------------------------------------------------ |
| `/joke`             | Get a random joke.                               |
| `/quote`            | Get an inspirational quote.                      |
| `/search_algorithm` | Search for algorithm code (e.g., Binary Search). |

---

## 🛠 Environment Variables

| Variable    | Description                                                       |
| ----------- | ----------------------------------------------------------------- |
| `BOT_TOKEN` | Your Telegram Bot Token from [BotFather](https://t.me/BotFather). |

---

## 📜 Custom Menu Button

This bot comes with a **custom Telegram Menu Button** that shows:

- **/joke** - Get a random joke.
- **/quote** - Get a random quote.
- **/search_algorithm** - Get code for algorithms.

You can see the button next to your input bar on Telegram.
