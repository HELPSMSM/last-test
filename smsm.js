const Discord = require("discord.js");
const smsm = new Discord.Client();







 















smsm.on("ready", () => {

  console.log(`IM ONLINE YEAH`);

  let statuses = [``];

  setInterval(function() {

    let PLAYING = statuses[Math.floor(Math.random() * statuses.length)];

    smsm.user.setActivity(PLAYING, {
      
      type: "playing",
      


    });

  }, 2000);

});


smsm.login("OTE2Njg3MTUxNTExNTA3MDE2.Yatylw.IEBMTcoIH2g_e6ErCZLQhAsPeWg");
    
