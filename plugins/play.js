let limit = 30
let yts = require('yt-search')
let fetch = require('node-fetch')
const { servers, yta, ytv } = require('../lib/y2mate')
let handler = async (m, { conn, command, text, isPrems, isOwner }) => {
  if (!text) throw 'Que estas buscando ?'
  let results = await yts(text)
  let vid = results.all.find(video => video.seconds < 3600)
  if (!vid) throw 'Video/Audio No encontrado '
  {await m.reply('⏳Procesando⏳')}
  let isVideo = /2$/.test(command)
  let { dl_link, thumb, title, filesize, filesizeF} = await (isVideo ? ytv : yta)(vid.url, 'id4')
  let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
  conn.sendFile(m.chat, thumb, 'thumbnail.jpg', `
*🔥Título:* ${title}
*📂Tamaño del archivo:* ${filesizeF}
`.trim(), m)
  let _thumb = {}
  try { if (isVideo) _thumb = { thumbnail: await (await fetch(thumb)).buffer() } }
  catch (e) { }
  if (!isLimit) conn.sendFile(m.chat, dl_link, title + '.mp' + (3 + /2$/.test(command)), `
*🔥Título:* ${title}
*📂Tamaño del archivo:* ${filesizeF}
`.trim(), m, false, _thumb || {})
  {
      conn.sendFile(m.chat, 'resultado1.mp3', '', 'xd', m)
}
}
handler.help = ['play', 'play2'].map(v => v + ' <canción >')
handler.tags = ['downloader']
handler.command = /^play2?$/i
handler.group = true

handler.exp = 0
handler.registrar = true
handler.limit = true

module.exports = handler
