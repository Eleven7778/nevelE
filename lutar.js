exports.run = (client, message, args) => {
let magico = message.mentions.users.first()

if(message.mentions.users.size < 1) return message.channel.send(`${client.emojis.get("526027609872662538")} \`${message.author.tag}\`, Você precisa mencionar alguém para lutar!`)

    message.channel.send(`\`${message.author.tag}\` desafiou \`${magico.tag}\` para uma batalha!`).then(msg=>{
    msg.react('526027976781987880').then(r=>{
})

    const batalhar = (reaction, user) => reaction.emoji.id === '526027976781987880' && user.id == magico.id;
    const batalha = msg.createReactionCollector(batalhar, { time: 30000 });

    batalha.on('collect', r => {
    message.channel.send(`\`${magico.tag}\` para atacar, digite \`atacar\`!`).then(msg1 => {
    var collector3 = message.channel.createMessageCollector(x => x.author.id == message.mentions.users.first().id, {
    time: 1000 * 20,
    max: 1
});
    collector3.on('collect', c => {
    mensagem = c.content;

    if (mensagem == "atacar") {
    var hp = 100;
    if(hp < 50) {
} else {
    var r2 = Math.floor(Math.random() * (50 - 0))
    hp -= r2
    message.channel.send(`\`${magico.tag}\`, Você atacou \`${message.author.tag}\` \`(${hp}%)\`!`)
}
message.channel.send(`\`${message.author.tag}\` para atacar, digite \`atacar\`!`).then(msg1 => {
var collector3 = message.channel.createMessageCollector(x => x.author.id == message.author.id, {
time: 1000 * 20,
max: 1
});
collector3.on('collect', c => {
mensagem = c.content;

if (mensagem == "atacar") {
var hp2 = 100;
if(hp2 < 50) {
} else {
var r = Math.floor(Math.random() * (50 - 0))
hp2 -= r
message.channel.send(`\`${message.author.tag}\` você contra-atacou \`${magico.tag}\` \`(${hp2}%)\``)
        }

        message.channel.send(`\`${magico.tag}\` para atacar, digite \`atacar\`!`).then(msg1 => {
        var collector3 = message.channel.createMessageCollector(x => x.author.id == message.mentions.users.first().id, {
        time: 1000 * 20,
        max: 1
    });
       collector3.on('collect', c => {
        mensagem = c.content;

        if (mensagem == "atacar") {
            var r = Math.floor(Math.random() * (100 - 50))
            hp -= r
            message.channel.send(`\`${magico.tag}\` você atacou \`${message.author.tag}\` \`(${hp}%)\``)
        if(hp <= 0) {
            message.channel.send(`\`${magico.tag}\` é o vencedor!`)
    } else {
        message.channel.send(`\`${message.author.tag}\` é o vencedor!`)
    }
}
})
})
}
                    });
                });
            } else {
        return;
    }
});
});
})
})
}
exports.help = {
    name: 'lutar'
}
