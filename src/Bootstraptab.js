import React, { Component } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import axios from 'axios';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
export class Bootstraptab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            columns: props.columns
        }
    }


    componentDidMount() {
        this.setState({
            data: this.props.colData
        });
    }
    
    render() {
        return ( 
	    <div className = "container" style = { { marginTop: 20 } } >
                <div class = "row" className = "hdr" >
                    <div class = "col-sm-12 btn btn-info" > { this.props.tabName } 
	            </div>     
	        </div>
	        <div style = { { marginTop: 20 } } >
                    <BootstrapTable striped hover keyField = { this.state.columns[0].dataField } data = { this.state.data } columns = { this.state.columns } rowEvents = { this.props.rowEvents } pagination =  { paginationFactory() } />   
	        </div>
	    </div>  
        )
    }
}

export default Bootstraptab
