const dbd = require("dbd.js");

const bot = new dbd.Bot({
  token: "ODE3Njc3NDU0OTkzNzg0ODMy.YEM_eA.SAB28KVzJMArbnTScb-UupefBKw",

  prefix: "/"
});

bot.command({
  name: "<@792721010704252978",
  code: `$title[Bot Name]
$description[**Hi $username my prefix is** \`$getServerVar[prefix]\`
**You can type** \`$getServerVar[prefix]help\` **for more info**]
$color[RANDOM]`,
  nonPrefixed: true
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
  $title[AZIYO•ANNOUNCEMENT]
$description[$message]
$image[https://cdn.discordapp.com/attachments/783319872230129674/784371198188453909/Tw.gif]
$footer[AZIYO•Announced: $username]
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

bot.joinCommand({
        channel: "817640337399873536",
        code: `Hello And Welcome $username, To $serverName`
})
bot.onJoined()

bot.command({
 name: "modmail",
 code: `$color[RANDOM]
 $useChannel[818342046703157250]
$description[<@$authorID> $message]
$title[$username\`($authorID)\` sent modmail - to respond type <reply @user message>]
$addCmdReactions[:incoming_envelope:]
$cooldown[1m;:no_entry: Modmail is on cooldown. Please try again in 1 minutes]`
})

bot.command({
 name: "reply",
 code: `$title[Modmail Reply]
$dm[$mentioned[1]]
$color[RANDOM]
$description[You've received a new reply to your modmail.
$message]
$addCmdReactions[:package:]
$onlyPerms[admin;Only Users with \`ADMIN\` perms can use this]
$suppressErrors[Make sure to mention an user]`
})