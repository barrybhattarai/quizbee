import React, { Component } from 'react'
import he from "he"

export default class Question extends Component {
    render() {
        return (
            <h3 className="question">{he.decode(this.props.question)}</h3>
        )
    }
}
