import React from 'react';
import logo from './logo.svg';
import './App.css';
import Bootstraptab from './Bootstraptab';

const loanAppCol = [{
        dataField: "id",
        text: "Loan App ID",
    }, {
        dataField: 'borrowerId',
        text: 'Borrower',
    },
    {
        dataField: 'amount',
        text: 'Amount',
        sort: true
    }, {
        dataField: 'expireBy',
        text: 'Expire at',
        sort: true
    },
    {
        dataField: 'term',
        text: 'Term',
        sort: true
    },
    {
        dataField: 'purpose',
        text: 'Purepose',
        sort: true
    }
];
const loanAppData = [{
    id: 1,
    borrowerId: "John",
    amount: 1000,
    expireBy: "12/1/2020",
    term: 30,
    purpose: "rent",
}];

const bidCol = [{
    dataField: "lenderId",
    text: "Lender ID"
}, {
    dataField: "bitAt",
    text: "Bid At"
}, {
    dataField: "interest",
    text: "Interest(%)"
}];

const bidData = [{
        lenderId: 1,
        bitAt: "11/10/2020",
        interest: 18
    },
    {
        lenderId: 1,
        bitAt: "11/20/2020",
        interest: 25
    },
    {
        lenderId: 1,
        bitAt: "11/25/2020",
        interest: 30
    }
];

const loanCol = [{
    dataField: "loanId",
    text: "Loan ID"
}, {
    dataField: "amount",
    text: "Amount"
}, {
    dataField: "term",
    text: "Term",
}, {
    dataField: "issueDate",
    text: "Issue At",
}, {
    dataField: "matureDate",
    text: "Mature At",
}, {
    dataField: "interest",
    text: "Interest(%)"
}];

const loanData = [{
    loanId: 1,
    amount: 1000,
    term: 30,
    issueDate: "1/1/2020",
    matureDate: "1/30/2020",
    interest: 18
}];

function App() {
    return ( 
	<div className = "App" >
            <h3 style = { { marginTop: 20 } } > Borrower App < /h3> 
	    <Bootstraptab tabName = "Current Loan Applications" columns = { loanAppCol } colData = { loanAppData } noPage = { true } /> 
	    <Bootstraptab tabName = "Active Bids" columns = { bidCol } colData = { bidData } /> 
	    <Bootstraptab tabName = "Loans" columns = { loanCol } colData = { loanData } /> 
	</div>
    );
}

export default App;
