import { CheckBadgeIcon } from '@heroicons/react/24/solid'
import classnames, {
  alignItems,
  backgroundClip,
  backgroundColor,
  backgroundImage,
  display,
  flexDirection,
  fontFamily,
  fontSize,
  fontWeight,
  gradientColorStops,
  height,
  inset,
  justifyContent,
  padding,
  position,
  textColor,
  transitionDuration,
  transitionProperty,
  translate,
  width,
} from 'classnames/tailwind'

const borderContainer = classnames(
  transitionProperty('transition-all'),
  transitionDuration('duration-300'),
  translate('hover:translate-x-6'),
  padding('p-0.5'),
  backgroundColor('bg-white'),
  display('flex'),
  flexDirection('flex-col'),
  justifyContent('justify-center'),
  alignItems('items-stretch'),
  backgroundImage('hover:bg-gradient-to-r'),
  gradientColorStops('from-gradient-start', 'to-gradient-end')
)
const blackContainer = classnames(
  backgroundColor('bg-black'),
  display('flex'),
  flexDirection('flex-col'),
  justifyContent('justify-center'),
  alignItems('items-stretch'),
  position('relative')
)
const buttonContainer = classnames(
  display('flex'),
  justifyContent('justify-center'),
  alignItems('items-center'),
  padding('py-8', 'lg:px-40'),
  backgroundColor('bg-black'),
  textColor('text-white', 'hover:text-transparent'),
  backgroundImage('hover:bg-gradient-to-r'),
  gradientColorStops('hover:from-gradient-start', 'hover:to-gradient-end'),
  backgroundClip('hover:bg-clip-text'),
  fontFamily('font-sans'),
  fontWeight('font-normal'),
  fontSize('text-base')
)
const badge = classnames(
  height('h-6'),
  width('w-6'),
  position('absolute'),
  inset('top-2', 'right-2'),
  textColor('text-white')
)
export default function ({
  title,
  url,
  verified,
}: {
  title: string
  url: string
  verified: boolean
}) {
  return (
    <div className={borderContainer}>
      <div className={blackContainer}>
        <button
          className={buttonContainer}
          onClick={() => {
            window.open(url, '_blank')
          }}
        >
          {title}
        </button>
        {verified && <CheckBadgeIcon className={badge} />}
      </div>
    </div>
  )
}
