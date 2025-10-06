const Eris = require("eris");
const keep_alive = require('./keep_alive.js');

const bot = new Eris(process.env.token);

bot.on("ready", () => {
  console.log(`Connected as ${bot.user.username}#${bot.user.discriminator}`);

  bot.editStatus("idle");
});

bot.on("error", (err) => {
  console.error(err);
});

bot.connect();
