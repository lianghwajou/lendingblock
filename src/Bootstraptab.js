import React, { Component } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import axios from 'axios';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
export class Bootstraptab extends Component {
    state = {
        data: [],
        columns: this.props.columns
    }
    componentDidMount() {
        this.setState({
            data: this.props.colData
        });
        /*
                        axios.get('http://localhost:51760/Api/Emp/employee').then(response => {    
                          console.log(response.data);    
                          this.setState({    
                                employee: response.data    
                          });    
                        });
        */
    }
    render() {
        return ( 
	    <div className = "container" style = { { marginTop: 20 } } >
                <div class = "row" className = "hdr" >
                    <div class = "col-sm-12 btn btn-info" > { this.props.tabName } 
	            </div>     
	        </div>
	        <div style = { { marginTop: 20 } } >
                    <BootstrapTable striped hover keyField = { this.state.columns[0].dataField } data = { this.state.data } columns = { this.state.columns } pagination = { (this.props.noPage ? false : paginationFactory()) } />   
	        </div>
	    </div>  
        )
    }
}

export default Bootstraptab
