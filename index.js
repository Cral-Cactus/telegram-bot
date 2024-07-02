const express = require('express');
const path = require('path');
const fs = require('fs');
const { Telegraf } = require('telegraf');
require('dotenv').config();

const port = process.env.PORT || 3000;

const expressApp = express();

expressApp.use(express.static('static'));
expressApp.use(express.json());

const bot = new Telegraf(process.env.BOT_TOKEN);

const commandsDir = path.join(__dirname, 'commands');
fs.readdirSync(commandsDir).forEach(file => {
  if (file.endsWith('.js')) {
    const commandHandler = require(path.join(commandsDir, file));
    commandHandler(bot);
  }
});

expressApp.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

bot.on('channel_post', (ctx) => {
  const message = ctx.channelPost;
  console.log(`New message in channel ${message.chat.title}: ${message.text}`);
});

bot.launch()
  .then(() => {
    console.log('Bot started');
  })
  .catch((err) => {
    console.error('Error starting bot', err);
  });

expressApp.listen(port, () => {
  console.log(`Server running on port ${port}`);
});