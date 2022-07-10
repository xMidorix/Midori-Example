const { Client, Intents, Collection } = require("discord.js");
const { readdirSync } = require("fs");
const client = new Client({ intents: [Intents.FLAGS.GUILDS] })
require("dotenv").config()

//CTK HANDLER 
client.commands = new Collection(readdirSync("./commands").map(cmd => (cmd = require(`./commands/${cmd}`), [cmd.data.name, cmd])))
for (const event of readdirSync("./events")) client.on(event.split(".")[0], require(`./events/${event}`).bind(null))

client.login("BOT_TOKEN") 

//Example code

