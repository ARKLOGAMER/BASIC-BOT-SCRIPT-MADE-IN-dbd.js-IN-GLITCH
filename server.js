const dbd = require("dbd.js")

 

const bot = new dbd.Bot({

token: "NzkyNzQ2ODU2NDM3OTA3NDU2.X-iNCw.S0M_tOEW2VadQcEfZ9AyuBDJXNw", 

prefix: "$getServerVar(prefix)"

})

 

bot.onMessage()

 

bot.command({

name: "ping", 

code: `Pong! \`$ping\` ms` 

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
    prefix: "!"
})