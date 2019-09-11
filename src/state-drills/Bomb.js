import React from 'react';

function checkTickTock(count) {
    if (count % 2 === 0 && count < 8) {
        return "tick"
    }else if (!count % 2 === 0 && count < 8) {
        return "tock"
    }else if(count > 8) {
        return "BOOOOM!!!"
    }
}

class Bomb extends React.Component {
    state = {
        count: 0,
        prime: null
    }

    componentDidMount() {
        setInterval(() => {
            console.log(this.state.count)
            console.log(this.state.prime)
            this.setState({
                count: this.state.count + 1,
                prime: checkTickTock(this.state.count)
            })
        }, 1000)
    }
    componentWillUnmount() {
        
        clearInterval(this.interval)
        }

    render() {
        
        return (
            <div>
                <p>It goes: {this.state.prime}</p>
            </div>
        )
    }
}

export default Bomb