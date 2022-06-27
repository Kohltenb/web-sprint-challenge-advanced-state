import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'


export function Form(props) {

  const { newQuestion, newTrueAnswer, newFalseAnswer } = props.form
  const { form, inputChange, postQuiz } = props
  const inputComplete = newQuestion.trim('').length > 1 && newTrueAnswer.trim('').length > 1 && newFalseAnswer.trim('').length > 1

  console.log('FORM', props.form)


  const onChange = evt => {
    const newQuestion = {...form, [evt.target.id]: evt.target.value}
    inputChange(newQuestion);
  }

  const onSubmit = evt => {
    evt.preventDefault()
    postQuiz({question_text: newQuestion, true_answer_text: newTrueAnswer, false_answer_text: newFalseAnswer})
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" value={newQuestion} />
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" value={newTrueAnswer} />
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" value={newFalseAnswer} />
      <button id="submitNewQuizBtn" disabled={!inputComplete}>Submit new quiz</button>
      
    </form>
  )
}

export default connect(st => st, actionCreators)(Form)
