import { State as BubbleChartReducerState } from '../../src/pages/bubble-chart/_reducer'

declare global {
  type AppState = {
    bubbles: BubbleChartReducerState
  }

  type StateProp<T extends keyof AppState> = AppState[T]
}

export {}
