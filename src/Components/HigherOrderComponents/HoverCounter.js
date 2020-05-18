import React,{Component} from 'react';
import withCounter from "./WithCounter";

class HoverCounter extends  Component{
    render(){
        return(
            <button onMouseOver={this.props.incrementCount}> Hovered {this.props.count} times</button>
        )
    }
}

export default withCounter(HoverCounter,1);