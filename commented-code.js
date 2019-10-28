/*  if (msg.startsWith(`I AM INEVITABLE. *SNAPS FINGERS*`) && (message.author.id === '288853176210161666' || message.author.id === '256943551894650890')) {
    let membArr = message.guild.members.keyArray();
    let ssrole = '550550415767502851';
    let ctr = 0;
    let twitchrole = '560576306996051969';
    let ytrole = '560576366232469514';
    let hastwitch = false;
    let hasyt = false;
    for (let i = 0; i < membArr.length; i++) {
      ctr += 1;
      if (ctr >9) { ctr = 0; setTimeout(function() { console.log("waiting")}, 10000); };
      let loopMemb = message.guild.members.get(membArr[i]);
      if (loopMemb.roles.has(ssrole)) continue;
      if (!loopMemb.manageable || db.fetch(`${membArr[i]}.info`) || loopMemb.user.bot) {
        if (!db.fetch(`${membArr[i]}.info`)) {
        console.log("couldn't edit " + loopMemb.displayName);
        } else {
console.log('didnt need to edit ' + loopMemb.displayName);
        };
      } else {
        if (loopMemb.roles.has(twitchrole)) hastwitch = true;
        if (loopMemb.roles.has(ytrole)) hasyt = true;
        async function resetRoles() {
          await loopMemb.removeRoles(loopMemb.roles);
          await loopMemb.addRole(ssrole)
          .catch(e => {
            if (e.includes("Missing Permissions")) return;
            message.channel.send(loopMemb.displayName)
            console.log('error: ' + e);
            loopMemb = null;
            hasyt = null;
            hastwitch = null;
            ssrole = null;
            twitchrole = null;
            ytrole = null;
            return;
          });
          if (hasyt) await loopMemb.addRole(ytrole);
          if (hastwitch) await loopMemb.addRole(twitchrole);
          await loopMemb.addRole('579439624460566549');
          let welcEmb = new Discord.RichEmbed()
          .setColor(0xEBA911)
          .setImage("https://media.giphy.com/media/cKsc4H4bg1msdgkBuE/giphy.gif")
          .addField("Sorry for the inconvenience, " + loopMemb.user.tag + "!", "We're resetting all members' roles to accomodate for the new role system, so we'll need you to reverify. \n\nJust send me a picture of your Trophy Road profile as shown in the video below. If you have any questions or concerns, please Direct Message <@532261291600117780>. Thank you for your cooperation.")
          loopMemb.send(welcEmb)
          .catch(() => {
            console.log('couldnt send to ' + loopMemb.displayName);
          });
        };
        resetRoles();
      };
    };
  };
  */








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
let message;
let db;
let bsClient;
let maMember;

   let membArr = message.guild.members.keyArray();
    let ctr = 0;
    let ruif;
    let argtwo;
    let userProfile = await bsClient.getPlayer(tagarg.toUpperCase());
    async function refresh() {
    for (let i = 0; i < membArr.length; i++) {
        let loopMemb = message.guild.members.get(membArr[i]);
        if (!db.fetch(`${loopMemb.id}.info`)) continue;
        ctr += 1;
        async function doitall() {
        let uif = db.fetch(`${loopMemb.id}.info`);
          async function resetInfo() {
            if (typeof(uif[0]) !== "string") { 
            console.log("error with " + loopMemb);
          argtwo = await bsClient.getPlayer(uif[0][0]);
          ruif = uif[0][0];
        } else {
          argtwo = await bsClient.getPlayer(uif[0]);
          ruif = uif[0];
        }
            db.set(`${loopMemb.id}.info`, [ruif, argtwo]);
          };
          resetInfo();
          maMember = loopMemb;
          let authorMember = maMember;
          let clubList = db.fetch("clubList");
          let clArray = clubList;
          let guildRole;
          let posRoles = [
            ["Member", "550518379149131776"],
            ["Senior", "550518022939344896"],
            ["Vice President", "550517562623000589"],
            ["President", "550516837234901039"]
          ];
          let grName;
          let isGuest = false;
          let usersclub;
          userProfile = uif;
          if (userProfile.club.name.startsWith("EZ")) {
            if (maMember.roles.has("550521408799768587")) await maMember.removeRole("550521408799768587");
            if (maMember.roles.has("582029503241388061")) await maMember.removeRole("582029503241388061");
            let userClub = userProfile.club.name.slice(3);
            async function removeRoles() {
              for (let k = 0; k < clArray.length; k++) {
                for (let j = 0; j < posRoles.length; j++) {
                  if (maMember.roles.has(posRoles[j][1])) {
                    guildRole = posRoles[j][1];
                    grName = posRoles[j][0];
                  } else {
                    continue;
                  }
                }
                if (maMember.roles.has(clArray[k][2])) {
                  let removeGR = clArray[k][2];
                  let removeGPos = message.guild.roles.find(
                    val => val.name === grName
                  );
                  if (!removeGR || !removeGPos) {
                    console.log(
                      "error with" + loopMemb
                    );
                    return;
                  } else {
                    await maMember.removeRoles([removeGR, removeGPos]);
                  }
                }
              }
            }
            async function addRoles() {
              for (let i = 0; i < clArray.length; i++) {
                if (
                  clArray[i][0] === userClub &&
                  userProfile.club.tag === clArray[i][1]
                ) {
                  if (authorMember.roles.has("608708416478642227"))
                    authorMember.removeRole("608708416478642227");
                  if (authorMember.roles.has("550550415767502851"))
                    authorMember.removeRole("550550415767502851");
                  await authorMember.addRole(clArray[i][2]);
                  usersclub = clArray[i][2];
                  for (let j = 0; j < posRoles.length; j++) {
                    if (userProfile.club.role === posRoles[j][0]) {
                      guildRole = posRoles[j][1];
                      grName = posRoles[j][0];
                    } else {
                      continue;
                    }
                  }
                  await authorMember.addRole(guildRole);
                  break;
                }
              }
            }
            await removeRoles().then(() => {
              addRoles();
            });
        } else {
          if (maMember.roles.has("550521408799768587")) await maMember.removeRole("550521408799768587");
          if (maMember.roles.has("582029503241388061")) await maMember.removeRole("582029503241388061");
          if (authorMember.roles.has("608708416478642227")) await authorMember.removeRole("608708416478642227");
          if (authorMember.roles.has("550550415767502851")) await authorMember.removeRole("550550415767502851");
          async function removeRoles() {
            for (let k = 0; k < clArray.length; k++) {
              for (let j = 0; j < posRoles.length; j++) {
                if (maMember.roles.has(posRoles[j][1])) {
                  guildRole = posRoles[j][1];
                  grName = posRoles[j][0];
                } else {
                  continue;
                }
              }
              if (maMember.roles.has(clArray[k][2])) {
                let removeGR = clArray[k][2];
                let removeGPos = message.guild.roles.find(
                  val => val.name === grName
                );
                if (!removeGR || !removeGPos) {
                  return;
                } else {
                  await maMember.removeRoles([removeGR, removeGPos]);
                }
              }
            }
            await authorMember.addRole("550521408799768587");
          }
          removeRoles();
          isGuest = true;
      };
    };
      if (ctr > 7) {
      console.log("waiting...");
      setTimeout(doitall, 8000);
      } else {
        doitall();
      };
      };
    };
    refresh();
