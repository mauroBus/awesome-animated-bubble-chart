import { generateNodes } from '../nodes'

describe('BubbleChart::nodes generator', () => {
  const MIN_RADIUS = 10
  const defaults = {
    bubbles: [
      {
        id: 1,
        title: 'skill 1',
        total: 250,
        count: { low: 100, medium: 50, high: 100 },
      },
      {
        id: 2,
        title: 'skill 2',
        total: 10,
        count: { low: 0, medium: 10, high: 0 },
      },
    ],
    scale: 1,
    height: 600,
    width: 1000,
    centerY: 500,
  }
  const rand = window.Math.random
  beforeEach(() => {
    window.Math.random = () => 0.5
  })
  afterEach(() => {
    window.Math.random = rand
  })

  it('creates a node for each skill mastery', () => {
    const nodes = generateNodes(defaults)
    expect(nodes).toEqual([
      {
        bubbleId: 'bubble1high',
        mastery: 'high',
        r: 100,
        initialRadius: 100,
        skillId: 1,
        name: 'skill 1',
        x: defaults.width / 2,
        y: 0,
      },
      {
        bubbleId: 'bubble1medium',
        mastery: 'medium',
        r: 50,
        initialRadius: 50,
        skillId: 1,
        name: 'skill 1',
        x: defaults.width / 2,
        y: defaults.width / 2,
      },
      {
        bubbleId: 'bubble1low',
        mastery: 'low',
        r: 100,
        initialRadius: 100,
        skillId: 1,
        name: 'skill 1',
        x: defaults.width / 2,
        y: defaults.height,
      },
      {
        bubbleId: 'bubble2medium',
        mastery: 'medium',
        r: 10,
        initialRadius: 10,
        skillId: 2,
        name: 'skill 2',
        x: defaults.width / 2,
        y: defaults.width / 2,
      },
    ])
  })

  it('renders small nodes with the minimum radius', () => {
    const props = { ...defaults }
    props.bubbles.push({
      id: 3,
      title: '3',
      total: 12,
      count: { low: 1, medium: 10, high: 1 },
    })
    const nodes = generateNodes(defaults)
    expect(nodes[5].r).toBe(MIN_RADIUS)
  })
})
