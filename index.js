const Eris = require("eris");
const keep_alive = require('./keep_alive.js');

const bot = new Eris(process.env.token);

bot.on("ready", () => {
  console.log(`Connected as ${bot.user.username}#${bot.user.discriminator}`);

  // set status to idle and activity text to "test"
  // type: 0 = Playing, 1 = Streaming, 2 = Listening, 3 = Watching
  bot.editStatus("idle", { name: "test", type: 0 });
});

bot.on("error", (err) => {
  console.error(err);
});

bot.connect();
