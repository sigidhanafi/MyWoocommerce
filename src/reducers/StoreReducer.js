const initialStore = {
  data: [],
  isLoading: false
}

export const stores = (state = initialStore, action) => {
  switch (action.type) {
    case action.type === 'HALLO':
      return { ...state }
      break
    default:
      return state
  }
}
