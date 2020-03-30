import React, { Component } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';



export default class StockInfoPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            data:"", 
        }
    }
    componentDidMount=()=>{ 
        var symbol=""     
      return <div> 
          {symbol=this.props.match.params.symbol}
          {axios.get(`https://api.worldtradingdata.com/api/v1/stock_search?search_term=&limit=50&page=1&api_token=PYVc2QIrlzChGtMqatIrdJyQUjuq0B4VzeKwwODGt3OtZJqrIPalXdVdblQG`)
        .then(response =>{
            console.log(response);
            response.data.data.map((element)=>{
                if (element.symbol === symbol) {
                return this.setState({data:element})
                } 
            })
        })}
          </div>
    }
    
    render() {                
        return (
            <div>
                <Grid container spacing={3}>

                    <Grid item xs={12}><h1>{this.state.data.name}</h1></Grid>
                    <Grid item xs={12}><span style={{fontWeight:"bold", fontSize:30}}>Currency:</span> <span style={{fontSize:40, fontWeight:"bolder", color:"green"}}>{this.state.data.currency}</span></Grid>
                    <Grid item xs={12}><span style={{fontWeight:"bold", fontSize:30}}>Price:</span> <span style={{fontSize:40, fontWeight:"bolder", color:"green"}}>{this.state.data.price}</span></Grid>
                </Grid>
            </div>
        )
    }
}
