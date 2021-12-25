const vortex = require("aoi.js");

var fs = require("fs");

const bot = new vortex.Bot({
  token: process.env.token, //.env dosyasında token yazan variablenin değerine tokeninizi yazın

  prefix: "?",

  fetchInvites: true
});

bot.onBanAdd();
bot.onBanRemove();
bot.onMessageDelete();
bot.onMessageUpdate();
bot.onLeave();
bot.onJoined();
bot.onInviteCreate();
bot.onInviteDelete();
bot.onChannelCreate();
bot.onChannelDelete();
bot.onChannelUpdate();
bot.onRoleCreate();
bot.onRoleDelete();
bot.onRoleUpdate();

bot.onMessage();

var reader = fs.readdirSync("./komutlar/").filter(file => file.endsWith(".js"));

for (const file of reader) {
  const command = require(`./komutlar/${file}`);

  bot.command({
    name: command.name,

    code: command.code
  });
}

bot.command({
  name: "yardım",
  alises: "yardım",
  code: `
$color[RANDOM]
$description[
$title[Yardım Menüsü]

 __Bilgilendirme__
» | \`Bot Dili\` <:emoji_83:917308699524079637>  Türkçe 🇹🇷
» | \`Bot Kütüphanesi\` <:emoji_83:917308699524079637>  Aoi.js
» | \`Prefix\` <:emoji_83:917308699524079637>  ?

__Kategoriler__
» | \`$getServerVar[prefix]eğlence\` <:emoji_83:917308699524079637>  Eğlence Komutlarını Gösterir.
» | \`$getServerVar[prefix]ekonomi\` <:emoji_83:917308699524079637>  Ekonomi Komutlarını Gösterir.
» | \`$getServerVar[prefix]moderasyon\` <:emoji_83:917308699524079637> Moderasyon Komutlarını Gösterir.
» | \`$getServerVar[prefix]kullanıcı\` <:emoji_83:917308699524079637>  Kullanıcı Komutlarını Gösterir.
» | \`$getServerVar[prefix]müzik-sistemi\` <:emoji_83:917308699524079637>  Müzik Komutlarını Gösterir.
]
$thumbnail[$userAvatar[$clientID]]
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;**_\`$getGlobalUserVar[ksebep;$authorID]\`_ sebebinden karalistedesiniz.**] 
`
});

bot.variables({
  invite: "",
  gmesaj:
    "📥 -gçüye- sunucunuya katıldı onu -daveteden- davet etti toplam davet sayısı -davetsayısı-",
  çmesaj:
    "📤 -gçüye- sunucundan ayrıldı onu -daveteden- davet etti toplam davet sayısı -davetsayısı-",
  asaat: "0",
  param: "0",
  banka: "0",
  bilgisiyar: "0",
  telefon: "0",
  tablet: "0",
  cban: "",
  çıkışban: "0",
  status: "",
  oy: "0",
  sayıkanal: "",
  sayısayma: "0",
  popurlerlik: "0",
  tlog: "",
  asebep: "",
  asebeb: "",
  kengel: "kapalı",
  populerlik: "0",
  hgbb: "",
  color: "",
  karaliste: "hayır",
  klsebep: "Kara Listede Değilsin",
  ksebep: "",
  karaliste: "$authorID",
  afk: "",
  afkl: "",
  prefix: "?",
  saas: "no",
  mrol: "",
  modlog: "",
  arol: "",
  ayetkili: "",
  prefix: "?",
  otorol: "",
  otorollog: "",
  meslek: "Yok",
  maaş: "0",
  kl: ""
});

bot.readyCommand({
  channel: "922002749804118036",

  code: `

$author[⭐・Yeniden Aktifim;$userAvatar[$clientID]]

$description[

🟢・Tekrardan Aktifim:

🖥・Sunucu Sayım : \`$serverCount\`

✨・Kullanıcı Sayım : \`$allMembersCount\`

🌲・Komut Sayım : \`$commandsCount\`

🏛・Değişken Sayım : \`$variablesCount\` 

👑・Geliştircim : \`$userTag[$botOwnerID]\`

♾・Pingim : \`$ping\`]

$footer[;$userAvatar[$clientID]]

$thumbnail[$userAvatar[$clientID]]

$color[RANDOM]

`
});

