let imageToBase64 = require('image-to-base64');
let axios = require("axios");
let handler = async(m, { conn, text }) => {
  await m.reply('_*Espera estoy buscando...🔎*_')
let str = `
TOBAT BODO
`.trim()

    axios.get('http://api-melodicxt-2.herokuapp.com/api/random/hentai?apiKey=APIKEY')
    .then((res) => {
      imageToBase64(res.data.result.result)
        .then(
          (ress) => {
            let buf = Buffer.from(ress, 'base64')

     conn.sendFile(m.chat, buf, 'foto.jpg', str, m)
        })
    })
}
handler.help = ['hentai']
handler.tags = ['tools']
handler.command = /^(hentai)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = true
handler.registrar = true

handler.admin = true
handler.botAdmin = false

handler.fail = null
handler.limit = 10

module.exports = handler
