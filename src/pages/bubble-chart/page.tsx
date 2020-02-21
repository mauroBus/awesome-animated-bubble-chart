import React, { PureComponent } from 'react'
import { BouncingBubbleChart } from './bouncing-bubble-chart'
import { BubbleChartTabs } from './tabs'
import { BubbleToggle } from './toggle'
import styles from './page.css'

const CHART_HEIGHT = 800

type Props = {
  bubbles: Bubble[]
  selectBubble: (type: BubbleType | null, bubble: Bubble | null) => void
  selectedBubble: Bubble | null
  selectedType: BubbleType | null
  selectType: (type: BubbleType | null) => void
}

type State = {
  bubbleChartRef: BouncingBubbleChart | null
  tooltipForBubbleId: number | null
  tooltipForType: BubbleType | null
}

export class Page extends PureComponent<Props, State> {
  state = {
    bubbleChartRef: null,
    tooltipForBubbleId: null,
    tooltipForType: null,
  }

  setBubbleChartRef = (ref: BouncingBubbleChart | null) => {
    this.setState({ bubbleChartRef: ref })
  }

  handleSingleBubbleHover = (id?: number | null, type?: BubbleType | null) =>
    this.setState({
      tooltipForBubbleId: id || null,
      tooltipForType: type || null,
    })

  handleBubbleClick = (bubbleType: BubbleType, id: number) => {
    const { selectType, selectBubble, bubbles } = this.props
    const bubble = bubbles.find(bubble => bubble.id === id)

    selectType(bubbleType)
    selectBubble(bubbleType, bubble || null)
  }

  handleTypeChange = (type: BubbleType | null) => {
    const { selectType, bubbles } = this.props

    selectType(type)

    if (type && bubbles.length > 0) {
      const { id } = bubbles.reduce((selectedBubble, bubble) =>
        bubble.count[type] > selectedBubble.count[type]
          ? bubble
          : selectedBubble
      )
      this.handleBubbleClick(type, id)
    }
  }

  getScale() {
    const { bubbles } = this.props
    let lowArea = 0
    let mediumArea = 0
    let highArea = 0

    for (const {
      count: { low, medium, high },
    } of bubbles) {
      lowArea += (Math.PI * low) ** 2
      mediumArea += (Math.PI * medium) ** 2
      highArea += (Math.PI * high) ** 2
    }

    const maxRadius = Math.sqrt(
      Math.max(lowArea + mediumArea + highArea) / Math.PI
    )

    return CHART_HEIGHT / 2.5 / maxRadius
  }

  render() {
    const { bubbles, selectedBubble, selectedType } = this.props
    const { tooltipForBubbleId, tooltipForType, bubbleChartRef } = this.state

    const scale = this.getScale()

    return (
      <>
        <BubbleChartTabs
          activeTab={selectedType}
          onChange={this.handleTypeChange}
        />

        {!selectedType && <BubbleToggle bubbleChart={bubbleChartRef} />}

        <BouncingBubbleChart
          bubbles={bubbles}
          className={styles.bubbleChartContainer}
          height={CHART_HEIGHT}
          onBubbleClick={this.handleBubbleClick}
          onBubbleFocus={this.handleSingleBubbleHover}
          onBubbleHover={this.handleSingleBubbleHover}
          ref={this.setBubbleChartRef}
          scale={scale}
          selectedId={selectedBubble ? selectedBubble.id : undefined}
          tooltipForBubbleId={tooltipForBubbleId}
          tooltipForType={tooltipForType}
          type={selectedType}
          width={1450}
        />
      </>
    )
  }
}
