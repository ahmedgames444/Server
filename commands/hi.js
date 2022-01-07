client.on("ready", () => {

    // Register global slash command
    client.api.applications(client.user.id).commands.post({
        data: {
            name: "hello",
            description: "Say 'Hello, World!'"
        }
    });
    global:true,
    // Listen for an interaction (e.g. user typed command)
    client.ws.on("INTERACTION_CREATE", (interaction) => {
        // Access command properties
        const commandId = interaction.data.id;
        const commandName = interaction.data.name;
        
        // Reply only to commands with name 'hello'
        if (commandName == "hello") {
            // Reply to an interaction
            client.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                    type: 4,
                    data: {
                        content: "Hello, World!"
                    }
                }
            });
        }
    });

});