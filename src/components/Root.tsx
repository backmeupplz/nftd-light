import {
  classnames,
  container,
  margin,
  maxWidth,
  minHeight,
  padding,
} from 'classnames/tailwind'
import ChildrenProp from 'models/ChildrenProp'

const root = classnames(
  container('container'),
  margin('mx-auto'),
  padding('pb-10', 'pt-8', 'px-7', 'sm:px-28'),
  maxWidth('max-w-7xl'),
  minHeight('min-h-screen')
)
export default function ({ children }: ChildrenProp) {
  return <div className={root}>{children}</div>
}
