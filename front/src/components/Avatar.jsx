const getPercent = (percent, value) =>
  (value * percent) / 100

const colorTypes = new Map([
  ['r', 'rgb'],
  ['#', 'hex'],
  ['h', 'hsla']
])

const getColorType = color => colorTypes.get(color[0])
const getArrayValuesFromString = color =>
  color.replace(/\W/gi, '').split('')

const reverseHexShort = color =>
  color.reduce((acc, num) => {
    acc.push(num)
    acc.push(num)
    return acc
  }, [])

const transformHexValues = color =>
  color.reduce((acc, value, index) => {
    if (!(index % 2)) return acc

    const decimalValue =
      parseInt(`${color[index - 1]}${value}`, 16)

    return (acc.push(decimalValue), acc)
  }, [])

const convertColorHexToRGBArray = color => {
  let normalizedHexColor
  const hexColorArray = getArrayValuesFromString(color)

  if (hexColorArray.length <= 4) {
    normalizedHexColor = reverseHexShort(hexColorArray)
  }

  return transformHexValues(normalizedHexColor || hexColorArray)
}

const isOpacityTransparent = opacity => {
  if (!opacity) return false
  let opacityValue = opacity

  if (Math.floor(opacity) === 0) {
    opacityValue = Math.floor(opacity * 254)
  }

  return opacityValue > 70
}

const getContrastRatio = rgbColorArray => Math.round((
  (parseInt(rgbColorArray[0]) * 299) +
  (parseInt(rgbColorArray[1]) * 587) +
  (parseInt(rgbColorArray[2]) * 114)
) / 1000)

const getTextColor = color => {
  let rgbColorArray
  const colorType = getColorType(color)

  if (!colorType || colorType === 'hsla') {
    return 'black'
  }

  if (colorType === 'hex') {
    rgbColorArray = convertColorHexToRGBArray(color)
  }

  if (colorType === 'rgb') {
    rgbColorArray = color.replace(/((rgb|a)|(\(|\)))/g, '')
      .split(',')
      .map(str => +str.trim())
  }

  if (isOpacityTransparent(rgbColorArray[3])) {
    return 'black'
  }

  return (getContrastRatio(rgbColorArray) > 128) ? 'black' : 'white'
}

function stringToColor (string) {
  let hash = 0

  for (let i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash)
  }

  let color = '#'

  for (let i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff
    color += `00${value.toString(16)}`.slice(-2)
  }

  return color
}

function stringAvatar (name) {
  return `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`
}

export default function Avatar ({ children, sizeProp, className, ...props }) {
  const size = getPercent(48, sizeProp)
  const textColor = getTextColor(stringToColor(children))

  return (
    <svg height={sizeProp} width={sizeProp} className={className} {...props}>
      <circle cx={size} cy={size} r={size} fill={stringToColor(children)} />
      <text
        fontFamily='Arial, Helvetica, sans-serif'
        fontSize={size}
        textAnchor='middle'
        fill={textColor || props.textColor}
        x={size}
        y={getPercent(66, sizeProp)}
      >
        {stringAvatar(children)}
      </text>
    </svg>
  )
}
