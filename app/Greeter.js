import React, {Component} from 'react'

class Greeter extends Component{
    render() {
        return (
            <div>
                {this.props.greetText}
            </div>
        );
    }
}

export default Greeter
