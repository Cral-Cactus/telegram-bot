const express = require('express');
const path = require('path');
const { Telegraf } = require('telegraf');
require('dotenv').config();

const asdHandler = require('./commands/asd');

const port = process.env.PORT || 3000;

const expressApp = express();

expressApp.use(express.static('static'));
expressApp.use(express.json());

const bot = new Telegraf(process.env.BOT_TOKEN);

expressApp.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

asdHandler(bot);

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
