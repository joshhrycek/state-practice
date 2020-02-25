import React from 'react';



class Bomb extends React.Component {
    state = {
        count: 0,
        prime: null
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                count : +1
            })
        }, 1000)
    }
    componentWillUnmount() {
        
    }
    
    render() {
        return (
            <div>
                <p></p>
            </div>
        )
    }
}

export default Bomb