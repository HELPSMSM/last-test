const Discord = require("discord.js");
const smsm = new Discord.Client();







 

client.on("ready", () => {

  console.log(`${client.user.tag}`)

  let voice = client.channels.cache.get('887060542127243264');

  try {

  setInterval(async() => {

  await voice.join()

  }, 1000)

  } catch (err) {

    console.log('Erorr')

  }

})  










smsm.on("ready", () => {

  console.log(`IM ONLINE YEAH`);

  let statuses = [``];

  setInterval(function() {

    let PLAYING = statuses[Math.floor(Math.random() * statuses.length)];

    smsm.user.setActivity(PLAYING, {
      status: "dnd",
      type: "playing",
      


    });

  }, 2000);

});


smsm.login("OTE2Njg3MTUxNTExNTA3MDE2.Yatylw.IEBMTcoIH2g_e6ErCZLQhAsPeWg");
    
