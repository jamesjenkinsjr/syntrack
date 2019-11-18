import React, { Component } from 'react'
import './Dashword.css';

class DashWord extends Component {
  render() {
    const word = this.props.word
    return (
      <>
        <h4 className="DashWord__header">{word.original}</h4>
        <ul className="DashWord">
          <li className="DashWord__correct">
            <p>
              Correct attempts: {word.correct_count}
            </p>
            </li>
            <li className="Dashword_incorrect">
            <p>
              Missed attempts: {word.incorrect_count}
            </p>
          </li>
        </ul>
      </>
    )
  }
}

export default DashWord
