import { BodyText } from 'components/Text'
import { proxy, useSnapshot } from 'valtio'
import { useEffect } from 'preact/hooks'
import SuspenseWithError from 'components/SuspenseWithError'
import UserProfile from 'models/UserProfile'
import classnames, {
  alignItems,
  display,
  flexDirection,
  justifyContent,
  space,
} from 'classnames/tailwind'
import getUserProfile from 'helpers/getUserProfile'

const state = proxy<{
  user: Promise<UserProfile> | undefined
}>({ user: undefined })

function ProfileSuspended() {
  const { user } = useSnapshot(state)
  return <BodyText>{JSON.stringify(user)}</BodyText>
}

const container = classnames(
  display('flex'),
  flexDirection('flex-col'),
  justifyContent('justify-center'),
  alignItems('items-center'),
  space('space-y-2')
)
export default function ({ username }: { username: string }) {
  useEffect(() => {
    state.user = getUserProfile(username)
  }, [username])
  return (
    <div className={container}>
      <SuspenseWithError
        fallback={<BodyText>Loading...</BodyText>}
        username={username}
      >
        <ProfileSuspended />
      </SuspenseWithError>
    </div>
  )
}
