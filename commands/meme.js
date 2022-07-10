const { SlashCommandBuilder } = require("@discordjs/builders")

const { MessageEmbed} = require("discord.js")

const { Base } = require("paras-api-wrapper");
let api = new Base()

module.exports = {
    data: new SlashCommandBuilder()
    .setName("meme")
    .setDescription("Memes"),
    run: async (client,interaction) => {
        let meme = await api.meme();
        
        let embed = new MessageEmbed()
        .setTitle(`${meme.title} `)
        .setImage(meme.url) 

        interaction.reply({embeds:[embed]})

                    }};

