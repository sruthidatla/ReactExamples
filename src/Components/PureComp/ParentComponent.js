import React,{Component,PureComponent} from 'react';
import PureComponentTest from "./PureComponentTest";
import NormalComponent from "./NormalComponent";
import MemoComp from "../MemoExample/MemoComp";
class ParentComponent extends Component{
    constructor(props) {
        super(props);
        this.state={name:"React"};
    }

    componentDidMount() {
        setInterval(() =>{this.setState({name:"React"})},10000)
    }

    render(){
        console.log("Rendering Parent Component");
        return(
            <div>
                Parent Component
                <PureComponentTest name={this.state.name}/>
                <NormalComponent name={this.state.name}/>
                <MemoComp name = {this.state.name} />
            </div>
        )
    }
}

export default  ParentComponent;