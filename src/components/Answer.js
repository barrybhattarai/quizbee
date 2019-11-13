import React, { Component } from 'react'
import he from "he"

export default class Answer extends Component {

    shuffle = (array)=> {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array
    }

    render() {
        let array = this.props.incorrectAnswers;
        array.push(this.props.correctAnswer)
        return (
            this.shuffle(array.map((answer, index)=>(
                <ul key={index}> 
                <li className={answer===this.props.correctAnswer?"correct":null}>
                    {he.decode(answer)}
                </li>
                </ul>
            )))
        )
    }
}
