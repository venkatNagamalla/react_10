// Write your code here.

import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onInputChangeText = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="image-container">
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
        <div className="text-container">
          <h1 className="calculator-heading">
            Calculate the Letters you enter
          </h1>
          <form className="input-container">
            <label htmlFor="inputEle" className="label-text">
              Enter the phrase
            </label>
            <br />
            <input
              className="input-element"
              type="text"
              onChange={this.onInputChangeText}
              placeholder="Enter the phrase"
              id="inputEle"
            />
          </form>
          <div className="letter-container">
            <p>No.of letters: {count}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
