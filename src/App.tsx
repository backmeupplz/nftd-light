import { Route } from 'wouter'
import NotFound from 'components/NotFound'
import Profile from 'components/Profile'
import Root from 'components/Root'

export default function () {
  return (
    <Root>
      <Route path="/">
        <NotFound />
      </Route>
      <Route path="/:username">
        {({ username }: { username: string }) => (
          <Profile username={username} />
        )}
      </Route>
    </Root>
  )
}
