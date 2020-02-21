import { shallow } from 'enzyme'
import React from 'react'
import { BubbleChartPage } from '../pages/bubble-chart'
import { App } from '../app'
import styles from './app.css'

describe('App', () => {
  it('instantiates the BubbleChartPage component', () => {
    const tree = shallow(<App />)
    expect(tree.find(BubbleChartPage).exists()).toBe(true)
  })

  it('renders title', () => {
    const tree = shallow(<App />)
    expect(tree.find('h1').text()).toBe('Awesome Animated Bubble Chart - Demo')
  })

  it('renders section "app" class', () => {
    const tree = shallow(<App />)
    expect(tree.find('section').hasClass(styles.app)).toBe(true)
  })
})
