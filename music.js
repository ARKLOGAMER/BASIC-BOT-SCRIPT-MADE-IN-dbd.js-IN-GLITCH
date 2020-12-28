MUSIC COMMANDS.
``
> play command

bot.command({
 name: "play",
 code: 
$playSong[$message;Error cannot be played at this moment!]
$onlyIf[$message!=;Type a valid song name!]
$onlyIf[$voiceID!=;You're not in a voice channel]
})

> skip song command.

bot.command({
 name: "skip",
 code: $skipSong
$onlyIf[$voiceID!=;You're not in a voice channel]
Skiped Playing: $songInfo[title]**
})

> Queue list command

bot.command({
 name: "queue",
 code: $description[$queue[1;10]]
$color[$random[1;9999]]
});


bot.command({
 name: "volume",
 code: 
$volume[$message[1]]
$descriptio


n[Set volume to $message[1]%]
$color[$random[1;9999]]
});```