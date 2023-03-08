import Loader from 'components/Loader'
import classnames, {
  borderRadius,
  height,
  inset,
  objectFit,
  overflow,
  position,
  width,
  zIndex,
} from 'classnames/tailwind'

const container = classnames(
  height('h-36'),
  width('w-36'),
  position('relative')
)
const loaderContainer = classnames(position('absolute'), inset('inset-0'))
const imageContainer = classnames(
  position('absolute'),
  inset('inset-0'),
  zIndex('z-10'),
  borderRadius('rounded-full'),
  overflow('overflow-hidden'),
  objectFit('object-cover')
)
export default function ({ url }: { url: string }) {
  return (
    <div className={container}>
      <div className={loaderContainer}>
        <Loader />
      </div>
      <div className={imageContainer}>
        <img src={url} alt="avatar" />
      </div>
    </div>
  )
}
