const MIN_RADIUS = 10

export type BubbleNodeType = {
  bubbleId: string
  initialRadius: number
  mastery: BubbleType
  name: String
  r: number
  skillId: number
  x: number
  y: number
}

export function generateNodes({
  bubbles,
  scale,
  height,
  width,
  centerY,
}: {
  bubbles: Bubble[]
  scale: number
  height: number
  width: number
  centerY: number
}): BubbleNodeType[] {
  const nodes: BubbleNodeType[] = []

  for (const bubble of bubbles) {
    const {
      id,
      count: { low, medium, high },
      title: name,
    } = bubble

    const highR = Math.max(high * scale, MIN_RADIUS)
    const mediumR = Math.max(medium * scale, MIN_RADIUS)
    const lowR = Math.max(low * scale, MIN_RADIUS)

    high > 0 &&
      nodes.push({
        bubbleId: `bubble${id}high`,
        initialRadius: highR,
        mastery: 'high',
        name,
        r: highR,
        skillId: id,
        x: Math.random() * width,
        y: 0,
      })
    medium > 0 &&
      nodes.push({
        bubbleId: `bubble${id}medium`,
        initialRadius: mediumR,
        mastery: 'medium',
        name,
        r: mediumR,
        skillId: id,
        x: Math.random() * width,
        y: centerY,
      })
    low > 0 &&
      nodes.push({
        bubbleId: `bubble${id}low`,
        initialRadius: lowR,
        mastery: 'low',
        name,
        r: lowR,
        skillId: id,
        x: Math.random() * width,
        y: height,
      })
  }

  return nodes
}
