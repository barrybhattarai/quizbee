import React, { Component } from 'react'
import axios from 'axios'
import Question from './components/Question'
import Answer from './components/Answer'

export default class App extends Component {
  
  state = {
    questions: []
  }

  loadQuestions= ()=>{
    const url = `https://opentdb.com/api.php?amount=10&category=9`;
    axios.get(url)
    .then(res=>{
      this.setState({
        questions: res.data.results
      })
    })
  }

  componentDidMount(){
    this.loadQuestions()
  }

  render() {
    if (this.state.questions.length>0){
      return (
        this.state.questions.map((question, index)=>(
          <div className="question_box" key={index}>
            <Question  question={question.question}/>
            <Answer  incorrectAnswers={question.incorrect_answers} correctAnswer={question.correct_answer}/>
          </div>
        ))
      )
    }

    return <h1>LOADING</h1>
  }
}