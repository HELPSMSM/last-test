const Discord = require("discord.js");
const smsm = new Discord.Client();

smsm.on('ready', () => {
var channel = smsm.channels.cache.get('');
    if (channel) channel.join.();
});

smsm.on("ready", () => {
    console.log(`Im' ${smsm.user.username}`)
    smsm.user.setPresence({
        status: 'online', //idle online dnd
        activity: {
            name: `اي شئ`,
            type: "WATCHING",
        }
    })
});

smsm.login("OTE2Njg3MTUxNTExNTA3MDE2.Yatylw.IEBMTcoIH2g_e6ErCZLQhAsPeWg");
    
