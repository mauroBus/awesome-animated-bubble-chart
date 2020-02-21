import { shallow } from 'enzyme'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { App } from '../app'
import { ErrorBoundary } from '../shared/error-boundary'
import * as Format from '../format'
import { initApp } from '../index'

describe('root startup file', () => {
  let renderSpy
  let initFormatMessageSpy

  beforeEach(() => {
    renderSpy = jest.spyOn(ReactDOM, 'render')
    initFormatMessageSpy = jest.spyOn(Format, 'initFormatMessage')
  })

  afterEach(() => {
    renderSpy.mockRestore()
    initFormatMessageSpy.mockRestore()
  })

  describe('when #root element exists', () => {
    let root
    beforeEach(() => {
      root = document.createElement('div')
      root.id = 'root'
      document.body.appendChild(root)
    })

    afterEach(() => {
      document.body.removeChild(root)
    })

    it('appends content into the DOM (#root element)', () => {
      initApp()

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [elem, rootElem] = renderSpy.mock.calls[0]
      expect(renderSpy).toHaveBeenCalled()
      expect(rootElem).toBe(root)
    })

    it('reners wrapper', () => {
      initApp()

      const [elem] = renderSpy.mock.calls[0]
      expect(elem.type).toBe(ErrorBoundary)

      const tree = shallow(elem)
      expect(tree.find(Provider).exists()).toBe(true)
      expect(tree.find(App).exists()).toBe(true)
    })

    it('calls `initFormatMessage` to initialize the locale', () => {
      initApp()
      expect(initFormatMessageSpy).toHaveBeenCalled()
    })
  })

  describe('when #root element does not exists', () => {
    it('does not throw', () => {
      expect(initApp).not.toThrow()
    })

    it('does not render', () => {
      renderSpy.mockReset()
      initApp()
      expect(renderSpy).not.toHaveBeenCalled()
    })

    it('does not call `initFormatMessage`', () => {
      initApp()
      expect(initFormatMessageSpy).not.toHaveBeenCalled()
    })
  })
})
