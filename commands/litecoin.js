const axios = require('axios');

module.exports = (bot) => {
    bot.command('litecoin', (ctx) => {
        var rate;
        console.log(ctx.from);
        axios.get('https://api.coingecko.com/api/v3/simple/price?ids=litecoin&vs_currencies=usd')
            .then(response => {
                console.log(response.data);
                rate = response.data.litecoin;
                const message = `Hello, today the Litecoin price is ${rate.usd} USD`;
                bot.telegram.sendMessage(ctx.chat.id, message);
            })
            .catch(error => {
                console.error('Error fetching Litecoin price:', error);
                ctx.reply('Sorry, there was an error fetching the Litecoin price.');
            });
    });
};