require('http').createServer().listen(8000)
process.env.NODE_PATH = __dirname;
require('module').Module._initPaths();
const Discord=require("discord.js");
const fs=require("fs");
const client=new Discord.Client({fetchAllMembers: true})
const database=require('database.js')
const moment=require('moment')
moment.locale('pt-Br')
//
//
client.on("ready",()=>{console.log(`Logged into: ${client.user.username}\nWith id: ${client.user.id}\nWith ${client.users.size} users\nWith ${client.guilds.size} guilds!`)});
client.on("debug",debug=>{})
client.on("message",message=>{
    database.Users.findOne({ "_id":message.author.id },function(erro,docu){if(docu){
    database.Guilds.findOne({ "_id":message.guild.id },function(erro,doc){if(doc){
    let args = message.content.slice("ne.".length).split(/ +/g);
    if(!message.content.startsWith("ne.")) return;
    let commandsFiles = fs.readdirSync('./node_commands');
    let commands = commandsFiles.map(filename=>{
    let file = require(`./node_commands/${filename}`)
    return file.help
    })
    let check = client.users.get("501370728474476545")
    let commandName = args[0].toLowerCase();
    let command = commands.find(command=>command.name==commandName||(command.aliases&&command.aliases.includes(commandName)));
    if(!command)return;
    try{
    let commandFile = require(`./node_commands/${command.name}.js`);
    commandFile.run(client,message,args.slice(1),Discord,database,check);
    }catch(err){
    console.log("[HANDLER] "+err)}
} else if(message.content === "<@521788968170160128>") {
    var servidor = new database.Guilds({ _id: message.guild.id })
    servidor.save()
    message.channel.send(`${client.emojis.find(e => e.name === "checked1")} \`${message.author.tag}\`, Servidor registrado no Banco de Dados!\n${client.emojis.find(e => e.name === "hashtag1")} \`${message.guild.id}\``).then(msgg => msgg.delete(15000))
    }
})
} else if(message.content === "ne.") {
    var user = new database.Users({ _id: message.author.id })
    user.save()
    message.channel.send(`${client.emojis.find(e => e.name === "checked1")} \`${message.author.tag}\`, Você foi registrado no Banco de Dados!\n${client.emojis.find(e => e.name === "hashtag1")} \`${message.author.id}\``).then(msgg => msgg.delete(15000))
}
    })
})
//
fs.readdir("./node_commands/", (err, files) => {
    if(err)return console.log("[COMMANDS] "+err)
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if(jsfile.length <= 0){return;}});
