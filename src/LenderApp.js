import React, {
    useState
} from 'react';
import logo from './logo.svg';
import './App.css';
import Bootstraptab from './Bootstraptab';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

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
    },
    {
        dataField: 'status',
        text: 'Status',
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
    status: "active"
}, {
    id: 2,
    borrowerId: "John",
    amount: 1000,
    expireBy: "12/1/2020",
    term: 40,
    purpose: "rent",
    status: "active"
}];

const bidCol = [{
    dataField: "loanAppId",
    text: "Loan App ID"
}, {
    dataField: "amount",
    text: "Amount"
}, {
    dataField: "term",
    text: "Term",
}, {
    dataField: "interest",
    text: "Interest(%)"
}];

const bidData = [{
    loanAppId: 1,
    amount: 1000,
    term: 30,
    interest: 18
}];

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
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return ( 
	<div className = "App" > 
	    <h3 style = { { marginTop: 20 } } > Lender App </h3> 
	    <Bootstraptab tabName = "Loan Applications" columns = { loanAppCol } colData = { loanAppData } /> 
	    <Bootstraptab tabName = "Active Bids" columns = { bidCol } colData = { bidData } /> 
	    <Bootstraptab tabName = "Loans" columns = { loanCol } colData = { loanData } /> 
	    <Modal show = { false } onHide = { handleClose } >
                <Modal.Header closeButton >
                    <Modal.Title > Submit Bid < /Modal.Title> 
	        </Modal.Header> 
	        <Modal.Body > Woohoo, you 're reading this text in a modal! 
	        </Modal.Body> 
	        <Modal.Footer>
                    <Button variant = "secondary" onClick = { handleClose } >
                    Cancel 
	            </Button> 
	            <Button variant = "primary" onClick = { handleClose } >
                    Submit 
	            </Button> 
	        </Modal.Footer> 
	    </Modal> 
	</div>
    );
}

export default App;
