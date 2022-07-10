const { Client, Intents, Collection } = require("discord.js");
const { readdirSync } = require("fs");
const client = new Client({ intents: [Intents.FLAGS.GUILDS] })
require("dotenv").config()

//CTK HANDLER 
client.commands = new Collection(readdirSync("./commands").map(cmd => (cmd = require(`./commands/${cmd}`), [cmd.data.name, cmd])))
for (const event of readdirSync("./events")) client.on(event.split(".")[0], require(`./events/${event}`).bind(null))

client.login("OTkzODk0NzcyODA2NzgzMTc2.GY7Mwa.EmDhu3sAQw9XAYyFbQj8xsNwtyBx9R3sSkoRo8") // client.login(BOT_TOKEN)

