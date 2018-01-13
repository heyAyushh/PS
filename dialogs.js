var bot = require('botbuilder');

module.exports = () => {

    bot.dialog('start', [
        function (session) {
/*             if(time.getHours()>10 && time.getHours()<20 ) */
            session.beginDialog('head');
        }]).triggerAction({
        matches: /^Start again$|^Main Menu$/i,
        confirmPrompt: "This will cancel your current request. Are you sure?"
    
    });

    bot.dialog('head', [
        function (session) {
            session.send('Want some maggi?');
            builder.Prompts.choice(session, ' You want some maggi ? ', ' Yeah | Nope ', { listStyle: builder.ListStyle.button })
        },

  function (session, results) {
    if (results.response.entity === ' Yeah ') {
      session.sendTyping()
      session.beginDialog('Quantity')
    } else {
      session.sendTyping()
      session.send(' Never Mind 😅 ')
      session.endDialogWithResult(results)
    }
  }
]);



var rate = new require('./rates.json');
}