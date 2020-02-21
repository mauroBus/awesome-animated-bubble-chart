import t from 'format-message'
import React, { PureComponent } from 'react'
import Button from '@material-ui/core/Button'
import styles from './index.css'

type Props = {
  activeTab: BubbleType | null
  onChange: (type: BubbleType | null) => any
}

export class BubbleChartTabs extends PureComponent<Props> {
  handleSelectAll = () => this.props.onChange(null)
  handleSelectLow = () => this.props.onChange('low')
  handleSelectMedium = () => this.props.onChange('medium')
  handleSelectHigh = () => this.props.onChange('high')

  render() {
    const { activeTab } = this.props
    return (
      <div className={styles.tabs} role="tablist" data-qa="tabs">
        <ul className={styles.list}>
          <li>
            <Button
              aria-controls="bubbleChartTabPanel"
              aria-selected={activeTab === null}
              color={activeTab === null ? 'secondary' : 'primary'}
              role="tab"
              className={styles.tab}
              onClick={this.handleSelectAll}
              data-qa="allTab"
            >
              {t('All')}
            </Button>
          </li>

          <li>
            <Button
              aria-controls="bubbleChartTabPanel"
              aria-selected={activeTab === 'low'}
              color={activeTab === 'low' ? 'secondary' : 'primary'}
              role="tab"
              className={styles.tab}
              onClick={this.handleSelectLow}
              data-qa="lowTab"
            >
              {t('Low')}
            </Button>
          </li>

          <li>
            <Button
              aria-controls="bubbleChartTabPanel"
              aria-selected={activeTab === 'medium'}
              color={activeTab === 'medium' ? 'secondary' : 'primary'}
              role="tab"
              className={styles.tab}
              onClick={this.handleSelectMedium}
              data-qa="mediumTab"
            >
              {t('Medium')}
            </Button>
          </li>

          <li>
            <Button
              aria-controls="bubbleChartTabPanel"
              aria-selected={activeTab === 'high'}
              color={activeTab === 'high' ? 'secondary' : 'primary'}
              role="tab"
              className={styles.tab}
              onClick={this.handleSelectHigh}
              data-qa="highTab"
            >
              {t('High')}
            </Button>
          </li>
        </ul>
      </div>
    )
  }
}
