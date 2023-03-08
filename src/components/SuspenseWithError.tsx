import { ComponentChildren } from 'preact'
import { Suspense } from 'react'
import ChildrenProp from 'models/ChildrenProp'
import ErrorBoundary from 'components/ErrorBoundary'

export default function ({
  children,
  fallback,
  username,
}: ChildrenProp & { fallback?: ComponentChildren; username?: string }) {
  return (
    <ErrorBoundary username={username}>
      <Suspense fallback={fallback}>{children}</Suspense>
    </ErrorBoundary>
  )
}
