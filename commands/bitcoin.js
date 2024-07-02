const axios = require('axios');

module.exports = (bot) => {
    bot.command('bitcoin', (ctx) => {
        var rate;
        console.log(ctx.from);
        axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
            .then(response => {
                console.log(response.data);
                rate = response.data.bitcoin;
                const message = `Hello, today the Bitcoin price is ${rate.usd} USD`;
                bot.telegram.sendMessage(ctx.chat.id, message);
            })
            .catch(error => {
                console.error('Error fetching Bitcoin price:', error);
                ctx.reply('Sorry, there was an error fetching the Bitcoin price.');
            });
    });
};