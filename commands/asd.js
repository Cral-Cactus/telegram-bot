const asdHandler = (bot) => {
    bot.hears('ASD', ctx => {
      bot.telegram.sendMessage(ctx.chat.id, 'hey');
    });
  }
  
  module.exports = asdHandler;  