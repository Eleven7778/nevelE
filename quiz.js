const Discord = require("discord.js")
const quiz = require("../events/quiz.js")
exports.run = async (client, message) => {
    let item = quiz.questions[Math.floor(Math.random() * quiz.questions.length)]
    if(!message.guild.member(client.user.id).hasPermission("MANAGE_MESSAGES")) 
    return message.channel.send(`❌ **${message.author.tag}**, Eu não tenho a permissão **MANAGE_MESSAGES** para retirar reações!`)
    let pergunta = new Discord.RichEmbed()
    .setColor("36393e")
    .setDescription(`${client.emojis.find(e => e.name === "lucky")} ${item.q}\n\n${client.emojis.find(e => e.name === "one")} ${item.a}\n${client.emojis.find(e => e.name === "two")} ${item.b}\n${client.emojis.find(e => e.name === "three")} ${item.c}\n${client.emojis.find(e => e.name === "four")} ${item.d}\n${client.emojis.find(e => e.name === "five")} ${item.e}`)
    message.channel.send(pergunta).then(msg => {
        msg.react(client.emojis.find(e => e.name === "one").id).then(r2 => {
            msg.react(client.emojis.find(e => e.name === "two").id).then(r3 => {
                msg.react(client.emojis.find(e => e.name === "three").id).then(r4 => {
                    msg.react(client.emojis.find(e => e.name === "four").id).then(r5 => {
                        msg.react(client.emojis.find(e => e.name === "five").id)
                    })})})})
    const one = msg.createReactionCollector((r, u) => r.emoji.name === client.emojis.find(e => e.name === "one").name && u.id === message.author.id, { time: 30000 });
    const two = msg.createReactionCollector((r, u) => r.emoji.name === client.emojis.find(e => e.name === "two").name && u.id === message.author.id, { time: 30000 });
    const three = msg.createReactionCollector((r, u) => r.emoji.name === client.emojis.find(e => e.name === "three").name && u.id === message.author.id, { time: 30000 });
    const four = msg.createReactionCollector((r, u) => r.emoji.name === client.emojis.find(e => e.name === "four").name && u.id === message.author.id, { time: 30000 });
    const five = msg.createReactionCollector((r, u) => r.emoji.name === client.emojis.find(e => e.name === "five").name && u.id === message.author.id, { time: 30000 });
    setTimeout(() => {
        msg.delete()
    }, 30000)
    one.on("collect", (r,m) => {
        setTimeout(() => {
            msg.clearReactions()
            let calc = new Discord.RichEmbed()
            .setColor("36393e")
            .setDescription(`${client.emojis.find(e => e.name === "carregando3")} Calculando seu resultado...\n<:magic:522389584655548417> Resposta: ${client.emojis.find(e => e.name === "one")}`)
            msg.edit(calc)
        }, 1)
        setTimeout(() => {
            msg.delete()
        }, 3000)
        if(item.rc === "a"){
            setTimeout(() => {
                message.channel.send(`${client.emojis.find(e => e.name === "checked1")} Resposta correta!`).then(msgg => msgg.delete(5000)).then(msgg => msgg.delete(5000))
            }, 3000)
        } else {
            setTimeout(() => {
                message.channel.send(`${client.emojis.find(e => e.name === "cancel2")} Resposta errada!`).then(msgg => msgg.delete(5000))
            }, 3000)
        }
    one.stop()
    })
    two.on("collect", (r,m) => {
        setTimeout(() => {
            msg.clearReactions()
            let calc = new Discord.RichEmbed()
            .setColor("36393e")
            .setDescription(`${client.emojis.find(e => e.name === "carregando3")} Calculando seu resultado...\n<:magic:522389584655548417> Resposta: ${client.emojis.find(e => e.name === "two")}`)
            msg.edit(calc)
        }, 1)
        setTimeout(() => {
            msg.delete()
        }, 3000)
        if(item.rc === "b"){
            setTimeout(() => {
                message.channel.send(`${client.emojis.find(e => e.name === "checked1")} Resposta correta!`).then(msgg => msgg.delete(5000))
            }, 3000)
        } else {
            setTimeout(() => {
                message.channel.send(`${client.emojis.find(e => e.name === "cancel2")} Resposta errada!`).then(msgg => msgg.delete(5000)).then(msgg => msgg.delete(5000))
            }, 3000)
        }
    two.stop()
    })
    three.on("collect", (r,m) => {
        setTimeout(() => {
            msg.clearReactions()
            let calc = new Discord.RichEmbed()
            .setColor("36393e")
            .setDescription(`${client.emojis.find(e => e.name === "carregando3")} Calculando seu resultado...\n<:magic:522389584655548417> Resposta: ${client.emojis.find(e => e.name === "three")}`)
            msg.edit(calc)
        }, 1)
        setTimeout(() => {
            msg.delete()
        }, 3000)
        if(item.rc === "c"){
            setTimeout(() => {
                message.channel.send(`${client.emojis.find(e => e.name === "checked1")} Resposta correta!`).then(msgg => msgg.delete(5000))
            }, 3000)
        } else {
            setTimeout(() => {
                message.channel.send(`${client.emojis.find(e => e.name === "cancel2")} Resposta errada!`).then(msgg => msgg.delete(5000))
            }, 3000)
        }
    three.stop()
    })
    four.on("collect", (r,m) => {
        setTimeout(() => {
            msg.clearReactions()
            let calc = new Discord.RichEmbed()
            .setColor("36393e")
            .setDescription(`${client.emojis.find(e => e.name === "carregando3")} Calculando seu resultado...\n<:magic:522389584655548417> Resposta: ${client.emojis.find(e => e.name === "four")}`)
            msg.edit(calc)
        }, 1)
        setTimeout(() => {
            msg.delete()
        }, 3000)
        if(item.rc === "d"){
            setTimeout(() => {
                message.channel.send(`${client.emojis.find(e => e.name === "checked1")} Resposta correta!`).then(msgg => msgg.delete(5000))
            }, 3000)
        } else {
            setTimeout(() => {
                message.channel.send(`${client.emojis.find(e => e.name === "cancel2")} Resposta errada!`).then(msgg => msgg.delete(5000))
            }, 3000)
        }
    four.stop()
    })
    five.on("collect", (r,m) => {
        setTimeout(() => {
            msg.clearReactions()
            let calc = new Discord.RichEmbed()
            .setColor("36393e")
            .setDescription(`${client.emojis.find(e => e.name === "carregando3")} Calculando seu resultado...\n<:magic:522389584655548417> Resposta: ${client.emojis.find(e => e.name === "five")}`)
            msg.edit(calc)
        }, 1)
        setTimeout(() => {
            msg.delete()
        }, 3000)
        if(item.rc === "e"){
            setTimeout(() => {
                message.channel.send(`${client.emojis.find(e => e.name === "checked1")} Resposta correta!`).then(msgg => msgg.delete(5000))
            }, 3000)
        } else {
            setTimeout(() => {
                message.channel.send(`${client.emojis.find(e => e.name === "cancel2")} Resposta errada!`).then(msgg => msgg.delete(5000))
            }, 3000)
        }
    five.stop()
    })
})
    }
exports.help = {
    name: 'quiz'
}