bot.joinCommand({
  channel: "$getServerVar[hgbb]",
  code: `
$description[📥・[$userTag[$authorID]](https://discord.com/users/$authorID) Sunucumuza Hoşgeldin Kuralları Okumayı Unutma]
$footer[]
$thumbnail[$authorAvatar]
$color[RANDOM]
`
});

bot.leaveCommand({
  channel: "$getServerVar[hgbb]",
  code: `
$description[📤・[$userTag[$authorID]](https://discord.com/users/$authorID) Adlı Üye Ayrıldı Umarım Güzel Zaman Geçirmiştir]
$thumbnail[$authorAvatar]
$color[RANDOM] 
  `
});
bot.command({
  name: "davet",
  code: `
$description[
<:developer:909920582223687700> | Botumuzu Davet Etmek İçin : [Tıkla](https://discord.com/oauth2/authorize?client_id=908704907983482881&scope=bot+applications.commands&permissions=8)

<:developer:909920582223687700> | Destek Sunucumuza Gelmek İçin : [Tıkla](https://discord.gg/YSr5Wq86bW)

<:developer:909920582223687700> | Kurucum İle İletişime Geçmek İçin : [$userTag[754320168469135440]](https://discord.com/users/754320168469135440)
]
$color[RANDOM]
$thumbnail[$authorAvatar]
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;**_\`$getGlobalUserVar[ksebep;$authorID]\`_ sebebinden karalistedesiniz.**] 
    

`
});

bot.botJoinCommand({
  channel: "922002749804118036",

  code: `

$author[Bir Sunucuya Eklendim]

$description[

**🎉・Sunucu Adı : ** _\`$serverName\`_

**🎉・Sunucu ID : ** _\`$guildID\`_

**🎉・Üye Sayısı : ** _\`$membersCount\`_

**🎉・Davet Linki : ** **[TIKLA]($getServerInvite)**

]

$color[RANDOM]

`
});

bot.botLeaveCommand({
  channel: "922002749804118036",

  code: `

$author[Bir Sunucudan Atıldım]

$description[

**🎉・Sunucu Adı : ** _\`$serverName\`_

**🎉・Sunucu ID : ** _\`$guildID\`_

**🎉・Üye Sayısı : ** _\`$membersCount\`_

]

$color[RANDOM]

`
});

bot.command({
  name: "abone-rol",
  code: `
  $onlyIf[$checkContains[$message[1];ayarla;sıfırla]==true;<:emoji_71:917309220687314966> | <@$authorID> Ayarla ve ya sıfırla ile belirtmelisin]
  $onlyIf[$message!=;<:emoji_71:917309220687314966> | Ayarla ve ya sıfırla yazmalısın]
  $if[$message[1]==ayarla]
  <:emoji_70:917309183341236244> | <@$authorID> Abone rol $mentionedRoles[1] ID li rol olarak ayarlandı
  $setServerVar[aboner;$mentionedRoles[1]]
  $onlyIf[$mentionedRoles[1]!=;<:emoji_71:917309220687314966> | <@$authorID> Bir rol etiketlemelisin]
  $endif
  $if[$message[1]==sıfırla]
  <:emoji_70:917309183341236244> | Abone rol sıfırlandı
  $setServerVar[aboner;]
  $onlyIf[$getServerVar[aboner]!=;<:emoji_71:917309220687314966> | <@$authorID> Zaten ayarlanmamış]
  $endif
  $onlyBotPerms[manageroles;<:emoji_71:917309220687314966> | <@$authorID> Botun **Rolleri Yönet** yetkisi bulunmamakta]
  $onlyPerms[admin;<:emoji_71:917309220687314966> | <@$authorID> Bu komutu sadece **Yönetici** yetkisine sahip kişiler kullanabilir]
 $onlyIf[$getGlobalUserVar[kl;$authorID]!=true;**_\`$getGlobalUserVar[ksebep;$authorID]\`_ sebebinden karalistedesiniz.**] 
 `
});

