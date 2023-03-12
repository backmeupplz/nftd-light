import { OGText } from 'components/Text'
import Loader from 'components/Loader'
import classnames, {
  alignItems,
  backgroundColor,
  borderRadius,
  display,
  height,
  inset,
  justifyContent,
  objectFit,
  padding,
  position,
  width,
  zIndex,
} from 'classnames/tailwind'

const container = classnames(
  height('h-36'),
  width('w-36'),
  position('relative'),
  padding('pb-2')
)
const loaderContainer = classnames(position('absolute'), inset('inset-0'))
const imageContainer = classnames(
  position('absolute'),
  inset('inset-0'),
  zIndex('z-10'),
  objectFit('object-cover')
)
const ogContainer = classnames(
  position('absolute'),
  inset('bottom-0', 'right-6'),
  width('w-6'),
  height('h-6'),
  borderRadius('rounded-full'),
  zIndex('z-30'),
  backgroundColor('bg-black'),
  display('flex'),
  justifyContent('justify-center'),
  alignItems('items-center')
)
export default function ({ url, isOG }: { url: string; isOG?: boolean }) {
  return (
    <div className={container}>
      <div className={loaderContainer}>
        <Loader />
      </div>
      <div className={`${imageContainer} mask mask-hexagon-2`}>
        <img src={url} alt="avatar" />
      </div>
      {isOG && (
        <div className={ogContainer}>
          <OGText>OG</OGText>
        </div>
      )}
    </div>
  )
}
