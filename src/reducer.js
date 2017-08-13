
function reducer (state = {}, action) {
  console.log('pre state: %O', state)
  console.log('action: %O', action)
  let newState = state
  switch (action.type) {
    case 'CHANGE_TAB':
      newState = { ...state, tabValue: action.payload }
      break
    default:
      newState = state
      break
  }
  console.log('cur state: %O', newState)
  return newState
}

export {reducer}
