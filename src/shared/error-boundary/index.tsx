import React, { PureComponent } from 'react'
import classnames from 'classnames'
import t from 'format-message'
import styles from './index.css'

type ErrorBoundaryInfo = {
  componentStack: string
}

type Props = {
  className?: string
}
type State = {
  hasError: boolean
}

export class ErrorBoundary extends PureComponent<Props, State> {
  state = {
    hasError: false,
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorBoundaryInfo) {
    // You can also log the error to an error reporting service...
    console.error(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          className={classnames(styles.errorBoundary, this.props.className)}
          data-qa="errorBoundary"
        >
          <div className={styles.centered}>
            <h1 className={styles.title} data-qa="errorBoundaryTitle">
              {t('We’ve had a slight malfunction')}
            </h1>
            <div className={styles.subTitle} data-qa="errorBoundarySubtitle">
              {t(
                'You could give refreshing your page a shot. Or just sit tight, and we’ll figure this out.'
              )}
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
