let handler = m => m.reply('*Adi�s*\n\n*Que descanses*')

handler.customPrefix = /Adi�s|Adios|adios/i
handler.command = new RegExp
handler.private = false
handler.group = true

module.exports = handler