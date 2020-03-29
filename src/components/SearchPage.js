import React, { Component } from 'react';
import axios from 'axios';
import {Button} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';



export class SearchPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           search:"", 
           stocks:[] 
        }
    }

    searchFunction=()=>{
        let data=""
        axios.get(`https://api.worldtradingdata.com/api/v1/stock_search?search_term=${this.state.search}&limit=50&page=1&api_token=PYVc2QIrlzChGtMqatIrdJyQUjuq0B4VzeKwwODGt3OtZJqrIPalXdVdblQG`)
        .then(response =>{
            data=response
            console.log(data);
            this.setState({stocks:data})
        })
    }
    updateSearch=(s)=>{
        let searchKey= s.target.value
        this.setState({search:searchKey})
    }
    
    render() {
        return (
            <div className="searchpage">

                <TextField id="outlined-secondary" 
                size="small" 
                variant="outlined" 
                label="Standard secondary" 
                onChange={this.updateSearch}  />

                <Button variant="contained" 
                className="btnstyle"
                size="small" 
                onClick={this.searchFunction}>
                Search</Button>

                {this.state.stocks.map((element)=>{
                    return <button>{element.data.data.name}</button>
                    
                })}
            </div>
        )
    }
}

export default SearchPage
