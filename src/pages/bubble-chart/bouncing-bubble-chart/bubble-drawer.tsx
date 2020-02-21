import t from 'format-message'
import { BubbleNodeType } from './nodes'
import { event, Selection } from 'd3-selection'
import { Simulation } from 'd3-force'
import styles from './bubble-drawer.css'

type Props = {
  svg: Selection<SVGElement, BubbleNodeType, null, undefined> | null
  onBubbleClick?: (BubbleType, number) => unknown
  onBubbleFocus?: (id?: number | null, type?: BubbleType) => unknown
  onBubbleHover?: (id?: number | null, type?: BubbleType) => unknown
  onTabPressed?: (event: KeyboardEvent) => unknown
}

const bubbleClassByType = {
  high: styles.highBubble,
  medium: styles.mediumBubble,
  low: styles.lowBubble,
}

export default class BubbleDrawer {
  props: Props
  bubbles: Selection<
    SVGCircleElement,
    BubbleNodeType,
    SVGElement,
    BubbleNodeType
  > | null = null

  constructor(props: Props) {
    this.props = props // eslint-disable-line immutable/no-mutation
  }

  draw(simulation: Simulation<BubbleNodeType, undefined>): BubbleDrawer {
    const { svg } = this.props
    if (!svg) return this

    this.bubbles = svg // eslint-disable-line immutable/no-mutation
      .selectAll('circle')
      .data(simulation.nodes())

      .enter()
      .append('circle')
      .attr('r', d => d.r)
      .attr('class', d => bubbleClassByType[d.mastery])
      .attr('role', 'button')
      .attr('tabindex', 0)
      .attr('id', d => d.bubbleId)
      .attr('aria-label', d => t('Select {bubbleName}', { bubbleName: d.name }))

      .on('mouseover', this.handleMouseOver)
      .on('focus', this.handleFocus)
      .on('click', this.handleClick)
      .on('keydown', this.handleKeyPress)

    this.bubbles && this.bubbles.exit().remove()

    simulation.on('tick', this.handleTick)
    return this
  }

  handleTick = (): void => {
    this.bubbles &&
      this.bubbles
        .attr('cx', (d: BubbleNodeType) => d.x)
        .attr('cy', (d: BubbleNodeType) => d.y)
        .attr('r', (d: BubbleNodeType) => d.r)
  }

  handleClick = (d: BubbleNodeType): void => {
    const { onBubbleClick } = this.props
    onBubbleClick && onBubbleClick(d.mastery, d.skillId)
  }

  handleMouseOver = ({
    skillId,
    type,
  }: {
    skillId: number
    type: BubbleType
  }): void => {
    const { onBubbleHover, svg } = this.props
    onBubbleHover && onBubbleHover(skillId, type)

    svg &&
      svg
        .selectAll<SVGCircleElement, BubbleNodeType>('circle')
        .attr('opacity', d => (skillId === d.skillId ? 1 : 0.5))
  }

  handleMouseLeave = (): void => {
    const { onBubbleHover, svg } = this.props
    onBubbleHover && onBubbleHover(null)

    svg && svg.selectAll('circle').attr('opacity', 1)
  }

  handleFocus = ({
    skillId,
    type,
  }: {
    skillId: number
    type: BubbleType
  }): void => {
    const { onBubbleFocus } = this.props
    onBubbleFocus && onBubbleFocus(skillId, type)
  }

  handleKeyPress = (d: BubbleNodeType): void => {
    if (!(event instanceof KeyboardEvent)) return
    switch (event.key) {
      case 'Enter':
      case ' ':
        this.handleClick(d)
        event.preventDefault()
        break
      case 'Tab':
        if (!event.shiftKey) {
          const { onTabPressed } = this.props
          onTabPressed && onTabPressed(event)
        }
        break
    }
  }

  public focus = (skillId: string, type: BubbleType): BubbleDrawer => {
    const { svg } = this.props
    const node =
      svg && svg.select<SVGCircleElement>(`#bubble${skillId}${type}`).node()
    let nextBubble = node && node.nextElementSibling
    while (nextBubble && nextBubble.getAttribute('tabindex') !== '0') {
      nextBubble = nextBubble.nextElementSibling
    }
    nextBubble &&
      nextBubble instanceof SVGElement &&
      nextBubble.focus &&
      nextBubble.focus()
    return this
  }

  setTabbableBubbles = (type: BubbleType | null): BubbleDrawer => {
    const { svg } = this.props
    svg &&
      svg
        .selectAll<SVGCircleElement, BubbleNodeType>('circle')
        .attr('tabindex', d => (!type || type === d.mastery ? 0 : -1))
    return this
  }

  highlightType = (type?: BubbleType | null) => {
    const { svg } = this.props
    if (!svg) return this
    const count = {
      high: 0,
      medium: 0,
      low: 0,
    }
    const bubbles = svg.selectAll<SVGCircleElement, BubbleNodeType>('circle')
    bubbles.each(d => {
      count[d.mastery] += d.initialRadius // eslint-disable-line immutable/no-mutation
    })
    const alpha = type
      ? (count.high + count.medium + count.low) / count[type] / 2
      : 1
    bubbles.each(d => {
      // eslint-disable-next-line immutable/no-mutation
      d.r = d.initialRadius * Math.min(d.mastery === type ? alpha : 1, 5)
    })
    return this
  }

  public remove = (): BubbleDrawer => {
    const { svg } = this.props
    svg && svg.selectAll('circle').remove()
    return this
  }
}
