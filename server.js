const dbd = require("dbd.js");

const bot = new dbd.Bot({
  token: "change_me",

  prefix: "change_me"
});

bot.command({
  name: "<@792721010704252978",
  code: `$title[Bot Name]
$description[**Hi $username my prefix is** \`$getServerVar[prefix]\`
**You can type** \`$getServerVar[prefix]help\` **for more info**]
$color[RANDOM]`,
  nonPrefixed: true
});

bot.variables({
	prefix: 'change_me',
	wchan: '',
	lchan: '',
	ticketchannel: ''
});

bot.command({
  name: "<@792721010704252978",

  code: `$title[Bot Name]

$description[**Hi $username my prefix is** \`$getServerVar[prefix]\`

**You can type** \`+help\` **for more info**]

$color[RANDOM]`
});
bot.onMessage();

bot.command({
  name: "ping",

  code: `Pong! \`$ping\` ms`
});

bot.command({
  name: "say",
  code: `
$message
$botTyping
$deletecommand`
});

bot.command({
  name: "trump",

  code: `

$onlyIf[$message!=;Type something!]

 

$color[$random[111111;999999]]

$image[https://api.no-api-key.com/api/v2/trump?message=$replaceText[$message; ;+;-1]]`
});

bot.command({
  name: "ann",
  code:  `
  $title[•ANNOUNCEMENT]
$description[$message]
$image[https://cdn.discordapp.com/attachments/783319872230129674/784371198188453909/Tw.gif]
$footer[•Announced: $username]
$addTimestamp
$thumbnail[$serverIcon]
$deletecommand
$onlyPerms[admin;only Admin Command if u use again u will kicked from server]`
});

bot.command({
  name: "play",
  code: `
$playSong[$message;Error cannot be played at this moment!]
$onlyIf[$message!=;Type a valid song name!]
$onlyIf[$voiceID!=;You're not in a voice channel]`
});

bot.command({
  name: "skip",

  code: `

$skipSong

$onlyIf[$voiceID!=;You're not in a voice channel]

Skiped Playing: $songInfo[title]**`
});

bot.command({
  name: "queue",

  code: `

$description[$queue[1;10]]

$color[$random[1;9999]]`
});

bot.command({
  name: "talle",
  code: `
$title[TALLE BY $username]
$image[https://api.no-api-key.com/api/v2/kick?&kicked=$userAvatar[$mentioned[1]]&kicker=$userAvatar[$authorID]]`
});

bot.command({
  name: "meme",

  code: `

$title[MEME!]

$image[https://ctk-api.herokuapp.com/meme/$random[1;500]]`
});

bot.command({
 name:"clear",
aliases:['purge'],
 code:`
 $deleteIn[5s]
 $title[Deleted messages]
 $description[
Successfully deleted $message[1] messages]
$footer[By $username[$authorID]]
$color[RANDOM]
$addTimestamp

 $clear[$message[1]]
$onlyIf[$message[1]<=100;❌You cant delete more than 100 message at a time]
$onlyIf[$message[1]!=;❌Please select a channel to be your welcome channel]
$onlyIf[$hasPerms[$authorID;managemessages]==true;❌You don't have enough permissions to set the join channel required perm\` managemessages\`]`
})

bot.command({
 name: "serverinfo",
 aliases: ["serverprofile", "server"],
 code: `$title[$serverName[$guildID]'s Info]
$thumbnail[$serverIcon[$guildID]]
$description[**Name**
$serverName[$guildID]

**ID**
$guildID

**Owner**
<@$ownerID>

**Region**
$serverRegion

**Boosts**
$serverBoostCount

**Boost Level**
$serverBoostCount

**Boost Level**
$serverBoostLevel

**Verification Level**
$serverVerificationLevel

**Total Members**
$membersCount

**Creation Date**
$creationDate[$guildID]

**Emojis**
$serverEmojis]
$color[73C2FB]`
})

bot.status({
	text: 'MCRP SERVER',
	type: 'Watching',
	time: 12
})

bot.command({
	name: 'ticket-setup',
	code: `
 $awaitMessages[$authorID;30s;everything;tsp2;Command has been cancelled]
 $sendMessage[**Which Category Do you want to make For Ticket System.
 Provide the Category ID. 
 This Command will be cancelled after** \`30 seconds\`.;no]
 $onlyPerms[admin;You Dont Have Prem To Use this Command{delete:10s}]
 $suppressErrors[]`
});

bot.awaitedCommand({
	name: 'tsp2',
	code: `
**Successfully Setuped Ticket Channel!📫**
 $setServerVar[ticketchannel;$message]
 $onlyIf[$channelExists[$message]==true;Provided Category Doesn't Exist{delete:10s}]
 $onlyIf[$isNumber[$message]==true;Please provide Category ID{delete:10s}]`
});

bot.command({
	name: 'ticket',
	code: `
$newTicket[ticket-$username[$authorID];{title:Ticket opened!}{description:Hello, <@$authorID>. Here is your ticket!:tickets: Please give the information about your problem or feedback. 
}{footer:Use close to *close your ticket};$getServerVar[ticketchannel];no;<@$authorID>, I failed to create your ticket! Try again]
$sendMessage[Ticket Successfully opened! Hello, <@$authorID>. Go to **$toLowercase[#$username$discriminator]** to describe your issue!;Something went wrong]`
});

bot.command({
	name: 'close',
	code: `
$closeTicket[This is not a ticket]
$onlyIf[$checkContains[$channelName;ticket]==true;{description:This command can only be used in ticket channel!} {color:RED} {delete:10s}]
$suppressErrors`
});
