import { BodyText, DisplayText } from 'components/Text'
import { proxy, useSnapshot } from 'valtio'
import { useEffect } from 'preact/hooks'
import Avatar from 'components/Avatar'
import Button from 'components/Button'
import EnsName from 'components/EnsName'
import SuspenseWithError from 'components/SuspenseWithError'
import UserProfile from 'models/UserProfile'
import classnames, {
  alignItems,
  display,
  flexDirection,
  gap,
  justifyContent,
  width,
} from 'classnames/tailwind'
import getUserProfile from 'helpers/getUserProfile'

const state = proxy<{
  user: Promise<UserProfile> | undefined
}>({ user: undefined })

const container = classnames(
  display('flex'),
  flexDirection('flex-col', 'lg:flex-row'),
  justifyContent('justify-center'),
  alignItems('items-stretch'),
  gap('gap-10', 'lg:gap-32')
)
const bioCol = classnames(
  display('flex'),
  flexDirection('flex-col'),
  justifyContent('justify-center'),
  alignItems('items-start'),
  gap('gap-4')
)
const socialContainer = classnames(
  display('flex'),
  flexDirection('flex-row'),
  gap('gap-2.5'),
  justifyContent('justify-start'),
  alignItems('items-center')
)
const buttonsCol = classnames(
  display('flex'),
  flexDirection('flex-col'),
  justifyContent('justify-center'),
  alignItems('items-stretch'),
  gap('gap-4'),
  width('lg:w-2/3')
)
function ProfileSuspended() {
  const { user } = useSnapshot(state)
  if (!user) return null
  return (
    <div className={container}>
      <div className={bioCol}>
        <Avatar url={user.avatar} isOG={user.isOG} />
        <DisplayText>{user.displayName}</DisplayText>
        {user.ensData?.[0]?.name && (
          <div className={socialContainer}>
            <EnsName name={user.ensData[0].name} />
          </div>
        )}
        <BodyText>{user.bio}</BodyText>
      </div>
      <div className={buttonsCol}>
        {user.all_links.map((link, i) => (
          <Button
            key={i}
            title={link.label}
            url={link.url}
            verified={link.verified === true}
          />
        ))}
      </div>
    </div>
  )
}

export default function ({ username }: { username: string }) {
  useEffect(() => {
    state.user = getUserProfile(username)
  }, [username])
  return (
    <SuspenseWithError
      fallback={<BodyText>Loading...</BodyText>}
      username={username}
    >
      <ProfileSuspended />
    </SuspenseWithError>
  )
}
