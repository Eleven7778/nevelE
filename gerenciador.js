const Discord = require("discord.js")
const database = require("database.js")
exports.run = (client, message, args) => {
let user = message.mentions.members.first(),
    author = message.author
database.Users.findOne({
    '_id': user.id
}, function(erro, usuario){
database.Users.findOne({
     '_id':message.author.id 
}, function(err, user){
    if(usuario){
    if(user){
        let member = usuario.membro,
            sup = usuario.sup,
            dev = usuario.dev,
            ow = usuario.owner,
            badge;
        if(member){
            badge = client.emojis.find(e => e.name === "member") + " **Membro**"
        }
        if(sup){
            badge = client.emojis.find(e => e.name === "sup") + " **Supervisor**"
        }
        if(dev){
            badge = client.emojis.find(e => e.name === "dev") + " **Developer**"
        }
        if(ow){
            badge = client.emojis.find(e => e.name === "owner") + " **Owner**"
        }
        let embed = new Discord.RichEmbed()
        .setDescription(`🚓 **Gerenciador**\n\n${client.emojis.find(e => e.name === "member")} - **Membro**\n${client.emojis.find(e => e.name === "sup")} - **Supervisor**\n${client.emojis.find(e => e.name === "dev")} - **Developer**\n${client.emojis.find(e => e.name === "owner")} - **Owner**\n\n${client.emojis.find(e => e.name === "hashtag1")} Tag atual: ${badge}`)
        message.channel.send(embed).then(msg => {
            msg.react(client.emojis.find(e => e.name === "member")).then(r => {
                msg.react(client.emojis.find(e => e.name === "sup")).then(r => {
                    msg.react(client.emojis.find(e => e.name === "dev")).then(r => {
                        msg.react(client.emojis.find(e => e.name === "owner"))
                    })
                })
            })
            const member = msg.createReactionCollector((r, u) => r.emoji.name === client.emojis.find(e => e.name === "member").name && u.id === message.author.id, { time: 30000 });
            const sup = msg.createReactionCollector((r, u) => r.emoji.name === client.emojis.find(e => e.name === "sup").name && u.id === message.author.id, { time: 30000 });
            const dev = msg.createReactionCollector((r, u) => r.emoji.name === client.emojis.find(e => e.name === "dev").name && u.id === message.author.id, { time: 30000 });
            const owner = msg.createReactionCollector((r, u) => r.emoji.name === client.emojis.find(e => e.name === "owner").name && u.id === message.author.id, { time: 30000 });
            member.on("collect", (r) => {
                message.channel.send(`${client.emojis.find(e => e.name === "member")} Cargo do usuário ${message.mentions.members.first()} alterado para **Membro**!`)
                msg.delete()
                usuario.membro = true
                usuario.dev = false
                usuario.sup = false
                usuario.owner = false
                usuario.save()
            })
            sup.on("collect", (r) => {
                message.channel.send(`${client.emojis.find(e => e.name === "sup")} Cargo do usuário ${message.mentions.members.first()} alterado para **Supervisor**!`)
                msg.delete()
                usuario.membro = false
                usuario.dev = false
                usuario.supe = true
                usuario.owner = false
                usuario.save()
            })
            dev.on("collect", (r) => {
                message.channel.send(`${client.emojis.find(e => e.name === "dev")} Cargo do usuário ${message.mentions.members.first()} alterado para **Developer**!`)
                msg.delete()
                usuario.membro = false
                usuario.dev = true
                usuario.sup = false
                usuario.owner = false
                usuario.save()
            })
            owner.on("collect", (r) => {
                message.channel.send(`${client.emojis.find(e => e.name === "owner")} Cargo do usuário ${message.mentions.members.first()} alterado para **Owner**!`)
                msg.delete()
                usuario.membro = false
                usuario.dev = false
                usuario.sup = false
                usuario.owner = true
                usuario.save()
            })
        })
    } else {
        message.channel.send(`${client.emojis.find(e => e.name === "cancel2")} \`${author.tag}\`, Você não está registrado no Banco de Dados!\n#⃣ Digite \`ne.\` para se registrar!`)
    }
} else {
    message.channel.send(`${client.emojis.find(e => e.name === "cancel2")} \`${author.tag}\`, O usuário ${message.mentions.members.first()} não está registrado no Banco de Dados!`)
}
})
})
}
exports.help = {
    name: 'gerenciador',
    aliases: ["gerenciar"]
}
