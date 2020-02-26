import React from 'react';

class Accord extends React.Component {
  static defaultProps = {
    sections: []
  }
  
  state = {
    activeTab : null
  }

  handleButtonClick(i) {
    this.setState({
      activeTab : i
    })
  }

  renderListItems(item, i) {
    return (  
      <li key={i}>
        <button onClick={() => this.handleButtonClick(i)}>{item.title}</button>
        {(this.state.activeTab === i) && <p>{item.content}</p>}
      </li>
    )
  }

  render () {
    return (
      <div>
        <ul>
          {
            this.props.sections.map((item, i) => 
              this.renderListItems(item, i))
          }
        </ul>
      </div>
    )
  }

}

export default Accord;