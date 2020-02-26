import React from 'react';

class Bomb extends React.Component {
    state = {
        count: 0,
        prime: null
    }
    
    componentDidMount() {
        setInterval(() => {
            this.setState({
                count : this.state.count+1
            })
        }, 1000)
        console.log(this.state.count)
    }

    componentWillUnmount() {
      clearInterval(this.interval)  
    }
    
    checkTickTock() {
        if (this.state.count >= 8) {
            return (<h1>boom</h1>)
        } else if (this.state.count % 2 === 0) {
            return (<h1>tick</h1>)
        } else {
            return (<h1>tock</h1>)
        }
    }

    render() {

        return (
            <div>
                <p>{this.checkTickTock()}</p>
                <p>{this.state.count}</p>
            </div>
        )
    }
}

export default Bomb