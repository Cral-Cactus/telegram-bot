# Telegram Bot

This repository contains the code for a Telegram bot that provides cryptocurrency prices (Bitcoin, Ethereum, Litecoin) and responds to specific text messages. The bot is built using the `Telegraf` library and fetches data from the CoinGecko API.

## Files

- `index.js`: Main entry point of the bot.
- `start.js`: Handles the `/start` command.
- `bitcoin.js`: Handles the `/bitcoin` command to fetch Bitcoin prices.
- `ethereum.js`: Handles the `/ethereum` command to fetch Ethereum prices.
- `litecoin.js`: Handles the `/litecoin` command to fetch Litecoin prices.
- `asd.js`: Responds to the message "ASD" with "hey".

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Cral-Cactus/telegram-bot.git
   cd telegram-bot
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory and add your Telegram bot token:
   ```env
   BOT_TOKEN=your_telegram_bot_token
   ```

4. Start the bot:
   ```sh
   node index.js
   ```

## Usage

### Commands

- `/start`: Welcomes the user.
- `/bitcoin`: Fetches and returns the current price of Bitcoin in USD.
- `/ethereum`: Fetches and returns the current price of Ethereum in USD.
- `/litecoin`: Fetches and returns the current price of Litecoin in USD.

### Messages

- Responds to the message "ASD" with "hey".

## Conclusion

Creating a Telegram bot is a straightforward process, particularly when using libraries like `Telegraf`. The structure and logic involved in building this bot are not very different from creating a Discord bot. Both involve setting up command handlers, responding to user inputs, and integrating APIs to fetch and display data. By understanding the core concepts of bot development, you can easily adapt your skills between different platforms such as Telegram and Discord.