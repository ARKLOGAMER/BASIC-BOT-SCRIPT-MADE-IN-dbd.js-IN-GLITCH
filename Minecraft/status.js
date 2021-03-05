module.exports = ({
 name: "mcserver",
 code:   `
$title[**SERVER INFO**]
$description[$djsEval[
const util = require('minecraft-server-util');
const Discord = require('discord.js');
const client = new Discord.Client();
client.login('NzkyNzIxMDEwNzA0MjUyOTc4.X-h0-A.BJ0bEctIhdlKdPGxVtG-dsdXqVo');

// IMPORTANT: You need to run "npm i minecraft-server-util@^3.0.1 discord.js@^12.3.1" (without quotes) in your terminal before executing this script

const server = {
 ip: '51.91.61.56', // Put your minecraft server IP or hostname here (e.g. '192.168.0.1')
 port: 40370 // Put your minecraft server port here (25565 is the default)
};
const commands = {
 status: {
 command: '.status',
 text: {
 error: 'Error getting Minecraft server status...', // Check your terminal when you see this
 online: '**Minecraft** server is **online** - ',
 players: '**{online}** people are playing!', // {online} will show player count
 noPlayers: '**Nobody is playing**'
 }
 
 },
 ip: {
 command: '.ip',
 text: {
 main: 'The IP for the server is {ip}:{port}// {ip} and {port} will show server ip and port from above
 }
 }
};)
$footer[MC SERVER STATS]`
})