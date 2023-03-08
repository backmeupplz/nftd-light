import { Component } from 'react'
import NotFound from 'components/NotFound'

export default class extends Component<{
  username?: string
}> {
  state: {
    hasError: boolean
  } = { hasError: false }
  static getDerivedStateFromError() {
    return {
      hasError: true,
    }
  }
  render() {
    return this.state.hasError ? (
      <NotFound username={this.props.username} />
    ) : (
      this.props.children
    )
  }
}
