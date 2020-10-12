import React, {useState} from 'react';
import BorrowerApp from './BorrowerApp'
import LenderApp from './LenderApp'


const bidData = [{
    lenderId: 1,
    bidAt: "11/10/2020",
    loanAppId: 1,
    amount: 1000,
    term: 30,
    interest: 18
  },
  {
    lenderId: 1,
    bidAt: "11/20/2020",
    loanAppId: 1,
    amount: 1000,
    term: 30,
    interest: 25
  },
  {
    lenderId: 1,
    bidAt: "11/25/2020",
    loanAppId: 1,
    amount: 1000,
    term: 30,
    interest: 30
  }
];
  
function App() {
    const [toggle, setToggle] = useState(true);

    const switchApp = ()=>{
        setToggle(!toggle);
        return false;
    }
    if (toggle) {
        return (
            <div>
            <a href="" onClick={ switchApp }>Lender</a> 
            <BorrowerApp bidData = {bidData} />
            </div>
        );
    } else {
        return (
            <div>
            <a href="#" onClick={ switchApp }>Borrower</a> 
            <LenderApp bidData = {bidData} />
            </div>
        );
    }

}

export default App;
