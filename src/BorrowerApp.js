import React, { useState } from 'react';
import './App.css';
import Bootstraptab from './Bootstraptab';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
    const [show, setShow] = useState(false);
    const [inputInterest, setInputInterest] = useState("");
    const handleClose = () => {
        console.log("closed");
        setShow(false);
    }
    const handleShow = () => setShow(true);

    const rowEvents = {
        onDoubleClick: (e, row, rowIndex) => {
          setInputInterest(row.interest);
          handleShow();
        }
    };

    const [showLoanApp, setShowLoanApp] = useState(false);

    const closeLoanApp = () => {
        setShowLoanApp(false);
    }
    const openLoanApp = () => setShowLoanApp(true);

    return ( 
	<div className = "App" >
        <h3 style = { { marginTop: 20 } } > Borrower App < /h3>
     
            <Button variant = "primary" onClick={openLoanApp}>Apply For Loan</Button>
            
        
	    <Bootstraptab tabName = "Current Loan Applications" columns = { loanAppCol } colData = { loanAppData } dataUrl= "/loadApps" noPage = { true } /> 
	    <Bootstraptab tabName = "Active Bids" columns = { bidCol } colData = { bidData } dataUrl= "/bids" rowEvents={ rowEvents }/> 
	    <Bootstraptab tabName = "Loans" columns = { loanCol } colData = { loanData } dataUrl="/loans" /> 
	    <Modal show = { showLoanApp } onHide = { closeLoanApp } >
            <Modal.Header closeButton >
                    <Modal.Title > Loan Application < /Modal.Title> 
	        </Modal.Header> 
	        <Modal.Body >
                <Form.Group controlId="formAmount">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control />
                </Form.Group>
                <Form.Group controlId="formcwExpireAt">
                    <Form.Label>Expire At</Form.Label>
                    <Form.Control />
                </Form.Group>
                <Form.Group controlId="formTerm">
                    <Form.Label>Term</Form.Label>
                    <Form.Control />
                </Form.Group>
                <Form.Group controlId="formPurpose">
                    <Form.Label>Purpose</Form.Label>
                    <Form.Control />
                </Form.Group>
	        </Modal.Body> 
	        <Modal.Footer>
                    <Button variant = "secondary" onClick = { closeLoanApp } >
                    Cancel 
	            </Button> 
	            <Button variant = "primary" onClick = { closeLoanApp } >
                    Submit 
	            </Button> 
	        </Modal.Footer> 
	    </Modal> 
	    <Modal show = { show } onHide = { handleClose } >
            <Modal.Header closeButton >
                    <Modal.Title > Accept Bid < /Modal.Title> 
	        </Modal.Header> 
	        <Modal.Body >
                <div className="form-group">
                    <label>Interest Rate (%):</label>
                    <input
                    type="text"
                    value={inputInterest}
                    name="inputInterest"
                    onChange={e => this.handleChange(e)}
                    className="form-control"
                    readOnly
                    />
                </div>

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
