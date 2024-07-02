const axios = require('axios');

module.exports = (bot) => {
    bot.command('ethereum', (ctx) => {
        var rate;
        console.log(ctx.from);
        axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd')
            .then(response => {
                console.log(response.data);
                rate = response.data.ethereum;
                const message = `Hello, today the Ethereum price is ${rate.usd} USD`;
                bot.telegram.sendMessage(ctx.chat.id, message);
            })
            .catch(error => {
                console.error('Error fetching Ethereum price:', error);
                ctx.reply('Sorry, there was an error fetching the Ethereum price.');
            });
    });
};