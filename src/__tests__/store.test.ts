import createStore from '../store'

describe('root store', () => {
  describe('createStore', () => {
    it('returns a redux store, and bound redux actions', () => {
      const { store, actions } = createStore()
      expect(typeof store).toBe('object')
      expect(typeof store.getState).toBe('function')
      expect(typeof store.dispatch).toBe('function')
      expect(typeof actions).toBe('object')
    })
  })

  const { store, actions } = createStore()

  it.each([
    'bubbles',
    // all app modules here...
  ])('includes data and actions for %s', type => {
    expect(store.getState()[type]).toBeDefined()
    expect(actions[type]).toBeDefined()
  })
})
