import { shallow, mount } from 'enzyme'
import React from 'react'
import { ErrorBoundary } from '../index'

describe('ErrorBoundary', () => {
  const boundaryRoot = `[data-qa='errorBoundary']`
  const title = `[data-qa='errorBoundaryTitle']`
  const subTitle = `[data-qa='errorBoundarySubtitle']`

  it('renders children by default', () => {
    const children = <div id="test-child">Hello there!</div>
    const tree = shallow(<ErrorBoundary>{children}</ErrorBoundary>)
    expect(tree.equals(children)).toBe(true)
  })

  describe('when error occurs', () => {
    const ChildThatThrows = () => {
      throw new Error('I am a child that throws')
    }
    const consoleError = console.error

    beforeEach(() => {
      console.error = jest.fn()
    })

    afterEach(() => {
      console.error = consoleError
    })

    it('logs error information', () => {
      mount(
        <ErrorBoundary>
          <ChildThatThrows />
        </ErrorBoundary>
      )

      expect(console.error).toHaveBeenCalledWith(
        new Error('I am a child that throws'),
        expect.objectContaining({
          componentStack: expect.any(String),
        })
      )
    })

    it('renders error message', () => {
      const tree = mount(
        <ErrorBoundary>
          <ChildThatThrows />
        </ErrorBoundary>
      )

      expect(tree.find(title).text()).toBe('We’ve had a slight malfunction')
      expect(tree.find(subTitle).text()).toBe(
        'You could give refreshing your page a shot. Or just sit tight, and we’ll figure this out.'
      )
    })

    it('includes provided class name in error message', () => {
      const className = 'customErrorClass'
      const tree = mount(
        <ErrorBoundary className={className}>
          <ChildThatThrows />
        </ErrorBoundary>
      )

      const classProp = tree.find(boundaryRoot).prop('className')

      expect(classProp).toBeDefined()
      classProp && expect(classProp.split(' ')).toContain(className)
    })
  })
})
