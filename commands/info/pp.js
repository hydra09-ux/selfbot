const config = require('../../config');

module.exports = {
    name: 'pp',
    description: '📧 Sends your PayPal ID in a styled message with emojis.',
    execute(channel, message, client, args) {
        const paypalID = config.paypalID;
        const paypalMessage = `📧 **Pay Here (PayPal) ID:**\n\n||${paypalID}||`;
        message.channel.send(paypalMessage);
    }
};
