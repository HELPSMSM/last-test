const Discord = require("discord.js");
const smsm = new Discord.Client();

smsm.on("ready", () => {

    var join = smsm.channels.get(""); /// id voice

    if (join) join.join();

  });




smsm.on("ready", () => {
    console.log(`Im Online yeah' ${smsm.user.username}`)
    smsm.user.setPresence({
        status: 'online', //idle online dnd
        activity: {
            name: `اي شئ`,
            type: "PLAYING",
        }
    })
});

smsm.login("OTE2Njg3MTUxNTExNTA3MDE2.Yatylw.IEBMTcoIH2g_e6ErCZLQhAsPeWg");
    
