import React from 'react';

class HelloWorld extends React.Component {
    state = {
        who: 'World'
    }

    showFriend = () => {
        console.log("Friend clicked")
        this.setState({
            who: 'Friend'
        })
    }

    showReact = () => {
        console.log("React clicked")
        this.setState({
            who: 'React'
        })
    }

    showWorld = () => {
        console.log("World Clicked")
        this.setState({
            who: 'World'
        })
    }

    render() {
        return(
            <div>
                <p>Hello, {this.state.who}!</p>
                <button onClick={this.showReact}>React</button>
                <button onClick={this.showFriend}>Friend</button>
                <button onClick={this.showWorld}>World</button>
            </div>
        )
    }
}

export default HelloWorld;