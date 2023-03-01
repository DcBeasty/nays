const Discord = require("discord.js");
exports.run = (client, message) => {
  const motionEmbed = new Discord.MessageEmbed()

    .setAuthor(`${client.user.username} `, client.user.avatarURL)
    .setColor("RED")
    .setImage("https://cdn.discordapp.com/attachments/834125768787099719/834162663993901126/standard.gif")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/790999702765961258/791775226186563635/6faf3b2ff385f75cc6b46e61e60c1979.gif"
    )
    .setDescription(
      `Toplamda Botta **${client.commands.size}** Adet Komut Bulunuyor!` +
        "\n\n `x!botbilgi`= **Yazarak Botun İstatistiklerine Ulaşa Bilirsiniz.** \n `x!davet`= **Yazarak Botun Davet Linkini Alırsınız. \n `x!oyver`= Botumuza Oy verebilirsin**"
    )
    .addField(
      ` <a:da3cbe2e93ef42258d4d24711e6a5c51:788743846246088714> Komutlar`,
      `
 
 | **x!eğlence:** Eğlence Menüsüne Bakarsınız.
 | **x!moderasyon:** Botun Moderasyon Komutlarına Bakarsınız.
 | **x!kullanıcı:** Kullanıcı komutlarını görürsünüz.
 | **x!logomenü:** Botun Logo Yapma Komutlarına Bakarsınız.
 | **x!abonerolsistemi:** Ayarlanabilir abone rol sistemi 
 | **x!website:** Botumun Web Sİtesine Ulaşabilirsiniz.  

`)



    .addField(
      ` <a:da3cbe2e93ef42258d4d24711e6a5c51:788743846246088714>  Bilgilendirme`,
      `
 | **Nays Bot Her Gün Güncelleniyor!**.
 | **Botu Ekleyerek Bize Destek Çıkmış Olursunuz.** `
    )
  
  .addField(
      `** <a:da3cbe2e93ef42258d4d24711e6a5c51:788743846246088714> Bağlantılar  **`,
      `>  » [Destek Sunucusu](https://discord.gg/5Qsx29Q5VT) \n >  » [Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=1054403989640314952&permissions=8&scope=bot) \n > » [Oy Verebilirsiniz](yok) `
    )
    .setFooter(
      `
${message.author.username} Tarafından İstendi.`,
      message.author.avatarURL
    );
  return message.channel.send(motionEmbed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["h"],
  permLevel: 0
};


exports.help = {
  name: "yardım",
  description: ".",
  usage: "yardım"
};
