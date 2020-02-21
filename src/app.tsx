import t from 'format-message'
import React from 'react'
import { BubbleChartPage } from './pages/bubble-chart'
import CssBaseline from '@material-ui/core/CssBaseline'
import styles from './app.css'

export function App() {
  return (
    <>
      <CssBaseline />
      <section className={styles.app}>
        <header>
          <h1 className={styles.title}>
            {t('Awesome Animated Bubble Chart - Demo')}
          </h1>
        </header>
        <BubbleChartPage />
      </section>
    </>
  )
}
