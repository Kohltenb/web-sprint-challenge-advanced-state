// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'

//Actions


import * as types from './action-types'

const initialWheelState = 0
function wheel(state = initialWheelState, action) {
  switch (action.type) {
    case types.MOVE_COUNTERCLOCKWISE: {
      if (state === 0) {
        return state + 5
      }
      else {
        return state - action.payload
      }
    }
    case types.MOVE_CLOCKWISE: { 
      if (state === 5) {
        return initialWheelState
      }
      else {
        return state + action.payload
      }
    }
    default: return state
  }
}

// function loading(state = true, action) {
//   switch (action.type) {
//     case types.LOADING: { 
//       return !state
//     }
//     default: return state
//   }
// }
const initialQuizState = ''
function quiz(state = initialQuizState, action) {
  switch (action.type) {
    case types.SET_QUIZ_INTO_STATE: { 
      return action.payload 
    } 
    default:
      return state
  }
}

const initialSelectedAnswerState = '' 
function selectedAnswer(state = initialSelectedAnswerState, action) { 
  switch (action.type) {
    case types.SET_SELECTED_ANSWER: {
      return action.payload
    }
  }
  return state
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  switch(action.type) {
    case types.SET_INFO_MESSAGE: {
      return action.payload
    }
  }
  return state
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(formState = initialFormState, action) {
  switch(action.type) {
    case types.INPUT_CHANGE: { debugger
      return action.payload
    }
  }
  return formState
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
