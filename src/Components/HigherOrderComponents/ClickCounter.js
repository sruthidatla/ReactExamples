import React,{Component} from 'react';

import withCounter from "./WithCounter";

class ClickCounter extends  Component{
    render(){
        return(
            <button onClick={this.props.incrementCount}> Clicked {this.props.count} times</button>
        )
    }
}
export default withCounter(ClickCounter,5);