bot.command({
  name: "abone",
  code: `
  $title[]
  $description[
  
 <:emoji_70:917309183341236244> | Abone Rolü Verilen = <@$mentioned[1]>

 <:emoji_70:917309183341236244> | Abone Rolü Veren = <@$authorID>
  ]
  $giveRole[$mentioned[1];$getServerVar[aboner]]
  $color[RANDOM]
  $argsCheck[>1;<:emoji_71:917309220687314966> | Birini etiketlemelisin]
  $onlyBotPerms[manageroles;<:emoji_71:917309220687314966> | Botun **Rolleri Yönet** İznine Sahip Olmam Gerek]
  $onlyPerms[managesrole;
  
  `
});

bot.command({
  name: "istatistik",
  code: `
$color[RANDOM]
$title[$userTag[$clientID] in İstatistikleri]
$description[
<:emoji_72:917309261661491241> | Bot Sahibi / Geliştirici
[$userTag[$botOwnerID]](https://discord.com/users/$botOwnerID)

<:emoji_72:917309261661491241> | Bot Verileri

<:developerr:910821172877344778>  | Sunucu Sayısı | $serverCount

<:developerr:910821172877344778> | Kullanıcı Sayısı | $allMembersCount

<:developerr:910821172877344778>  | Toplam Kanal Sayısı | $allChannelsCount

<:developerr:910821172877344778> | Kullanılan Ram | $ram

<:developerr:910821172877344778> | Kullanılan Cpu | $cpu

<:emoji_72:917309261661491241> | Gecikmeler

<:developerr:910821172877344778> | Bot Pingi | $botPing

<:developerr:910821172877344778> | Uptime Süresi | $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$parseDate[$djseval[client.uptime;yes];time];hours;saat;-1];minutes;dakika;-1];seconds;saniye;-1];hour;saat;-1];minute;dakika;-1];second;saniye;-1];and;ve;-1]

<:developerr:910821172877344778> | Database Ping | $dbPing

<:emoji_72:917309261661491241> | Linkler

<:developerr:910821172877344778> | Beni Davet İçin [Tıkla]($getBotInvite[admin])

<:developerr:910821172877344778> | Destek Sunucuma Gelmek İçin [Tıkla](https://discord.gg/HNsxyat5Fp)
]
$footer[Komut,$userTag[$authorID] Tarafından Kullanıldı $addTimestamp]
$thumbnail[$userAvatar[$clientID]]
`
});

bot.command({
  name: "test",
  code: `

$httpGet[https://api.soumalyaplayz.repl.co/fun/discord?userid=$mentioned[1;yes]]

$var[bannerLink;$httpResult[banner]]

 $onlyIf[$guildID!=; ]

$thumbnail[$userAvatar[$mentioned[1;yes]]]

$title[$username[$mentioned[1;yes]] Info!]

$addField[🏷️ **Tag**;$username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]]]

$addField[🆔 **Kullanıcı ID**;$userID[$username[$mentioned[1;yes]]]]

$addField[📮 **Discorda Katılma Tarihi**;$cretionDate[$mentioned[1;yes]]]

$addField[❔**Sunucuya Katılma Tarihi**;$memberJoinedDate[$mentioned[1;yes]]

]

$addField[💬 **En Düşuk Rolü Role**;<@&$lowestRole[$mentioned[1;yes]]>]

$addField[💬 Rolleri Role**;<@&$highestRole[$mentioned[1;yes]]>]

$addField[🤖 **Botmu**;$replaceText[$replaceText[$isBot[$mentioned[1;yes]];true;✅;1];false;❌;1]]

$if[$var[bannerLink]==https://cdn.icon-icons.com/icons2/317/PNG/512/sign-error-icon_34362.png]

$addField[**Banner**;❌]

$else

$addField[**Banner**;✅]

 $image[$var[bannerLink]]

$endif

$color[$getRoleColor[$highestRole[$mentioned[1;yes]]]]

$addTimestamp 
 $onlyForIDs[$botOwnerID;] 
  
  `
});
bot.variables({
  level: "0",
  talk: "0",
  req: "250 ",
  Rankcard: "0"
});
bot.variables({
kod:"0",
kodm:"0",
oy:"0",
}) 
