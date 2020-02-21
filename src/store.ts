import { createStore, bindActionCreators, applyMiddleware, Store } from 'redux'
import rootReducer from './redux/reducers'
import { fetchMiddleware } from './redux/middlewares/fetch'
import * as todosActions from './pages/bubble-chart/_actions'
import { fetchApi } from './utils/fetch'

const bindActions = (store: Store<any, any>) => ({
  bubbles: bindActionCreators(todosActions, store.dispatch),
})

export default function create() {
  const store = createStore<AppState, any, any, any>(
    rootReducer,
    undefined,
    applyMiddleware(fetchMiddleware(fetchApi))
  )

  const actions = bindActions(store)
  return { actions, store }
}
