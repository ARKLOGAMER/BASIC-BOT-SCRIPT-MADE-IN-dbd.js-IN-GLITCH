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
$image[https://cdn.discordapp.com/attachments/730005688952160286/767094036942815292/T90FP-pbar.gif]
$footer[KGOC • Announced: $username]
$addTimestamp
$thumbnail[$serverIcon]
$deletecommand
$onlyPerms[admin;only Admin Command if u use again u will kicked from server]`
})