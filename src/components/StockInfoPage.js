import React, { Component } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';



export default class StockInfoPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            data:"", 
            history:""
        }
    }
    componentDidMount=()=>{ 
        var symbol=""     
        let historia=[]
      return <div> 
          {symbol=this.props.match.params.symbol}
          {axios.get(`https://api.worldtradingdata.com/api/v1/stock?symbol=${symbol}&api_token=PYVc2QIrlzChGtMqatIrdJyQUjuq0B4VzeKwwODGt3OtZJqrIPalXdVdblQG`)
        .then(response =>{
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

                <Grid container spacing={12}>
                    <Grid style={{backgroundColor:"black", color:"grey", textAlign:"center"}} item xs={12}><h5>{this.state.data.name}</h5></Grid>
                    <Grid style={{paddingBottom:50}} item xs={6}><span style={{fontWeight:"bold", fontSize:20}}>Currency:</span> <span style={{fontSize:15, fontWeight:"bolder", color:"green"}}>{this.state.data.currency}</span></Grid>
                    <Grid style={{paddingBottom:50}} item xs={6}><span style={{fontWeight:"bold", fontSize:20}}>Price:</span><br/> <span style={{fontSize:15, fontWeight:"bolder", color:"green"}}>{this.state.data.price}</span></Grid>
                    <Grid style={{paddingBottom:50}} item xs={6}><span style={{fontWeight:"bold", fontSize:20}}>Open Price:</span><br/> <span style={{fontSize:15, fontWeight:"bolder", color:"green"}}>{this.state.data.price_open}</span></Grid>
                    <Grid style={{paddingBottom:50}} item xs={6}><span style={{fontWeight:"bold", fontSize:20}}>Highest:</span><br/> <span style={{fontSize:15, fontWeight:"bolder", color:"green"}}>{this.state.data.day_high}</span></Grid>
                    <Grid style={{paddingBottom:50}} item xs={6}><span style={{fontWeight:"bold", fontSize:20}}>Lowest:</span><br/> <span style={{fontSize:15, fontWeight:"bolder", color:"green"}}>{this.state.data.day_low}</span></Grid>
                    <Grid style={{paddingBottom:50}} item xs={6}><span style={{fontWeight:"bold", fontSize:20}}>Day Change:</span><br/> <span style={{fontSize:15, fontWeight:"bolder", color:"red"}}>{this.state.data.day_change}</span></Grid>

                </Grid>
            </div>
        )
    }
}
