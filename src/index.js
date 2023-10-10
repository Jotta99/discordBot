const {Client, IntentsBitField} = require('discord.js')

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ],
})

client.on('messageCreate', (message)=>{
    if (message.content === 'Bora bora') {
        message.reply('Bora bora, papai!')
    }
})

client.on('ready', (c)=>{
    console.log(`${c.user.tag} tá online!`)
    message.reply('Cheguei!')
})

client.login('MTE2MTEyNjE5OTkzMDY1NDgxOA.Gvl1F-.kBHy_SkP8Xf4wEr0zBuMdP0ntdWIBhsm0XoOAA')
