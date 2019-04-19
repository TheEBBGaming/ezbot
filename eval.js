exports.eval = function() {
  if (message.author.id === "288853176210161666") {
    eval(args.join(' '));
    } else {
      return message.channel.send("hey, how do you even know this command.. <@288853176210161666>!");
    }
};