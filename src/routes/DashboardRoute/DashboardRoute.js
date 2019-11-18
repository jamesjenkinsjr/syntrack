import React, { Component } from 'react'

class DashboardRoute extends Component {
  render() {
    return (
      <section>
        <h2>My Language: {this.props.language.name}</h2>
        <h3>Phrases (Total Score: {this.props.language.total_score})</h3>
        <div>
          {this.props.words.map(word => (
            <ul key={word.id}>
              <li>{word.original}</li>
              <li>Correct attempts: {word.correct_count}</li>
              <li>Missed attempts: {word.incorrect_count}</li>
            </ul>
          ))}
        </div>
        <button>Start Learning</button>
      </section>
    )
  }
}

export default DashboardRoute
