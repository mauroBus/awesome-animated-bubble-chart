import { combineReducers } from 'redux'
import BubbleChartReducer from '../../pages/bubble-chart/_reducer'

export default combineReducers<any, any>({
  bubbles: BubbleChartReducer,
})
