import React from 'react';

import './css/guess-form.css';

export default class GuessForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  onSubmit(event) {
    event.preventDefault();

    if (this.props.onMakeGuess) {
      this.props.onMakeGuess(this.state.inputValue);
    }
    this.setState({
      inputValue: ''
    })

  }
  _onChange = e => {
    const value = e.target.value;
    this.setState({
      inputValue: value
    })
  }

  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <input
          type="number"
          name="userGuess"
          id="userGuess"
          className="text"
          min="1"
          max="100"
          autoComplete="off"
          aria-labelledby="feedback"
          value={this.state.inputValue}
          onChange={this._onChange}
          required
        />
        <button
          type="submit"
          name="submit"
          id="guessButton"
          className="button"
        >
          Guess
        </button>
      </form>
    );
  }
}
