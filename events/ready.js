module.exports = async (client) => {
    console.log("Client is now online | ", client.user.tag)

        const commands = [...client.commands].map(x => x[1].data)

            await client.application.commands.set(commands)
            return console.log("Commands are setted Globally")
       
}