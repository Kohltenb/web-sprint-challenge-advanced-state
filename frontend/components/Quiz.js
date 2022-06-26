import React from 'react'
import { connect } from 'react-redux'
import { useEffect, } from 'react'
import * as actionCreators from '../state/action-creators'


function Quiz(props) {

  useEffect(() => {
    console.log('PROPS', props)
    props.fetchQuiz()
  }, [])
  const { question, quiz_id, answers, answer_id } = props.quiz
  const selectedAnswer = props.selectedAnswer

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        //this is gonna be(props.quiz === null || null ? )
        (props.quiz) ? (
          <div>
            <h2>{question}</h2>
            <div id="quizAnswers">
              <div className={selectedAnswer === answers?.[0].answer_id ? 'answer selected' : 'answer'}>
                {answers?.[0].text}
                {/* this will be selectAnswer function which will just change the classname to select or selected changing the text of button text onClick={() => selectAnswer(quiz_id, answers?.answer_id)}*/}
                <button onClick={() => props.selectAnswer(answers?.[0].answer_id)}>
                  {selectedAnswer === answers?.[0].answer_id ? 'SELECTED' : 'Select'}
                </button>
              </div>
              {/* // selectAnswer() ? 'answer selected' : 'answer' */}
              <div className={selectedAnswer === answers?.[1].answer_id ? 'answer selected' : 'answer'}>
                {answers?.[1].text}
                {/* this will be selectAnswer function which will just change the classname to select or selected changing the text of button text */}
                <button onClick={() => props.selectAnswer(answers?.[1].answer_id)}>
                  {selectedAnswer === answers?.[1].answer_id ? 'SELECTED' : 'Select'}
                </button>
              </div>
            </div>
            {/* this will be the PostAnswer function that will use axios to submit answers to api then return message/and new quiz */}
            <button id="submitAnswerBtn" onClick={() => props.postAnswer({quiz_id, answer_id: selectedAnswer})} disabled={selectedAnswer === ''}>Submit answer</button>
          </div>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}


export default connect(st => st, actionCreators)(Quiz)