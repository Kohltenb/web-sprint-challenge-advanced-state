import axios from 'axios'
//Actions
import * as types from './action-types'
const getURL = 'http://localhost:9000/api/quiz/next'
const postAnswerURL = 'http://localhost:9000/api/quiz/answer'
const formPostURL = 'http://localhost:9000/api/quiz/new'

// ❗ You don't need to add extra action creators to achieve MVP
export function moveClockwise(amount) { 
  return { 
    type: types.MOVE_CLOCKWISE, 
    payload: amount 
  }
}

export function moveCounterClockwise(amount) { 
  return { 
    type: types.MOVE_COUNTERCLOCKWISE,
    payload: amount
  }
}

export function selectAnswer(id) {
  return {type: types.SET_SELECTED_ANSWER, payload: id}
}

export function setMessage(message) { 
  return {type: types.SET_INFO_MESSAGE, payload: message}
}

export function setQuiz(quiz) { 
  return {type: types.SET_QUIZ_INTO_STATE, payload: quiz}
}
export function inputChange(formID, value) {
  return {type: types.INPUT_CHANGE, payload: formID, value}
}

export function resetForm() { 
  return {type: types.RESET_FORM}
}


// ❗ Async action creators
export function fetchQuiz() { 
  return function (dispatch){ 
    // dispatch({type: types.LOADING,})
     axios
    .get(getURL)
    .then(res => {
      console.log('RESSSSS', res)
      dispatch(setQuiz(res.data));
    })
    .catch(err => console.log({err}))
    // .finally(
      // dispatch({type: types.LOADING,})
    // )
  }
}
export function postAnswer({quiz_id, answer_id}) { 
  return function (dispatch) { 
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz 
    // { "quiz_id": "LVqUh", "answer_id": "0VEv0" }
    axios
    .post(postAnswerURL, {quiz_id, answer_id})
    // console.log({quiz_id, answer_id})
    .then(res => {
      dispatch(fetchQuiz())
      dispatch(setMessage(res.data.message))
    })
    .catch(err => console.log({err}))
  }
}
export function postQuiz({question_text, true_answer_text, false_answer_text}) {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
    // "question_text": "Love JS?", "true_answer_text": "yes", "false_answer_text": "nah"
    axios
    .post(formPostURL, { question_text, true_answer_text, false_answer_text })
    .then(res => {
      dispatch(setMessage(`Congrats: "${res.data.question}" is a great question!`))
      dispatch(resetForm())
    })
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
