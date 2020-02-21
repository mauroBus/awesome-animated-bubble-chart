declare global {
  type AppActions = {
    bubbles: {
      fetch(): any
    }
  }

  type ActionProp<
    T extends keyof AppActions,
    S extends keyof AppActions[T]
  > = AppActions[T][S]
}

export {}
