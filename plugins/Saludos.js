let handler = m => m.reply('*Holaque tal como va tu dia ??*\n\n*Que tengas un exelente dia,tarde o noche... y si vas a dormir descansa ma�ana es un nuevo inicio*')

handler.customPrefix = /d�as|dias|tardes|Tardes|Dias|D�as||dia|Dia|D�a|Noches|noches/i
handler.command = new RegExp
handler.private = false

module.exports = handler