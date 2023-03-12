import {
  classnames,
  fontFamily,
  fontSize,
  fontWeight,
  textColor,
} from 'classnames/tailwind'
import ChildrenProp from 'models/ChildrenProp'

const ensText = classnames(
  fontFamily('font-ens'),
  fontWeight('font-extrabold'),
  fontSize('text-2xl'),
  textColor('text-white')
)
export function EnsText({ children }: ChildrenProp) {
  return <p className={ensText}>{children}</p>
}

const bodyText = classnames(
  fontFamily('font-sans'),
  fontWeight('font-light'),
  fontSize('text-base'),
  textColor('text-white')
)
export function BodyText({ children }: ChildrenProp) {
  return <p className={bodyText}>{children}</p>
}

const ogText = classnames(
  fontFamily('font-sans'),
  fontWeight('font-normal'),
  fontSize('text-xxs'),
  textColor('text-white')
)
export function OGText({ children }: ChildrenProp) {
  return <p className={ogText}>{children}</p>
}
