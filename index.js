var bot = require('botbuilder');
var restify = require('restify');

var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});
  
// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});

var intents = new builder.IntentDialog({
    recognizers: [apiaiRecognizer],
    intentThreshold: 0.2,
    recognizeOrder: builder.RecognizeOrder.series
});

// Receive messages from the user and respond
global.bot = new builder.UniversalBot(connector, {
    persistConversationData: true},(session) => {
        session.beginDialog(' start ');
});

bot.dialog('/', intents);

intents.matches('restaurant.menus', '/restaurant.menus');
intents.matches('restaurant.location', '/restaurant.location');
intents.matches('restaurant.timings', '/restaurant.timings');


// Intent: restaurant.menus
bot.dialog('/restaurant.menus', [
    function(session, args, next) {
        var cards = [];

        menus.forEach(function(menu) {
            var card = new builder.HeroCard(session)
                .title(menu.name)
                .subtitle(menu.subtitle)
                .text(menu.text)
                .images([
                    builder.CardImage.create(session, menu.image)
                ])
                .buttons([
                    builder.CardAction.openUrl(session, menu.url, 'Order Now')
                ]);

            cards.push(card);
        })

        var reply = new builder.Message(session)
            .attachmentLayout(builder.AttachmentLayout.carousel)
            .attachments(cards);

        session.endDialog(reply);
    }
]);

// Intent: restaurant.location
bot.dialog('/restaurant.location', [
    function(session, args, next) {
        session.endDialog('You can find us at San Francisco 987, Santiago.');
    }
]);

// Intent: restaurant.timings
bot.dialog('/restaurant.timings', [
    function(session, args, next) {
        session.endDialog('We are open Monday to Friday from 2 PM to 11 PM.');
    }
]);









// Listen for messages from users 
server.post('/api/messages', connector.listen());

var time = require('time');
 
// Create a new Date instance, representing the current instant in time 
var now = new time.Date();
 
now.setTimezone("India/New_Delhi");
// `.getDate()`, `.getDay()`, `.getHours()`, etc. 
// will return values according to UTC-8  
 
// Create our bot to listen in on the chat connector.


var Cart;
var Ordertotal;