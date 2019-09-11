import React from 'react';

class Counter extends React.Component {
  static defaultProps = {
    step: 2
  };
    state = {
      count: 0
    };
    handleButtonClick = () => {
      const newCount = this.state.count + this.props.step
      console.log('props in handleButtonClick', this.props)
      console.log('state in handleButtonClick', this.state)
      this.setState({
        count: newCount
      })
    }
    render() {
      return (
        <div>
          <p>The current count: {this.state.count}</p>
          <button onClick={this.handleButtonClick}>
            Add 1
          </button>
        </div>
      )
    }
  }

export default Counter;