const dbd = require("dbd.js")

 

const bot = new dbd.Bot({

token: "NzkyNzIxMDEwNzA0MjUyOTc4.X-h0-A.BJ0bEctIhdlKdPGxVtG-dsdXqVo",

prefix: "$getServerVar[prefix]"

})
 

bot.onMessage()

 

bot.command({

name: "ping", 

code: `Pong! \`$ping\` ms`
  })

bot.command({
name: "say",
code:  `
$message
$botTyping
$deletecommand`
})



bot.command({
name: "setprefix",
aliases: ['changeprefix', 'prefix'],
code: `$author[Success;https://cdn.discordapp.com/attachments/760236507310850102/780441559468474408/6286_tada_animated.gif]
$description[**Done, my new prefix is** \`$message\`]
$color[RANDOM]
$setServerVar[prefix;$message]
$onlyIf[$message[1]!=;**You have to put a prefix, example** \`$getServerVar[prefix]setprefix /\`]
$onlyPerms[admin;$customEmoji[Rufy] **You dont have** \`ADMIN\` **perms**]`
})
 
bot.variables({
    prefix: "-"
})

bot.command({

  name: "trump",

 code:  `

$onlyIf[$message!=;Type something!]

 

$color[$random[111111;999999]]

$image[https://api.no-api-key.com/api/v2/trump?message=$replaceText[$message; ;+;-1]]`

});

bot.command({
name: "apt",
code:  `
  $title[KGOC•ANNOUNCEMENT]
$description[$message]
$image[https://cdn.discordapp.com/attachments/783319872230129674/784371198188453909/Tw.gif]
$footer[KGOC • Announced: $username]
$addTimestamp
$thumbnail[$serverIcon]
$deletecommand
$onlyPerms[admin;only Admin Command if u use again u will kicked from server]`
})

bot.command({
 name: "play",
 code:   `
$playSong[$message;Error cannot be played at this moment!]
$onlyIf[$message!=;Type a valid song name!]
$onlyIf[$voiceID!=;You're not in a voice channel]`
})

bot.command({

 name: "skip",

 code:   `

$skipSong

$onlyIf[$voiceID!=;You're not in a voice channel]

Skiped Playing: $songInfo[title]**`

})

bot.command({

 name: "queue",

 code:   `

$description[$queue[1;10]]

$color[$random[1;9999]]`

});

bot.command({

 name: "volume",

 code:   `

$volume[$message[1]]

$description[Set volume to $message[1]%]

$color[$random[1;9999]]`

});

module.exports = ({

name: "tti", 

code:  `

$image[https://flamingtext.com/net-fu/proxy_form.cgi?script=water-logo&text=$message[1]+$message[2]+$message[3]+$message[4]+$message[5]+$message[6]+$message[7]+$message[8]+&_loc=generate&imageoutput=true]

$color[RANDOM]`
})
