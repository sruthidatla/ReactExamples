import React,{Component} from 'react';

class MemoComp extends Component{
    render() {
        return <h1>This is pure component {this.props.name}</h1>
    }
}
export default React.memo(MemoComp);