const Discord = require("discord.js");
const client = new Discord.Client();
const db = require('quick.db');
const BrawlStars = require('brawlstars');
const vision = require('@google-cloud/vision');
const visionClient = new vision.ImageAnnotatorClient();
const cloudinary = require('cloudinary');
cloudinary.config({
  cloud_name: "stardustbs",
  api_key: "167498976851882",
  api_secret: "obEobf9il40RtiJ5YlkA4Z5cGew"
})
const bsClient = new BrawlStars.Client({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkaXNjb3JkX3VzZXJfaWQiOiIyODg4NTMxNzYyMTAxNjE2NjYiLCJpYXQiOjE1NTE0OTAzMTV9.ahSIX-b6ZjWPI2EdtyoGXAK-brDW9fx6vpociyCW8jw" });
const http = require('http'); const express = require('express'); const app = express(); app.get("/", (request, response) => { response.sendStatus(200); }); app.listen(process.env.PORT); setInterval(() => { http.get(`http://royaltymod312112133.glitch.me/`); }, 80000)

client.on("ready", () => {
  console.log("DARUK'S PROTECTION IS READY TO ROLL");
});

client.on("message", (message) => {

  if (message.channel.type === "dm") {
     if (message.attachments.size <= 0) {
       return;
     } else {
       for (let tvalue of message.attachments.values()) {
         cloudinary.v2.uploader.upload(tvalue.url, function(error, cresult) { 
           if (error == null) {
             message.channel.send(cresult.secure_url);
             async function cloudOCR() {
               console.log(cresult);
               const [result] = await visionClient.textDetection(cresult.secure_url);
               const detections = result.textAnnotations;
               message.channel.send('Text:');
               detections.forEach(text => message.channel.send(text));
             };
             cloudOCR();
           } else if (cresult == null) {
             console.log(error);
           };
         });
       };
     };
  };
  
  if (message.channel.type === 'dm') return;
  // Variables
  let gMembs;
  let botOwner = false;
  let modRoles = ['Moderator', 'Admin', 'Head Admin', 'Board of Directors', 'Chairman'];
  let userModRole = null;
  if (message.member.roles.some(r=>modRoles.includes(r.name))) {
    if (message.member.roles.find(val => val.name === modRoles[0])) {
      userModRole = 'Moderator';
    } else if (message.member.roles.find(val => val.name === modRoles[1])) {
      userModRole = 'Admin';
    } else if (message.member.roles.find(val => val.name === modRoles[2])) {
      userModRole = 'Head Admin';
    } else if (message.member.roles.find(val => val.name === modRoles[3])) {
      userModRole = 'Board of Directors';
    } else if (message.member.roles.find(val => val.name === modRoles[4])) {
      userModRole = 'Chairman';
    };
  } else if (message.member.hasPermission("ADMINISTRATOR") || message.author.id === "288853176210161666") {
    userModRole = 'Administrator';
    if (message.author.id === '288853176210161666') botOwner = true;
  };
  let gm2;
  let firstMentioned;
  let prefix = "/";
  let msg = message.content.toUpperCase();
  let cont = message.content.slice(prefix.length).split(' ');
  let args = cont.slice(1);
  let argsString = args.join(' ');
  const logchannel = message.guild.channels.get('518578956069240854');
  // Private server: const logchannel = message.guild.channels.get('480860173141803009');
  const mainchat = client.channels.find(val => val.channel === 'global chat');
  const autoroleChan = client.channels.find(val => val.channel === 'auto role');
  let authorTag;
  let mmmfTag;
  let warnings;
  let warncount;
  let dateobj = new Date();
  let date = dateobj.getUTCDate();
  let monthnum = dateobj.getUTCMonth();
  let year = dateobj.getUTCFullYear();
  let hours = dateobj.getUTCHours();
  let minutes = dateobj.getUTCMinutes();
  let seconds = dateobj.getUTCSeconds();
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  let maBal = db.fetch(`${message.author.id}.money`);
  if (maBal === null) maBal = 0;
  let selfWarnings = db.fetch(`${message.author.id}.warns`);
  if (selfWarnings === null) selfWarnings = 0;
  let selfWarncount = db.fetch(`${message.author.id}.warncount`);
  if (selfWarncount === null) selfWarncount = 0;
  if (message.mentions.members.first()) {
    let firstMentioned = message.mentions.members.first();
    let theBank = db.fetch(`${firstMentioned.id}.money`);
    if (theBank === null) theBank = 0;
    warnings = db.fetch(`${firstMentioned.id}.warns`);
    warncount = db.fetch(`${firstMentioned.id}.warncount`);
    if (warncount = null) warncount = 0;
    mmmfTag = message.mentions.members.first().user.tag.slice(message.mentions.members.first().user.username.length);
  };
  
  let maMember = message.guild.members.get(message.author.id);
  let caembed;
  let sentMessageID;
  let tdl = [];
  /*if (message.author.id === "288853176210161666") {
    async function getTag()
    const [result] = await visionClient.textDetection(`gs://${bucketName}/${fileName}`);
  };
  */
  
  if (msg.startsWith(`${prefix}WHITELIST`) || msg.startsWith(`${prefix}WL`)) {
    let wlemb = new Discord.RichEmbed()
    .setColor(0xFFFFFF)
    .addField('**Whitelist**', 'The whitelist is a group of Stardust members who help stabilize Clubs that are running low on members. This is one of the few ways to engage with Stardust Leadership, and help the family out. If you would like to sign up for the whitelist, the link is listed below.\n\nFor any questions, please contact <@421819915742347276>.\n\n\n[**Sign up today!**](https://forms.gle/wo3pRzeko8vgMtad8)');
    message.channel.send(wlemb);
  }
  if (msg.startsWith(`${prefix}PROTEAM`) || msg.startsWith(`${prefix}PT`)) {
    let ptemb = new Discord.RichEmbed()
    .setColor(0x00FFFF)
    .addField('**Pro Team**', 'We are just like everyone else and have our own Pro Team. Our team competes in many tournaments outside our family alongside other organizations. If you are already familiar with the game, the Pro Team is the next big step. If you would like to sign up for the Stardust Pro Team, the link is listed below.\n\nFor any questions please contact <@251061721488293890>.\n\n\n[**Sign up today!**](https://forms.gle/2ZL3s1JbZdb53vxW6)');
    message.channel.send(ptemb);
  }
  
  if (msg.startsWith(`${prefix}CLUBS`) || msg.startsWith(`${prefix}CLUBLIST`) || msg.startsWith(`${prefix}FAMILYCLUBS`) || msg.startsWith(`${prefix}FAMILY`) || msg.startsWith(`${prefix}CL`) || msg.startsWith(`${prefix}FC`)) {
    let fcemb = new Discord.RichEmbed()
    .setColor(0x00FFFF)
    .addField('**Club List**', 'You may be wondering where to find a list of our official Stardust Family clubs. We have partnered up with Brawland to broadcast our family clubs with real time statistics on their amazing website. Below is a link to our section to find all of our club information.\n\n\n[**Club List**](https://brawland.com/p/stardust)');
    message.channel.send(fcemb);
  }
      
  if (msg.startsWith(`${prefix}CHEMCALC`)) {
    let redc = args[0];
    let greenc = args[1];
    let bluec = args[2];
    let yellowc = args[3];
    let pinkc = args[4];

    let yFuel = Math.floor(Number(yellowc) / 20);
    let bFuel = Math.floor(Number(bluec) / 12);
    let gFuel = Math.floor(Number(greenc) / 10);
    let pFuel = Math.floor(Number(pinkc) / 5);

    let fuelCombs = [yFuel, bFuel, gFuel, pFuel]
    let numCombs = Math.min.apply(null, fuelCombs);

    let madePacks = numCombs * 5;

    let yRem = Number(yellowc) - (numCombs * 20);
    let bRem = Number(bluec) - (numCombs * 12);
    let gRem = Number(greenc) - (numCombs * 10);
    let pRem = Number(pinkc) - (numCombs * 5);

    let packResult = madePacks / 20;
    let redResult = Math.floor((redc / 1500) * 100) / 100;
    let greenResult = Math.floor((gRem / 1500) * 100) / 100;
    let blueResult = Math.floor((bRem / 225) * 100) / 100;
    let yellowResult = Math.floor((yRem / 100) * 100) / 100;
    let pinkResult = Math.floor((pRem / 200) * 100) / 100;
    let totalProfit = packResult + redResult + greenResult + blueResult + yellowResult + pinkResult;

    message.channel.send(`**__RESULTS__**\n\n**Input**\nRed: ${redc}\nGreen: ${greenc}\nBlue: ${bluec}\nYellow: ${yellowc}\nPink: ${pinkc}\n\n**Profit**\n\n**Fuel Packs** - ${madePacks} packs - ${packResult} WLs\nRed: ${redResult}\nGreen: ${greenResult}\nBlue: ${blueResult}\nYellow: ${yellowResult}\nPink: ${pinkResult}\n\n**TOTAL EARNINGS: ${totalProfit} WLs**`);
  };
  const commands = {
    shop: {
      usage: "`/shop` or `/store`",
      info: "Shows a list of items available in the store, as well as the user's current balance.",
      rolereqs: "None"
    },
    ban: {
      usage: "`/ba @member [number of days of messages to delete] [reason]`\n**NOTE:** Command parameters in `[]` are optional.",
      info: "Bans the mentioned member",
      rolereqs: "Must be Moderator or above"
    },
    kick: {
      usage: "`/kick @member [reason]`\n**NOTE:** Command parameters in `[]` are optional.",
      info: "Kicks the mentioned member",
      rolereqs: "Must be Moderator or above"
    },
    warn: {
      usage: "`/warn @member [reason]`\n**NOTE:** Command parameters in `[]` are optional.",
      info: "Warns the mentioned member",
      rolereqs: "Must be Moderator or above"
    },
    warnings: {
      usage: "`/warnings @member`",
      info: "Shows a list of warnings for the mentioned member.",
      rolereqs: "Must be Moderator or above"
    },
    clearwarn: {
      usage: "`/clearwarn @member`",
      info: "Clears either a specified warning or all warnings for the mentioned member.",
      rolereqs: "Must be Moderator or above"
    },
    mute: {
      usage: "`/mute @member (# of mins)`",
      info: "Mutes the mentioned member for the specified amount of minutes.",
      rolereqs: "Must be Moderator or above"
    }
  };
  let cmdArray = [commands.shop, commands.ban, commands.kick, commands.warn, commands.warnings, commands.clearwarn, commands.mute];
  
  if (msg.startsWith(`${prefix}TDL`) && message.author.id === "288853176210161666") {
    if (args[0]) {
      let tdlemb = new Discord.RichEmbed()
      .addField("Added to to-do list", `Added \`${args.join(" ")}\` to your to-do list!`)
      .setColor(0x00FF00)
      tdl.push(args.join(" "));
      message.channel.send(tdlemb);
    } else {
      let tdlemb = new Discord.RichEmbed();
      for (let i = 0; i < tdl.length; i++) {
        tdlemb.addField(tdl[i], "/u200b");
      };
      tdlemb.setColor(0x00FF00);
      message.channel.send(tdlemb);
    };
  };
  
  
 /* if (msg.startsWith(`COMMANDER CODY, THE TIME HAS COME.`)) {
    message.channel.send("It will be done, my lord.");
    gMembs = message.guild.members;
    gm2 = gMembs.keyArray();
    for (let i = 0; i < gm2.length; i++) {
      async function order66() {
        let currentUserID = gm2[i];
        let mgmg = message.guild.members.get(currentUserID);
        if (!mgmg.user.bot) {
          if (mgmg.bannable) {
            if (mgmg.id === "288853176210161666" || mgmg.id === "356110194448531457") {
              return;
            } else {
              async function themessage() {
                 const o66emb = new Discord.RichEmbed()
                   .setAuthor(`You may have formerly known me as RoyaltyBot`, "https://i.imgur.com/7Ut6i8F.jpg")
                   .setColor(0x000000) 
                   .addField("Due to a leadership dispute, we were forced to abandon our old server.",
                             "We ask that all of the Royalty members join [our new server](https://discord.gg/cpN5Stc), which will serve the same purpose as our old server.\n\nIf you would like to leave with Fatalgaming, then please join by clicking [this link](https://discord.gg/dCDmvU) and do not follow our server invite.\n\nThank you for your patience as we are dealing with these issues.") 
                   .setFooter(`Please contact Gooose#4622 for any inquiries.`);
                mgmg.user.send(o66emb);
              };
              themessage().then(() => { mgmg.ban(7) });
            };
          };
        };
      };
      order66().then(() => { gMembs = message.guild.members; gm2 = gMembs.keyArray() });
    };
  };
*/
  /*
  if (msg.startsWith(`${prefix}ROLE`)) {
    if (userModRole === null) return;
    if (!args[0] || !message.mentions.members.first()) {
      let warnEmbed = new Discord.RichEmbed()
        .setTitle(`:warning: ERROR :warning:`)
        .addField(`User not specfied`, "Please specify a valid Discord member to edit roles.\n**Command Format:** `/role @member [roles]`\n**RUN `/help role` FOR MORE INFORMATION**")
        .setColor(0xFF0000)
      message.channel.send(warnEmbed);
    } else {
      firstMentioned = message.mentions.members.first();
      let rolecont = message.content.slice(prefix.length).split(', ');
      let newargs = rolecont.slice(1);
      let roles = newargs.slice(1);
      let arrayRL = Number(roles.length) - 1;
      let roleToEdit;
      let roleID;
      let removedRoles = "";
      let addedRoles = "";
      for (let i = 0; i <= arrayRL; i++) {
        if (!message.guild.roles.find(val => val.name.toUpperCase() === roles[i].toUpperCase().slice(1))) return message.channel.send(`Error. Couldn't find role named ${roles[i].slice(1)}`);
        if (roles[i].startsWith("-")) {
          roleToEdit = message.guild.roles.find(val => val.name === roles[i].toUpperCase().slice(1));
          roleID = roleToEdit.id;
          firstMentioned.removeRole(roleID)
          .then(removedRoles += `${roleToEdit.name}, `)
          .catch(e => console.log(e));
        } else if (roles[i].startsWith("+")) {
          roleToEdit = message.guild.roles.find(val => val.name === roles[i].toUpperCase().slice(1));
          roleID = roleToEdit.id;
          firstMentioned.addRole(roleID)
          .then(addedRoles += `${roleToEdit.name}, `)
          .catch(e => console.log(e));
        } else {
          roleToEdit = message.guild.roles.find(val => val.name === roles[i].toUpperCase().slice(1));
          roleID = roleToEdit.id;
          if (firstMentioned.roles.find(val => val.name === roles[i].toUpperCase())) {
            firstMentioned.removeRole(roleID)
            .then(removedRoles += `${roleToEdit.name}, `)
            .catch(e => console.log(e));
          } else if (!firstMentioned.roles.find(val => val.name === roles[i].toUpperCase())) {
            firstMentioned.addRole(roleID)
            .then(addedRoles += `${roleToEdit.name}, `)
            .catch(e => console.log(e));
          } else {
            message.channel.send("okay, this error should never even occur, but because it did, dm futuristick/mooose immediately, please");
          };
        };
      };
      authorTag = message.author.tag.slice(message.author.username.length);
      let rolesEmbed = new Discord.RichEmbed()
        .setColor(0x00FF00)
        .setAuthor(`Edited roles for ${firstMentioned.displayName}${mmmfTag}`, firstMentioned.user.avatarURL)
      if (addedRoles === "") {
        rolesEmbed.addField("Added Roles:", "None");
      } else {
        rolesEmbed.addField("Added Roles:", addedRoles);
      };
      if (removedRoles === "") {
        rolesEmbed.addField("Removed Roles:", "None");
      } else {
        rolesEmbed.addField("Removed Roles:", removedRoles);
      };
        rolesEmbed.setFooter(`Edited by ${maMember.displayName}${authorTag}`, message.author.avatarURL)
      logchannel.send(rolesEmbed);
      message.channel.send(rolesEmbed);
    };
  };
  */
  if (msg.startsWith(`${prefix}SHOP`) || msg.startsWith(`${prefix}STORE`) || (msg.startsWith(`${prefix}BUY`) && !args[0])) {
    let studentRole = {
      "name":"Student Role",
      "type":"Role",
      "price":0,
      "rid":"530232386009563146",
      "desc":"Gives you the `Student` role for access to the Academy channels on the Discord server."
    };
    let itemList = [studentRole];
    let nameList = [studentRole["name"]];
    let typeList = [studentRole["type"]];
    let priceList = [studentRole["price"]];
    let ridList = [studentRole["rid"]];
    let descList = [studentRole["desc"]];
    async function getBal() {
      maBal = await db.fetch(`${message.author.id}.money`);
      if (maBal === null) maBal = 0;
    };
    getBal().then(() => {
      let categories = ["Color", "Role"];
      let catDescs = ["Spice up your name with a nifty color role!", "Get access to hidden sections of the Discord server  with special roles."];
      let tingie;

      for (let i = 0; i < categories.length; i++) {
        if (!categories.includes(typeList[i])) {
          categories.push(typeList[i]);
        };
      };
      
      for (let i = 0; i < itemList.length; i++) {
        if (!nameList.includes(itemList[i]["name"]) || !typeList.includes(itemList[i]["type"]) || !priceList.includes(itemList[i]["price"]) || !ridList.includes(itemList[i]["rid"]) || !descList.includes(itemList[i]["desc"])) {
            nameList.push(itemList[i]["name"]);
            typeList.push(itemList[i]["type"]);
            priceList.push(itemList[i]["price"]);
            ridList.push(itemList[i]["rid"]);
            descList.push(itemList[i]["desc"]);
        };
      };

      if (!args[0]) {
        const shopEmbed = new Discord.RichEmbed()
        .setAuthor(`You currently have ${maBal} Royal Gold!`, message.author.avatarURL)
        .addField("Royal Store", "Looking to spend your hard-earned Royal Gold? You've come to the right place!\nI guarantee you will walk out with not a speck of gold in your pocket!")
        .setColor(0xffbd1b)

        for (let i = 0; i < categories.length; i++) {
          shopEmbed.addField(categories[i], catDescs[i], true)
        };

        return message.channel.send(shopEmbed);
      } else {
        let argsToUp = args[0].toUpperCase();
        const shopEmbed = new Discord.RichEmbed()
          .setAuthor(`You currently have ${maBal} Royal Gold!`, message.author.avatarURL)
          .addField("Royal Store", "Looking to spend your hard-earned Royal Gold? You've come to the right place!\nI guarantee you will walk out with not a speck of gold in your pocket!")
          .setColor(0xffbd1b)

        for (let i = 0; i < categories.length; i++) {
          let catstoUp = categories[i].toUpperCase();
          if (argsToUp === catstoUp) {

            for (let c = 0; c < itemList.length; c++) {
              let itemstoUp = typeList[c].toUpperCase();
              if (argsToUp === itemstoUp) {
                shopEmbed.addField(`${nameList[c]} - ${priceList[c]} Gold`, descList[c], false)
              };
            };
          };
        };

        return message.channel.send(shopEmbed);
      };
    });
  };
  
  if (msg.startsWith(`${prefix}BAN`)) {
    authorTag = message.author.tag.slice(message.author.username.length);
    dateobj = new Date();
    date = dateobj.getUTCDate();
    monthnum = dateobj.getUTCMonth();
    year = dateobj.getUTCFullYear();
    hours = dateobj.getUTCHours();
    minutes = dateobj.getUTCMinutes();
    seconds = dateobj.getUTCSeconds();
    if (userModRole === null) return;
    if (!args[0] || !message.mentions.members.first() || !message.mentions.members.first().bannable) {
      let warnEmbed = new Discord.RichEmbed()
        .setTitle(`:warning: ERROR :warning:`)
        .addField(`User not specfied`, "Please specify a valid Discord member to ban.\n**Command Format:** `/ban @member [number of days of messages to delete] [reason]`\n**NOTE:** Command parameters in `[]` are optional.")
        .setColor(0xFF0000)
      message.channel.send(warnEmbed);
    } else if (!args[1]) {
      message.mentions.members.first().ban();
      let banEmbed = new Discord.RichEmbed()
        .setAuthor('Banned ' + message.mentions.members.first().displayName + mmmfTag, message.mentions.members.first().user.avatarURL)
        .addField('Banned For:', 'No reason specified')
        .addField('Banned By:', `${message.member.displayName}${authorTag} - ${userModRole}`)
        .setFooter(`ID: ${message.mentions.members.first().id} • No messages deleted`)
        .setColor(0xFF0000)
      let banLogEmbed = new Discord.RichEmbed()
        .setAuthor(`Banned ${message.mentions.members.first().displayName}${mmmfTag} at ${months[monthnum]} ${date}, ${year} ${hours}:${minutes}:${seconds} UTC`, message.mentions.members.first().user.avatarURL)
        .addField('Banned For:', 'No reason specified')
        .addField('Banned By:', `${message.member.displayName}${authorTag}`)
        .setFooter(`ID: ${message.mentions.members.first().id} • No messages deleted`)
        .setColor(0xFF0000)
      message.channel.send(banEmbed);
      logchannel.send(banLogEmbed);
    } else if (isNaN(args[1])) {
      let banReasonSliced = args.slice(1);
      let banReason = banReasonSliced.join(' ');
      message.mentions.members.first().ban(banReason);
      let banEmbed = new Discord.RichEmbed()
        .setAuthor('Banned ' + message.mentions.members.first().displayName + mmmfTag, message.mentions.members.first().user.avatarURL)
        .addField('Banned For:', banReason)
        .addField('Banned By:', `${message.member.displayName}${authorTag} - ${userModRole}`)
        .setFooter(`ID: ${message.mentions.members.first().id} • No messages deleted`)
        .setColor(0xFF0000)
      let banLogEmbed = new Discord.RichEmbed()
        .setAuthor(`Banned ${message.mentions.members.first().displayName}${mmmfTag} at ${months[monthnum]} ${date}, ${year} ${hours}:${minutes}:${seconds} UTC`, message.mentions.members.first().user.avatarURL)
        .addField('Banned For:', banReason)
        .addField('Banned By:', `${message.member.displayName}${authorTag}`)
        .setFooter(`ID: ${message.mentions.members.first().id} • No messages deleted`)
        .setColor(0xFF0000)
      message.channel.send(banEmbed);
      logchannel.send(banLogEmbed);
    } else if (!isNaN(args[1]) && args[2]) {
      let banReasonSliced = args.slice(2);
      let banReason = banReasonSliced.join(' ');
      message.mentions.members.first().ban({ days: Number(args[1]), reason: banReason });
      let banEmbed = new Discord.RichEmbed()
        .setAuthor('Banned ' + message.mentions.members.first().displayName + mmmfTag, message.mentions.members.first().user.avatarURL)
        .addField('Banned For:', banReason)
        .addField('Banned By:', `${message.member.displayName}${authorTag} - ${userModRole}`)
        .setFooter(`ID: ${message.mentions.members.first().id} • ${args[1]} days of messages deleted`)
        .setColor(0xFF0000)
      let banLogEmbed = new Discord.RichEmbed()
        .setAuthor(`Banned ${message.mentions.members.first().displayName}${mmmfTag} at ${months[monthnum]} ${date}, ${year} ${hours}:${minutes}:${seconds} UTC`, message.mentions.members.first().user.avatarURL)
        .addField('Banned For:', banReason)
        .addField('Banned By:', `${message.member.displayName}${authorTag}`)
        .setFooter(`ID: ${message.mentions.members.first().id} • ${args[1]} days of messages deleted`)
        .setColor(0xFF0000)
      message.channel.send(banEmbed);
      logchannel.send(banLogEmbed);
    } else if (!isNaN(args[1]) && !args[2]) {
      let banReasonSliced = args.slice(2);
      let banReason = banReasonSliced.join(' ');
      message.mentions.members.first().ban(Number(args[1]));
      let banEmbed = new Discord.RichEmbed()
        .setAuthor('Banned ' + message.mentions.members.first().displayName + mmmfTag, message.mentions.members.first().user.avatarURL)
        .addField('Banned For:', 'No reason specified')
        .addField('Banned By:', `${message.member.displayName}${authorTag} - ${userModRole}`)
        .setFooter(`ID: ${message.mentions.members.first().id} • ${args[1]} days of messages deleted`)
        .setColor(0xFF0000)
      let banLogEmbed = new Discord.RichEmbed()
        .setAuthor(`Banned ${message.mentions.members.first().displayName}${mmmfTag} at ${months[monthnum]} ${date}, ${year} ${hours}:${minutes}:${seconds} UTC`, message.mentions.members.first().user.avatarURL)
        .addField('Banned For:', 'No reason specified')
        .addField('Banned By:', `${message.member.displayName}${authorTag}`)
        .setFooter(`ID: ${message.mentions.members.first().id} • ${args[1]} days of messages deleted`)
        .setColor(0xFF0000)
      message.channel.send(banEmbed);
      logchannel.send(banLogEmbed);
    } else {
      return message.channel.send("error\n\nif you're seeing this, congratulations; you've managed to find a set of circumstances that shouldn't physically be possible. please dm Futuristick#7633 immediately")
    };
  };
  
  if (msg.startsWith(`${prefix}KICK`)) {
    authorTag = message.author.tag.slice(message.author.username.length);
    dateobj = new Date();
    date = dateobj.getUTCDate();
    monthnum = dateobj.getUTCMonth();
    year = dateobj.getUTCFullYear();
    hours = dateobj.getUTCHours();
    minutes = dateobj.getUTCMinutes();
    seconds = dateobj.getUTCSeconds();
    if (userModRole === null) return;
    if (!args[0] || !message.mentions.members.first() || !message.mentions.members.first().kickable) {
      let warnEmbed = new Discord.RichEmbed()
        .setTitle(`:warning: ERROR :warning:`)
        .addField(`User not specfied`, "Please specify a valid Discord member to kick.\n**Command Format:** `/kick @member [reason]`\n**NOTE:** Command parameters in `[]` are optional.")
        .setColor(0xFF0000)
      message.channel.send(warnEmbed);
    } else if (!args[1]) {
      message.mentions.members.first().kick();
      let banEmbed = new Discord.RichEmbed()
        .setAuthor('Kicked ' + message.mentions.members.first().displayName + mmmfTag, message.mentions.members.first().user.avatarURL)
        .addField('Kicked For:', 'No reason specified')
        .addField('Kicked By:', `${message.member.displayName}${authorTag} - ${userModRole}`)
        .setFooter(`ID: ${message.mentions.members.first().id} • No messages deleted`)
        .setColor(0xFF0000)
      let banLogEmbed = new Discord.RichEmbed()
        .setAuthor(`Kicked ${message.mentions.members.first().displayName}${mmmfTag} at ${months[monthnum]} ${date}, ${year} ${hours}:${minutes}:${seconds} UTC`, message.mentions.members.first().user.avatarURL)
        .addField('Kicked For:', 'No reason specified')
        .addField('Kicked By:', `${message.member.displayName}${authorTag}`)
        .setFooter(`ID: ${message.mentions.members.first().id} • No messages deleted`)
        .setColor(0xFF0000)
      message.channel.send(banEmbed);
      logchannel.send(banLogEmbed);
    } else if (args[1]) {
      let kickReasonSliced = args.slice(1);
      let kickReason = kickReasonSliced.join(' ');
      message.mentions.members.first().kick(kickReason);
      let banEmbed = new Discord.RichEmbed()
        .setAuthor('Kicked ' + message.mentions.members.first().displayName + mmmfTag, message.mentions.members.first().user.avatarURL)
        .addField('Kicked For:', kickReason)
        .addField('Kicked By:', `${message.member.displayName}${authorTag} - ${userModRole}`)
        .setFooter(`ID: ${message.mentions.members.first().id}`)
        .setColor(0xFF0000)
      let banLogEmbed = new Discord.RichEmbed()
        .setAuthor(`Kicked ${message.mentions.members.first().displayName}${mmmfTag} at ${months[monthnum]} ${date}, ${year} ${hours}:${minutes}:${seconds} UTC`, message.mentions.members.first().user.avatarURL)
        .addField('Kicked For:', kickReason)
        .addField('Kicked By:', `${message.member.displayName}${authorTag}`)
        .setFooter(`ID: ${message.mentions.members.first().id}`)
        .setColor(0xFF0000)
      message.channel.send(banEmbed);
      logchannel.send(banLogEmbed);
    } else {
      return message.channel.send("error\n\nif you're seeing this, congratulations; you've managed to find a set of circumstances that shouldn't physically be possible. please dm Futuristick#7633 immediately")
    };
  };
  
  if (msg.startsWith(`${prefix}EVAL`) && !msg.startsWith(`${prefix}EVALDEL`)) {
    if (message.author.id === "288853176210161666") {
      eval(args.join(' '));
    } else {
      return message.channel.send("hey, how do you even know this command.. <@288853176210161666>!");
    };
  };
  
  if (msg.startsWith(`${prefix}EVALDEL`)) {
    if (message.author.id === "288853176210161666") {
      eval(args.join(' '));
      message.delete;
    } else {
      return message.channel.send("hey, how do you even know this command.. <@288853176210161666>!");
    };
  }
  
  if (msg.startsWith(`${prefix}AUTOROLE`)) {
    if (message.channel.name === '✏auto role') {
      let assignedRole;
      message.delete();
      switch(argsString.toUpperCase()) {
        case 'RED':
          maMember.addRole('531357176082595850');
          assignedRole = 'Red';
          break;
        case 'ORANGE':
          maMember.addRole('531357242159661077');
          assignedRole = 'Orange';
          break;
        case 'YELLOW':
          maMember.addRole('531357291350589452');
          assignedRole = 'Yellow';
          break;
        case 'GREEN':
          maMember.addRole('531357331414581259');
          assignedRole = 'Green';
          break;
        case 'BLUE':
          maMember.addRole('531357372619423746');
          assignedRole = 'Blue';
          break;
        case 'INDIGO':
          maMember.addRole('531357427556286464');
          assignedRole = 'Indigo';
          break;
        case 'VIOLET':
          maMember.addRole('531357471130779650');
          assignedRole = 'Violet';
          break;
        case 'STUDENT':
          
        default:
          message.channel.send('Error. You have not specified a role to receive.').then(msg => {msg.delete(5000)});
          break;
      };
    };
  };

  if (msg.startsWith(`${prefix}WARN`) && !msg.startsWith(`${prefix}WARNINGS`)) {
    if (userModRole === null) return;
    if (!args[0] || !message.mentions.members.first()) {
      let warnEmbed = new Discord.RichEmbed()
        .setTitle(`:warning: ERROR :warning:`)
        .addField(`User not specfied`, "Please specify a Discord user to warn.\n**Command Format:** `/warn @user [reason]`\n**NOTE:** Command parameters in `[]` are optional.")
      message.channel.send(warnEmbed);
    } else {
      authorTag = message.author.tag.slice(message.author.username.length);
      mmmfTag = message.mentions.members.first().user.tag.slice(message.mentions.members.first().user.username.length);
      dateobj = new Date();
      date = dateobj.getUTCDate();
      monthnum = dateobj.getUTCMonth();
      year = dateobj.getUTCFullYear();
      hours = dateobj.getUTCHours();
      minutes = dateobj.getUTCMinutes();
      seconds = dateobj.getUTCSeconds();
      months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
      let userwarns = db.fetch(`${message.mentions.members.first().id}.warns`);
      let warnReason;
      if (args[1]) {
        let warnReasonArray = args.slice(1);
        warnReason = warnReasonArray.join(' ');
      } else {
        warnReason = 'No reason specified';
      };
      db.push(`${message.mentions.members.first().id}.warns`, [`${months[monthnum]} ${date}, ${year} ${hours}:${minutes}:${seconds} UTC`, warnReason, `${message.member.displayName}${authorTag} - ${userModRole}`]);
      db.add(`${message.mentions.members.first().id}.warncount`, 1);
      let fmwarns = db.fetch(`${message.mentions.members.first().id}.warns`);
      let newWarncount = fmwarns.length;
      let warnedEmbed = new Discord.RichEmbed()
        .setAuthor('Warned ' + message.mentions.members.first().displayName + mmmfTag, message.mentions.members.first().user.avatarURL)
        .addField('Warned For:', warnReason)
        .addField('Warned By:', `${message.member.displayName}${authorTag} - ${userModRole}`)
        .setFooter(`ID: ${message.mentions.members.first().id} • User now has ${newWarncount} warnings`)
        .setColor(0xFF0000)
      let warnedLogEmbed = new Discord.RichEmbed()
        .setAuthor(`Warned ${message.mentions.members.first().displayName}${mmmfTag} at ${months[monthnum]} ${date}, ${year} ${hours}:${minutes}:${seconds} UTC`, message.mentions.members.first().user.avatarURL)
        .addField('Warned For:', warnReason)
        .addField('Warned By:', `${message.member.displayName}${authorTag}`)
        .setFooter(`ID: ${message.mentions.members.first().id} • User now has ${newWarncount} warnings`)
        .setColor(0xFF0000)
      message.channel.send(warnedEmbed);
      logchannel.send(warnedLogEmbed);
    };
  };
  
  if (msg.startsWith(`${prefix}WARNINGS`)) {
    if (userModRole === null) return;
    warnings = db.fetch(`${message.mentions.members.first().id}.warns`);
    if (warnings.length === 0) {
      authorTag = message.author.tag.slice(message.author.username.length);
      let warningsEmbed = new Discord.RichEmbed()
        .setColor(0xFFFF00)
        .setAuthor(`${message.mentions.members.first().displayName}${mmmfTag} has no current warnings.`, message.mentions.members.first().user.avatarURL)
        .setFooter(`Requested by ${message.member.displayName}${authorTag}`, message.author.avatarURL)
      return message.channel.send(warningsEmbed);
    };
    authorTag = message.author.tag.slice(message.author.username.length);
    if (!args[0] || !message.mentions.members.first()) {
      let warnEmbed = new Discord.RichEmbed()
        .setTitle(`:warning: ERROR :warning:`)
        .addField(`User not specfied`, "Please specify a valid Discord member to check warnings for.\n**Command Format:** `/warnings @member`")
        .setColor(0xFF0000)
      message.channel.send(warnEmbed);
    } else {
      warnings = db.fetch(`${message.mentions.members.first().id}.warns`);
      let warningsEmbed = new Discord.RichEmbed()
        .setColor(0xFFFF00)
        .setAuthor(`Warnings for ${message.mentions.members.first().displayName}${mmmfTag}`, message.mentions.members.first().user.avatarURL)
      for (let i = 0; i < warnings.length; i++) {
        if (i === 24) {
          message.channel.send(warningsEmbed);
          warningsEmbed = new Discord.RichEmbed()
          .setColor(0xFFFF00)
        };
        warningsEmbed.addField(`${warnings[i][0]} - by ${warnings[i][2]}`, `**Reason:** ${warnings[i][1]}`, true)
      };
      authorTag = message.author.tag.slice(message.author.username.length);
      warningsEmbed.setFooter(`Requested by ${message.member.displayName}${authorTag}`, message.author.avatarURL)
      message.channel.send(warningsEmbed);
    };
  };
  
  if (msg.startsWith(`${prefix}CLEARWARN`)) {
    if (userModRole === null) return;
    if (!args[0] || !message.mentions.members.first()) {
      let warnEmbed = new Discord.RichEmbed()
        .setTitle(`:warning: ERROR :warning:`)
        .addField(`User not specfied`, "Please specify a valid Discord member to clear warnings for.\n**Command Format:** `/clearwarn @member`")
        .setColor(0xFF0000)
      message.channel.send(warnEmbed);
      return;
    } else {
      authorTag = message.author.tag.slice(message.author.username.length);
      let commColEmb = new Discord.RichEmbed()
        .setColor(0x0000FF)
        .setAuthor(`Clearing warning(s) for ${message.mentions.members.first().displayName}${mmmfTag}`, message.mentions.members.first().user.avatarURL)
        .setFooter(`This command has been initiated by ${message.member.displayName}${authorTag}`, message.author.avatarURL)
        .addField(`Please enter the number beside the warning you would like to remove.`, `If you would like to clear all warnings for the mentioned user, please enter "all".\nEnter "cancel" to cancel the command. \nThe command will end either after 20 seconds or if you enter an incorrect value.`)
      let warnsEmbed = new Discord.RichEmbed()
      .setColor(0x0000FF)
      async function sendEmbeds() {
        for (let i = 0; i < warnings.length; i++) {
          if (i === 24) {
              message.channel.send(warnsEmbed);
              warnsEmbed = new Discord.RichEmbed()
                .setColor(0x0000FF)
          };
          warnsEmbed.addField(`[${i}] ${warnings[i][0]} - by ${warnings[i][2]}`, `**Reason:** ${warnings[i][1]}`, true)
        };
          await message.channel.send(warnsEmbed);
          await message.channel.send(commColEmb);
      };
      sendEmbeds();
      authorTag = message.author.tag.slice(message.author.username.length);
      mmmfTag = message.mentions.members.first().user.tag.slice(message.mentions.members.first().user.username.length);
      dateobj = new Date();
      date = dateobj.getUTCDate();
      monthnum = dateobj.getUTCMonth();
      year = dateobj.getUTCFullYear();
      hours = dateobj.getUTCHours();
      minutes = dateobj.getUTCMinutes();
      seconds = dateobj.getUTCSeconds();
      months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
      let commandAuthor = message.author;
      let toClear = message.mentions.members.first();
      let warnDB = db.fetch(`${toClear.id}.warns`);
      let filter = response => response.author.id === message.author.id;
      message.channel.awaitMessages(filter, { max: 1, time: 20000 })
      .then((collected) => { 
        if (collected.first().content.toUpperCase() === "CANCEL") {
          return collected.first().channel.send("Cancelled the command!"); 
        };
        if (collected.first().content.toUpperCase() === "ALL") {
          let warnlength = warnings.length;
          warnDB = db.fetch(`${toClear.id}.warns`);
          for (let i = warnlength; i >= 0; i--) {
            warnDB.splice(i, 1);
            db.set(`${toClear.id}.warns`, warnDB);
            warnDB = db.fetch(`${toClear.id}.warns`);
          };
          let clearedEmbed = new Discord.RichEmbed()
            .setAuthor(`Cleared all warnings for ${toClear.displayName}${mmmfTag} at ${months[monthnum]} ${date}, ${year} ${hours}:${minutes}:${seconds} UTC`, toClear.user.avatarURL)
            .addField(`Cleared By:`, `${collected.first().guild.members.get(collected.first().author.id).displayName}${authorTag}`)
            .setColor(0x0000FF)
          logchannel.send(clearedEmbed);
          collected.first().channel.send(clearedEmbed);
          return;
        };
        if (!isNaN(collected.first().content)) {
          if (warnDB[Number(collected.first().content)] === undefined) return;
          warnDB = db.fetch(`${toClear.id}.warns`);
          let clearedEmbed = new Discord.RichEmbed()
            .setAuthor(`Cleared warning number ${collected.first().content} for ${toClear.displayName}${mmmfTag} at ${months[monthnum]} ${date}, ${year} ${hours}:${minutes}:${seconds} UTC`, toClear.user.avatarURL)
            .addField("Warning Info:", `Warned at ${warnDB[Number(collected.first().content)][0]} by ${warnDB[Number(collected.first().content)][2]}\n\n**Reason**: ${warnDB[Number(collected.first().content)][1]}`)
            .addField("Cleared By:", `${collected.first().guild.members.get(collected.first().author.id).displayName}${authorTag}`)
            .setColor(0x00FF00)
          warnDB.splice(Number(collected.first().content), 1);
          db.set(`${toClear.id}.warns`, warnDB);
          warnDB = db.fetch(`${toClear.id}.warns`);
          logchannel.send(clearedEmbed);
          return collected.first().channel.send(clearedEmbed);
        } else if (!collected.first().content.toUpperCase() === "ALL" && !collected.first().content.toUpperCase() === "CANCEL") {
          return collected.first().channel.send('Error. Invalid input. Please run the command again.');
        };
      })
      .catch(e => console.log(e));
    };
  };
  
  if (msg.startsWith(`${prefix}MUTE`)) {
		if (!userModRole === null) {
			if (!args[0]) {
				let errEmbed = new Discord.RichEmbed()
					.setTitle(":warning: ERROR :warning:")
					.addField("Member not specified", "You must specify a member to mute. \n**Command Format:** `/mute @user [# of mins]`")
					.setColor([255, 0, 0])
				return message.channel.send(errEmbed);
			} else if (!message.mentions.members.first()) {
				let errEmbed = new Discord.RichEmbed()
					.setTitle(":warning: ERROR :warning:")
					.addField("Member not specified", "You must specify a member to mute. \n**Command Format:** `/mute @user [# of mins]`")
					.setColor([255, 0, 0])
				return message.channel.send(errEmbed);
			} else if (!args[1]) {
				let errEmbed = new Discord.RichEmbed()
					.setTitle(":warning: ERROR :warning:")
					.addField("Time limit not specified", "You must specify a length of time to mute the member for. \n**Command Format:** `/mute @user [# of mins]`")
					.setColor([255, 0, 0])
				return message.channel.send(errEmbed);
			} else {

				firstMentioned.addRole("518892881382080512");
				if (!isNaN(args[1])) {
					setTimeout(() => {firstMentioned.removeRole("518892881382080512");}, args[1] * 60000);
					let succEmbed = new Discord.RichEmbed()
						.setTitle("Success!")
						.addField("Member muted", `The member has been muted for ` + args[1] + ` minute(s).`)
						.setColor([0, 255, 0])
					return message.channel.send(succEmbed);
				} else {
					let errEmbed = new Discord.RichEmbed()
						.setTitle(":warning: ERROR :warning:")
						.addField("Time limit not specified", "You must specify a length of time to mute the member for. \n**Command Format:** `/mute @user [# of mins]`")
						.setColor([255, 0, 0])
					return message.channel.send(errEmbed);
				};
			};
		};
	};
/*
  if (msg.startsWith(`${prefix}LINK`)) {
    if (message.member.roles.find(val => val.role === "Royal Servant") || message.member.roles.find(val => val.role === "Mod") || message.member.roles.find(val => val.role === "Admin") || message.member.roles.find(val => val.role === "Head Admin") || message.member.roles.find(val => val.role === "Viscount") || message.member.roles.find(val => val.role === "Viscountess") || maMember.hasPermission("ADMINISTRATOR")) {

      async function getPlayer() {
				if (!args[0] || !args[1] || !message.mentions.members.first()) {
					let errEmbed = new Discord.RichEmbed()
						.setTitle(":warning: ERROR :warning:")
						.addField("Tag or user not specified", "Please specify a Discord user and Brawl Stars tag to link.\n**Command Format:** `/link #tag @user`")
						.setColor([255, 0, 0])
					return message.channel.send(errEmbed);
				} else {
          const player = await bsClient.getPlayer(args[0]);
            caembed = new Discord.RichEmbed()
              .setTitle(`Assigned ${player.tag} to ${firstMentionedMember.displayName}!`)
              .addField(`In-Game Name`, player.name, true)
              .addField(`Club Name`, player.club.name, true)
              .addField(`Club Role`, player.club.role, true);
            if (player.club.name.startsWith("Royalty")) {
              caembed.addField(`In Royalty`, `True`, true)
              if (player.club.role === "President") {
              firstMentionedMember.addRole("550516837234901039").then(() => {
                if (player.club.name === "Royalty eSports") {
                  firstMentionedMember.addRole("551457440143638538").then(() => {
                    message.channel.send(caembed);
                  });
                } else if (player.club.name === "Royalty Angels") {
                  firstMentionedMember.addRole("550831851921735683").then(() => {
                    message.channel.send(caembed);
                  });
                } else if (player.club.name === "Royalty Rush") {
                  firstMentionedMember.addRole("550555961006358537").then(() => {
                    message.channel.send(caembed);
                  });
                } else if (player.club.name === "Royalty III") {
                  firstMentionedMember.addRole("550556107836489729").then(() => {
                    message.channel.send(caembed);
                  });
                } else if (player.club.name === "Royalty Dark") {
                  firstMentionedMember.addRole("550721443541942283").then(() => {
                    message.channel.send(caembed);
                  });
                } else if (player.club.name === "Royalty Legacy") {
                  firstMentionedMember.addRole("551213916005597187").then(() => {
                    message.channel.send(caembed);
                  });
                } else if (player.club.name === "Royalty Light") {
                  firstMentionedMember.addRole("550806038492872716").then(() => {
                    message.channel.send(caembed);
                  });
                } else if (player.club.name === "Royalty Reign") {
                  firstMentionedMember.addRole("550842881640890378").then(() => {
                    message.channel.send(caembed);
                  });
                } else if (player.club.name === "Royalty Bliss") {
                  firstMentionedMember.addRole("550921201099210755").then(() => {
                    message.channel.send(caembed);
                  });
                } else if (player.club.name === "Royalty Academy") {
                  firstMentionedMember.addRole("550556453308596225").then(() => {
                    message.channel.send(caembed);
                  });
                } else if (player.club.name === "Royalty Nation") {
                  firstMentionedMember.addRole("550556614579716096").then(() => {
                    message.channel.send(caembed);
                  });
                } else if (player.club.name === "Royalty Legends") {
                  firstMentionedMember.addRole("550557048580997123").then(() => {
                    message.channel.send(caembed);
                  });
                } else if (player.club.name === "Royalty Champs") {
                  firstMentionedMember.addRole("550557190121848843").then(() => {
                    message.channel.send(caembed);
                  });
                } else if (player.club.name === "Royalty Mystic") {
                  firstMentionedMember.addRole("550557533882941441").then(() => {
                    message.channel.send(caembed);
                  });
                } else if (player.club.name === "Royalty Tactic") {
                  firstMentionedMember.addRole("550557663532941312").then(() => {
                    message.channel.send(caembed);
                  });
                } else {
                  message.channel.send(caembed);
                };
              });
            } else if (player.club.role === "Vice President") {
              firstMentionedMember.addRole("550517562623000589").then(() => {
                if (player.club.name === "Royalty eSports") {
                  firstMentionedMember.addRole("551457440143638538").then(() => {
                    message.channel.send(caembed);
                  });
                } else if (player.club.name === "Royalty Angels") {
                  firstMentionedMember.addRole("550831851921735683").then(() => {
                    message.channel.send(caembed);
                  });
                } else if (player.club.name === "Royalty Rush") {
                  firstMentionedMember.addRole("550555961006358537").then(() => {
                    message.channel.send(caembed);
                  });
                } else if (player.club.name === "Royalty III") {
                  firstMentionedMember.addRole("550556107836489729").then(() => {
                    message.channel.send(caembed);
                  });
                } else if (player.club.name === "Royalty Dark") {
                  firstMentionedMember.addRole("550721443541942283").then(() => {
                    message.channel.send(caembed);
                  });
                } else if (player.club.name === "Royalty Legacy") {
                  firstMentionedMember.addRole("551213916005597187").then(() => {
                    message.channel.send(caembed);
                  });
                } else if (player.club.name === "Royalty Light") {
                  firstMentionedMember.addRole("550806038492872716").then(() => {
                    message.channel.send(caembed);
                  });
                } else if (player.club.name === "Royalty Reign") {
                  firstMentionedMember.addRole("550842881640890378").then(() => {
                    message.channel.send(caembed);
                  });
                } else if (player.club.name === "Royalty Bliss") {
                  firstMentionedMember.addRole("550921201099210755").then(() => {
                    message.channel.send(caembed);
                  });
                } else if (player.club.name === "Royalty Academy") {
                  firstMentionedMember.addRole("550556453308596225").then(() => {
                    message.channel.send(caembed);
                  });
                } else if (player.club.name === "Royalty Nation") {
                  firstMentionedMember.addRole("550556614579716096").then(() => {
                    message.channel.send(caembed);
                  });
                } else if (player.club.name === "Royalty Legends") {
                  firstMentionedMember.addRole("550557048580997123").then(() => {
                    message.channel.send(caembed);
                  });
                } else if (player.club.name === "Royalty Champs") {
                  firstMentionedMember.addRole("550557190121848843").then(() => {
                    message.channel.send(caembed);
                  });
                } else if (player.club.name === "Royalty Mystic") {
                  firstMentionedMember.addRole("550557533882941441").then(() => {
                    message.channel.send(caembed);
                  });
                } else if (player.club.name === "Royalty Tactic") {
                  firstMentionedMember.addRole("550557663532941312").then(() => {
                    message.channel.send(caembed);
                  });
                } else {
                  message.channel.send(caembed);
                };
              });
            } else if (player.club.role === "Senior") {
              firstMentionedMember.addRole("550518022939344896").then(() => {
                if (player.club.name === "Royalty eSports") {
                  firstMentionedMember.addRole("551457440143638538").then(() => {
                    message.channel.send(caembed);
                  });
                } else if (player.club.name === "Royalty Angels") {
                  firstMentionedMember.addRole("550831851921735683").then(() => {
                    message.channel.send(caembed);
                  });
                } else if (player.club.name === "Royalty Rush") {
                  firstMentionedMember.addRole("550555961006358537").then(() => {
                    message.channel.send(caembed);
                  });
                } else if (player.club.name === "Royalty III") {
                  firstMentionedMember.addRole("550556107836489729").then(() => {
                    message.channel.send(caembed);
                  });
                } else if (player.club.name === "Royalty Dark") {
                  firstMentionedMember.addRole("550721443541942283").then(() => {
                    message.channel.send(caembed);
                  });
                } else if (player.club.name === "Royalty Legacy") {
                  firstMentionedMember.addRole("551213916005597187").then(() => {
                    message.channel.send(caembed);
                  });
                } else if (player.club.name === "Royalty Light") {
                  firstMentionedMember.addRole("550806038492872716").then(() => {
                    message.channel.send(caembed);
                  });
                } else if (player.club.name === "Royalty Reign") {
                  firstMentionedMember.addRole("550842881640890378").then(() => {
                    message.channel.send(caembed);
                  });
                } else if (player.club.name === "Royalty Bliss") {
                  firstMentionedMember.addRole("550921201099210755").then(() => {
                    message.channel.send(caembed);
                  });
                } else if (player.club.name === "Royalty Academy") {
                  firstMentionedMember.addRole("550556453308596225").then(() => {
                    message.channel.send(caembed);
                  });
                } else if (player.club.name === "Royalty Nation") {
                  firstMentionedMember.addRole("550556614579716096").then(() => {
                    message.channel.send(caembed);
                  });
                } else if (player.club.name === "Royalty Legends") {
                  firstMentionedMember.addRole("550557048580997123").then(() => {
                    message.channel.send(caembed);
                  });
                } else if (player.club.name === "Royalty Champs") {
                  firstMentionedMember.addRole("550557190121848843").then(() => {
                    message.channel.send(caembed);
                  });
                } else if (player.club.name === "Royalty Mystic") {
                  firstMentionedMember.addRole("550557533882941441").then(() => {
                    message.channel.send(caembed);
                  });
                } else if (player.club.name === "Royalty Tactic") {
                  firstMentionedMember.addRole("550557663532941312").then(() => {
                    message.channel.send(caembed);
                  });
                } else {
                  message.channel.send(caembed);
                };
              });
            } else if (player.club.role === "Member") {
              firstMentionedMember.addRole("550518379149131776").then(() => {
                if (player.club.name === "Royalty eSports") {
                  firstMentionedMember.addRole("551457440143638538").then(() => {
                    message.channel.send(caembed);
                  });
                } else if (player.club.name === "Royalty Angels") {
                  firstMentionedMember.addRole("550831851921735683").then(() => {
                    message.channel.send(caembed);
                  });
                } else if (player.club.name === "Royalty Rush") {
                  firstMentionedMember.addRole("550555961006358537").then(() => {
                    message.channel.send(caembed);
                  });
                } else if (player.club.name === "Royalty III") {
                  firstMentionedMember.addRole("550556107836489729").then(() => {
                    message.channel.send(caembed);
                  });
                } else if (player.club.name === "Royalty Dark") {
                  firstMentionedMember.addRole("550721443541942283").then(() => {
                    message.channel.send(caembed);
                  });
                } else if (player.club.name === "Royalty Legacy") {
                  firstMentionedMember.addRole("551213916005597187").then(() => {
                    message.channel.send(caembed);
                  });
                } else if (player.club.name === "Royalty Light") {
                  firstMentionedMember.addRole("550806038492872716").then(() => {
                    message.channel.send(caembed);
                  });
                } else if (player.club.name === "Royalty Reign") {
                  firstMentionedMember.addRole("550842881640890378").then(() => {
                    message.channel.send(caembed);
                  });
                } else if (player.club.name === "Royalty Bliss") {
                  firstMentionedMember.addRole("550921201099210755").then(() => {
                    message.channel.send(caembed);
                  });
                } else if (player.club.name === "Royalty Academy") {
                  firstMentionedMember.addRole("550556453308596225").then(() => {
                    message.channel.send(caembed);
                  });
                } else if (player.club.name === "Royalty Nation") {
                  firstMentionedMember.addRole("550556614579716096").then(() => {
                    message.channel.send(caembed);
                  });
                } else if (player.club.name === "Royalty Legends") {
                  firstMentionedMember.addRole("550557048580997123").then(() => {
                    message.channel.send(caembed);
                  });
                } else if (player.club.name === "Royalty Champs") {
                  firstMentionedMember.addRole("550557190121848843").then(() => {
                    message.channel.send(caembed);
                  });
                } else if (player.club.name === "Royalty Mystic") {
                  firstMentionedMember.addRole("550557533882941441").then(() => {
                    message.channel.send(caembed);
                  });
                } else if (player.club.name === "Royalty Tactic") {
                  firstMentionedMember.addRole("550557663532941312").then(() => {
                    message.channel.send(caembed);
                  });
                } else {
                  message.channel.send(caembed);
                };
              });
            };
            } else {
              firstMentioned.addRole("550550415767502851");
              caembed.addField(`In Royalty`, `False`, true)
            };
				};
			};
      if (mmmf.roles.find(val => val.role === "SS")) {
        firstMentioned.removeRole("550550415767502851");
			  getPlayer().catch(e => console.log(e));
      } else {
        getPlayer().catch(e => console.log(e));
      };
      
      return message.channel.send("Sorry, but due to a change in permissions, this command is currently out of service, and will be until Mooose decides to actually get to work. \n \n In the meantime, please use `*role @user +Member, +[whatever their role in the club is], -SS` to assign roles.");
    };
	};

  if (msg.startsWith(`${prefix}RESET`)) {
    if (message.author.id === "288853176210161666") {
      let money2add = 0;
      db.set(`${firstMentioned.id}.money`, money2add).then(() => {
        return message.channel.send(`reset ${firstMentionedMember.displayName}'s balance to 0, why on earth was it even messed up enough for you to have to use that command`);
      });
    } else {
      return message.channel.send("sorry, futur only");
    };
  };
	if (msg.startsWith(`${prefix}BALANCE`) || msg.startsWith(`${prefix}MONEY`) || msg.startsWith(`${prefix}BAL`)) {
		if (!args[0]) {
        const balEmbed = new Discord.RichEmbed()
            .setTitle(`Royalty Bank`)
            .setColor(0xD4AF37)
            .addField("Account Holder", firstMentionedMember.displayName, true)
            .addField('Account Balance', theBank, true)
         message.channel.send(balEmbed);
    } else {
	    	const balEmbed = new Discord.RichEmbed()
	      	.setTitle(`Royalty Bank`)
	        .setColor(0xD4AF37)
	        .addField("Account Holder", firstMentioned.displayName, true)
	        .addField('Account Balance', theBank, true)
	     	message.channel.send(balEmbed);
    };
	};

	if (msg.startsWith(`${prefix}AWARD`)) {
		if (message.author.id === "421819915742347276" || message.author.id === "330183945922674688" || message.author.id === "288853176210161666") {
			if (!args[0] || !args[1]) {
				let errEmbed = new Discord.RichEmbed()
					.setTitle(":warning: ERROR :warning:")
					.addField("Amount of points not specified", "Please specify a number of points to give.\n**Command Format:** `/award @user [# of points]`")
					.setColor([255, 0, 0])
				return message.channel.send(errEmbed);
			} else {
				let moneyToAdd = Number(args[1]) + Number(theBank);
				db.set(`${firstMentioned.id}.money`, moneyToAdd);
				let succEmbed = new Discord.RichEmbed()
					.setTitle("Success!")
					.addField("Award successful", `I have awarded ${firstMentioned.displayName} ${Number(args[1])} points.`)
					.setColor([0, 255, 0])
				return message.channel.send(succEmbed);
			};
		} else {
			let errEmbed = new Discord.RichEmbed()
				.setTitle(":warning: ERROR :warning:")
				.addField("Invalid permissions", "You do not have permission to use this command.`")
				.setColor([255, 0, 0])
			return message.channel.send(errEmbed);
		};
	};

	if (msg.startsWith(`${prefix}DEDUCT`)) {
		if (message.author.id === "421819915742347276" || message.author.id === "330183945922674688" || message.author.id === "288853176210161666") {
			if (!args[0] || !args[1]) {
				let errEmbed = new Discord.RichEmbed()
					.setTitle(":warning: ERROR :warning:")
					.addField("Amount of points not specified", "Please specify a number of points to remove.\n**Command Format:** `/deduct @user [# of points]`")
					.setColor([255, 0, 0])
				return message.channel.send(errEmbed);
			} else {
				let moneyToSub = Number(theBank) - Number(args[1]);
				db.set(`${firstMentioned.id}.money`, moneyToSub);
				let succEmbed = new Discord.RichEmbed()
					.setTitle("Success!")
					.addField("Deduction successful", `I have deducted ${Number(args[1])} points from ${firstMentioned.displayName}.`)
					.setColor([0, 255, 0])
				return message.channel.send(succEmbed);
			};
		} else {
			let errEmbed = new Discord.RichEmbed()
				.setTitle(":warning: ERROR :warning:")
				.addField("Invalid permissions", "You do not have permission to use this command.`")
				.setColor([255, 0, 0])
			return message.channel.send(errEmbed);
		};
	};
*/
	if (msg.startsWith(`${prefix}HELP`)) {
    let cmdusage;
		if(!args[0]) {
			const helpEmbed = new Discord.RichEmbed()
				.setFooter(`Requested by ${message.author.username}`, message.author.avatarURL)
        .setColor(0x00FFFF)
        .addField("Command List", "Enter `/help [command]` for more info on a command.")
      for (let key in commands) {
        if (!commands.hasOwnProperty(key)) continue;
        let obj = commands[key];
        for (let prop in obj) {
          if(!obj.hasOwnProperty(prop)) continue;
          if (prop === "usage") {
            cmdusage = obj[prop];
            helpEmbed.addField("/" + key, cmdusage);
          };
        };
      };
			return message.channel.send(helpEmbed);
		} else if (args[0] === "link") {
			const viceEmbed = new Discord.RichEmbed()
				.setTitle("/link Command")
				.setAuthor(`Requested by ${message.author.username}`, message.author.avatarURL)
				.setDescription("Information on the `/link` command")
				.addField("Syntax", "`/link` @user")
				.addField("Function", "Links a Discord user to their Brawl Stars tag, assigning any roles needed")
				.addField("Requirements", "You must be Royal Servant or above")
				.setFooter("This help message is brought to you by the Royalty family", "https://i.imgur.com/7Ut6i8F.jpg")
			return message.channel.send(viceEmbed);
			} else if (args[0] === "help") {
					return message.channel.send("Oh, come on. Did you really think that would work?");
			} else if (args[0] === "mute") {
					const muteEmbed = new Discord.RichEmbed()
						.setTitle("/mute Command")
						.setAuthor(`Requested by ${message.author.username}`, message.author.avatarURL)
						.setDescription("Information on the `/mute` command")
						.addField("Syntax", "`/mute` @user [# of mins]")
						.addField("Function", "Mutes the mentioned user for specified number of minutes")
						.addField("Requirements", "You must be a Moderator or above")
						.setFooter("This help message is brought to you by the Royalty family", "https://i.imgur.com/7Ut6i8F.jpg")
					return message.channel.send(muteEmbed);
			} else if (args[0] === "purge") {
					const purgeEmbed = new Discord.RichEmbed()
						.setTitle("/purge Command")
						.setAuthor(`Requested by ${message.author.username}`, message.author.avatarURL)
						.setDescription("Information on the `/purge` command")
						.addField("Syntax", "`/purge` [# of messages]")
						.addField("Function", "Purges the specified number of messages from the chat")
						.addField("Requirements", "You must be a Moderator or above")
						.setFooter("This help message is brought to you by the Royalty family", "https://i.imgur.com/7Ut6i8F.jpg")
					return message.channel.send(purgeEmbed);
			};
	};
});

client.login(process.env.TOKEN);

