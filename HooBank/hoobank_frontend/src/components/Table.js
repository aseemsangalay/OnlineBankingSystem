import React, { useState, useEffect } from 'react';
import noReults from '../assets/no_results.png'
import { Link } from 'react-router-dom';
import '../styles/table.css';
import logo from '../assets/logo.svg' 
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { formatReverseDate } from '../utils/dateUtil';

function Table({ acc_no, setSavings, setSpendings }) {

    const [invoices, setInvoices] =  useState([]);
    const [searchQuery, setSearchQuery] =  useState('');
    const [searchResults, setSearchResults] = useState(new Set(invoices));
    const [from, setFrom] =  useState('2023-07-01');
    const [to, setTo] =  useState(formatReverseDate());

    let navigate = useHistory();

    useEffect(() => {
        async function getTransactionsByUserId(){
            var spend = 0;
            var save = 0;
            try{
                const res = await fetch(`${process.env.REACT_APP_API_URL}/user_transactions/${acc_no}`)
                const data = await res.json()
                console.log(data);
                setInvoices(data)
                setSearchResults(data)
                data.map(tran => {
                    if (tran.senderAccNumber == acc_no){
                        spend += parseFloat(tran.amount);
                    } else {
                        save += parseFloat(tran.amount);
                    }
                })
                setSavings(save);
                setSpendings(spend)
            } catch (error){
                console.log(error)
            }
        }

        getTransactionsByUserId()
    }, [])

    const getSearchResults = async () => {
        let queryR = new Set();
        let dateR = new Set();
        invoices.filter(item => {
          if (item.senderAccNumber.toLowerCase().includes(searchQuery.toLowerCase())){
              queryR.add(item)
          }
        })
        invoices.filter(item => {
            if (item.receiverAccNumber.toLowerCase().includes(searchQuery.toLowerCase())){
                queryR.add(item)
            }
          })
        invoices.filter(item => {
          if (item.amount.toLowerCase().includes(searchQuery.toLowerCase())){
            queryR.add(item)
          }
        })
        invoices.filter(item => {
            if (item.transaction_type.toLowerCase().includes(searchQuery.toLowerCase())){
              queryR.add(item)
            }
        })
        // date range filter
        invoices.filter(item => {
            var invoice_date = item.transaction_date.split("-").reverse().join("-")
            invoice_date = new Date(invoice_date);
            var start = new Date(from);
            var end = new Date(to);
            console.log(invoice_date >= start && invoice_date <= end)
            if (invoice_date >= start && invoice_date <= end){
                dateR.add(item)
            }
        })
        // Setting default resullts
        if (searchQuery === "") {
            queryR = new Set(invoices)
        }
        if (from === '2018-01-01' && to === formatReverseDate()){
            dateR = new Set(invoices)
        }
        let intersect = new Set([...queryR].filter(i => dateR.has(i)))
        setSearchResults(intersect)
        // setSearchResults(queryR)
    }

    useEffect(() => {
        getSearchResults()
    }, [searchQuery, from, to])

    return (
        <>
            <div className="table-wrapper">
                <div>
                    {/* <Link to="/">
                        <img className="hoo_logo" src={logo} alt="logo"/>
                    </Link> */}
                    <h3>Transactions</h3>
                    <div className="search_box">
                        <input className="search" type="search" value={searchQuery} 
                        placeholder="Search transactions..."
                        onChange={e => {setSearchQuery(e.target.value);}}/>
                        <label>
                            {/* <span>From</span> */}
                            <input className="from" type="date" value={from}
                            onChange={(e) => setFrom(e.target.value)} />
                        </label>
                        <i style={{'margin': '0 7px'}} className='fas fa-exchange-alt'></i>
                        <label>
                            {/* <span>To</span> */}
                            <input className="to" type="date" value={to}
                            onChange={(e) => setTo(e.target.value)}/>
                        </label>
                    </div>
                </div>
                <div style={{'padding': '10px 8px', 'paddingLeft': '15px'}}>
                    <b className='heading'>ACCOUNT NO</b>
                    <b className='heading'>AMOUNT</b>
                    <b className='heading'>DATE</b>
                    <b className='heading'>TYPE</b>
                    <b className='heading'>VIEW</b>
                </div>
                {[...searchResults].length ? [...searchResults].map((invoice, i) => {
                    return(
                        <div className="bill">
                            <span className='id_class'>
                                {invoice.senderAccNumber == acc_no ? invoice.receiverAccNumber : invoice.senderAccNumber}
                            </span>
                            <b className='id_class' style={{'color': '#313131'}}>
                                ₹ {invoice.amount} &ensp;
                                {invoice.senderAccNumber == acc_no ? 
                                <i style={{'color': '#ff355b'}} className='fas fa-arrow-down'></i> : 
                                <i style={{'color': '#47D764'}} className='fas fa-arrow-up'></i>}
                            </b>
                            <span className='id_class'>{invoice.transaction_date}</span>
                            <span className='id_class'>{invoice.transaction_type}</span>
                            <span className='id_class'>
                                <Link to={`/transaction-status?${invoice.transaction_id}`} 
                                style={{'textDecoration': 'none', 'color': 'black'}}>
                                    <i className="fa fa-eye"></i>
                                </Link>
                            </span>
                        </div>
                    )
                    }):
                    <article className="noResult">
                        <img src={noReults} alt="no_results" />
                    </article>
                }
            </div>
        </>
    )
}

export default Table;