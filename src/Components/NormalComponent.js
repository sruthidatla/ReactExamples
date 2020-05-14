import React,{Component} from "react";

class NormalComponent extends Component{
render(){
    console.log("Rendering Normal Component")
    return (
        <div>
            Normal Component {this.props.name}
        </div>
    )
}

}

export default NormalComponent;