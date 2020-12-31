const dbd = require("dbd.js");

const bot = new dbd.Bot({
  token: "NzkyNzIxMDEwNzA0MjUyOTc4.X-h0-A.BJ0bEctIhdlKdPGxVtG-dsdXqVo",

  prefix: "$getServerVar[prefix]"
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

**You can type** \`$getServerVar[prefix]help\` **for more info**]

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
  name: "setprefix",
  aliases: ["changeprefix", "prefix"],
  code: `$author[Success;https://cdn.discordapp.com/attachments/760236507310850102/780441559468474408/6286_tada_animated.gif]
$description[**Done, my new prefix is** \`$message\`]
$color[RANDOM]
$setServerVar[prefix;$message]
$onlyIf[$message[1]!=;**You have to put a prefix, example** \`$getServerVar[prefix]setprefix /\`]
$onlyPerms[admin;$customEmoji[Rufy] **You dont have** \`ADMIN\` **perms**]`
});

bot.variables({
  prefix: "-"
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
  $title[KGOC•ANNOUNCEMENT]
$description[$message]
$image[https://cdn.discordapp.com/attachments/783319872230129674/784371198188453909/Tw.gif]
$footer[KGOC • Announced: $username]
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
 name: "setjoinchannel",
 
 code:  `
$setServerVar[joinchannel;$mentionedChannels[1]]
Set Server Joinchannel To <#$mentionedChannels[1]>
$argsCheck[>1;Please Mention A Channel That you want it as Join Channel]
$onlyPerms[manageserver;You need manage server permission]`
 })

bot.command({
 name: "setleavechannel",
 code:   `
$setServerVar[leavechannel;$mentionedChannels[1]]
Successfully Set Server Leave Channel To <#$mentionedChannels[1]>
$argsCheck[>1;Please Mention A Channel That You Want It As Leave Channel]
$onlyPerms[manageserver;You need manage server permission!]`
 });


bot.command({
 name: "setleavemessage",
 code:   `
$setServerVar[leavemessage;$message]
Set Server Leave Message To $message
$onlyIf[$getServerVar[leavechannel]!=;This Server Has No Join Leave! Set it by $getServerVar[prefix]setleavemessage
(channel)]
$onlyPerms[manageserver;You need manage server permission]`
 });

bot.command({
 name: "setjoinmessage",
 
 code:   `
$setServerVar[joinmessage;$message]
Set Server Join Message To $message
$onlyIf[$getServerVar[joinchannel]!=;This et Server Join Message To $message
$onlyIf[$getServerVar[joinchannel]!=;This Server Has No Join Channel! Set it by $getServerVar[prefix]setjoinchannel (channel)]Server Has No Join Channel! Set it by $getServerVar[prefix]setjoinchannel (channel)]
$argsCheck[>1;Please Give Me The Message You Wanna Set!]
$onlyPerms[manageserver;You need manage server permission]`
 })

bot.onLeave();
bot.leaveCommand({
 channel: "$replaceText[$replaceText[$checkCondition[$getServerVar[leavechannel]==];true;$randomChannelID];false;$getServerVar[leavechannel]]",

 code:   `
$replaceText[$replaceText[$getServerVar[leavemessage];(user.username);$username[$authorID]];(guild.name);$serverName]

$onlyIf[$getServerVar[leavemessage]!=;]
$onlyIf[$getServerVar[leavechannel]!=;]


$onlyIf[$getServerVar[leavechannel]==$channelID;]`






 });
bot.onJoined();
bot.joinCommand({
 channel: "$replaceText[$replaceText[$checkCondition[$getServerVar[joinchannel]==];true;$randomChannelID];false;$getServerVar[joinchannel]]",

 code:   `

$replaceText[$replaceText[$replaceText[$getServerVar[joinmessage];(user.mention);<@$authorID>];(guild.name);$serverName];(user.username);$username[$authorID]]

$onlyIf[$getServerVar[joinmessage]!=;]
$onlyIf[$getServerVar[joinchannel]!=;]


$onlyIf[$getServerVar[joinchannel]==$channelID;]`


 })