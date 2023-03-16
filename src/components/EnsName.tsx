import { BodyText } from 'components/Text'
import { useState } from 'preact/hooks'
import classnames, {
  alignItems,
  backgroundClip,
  backgroundColor,
  backgroundImage,
  borderRadius,
  display,
  flexDirection,
  fontSize,
  gradientColorStops,
  justifyContent,
  padding,
  textColor,
  transitionDuration,
  transitionProperty,
} from 'classnames/tailwind'

const borderContainer = classnames(
  transitionProperty('transition-all'),
  transitionDuration('duration-300'),
  padding('p-px'),
  backgroundColor('bg-transparent'),
  display('flex'),
  flexDirection('flex-col'),
  justifyContent('justify-center'),
  alignItems('items-stretch'),
  backgroundImage('hover:bg-gradient-to-r'),
  gradientColorStops('from-gradient-start', 'to-gradient-end'),
  borderRadius('rounded')
)
const container = classnames(
  display('flex'),
  flexDirection('flex-col'),
  justifyContent('justify-center'),
  alignItems('items-center'),
  padding('px-3', 'py-1'),
  backgroundColor('bg-ens-background'),
  borderRadius('rounded')
)
const text = classnames(
  textColor('text-transparent'),
  backgroundImage('bg-gradient-to-r'),
  gradientColorStops('from-gradient-start', 'to-gradient-end'),
  backgroundClip('bg-clip-text')
)
const verifiedEnsContainer = classnames(
  padding('px-3', 'py-2'),
  backgroundColor('bg-white'),
  fontSize('text-sm'),
  textColor('text-black'),
  borderRadius('rounded')
)
export default function ({ name }: { name: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <>
      <button
        className={borderContainer}
        onClick={() => {
          window.open(
            `https://etherscan.io/enslookup-search?search=${name}`,
            '_blank'
          )
        }}
        onMouseEnter={() => {
          setHovered(true)
        }}
        onMouseLeave={() => {
          setHovered(false)
        }}
      >
        <div className={container}>
          <BodyText>
            <span className={text}>{name}</span>
          </BodyText>
        </div>
      </button>
      {hovered && (
        <BodyText>
          <span className={verifiedEnsContainer}>Verified ENS</span>
        </BodyText>
      )}
    </>
  )
}
