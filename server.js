const dbd = require("dbd.js");

const bot = new dbd.Bot({
  token: "BOT_TOKEN",

  prefix: "PREFIX"
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
  name: "apt",
  code: `
  $title[•ANNOUNCEMENT]
$description[$message]
$image[https://cdn.discordapp.com/attachments/783319872230129674/784371198188453909/Tw.gif]
$footer[• Announced: $username]
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