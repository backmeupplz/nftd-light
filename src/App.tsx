import { Route, Router } from 'wouter'
import NotFound from 'components/NotFound'
import Profile from 'components/Profile'
import Root from 'components/Root'
import useHashLocation from 'hooks/useHashLocation'

export default function () {
  return (
    <Root>
      <Router hook={useHashLocation}>
        <Route path="/">
          <NotFound />
        </Route>
        <Route path="/:username">
          {({ username }: { username: string }) => (
            <Profile username={username} />
          )}
        </Route>
      </Router>
    </Root>
  )
}
