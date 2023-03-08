import {
  animation,
  backgroundImage,
  borderRadius,
  classnames,
  gradientColorStops,
  height,
  width,
} from 'classnames/tailwind'

const loader = classnames(
  animation('animate-pulse'),
  borderRadius('rounded-full'),
  backgroundImage('bg-gradient-to-br'),
  gradientColorStops('from-gray-800', 'to-gray-600'),
  height('h-full'),
  width('w-full')
)
export default function () {
  return <div className={loader} />
}
