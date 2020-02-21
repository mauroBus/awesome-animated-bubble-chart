import React, { Component } from 'react'
import { BouncingBubbleChart } from '../bouncing-bubble-chart'
import OpenWithIcon from '@material-ui/icons/OpenWith'
import CenterFocusStrongIcon from '@material-ui/icons/CenterFocusStrong'
import Button from '@material-ui/core/Button'
import styles from './index.css'

type Props = {
  bubbleChart: BouncingBubbleChart | null
  onExpand?: () => void
  onContract?: () => void
}

type State = {
  expandedView: boolean
}

export class BubbleToggle extends Component<Props, State> {
  state = {
    expandedView: false,
  }

  handleExpandedView = () => {
    const { bubbleChart, onExpand } = this.props
    this.setState({ expandedView: true })
    bubbleChart && bubbleChart.splitBubbles()
    onExpand && onExpand()
  }

  handleCollapseView = () => {
    const { bubbleChart, onContract } = this.props
    this.setState({ expandedView: false })
    bubbleChart && bubbleChart.joinBubbles()
    onContract && onContract()
  }

  render() {
    const { expandedView } = this.state
    return (
      <div className={styles.toggle} role="tablist" data-qa="bubbleToggleView">
        <Button
          aria-controls="bubbleChartTabPanel"
          aria-selected={!expandedView}
          color={!expandedView ? 'secondary' : 'primary'}
          onClick={this.handleCollapseView}
          role="tab"
          data-qa="bubbleCollapseButton"
        >
          <CenterFocusStrongIcon />
        </Button>
        <Button
          aria-controls="bubbleChartTabPanel"
          aria-selected={expandedView}
          color={!expandedView ? 'primary' : 'secondary'}
          onClick={this.handleExpandedView}
          role="tab"
          data-qa="bubbleExpandedButton"
        >
          <OpenWithIcon />
        </Button>
      </div>
    )
  }
}
