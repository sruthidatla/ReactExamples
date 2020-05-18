import React,{Component} from 'react';

class ErrorBoundary extends Component{
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error);
        console.log(errorInfo);
        this.setState({
            error: error,
            errorInfo: errorInfo
        })

    }


    

    render() {
        console.log(this.state.errorInfo+"from render of error boundary")
        console.log(this.state.errorInfo?true:false)
        if (this.state.errorInfo) {
            return (
                <div>
                    <h2>Something went wrong.</h2>
                    <div style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo[0]}
                    </div>
                </div>
            );
        }
        console.log(this.props.children)
        return this.props.children;
    }
}
export default ErrorBoundary;
