import React, { Component } from 'react'

export default class RouletteGun extends Component {
  static defaultProps = {
    bulletInChamber: 8
  };

  state = {
    chamber: null,
    spinningTheChamber: false,
  };

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }


  handleButtonClick() {
    this.setState({spinningTheChamber: true})
    
    this.timeout = setTimeout(() => {
      const randNumber = Math.ceil(Math.random() * 8)

      this.setState({
        chamber: randNumber,
        spinningTheChamber: false
      })
    }, 2000)
  }

  renderDisplay() {
    if (this.state.spinningTheChamber === true) {
      return("spinning the chamber and pulling the trigger! ...")
    }else if (this.state.chamber === this.props.bulletInChamber) {
      return("BANG")
    }else{
      return("You're Safe")
    }
  }


  render() {
    return (
      <div className='RouletteGun'>
        <p>{this.renderDisplay()}</p>
        <button onClick = {() => this.handleButtonClick()}>Pull the trigger!</button>
      </div>
    )
  }
}