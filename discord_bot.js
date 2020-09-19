const discordzy = require('discord.zy');
const eris = require('eris');
const commando = require('discord.js-commando');
const discordhy = require('discord.hy');
const discordjs = require('discord.js');
const discordts = require('discord.ts-buddy');
const config = require('./config.js')
const db = require('./db.js')
const { MessageEmbed } = discordjs;
const warning = "Danger, Will Robinson, Danger! This cannot be undone.";
const client = new commando.CommandoClient({
	prefix = config.prefix1,
	cusprefix = config.prefix2,
	token = process.env.TOKEN,
	owners = config.owners
})
const me = MessageEmbed
const log = `
LOADING DATABASE KEYS
${db.keys}
LOADING DATABASE MATCHES
${db.matches}

BOT ONLINE
`
client.on("ready", () => {
	console.log(log)
})
client.on("message", async message => {
	
const command = message.content.startsWith.slice(prefix)
const target = message.mention.users.first()
const memberA = message.author
if (command === 'help') {
  let help = new me()
  .setTitle("HELP")
  .setDescription(`
  =====================================================
  CHECK OUT OUR WEBSITES
  =====================================================
  PENGUIN
  [WEBSITE](https://penguin-yeetdesigns.repl.co)
  BLUE'S COMMANDER
  [WEBSITE](https://bluescommander.glitch.me)
  =====================================================
  CHECK OUT OUR BOTS
  =====================================================
  [INFOMATION](https://discord.com/api/oauth2/authorize?client_id=756928800691847200&permissions=2147482615&scope=bot)
  [BLUE'S COMMANDER]()
  [REX](https://discord.com/api/oauth2/authorize?client_id=501478507818254339&permissions=2147483639&scope=bot)
  [DONALD J TRUMP]()
  [CORONAVIRUS]()
  [MUSIC TIME]()
  =====================================================
  VOTE FOR OUR WEBSITE
  =====================================================
  [PENGUIN]()
  =====================================================

  `)
  .addField(`DO ${prefix}cmd to get the list of commands`)
  .setFooter(`REQUESTED BY ${memberA.tag}`)
  .setTimestamp()
message.channel.send(warning)
  memberA.send(help)
}
if (command === "cmd") {
let cmd = new me()
.setTitle('COMMANDS')
.setDescription(`

`)
.addField(`util`, `get the util category`)
.addField(`fun`, `get the fun category`)
.addField(`mod`, `get the mod category`)
.addField(`info`, `get the info category`)
.setFooter(`REQUESTED BY ${memberA.tag}`)
.setTimestamp()


message.channel.send("Danger, Will Robinson, Danger! This cannot be undone.")
memberA.send(cmd)
}
});
client.login(token)