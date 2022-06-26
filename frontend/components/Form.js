import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'


export function Form(props) {

  const {newQuestion, newTrueAnswer, newFalseAnswer } = props
    console.log('FORM', props.form)
  

  const onChange = evt => {
    console.log('VALUE', evt.target.value)
    console.log('FORM ID', evt.target.id)
    const value = evt.target.value
    const formID = evt.target.id
    props.inputChange(value)
  }

  const onSubmit = evt => {
    evt.preventDefault()
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" value={newQuestion}/>
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" value={newTrueAnswer}/>
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" value={newFalseAnswer}/>
      <button id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  )
}

export default connect(st => st, actionCreators)(Form)
