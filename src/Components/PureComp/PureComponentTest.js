import React,{PureComponent} from "react";

class PureComponentTest extends PureComponent{
    render() {
        console.log("Rendering Pure Component")
        return (
            <div>PureComponent {this.props.name}</div>
        );
    }
}

export default PureComponentTest;