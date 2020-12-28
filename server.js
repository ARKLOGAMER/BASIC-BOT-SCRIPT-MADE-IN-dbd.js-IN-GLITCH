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
code: `
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
module.exports = ({

name: "tti", 

code: 

$image[https://flamingtext.com/net-fu/proxy_form.cgi?script=water-logo&text=$message[1]+$message[2]+$message[3]+$message[4]+$message[5]+$message[6]+$message[7]+$message[8]+&_loc=generate&imageoutput=true]

$color[RANDOM]

`})
