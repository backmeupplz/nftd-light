import { BodyText } from 'components/Text'
import classnames, {
  alignItems,
  borderColor,
  borderWidth,
  display,
  justifyContent,
  padding,
} from 'classnames/tailwind'

const buttonContainer = classnames(
  display('flex'),
  justifyContent('justify-center'),
  alignItems('items-center'),
  borderWidth('border'),
  borderColor('border-white'),
  padding('py-8', 'lg:px-40')
)
export default function ({ title, url }: { title: string; url: string }) {
  return (
    <button
      className={buttonContainer}
      onClick={() => {
        window.open(url, '_blank')
      }}
    >
      <BodyText>{title}</BodyText>
    </button>
  )
}
