let handler = m => m.reply('*Hola que tal como te fue ??*\n\n* espero hayas tenido un exelente d�a descansa ma�ana es un nuevo inicio *')

handler.customPrefix = /Hasta ma�ana|hasta ma�ana|Hasta Ma�ana/i
handler.command = new RegExp
handler.private = false

module.exports = handler