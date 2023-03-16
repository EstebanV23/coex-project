function stringToColor (string) {
  let hash = 0

  /* eslint-disable no-bitwise */
  for (let i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash)
  }

  let color = '#'

  for (let i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff
    color += `00${value.toString(16)}`.slice(-2)
  }
  /* eslint-enable no-bitwise */

  return color
}

function stringAvatar (name) {
  return `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`
}

export default function MyAvatar ({ fullName, size, ...props }) {
  return (
    <div {...props} className={`${props.className} flex items-center justify-center rounded-full w-fit p-1 aspect-square`} style={{ backgroundColor: stringToColor(fullName) }}>
      {stringAvatar(fullName)}
    </div>
  )
}
