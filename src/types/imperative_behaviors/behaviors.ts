export type TFocus = {
  focus: () => void
}
export type TScrollTo = {
  scrollTo: () => void
}

export type TScrollAndFocusTo = {
  scrollAndFocusTo: () => void
}

export type TFieldBehaviors = TFocus & TScrollTo & TScrollAndFocusTo
