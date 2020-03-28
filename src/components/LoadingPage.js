import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

export class LoadingPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             direct:false,
        }
    }
    
    componentDidMount=()=>{
        setTimeout(() => {
            this.setState({direct:true})
        }, 3000);

    }
    render() {
        if (this.state.direct) {
            return  <Redirect to ="/search"/>

        }else{
        return (
            <div className="Load">
                <img className="Logo" src="stocklogo.png" alt="dollar"/>
            </div>
        )
    }
}
}

export default LoadingPage
