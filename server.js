const Discord = require("discord.js");
const client = new Discord.Client();
const db = require('quick.db');
const http = require('http'); const express = require('express'); const app = express(); app.get("/", (request, response) => { console.log(Date.now() + " Ping Received"); response.sendStatus(200); }); app.listen(process.env.PORT); setInterval(() => { http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`); }, 280000)

let apexPres = 533474799129853953;
let gloryPres = 533474803185877013;
let valorPres = 533474807921246248;
let reignPres = 533474811612233730;
let rushPres = 533474815726583828;
let nationPres = 533474819250061316;
let blissPres = 533474823263879181;
let academyPres = 533474827005329411;
let firePres = 533474834827575296;

let apexVice = 533492171119263745;
let gloryVice = 533492178551308302;
let valorVice = 533492185417515008;
let reignVice = 533492191453118484;
let rushVice = 533492194678407198;
let nationVice = 533492197178343437;
let blissVice = 533492181999026182;
let academyVice = 533492188819095564;
let fireVice = 533492174592147486;


client.on("ready", () => {
  console.log("RoyaltyBot is ready to roll!");
});

client.on("message", (message) => {

  let prefix = "/";
  let msg = message.content.toUpperCase();
  let cont = message.content.slice(prefix.length).split(" ");
  let args = cont.slice(1);
  const logchannel = client.channels.find('name', '🔰mod_logs');
  const mainchat = client.channels.find('name', '🌐global_chat');
  let firstMentioned = message.mentions.members.first() || message.author;
  let fmid = firstMentioned.id;
  let firstMentionedMember = message.guild.members.get(firstMentioned.id);
	let theBank = db.fetch(`${firstMentioned.id}.money`);
	if (theBank === null) theBank = 0;

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
  
  if (msg.startsWith(`${prefix}VICE`)) {
     if (message.member.roles.find("name", "Apex President")) {
        if (!args[0]) {
          return message.channel.send("Error. Please mention a user to give the role of 'Apex Vice President' to.\n**Command Format**: `/vice @user`");
        } else {
          if (message.mentions.members.first()) {
             
            firstMentioned.addRole("533492171119263745");
          } else {
            return message.channel.send("Error. Please mention a user to give the role of 'Apex Vice President' to.\n**Command Format**: `/vice @user`")
          };
        };
     } else if (message.member.roles.find("name", "Glory President")) {
        if (!args[0]) {
          return message.channel.send("Error. Please mention a user to give the role of 'Glory Vice President' to.\n**Command Format**: `/vice @user`");
        } else {
          if (message.mentions.members.first()) {
             
            firstMentioned.addRole("533492178551308302");
            return message.channel.send(`Done! The user now has the Vice President role for your Club!`);
          } else {
            return message.channel.send("Error. Please mention a user to give the role of 'Glory Vice President' to.\n**Command Format**: `/vice @user`")
          };
        };
     } else if (message.member.roles.find("name", "Valor President")) {
        if (!args[0]) {
          return message.channel.send("Error. Please mention a user to give the role of 'Valor Vice President' to.\n**Command Format**: `/vice @user`");
        } else {
          if (message.mentions.members.first()) {
             
            firstMentioned.addRole("533492185417515008");
            return message.channel.send(`Done! The user now has the Vice President role for your Club!`);
          } else {
            return message.channel.send("Error. Please mention a user to give the role of 'Valor Vice President' to.\n**Command Format**: `/vice @user`")
          };
        };
     } else if (message.member.roles.find("name", "Reign President")) {
        if (!args[0]) {
          return message.channel.send("Error. Please mention a user to give the role of 'Reign Vice President' to.\n**Command Format**: `/vice @user`");
        } else {
          if (message.mentions.members.first()) {
             
            firstMentioned.addRole("533492191453118484");
          } else {
            return message.channel.send("Error. Please mention a user to give the role of 'Reign Vice President' to.\n**Command Format**: `/vice @user`")
          };
        };
     } else if (message.member.roles.find("name", "Rush President")) {
        if (!args[0]) {
          return message.channel.send("Error. Please mention a user to give the role of 'Rush Vice President' to.\n**Command Format**: `/vice @user`");
        } else {
          if (message.mentions.members.first()) {
             
            firstMentioned.addRole("533492194678407198");
          } else {
            return message.channel.send("Error. Please mention a user to give the role of 'Rush Vice President' to.\n**Command Format**: `/vice @user`")
          };
        };
     } else if (message.member.roles.find("name", "Nation President")) {
        if (!args[0]) {
          return message.channel.send("Error. Please mention a user to give the role of 'Nation Vice President' to.\n**Command Format**: `/vice @user`");
        } else {
          if (message.mentions.members.first()) {
             
            firstMentioned.addRole("533492197178343437");
          } else {
            return message.channel.send("Error. Please mention a user to give the role of 'Nation Vice President' to.\n**Command Format**: `/vice @user`")
          };
        };
     } else if (message.member.roles.find("name", "Bliss President")) {
        if (!args[0]) {
          return message.channel.send("Error. Please mention a user to give the role of 'Bliss Vice President' to.\n**Command Format**: `/vice @user`");
        } else {
          if (message.mentions.members.first()) {
             
            firstMentioned.addRole("533492181999026182");
          } else {
            return message.channel.send("Error. Please mention a user to give the role of 'Bliss Vice President' to.\n**Command Format**: `/vice @user`")
          };
        };
      } else if (message.member.roles.find("name", "Academy President")) {
         if (!args[0]) {
           return message.channel.send("Error. Please mention a user to give the role of 'Academy Vice President' to.\n**Command Format**: `/vice @user`");
         } else {
           if (message.mentions.members.first()) {
              
             firstMentioned.addRole("533492188819095564");
           } else {
             return message.channel.send("Error. Please mention a user to give the role of 'Academy Vice President' to.\n**Command Format**: `/vice @user`")
           };
         };
      } else if (message.member.roles.find("name", "Fire President")) {
         if (!args[0]) {
           return message.channel.send("Error. Please mention a user to give the role of 'Fire Vice President' to.\n**Command Format**: `/vice @user`");
         } else {
           if (message.mentions.members.first()) {
              
             firstMentioned.addRole("533492174592147486");
           } else {
             return message.channel.send("Error. Please mention a user to give the role of 'Fire Vice President' to.\n**Command Format**: `/vice @user`")
           };
         };
      } else {
        return message.channel.send("Error. You must have the President role of your respective Club in order to use this command. If you believe this is a mistake, please Direct Message the Modmail bot immediately.")
      };
  };

  if (msg.startsWith("BOTSHUTDOWNSHH")) {
    if (message.author.id === "288853176210161666") {
      dosomestuffidk();
    } else {
      return message.channel.send("You're not Mooose... <@&288853176210161666>! IMPOSTOR ALERT!");
    };
  };
  
  if (msg.startsWith(`${prefix}PURGE`)) {
    message.delete();
    async function purge() {

      if (!message.member.roles.find("name", "Moderator")) {
        message.channel.send('Must be mod, nab');
        return;
      };
      if (isNaN(args[0])) {
        let errEmbed = new Discord.RichEmbed()
          .setTitle(":warning: ERROR :warning:")
          .addField("Number of messages not specified", "Please specify a number of messages to delete\n**Command Format:** `/purge [# of messages]`")
          .setColor([255, 0, 0])
        return message.channel.send(errEmbed);
      };
      let theLimit = Number(args[0]) + 1;
      const fetched = await message.channel.fetchMessages({limit: theLimit});
      console.log(fetched.size + ' messages found, deleting...');

      message.channel.bulkDelete(fetched)
      let succEmbed = new Discord.RichEmbed()
        .setTitle("Success!")
        .addField("Purge successful", `I have deleted ${Number(fetched.size) - 1} messages.`)
        .setColor([0, 255, 0])
      return message.channel.send(succEmbed)
        .then(msg => {
        msg.delete(5000)
        })
      .catch(error => message.channel.send(`Error: ${error}`));

    };
    purge();
  };

	if(msg.startsWith(`${prefix}MEMBER`)) {
    if (message.member.roles.find("name", "Moderator") || message.member.roles.find("name", "Board of Directors") || message.member.roles.find("name", "Admin") || message.member.roles.find("name", "Chairman")) {
	    if(!args[0]) {
				let errEmbed = new Discord.RichEmbed()
					.setTitle(":warning: ERROR :warning:")
					.addField("Member not specified", "Please specify a user to give/remove the role of Member.\n**Command Format:** `/member @user`")
					.setColor([255, 0, 0])
				return message.channel.send(errEmbed);
      } else {
	       
	      if (firstMentioned.roles.find("name", "Member")) {
	        firstMentioned.removeRole("518277787115847702").then(() => {
						setTimeout(function() {
							if(!firstMentioned.roles.find("name", "Member")) {
								firstMentioned.addRole("518277447419035648");
                let modEmbed = new Discord.RichEmbed()
									.setTitle("Success!")
									.addField("Role change successful", `I have changed ${firstMentioned.displayName} (${firstMentioned.id})'s role from Member to Newcomer!`)
									.setColor([0, 255, 0])
								return logchannel.send(modEmbed)
								let succEmbed = new Discord.RichEmbed()
									.setTitle("Success!")
									.addField("Role change successful", "I have changed that user's role from Member to Newcomer!")
									.setColor([0, 255, 0])
								return message.channel.send(succEmbed);
							};
						});
					});
        } else if (firstMentioned.roles.find("name", "Newcomer")) {
          firstMentioned.addRole("518277787115847702").then(() => {
            setTimeout(function() {
					  	if(firstMentioned.roles.find("name", "Newcomer")) {
								firstMentioned.removeRole("518277447419035648");
								let modEmbed = new Discord.RichEmbed()
									.setTitle("Success!")
									.addField("Role change successful", `I have given the Member role to ${firstMentioned.displayName} (${firstMentioned.id})!`)
									.setColor([0, 255, 0])
								return logchannel.send(modEmbed).then(() => {
                  let welcomeEmbed = new Discord.RichEmbed()
                    .setTitle(`Welcome, ${firstMentioned.displayName}!`)
                    .addField(`${firstMentioned.displayName} has joined the server!`, `Feel free to ping a Moderator if you have any questions or concerns.`, true)
                    .setThumbnail(firstMentioned.user.avatarURL)
                    .setFooter(`We hope you enjoy your time with the Royalty family!`, `https://i.imgur.com/7Ut6i8F.jpg`)
                  return mainchat.send(welcomeEmbed).then(() => {
                    message.delete();
                    let succEmbed = new Discord.RichEmbed()
                      .setTitle("Success!")
                      .addField("Role change successful", "I have given the Member role to that user! Welcome to the Royalty family!")
                      .setColor([0, 255, 0])
                    return message.channel.send(succEmbed)
                  });
                });
					    };
            });
          });
        } else if (firstMentioned.roles.find("name", "Guest")) {
          firstMentioned.addRole("518277787115847702").then(() => {
            setTimeout(function() {
					  	if(firstMentioned.roles.find("name", "Guest")) {
								firstMentioned.removeRole("518548750411628544");
                message.delete();
								let modEmbed = new Discord.RichEmbed()
									.setTitle("Success!")
									.addField("Role change successful", `I have changed ${firstMentioned.displayName} (${firstMentioned.id})'s role from Guest to Member!`)
									.setColor([0, 255, 0])
								return logchannel.send(modEmbed).then(() => {
                  let succEmbed = new Discord.RichEmbed()
                    .setTitle("Success!")
                    .addField("Role change successful", "I have changed that user's role from Guest to Member! Welcome to the Royalty family!")
                    .setColor([0, 255, 0])
                  return message.channel.send(succEmbed)
                });
							};
						});
					});
				};
      };
  	};
  };

	if(msg.startsWith(`${prefix}GUEST`)) {
    if (message.member.roles.find("name", "Moderator") || message.member.roles.find("name", "Board of Directors") || message.member.roles.find("name", "Admin") || message.member.roles.find("name", "Chairman")) {
	    if(!args[0]) {
				let errEmbed = new Discord.RichEmbed()
					.setTitle(":warning: ERROR :warning:")
					.addField("Member not specified", "Please specify a user to give/remove the role of Guest.\n**Command Format:** `/guest @user`")
					.setColor([255, 0, 0])
				return message.channel.send(errEmbed);
      } else {
	       
	      if (firstMentioned.roles.find("name", "Guest")) {
	        firstMentioned.removeRole("518548750411628544").then(() => {
            setTimeout(function() {
					  	if(!firstMentioned.roles.find("name", "Guest")) {
								firstMentioned.addRole("518277447419035648");
                message.delete();
								let modEmbed = new Discord.RichEmbed()
									.setTitle("Success!")
									.addField("Role change successful", `I have changed ${firstMentioned.displayName} (${firstMentioned.id})'s role from Guest to Newcomer!`)
									.setColor([0, 255, 0])
								return logchannel.send(modEmbed).then(() => {
                  let succEmbed = new Discord.RichEmbed()
                    .setTitle("Success!")
                    .addField("Role change successful", "I have changed that user's role from Guest to Newcomer!")
                    .setColor([0, 255, 0])
                  return message.channel.send(succEmbed)
                });
							};
						});
					});
        } else if (firstMentioned.roles.find("name", "Newcomer")) {
          firstMentioned.addRole("518548750411628544").then(() => {
            setTimeout(function() {
					  	if(firstMentioned.roles.find("name", "Newcomer")) {
								firstMentioned.removeRole("518277447419035648");
                message.delete();
								let modEmbed = new Discord.RichEmbed()
									.setTitle("Success!")
									.addField("Role change successful", `I have given the Guest role to ${firstMentioned.displayName} (${firstMentioned.id})!`)
									.setColor([0, 255, 0])
								return logchannel.send(modEmbed).then(() => {
                  let welcomeEmbed = new Discord.RichEmbed()
                    .setTitle(`Welcome, ${firstMentioned.displayName}!`)
                    .addField(`${firstMentioned.displayName} has joined the server!`, `Feel free to ping a Moderator if you have any questions or concerns.`)
                    .setImage(firstMentioned.user.avatarURL)
                    .setFooter(`We hope you enjoy your time with the Royalty family!`, `https://i.imgur.com/7Ut6i8F.jpg`)
                  return mainchat.send(welcomeEmbed).then(() => {
                    let succEmbed = new Discord.RichEmbed()
                      .setTitle("Success!")
                      .addField("Role change successful", "I have given the Guest role to that user!")
                      .setColor([0, 255, 0])
                    return message.channel.send(succEmbed)
                  });
                });
							};
            });
          });
        } else if (firstMentioned.roles.find("name", "Member")) {
          firstMentioned.addRole("518548750411628544").then(() => {
            setTimeout(function() {
					  	if(firstMentioned.roles.find("name", "Member")) {
								firstMentioned.removeRole("518277787115847702");
                message.delete();
								let modEmbed = new Discord.RichEmbed()
									.setTitle("Success!")
									.addField("Role change successful", `I have changed ${firstMentioned.displayName} (${firstMentioned.id})'s role from Member to Guest!`)
									.setColor([0, 255, 0])
								return logchannel.send(modEmbed).then(() => {
                  let succEmbed = new Discord.RichEmbed()
                    .setTitle("Success!")
                    .addField("Role change successful", "I have changed that user's role from Member to Guest!")
                    .setColor([0, 255, 0])
                  return message.channel.send(succEmbed)
                });
							};
						});
					});
				};
      };
  	};
  };

	if (msg.startsWith(`${prefix}HELP`)) {
		if(!args[0]) {
			const helpEmbed = new Discord.RichEmbed()
				.setTitle("Command List")
				.setAuthor(`Requested by ${message.author.username}`, message.author.avatarURL)
				.setDescription("Type `/help [command]` for more information on the command. (i.e. `/help vice`)")
				.addField("/vice", "Assigns the mentioned user the role of Vice President.")
				.addField("/member", "Assigns or removes the mentioned user's role of Member.")
				.addField("/guest", "Assigns or removes the mentioned user's role of Guest.")
        .addField("/mute", "Mutes the mentioned user for a specified amount of time.")
        .addField("/purge", "Purges the specified number of messages from the chat.")
				.addField("/help", "Do you really need to ask?")
				.setFooter("This help message is brought to you by the Royalty family", "https://i.imgur.com/7Ut6i8F.jpg")
			return message.channel.send(helpEmbed);
		} else if (args[0] === "vice") {
			const viceEmbed = new Discord.RichEmbed()
				.setTitle("/vice Command")
				.setAuthor(`Requested by ${message.author.username}`, message.author.avatarURL)
				.setDescription("Information on the `/vice` command")
				.addField("Syntax", "`/vice` @user")
				.addField("Function", "Assigns the mentioned user the Vice President role of the message author's Club")
				.addField("Requirements", "You must have one of the Club President roles")
				.setFooter("This help message is brought to you by the Royalty family", "https://i.imgur.com/7Ut6i8F.jpg")
			return message.channel.send(viceEmbed);
		} else if (args[0] === "member") {
			const memberEmbed = new Discord.RichEmbed()
				.setTitle("/member Command")
				.setAuthor(`Requested by ${message.author.username}`, message.author.avatarURL)
				.setDescription("Information on the `/member` command")
				.addField("Syntax", "`/member` @user")
				.addField("Functions", "a) Removes the mentioned user's Newcomer role and assigns them the Member role\nb) Removes the mentioned user's Guest role and assigns them the Member role\nc) Removes the mentioned user's Member role and assigns them the Newcomer role")
				.addField("Requirements", "You must be a Moderator or above")
				.setFooter("This help message is brought to you by the Royalty family", "https://i.imgur.com/7Ut6i8F.jpg")
			return message.channel.send(memberEmbed);
		} else if (args[0] === "guest") {
				const guestEmbed = new Discord.RichEmbed()
					.setTitle("/guest Command")
					.setAuthor(`Requested by ${message.author.username}`, message.author.avatarURL)
					.setDescription("Information on the `/guest` command")
					.addField("Syntax", "`/guest` @user")
					.addField("Functions", "a) Removes the mentioned user's Newcomer role and assigns them the Guest role\nb) Removes the mentioned user's Member role and assigns them the Guest role\nc) Removes the mentioned user's Guest role and assigns them the Newcomer role")
					.addField("Requirements", "You must be a Moderator or above")
					.setFooter("This help message is brought to you by the Royalty family", "https://i.imgur.com/7Ut6i8F.jpg")
				return message.channel.send(guestEmbed);
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

	if (msg.startsWith(`${prefix}MUTE`)) {
		if (message.member.roles.find("name", "Moderator") || message.member.roles.find("name", "Board of Directors") || message.member.roles.find("name", "Admin") || message.member.roles.find("name", "Chairman")) {
			if (!args[0]) {
				let errEmbed = new Discord.RichEmbed()
					.setTitle(":warning: ERROR :warning:")
					.addField("Member not specified", "You must specify a member to mute. \n**Command Format:** `/mute @user [# of mins]`\n**Example:** `/mute @DiscordUser 30`")
					.setColor([255, 0, 0])
				return message.channel.send(errEmbed);
			} else if (!message.mentions.members.first()) {
				let errEmbed = new Discord.RichEmbed()
					.setTitle(":warning: ERROR :warning:")
					.addField("Member not specified", "You must specify a member to mute. \n**Command Format:** `/mute @user [# of mins]`\n**Example:** `/mute @DiscordUser 30`")
					.setColor([255, 0, 0])
				return message.channel.send(errEmbed);
			} else if (!args[1]) {
				let errEmbed = new Discord.RichEmbed()
					.setTitle(":warning: ERROR :warning:")
					.addField("Time limit not specified", "You must specify a length of time to mute the member for. \n**Command Format:** `/mute @user [# of mins]`\n**Example:** `/mute @DiscordUser 30`")
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
						.addField("Time limit not specified", "You must specify a length of time to mute the member for. \n**Command Format:** `/mute @user [# of mins]`\n**Example:** `/mute @DiscordUser 30`")
						.setColor([255, 0, 0])
					return message.channel.send(errEmbed);
				};
			};
		} else {
			let errEmbed = new Discord.RichEmbed()
				.setTitle(":warning: ERROR :warning:")
				.addField("Invalid permissions", "You do not have the permissions to use this command.")
				.setColor([255, 0, 0])
			return message.channel.send(errEmbed);
		};
	};
});

client.login(process.env.TOKEN);
