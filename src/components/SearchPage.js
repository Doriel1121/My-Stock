import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Button} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';




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
            data=response.data.data
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
                <h1>Search</h1>

                <TextField id="outlined-secondary" 
                size="small" 
                variant="outlined" 
                label="Standard secondary" 
                onChange={this.updateSearch}  />

                <Button  
                className="btnstyle"
                size="small" 
                onClick={this.searchFunction}>
                <img className="logosize" src="https://img.icons8.com/pastel-glyph/64/000000/search--v2.png"/></Button>

                <Table  aria-label="simple table">
                {this.state.stocks.map((element)=>{
                    var stock=`/info/${element.symbol}`
                    return  <TableRow>
                        <TableCell align="left">
                        <Link style={{textDecoration:"none"}} to = {stock} ><Button >{element.name}</Button></Link><br/>
                        </TableCell>                        
                        </TableRow>
                })}
                </Table>
                </div>
        )
    }
}

export default SearchPage
