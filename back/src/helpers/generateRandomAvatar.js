const COLORS_AVATAR = [
  '264653,2a9d8f,e9c46a',
  '331327,991766,D90F5A,F34739,FF6E27',
  '04394E,00875E,A7CC15,F5CC17,F56217',
  '031C30,5A3546,B5485F,FC6747,FA8D3B'
]

function generateColorRandom () {
  const position = Math.floor(Math.random() * COLORS_AVATAR.length)
  return COLORS_AVATAR[position]
}

function generateRandomAvatar (name) {
  return `https://source.boringavatars.com/bauhaus/120/${name}?colors=${generateColorRandom()}`
}

export default generateRandomAvatar
