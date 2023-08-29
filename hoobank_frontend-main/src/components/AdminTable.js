import React, { useState, useEffect } from 'react';
import noReults from '../assets/no_results.png'
import { Link, useHistory } from 'react-router-dom';
import '../styles/table.css';
import logo from '../assets/logo.svg' 
import Toast from '../components/Toast';

function AdminTable({ setAccountNo, setAccount }) {

    const [invoices, setInvoices] =  useState([]);
    const [searchQuery, setSearchQuery] =  useState('');
    const [searchResults, setSearchResults] = useState(new Set(invoices));
    const [toast, setToast] = useState(false);

    const router = useHistory();

    useEffect(() => {
        async function getTransactionsByUserId(){
            try{
                const res = await fetch(`${process.env.REACT_APP_API_URL}/accounts`)
                const data = await res.json()
                console.log(data);
                setInvoices(data)
                setSearchResults(data)

            } catch (error){
                console.log(error)
            }
        }

        getTransactionsByUserId()
    }, [])

    const getSearchResults = async () => {
        let queryR = new Set();
        invoices.filter(item => {
          if (item.mobile_no.toLowerCase().includes(searchQuery.toLowerCase())){
              queryR.add(item)
          }
        })
        invoices.filter(item => {
          if (item.account_number.toLowerCase().includes(searchQuery.toLowerCase())){
            queryR.add(item)
          }
        })
        invoices.filter(item => {
            if (item.pan_no.toLowerCase().includes(searchQuery.toLowerCase())){
              queryR.add(item)
            }
          })
        if (searchQuery === "") {
            queryR = new Set(invoices)
        }
        setSearchResults(queryR)
    }

    useEffect(() => {
        getSearchResults()
    }, [searchQuery]);

    const deleteAccount = async (acc_no, e) => {
        e.preventDefault();
        try{
            const res = await fetch(`${process.env.REACT_APP_API_URL}/delete_account/${acc_no}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await res.json();
            console.log(data);

        } catch (error){
            console.log(error)
        }
    }

    async function getAccount(acc_no) {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/account/${acc_no}`)
        const data = await res.json();
        console.log(data);
        setAccount(data)
    }

    return (
        <>
            {toast ? 
                <Toast type={"success"} isActive={true}
                message={`Account deleted successfully. Refresh to see updates`} /> : null
            }
            <div className="table-wrapper">
                <div>
                    <Link to="/">
                        <img className="hoo_logo" src={logo} alt="logo"/>
                    </Link>
                    <h3>Account Details</h3>
                    <div className="search_box">
                        <input className="search" type="search" value={searchQuery} 
                        placeholder="Search accounts..."
                        onChange={e => {setSearchQuery(e.target.value);}}/>
                    </div>
                </div>
                <div style={{'padding': '10px 8px', 'paddingLeft': '15px'}}>
                    <b className='heading'>ACCOUNT NO</b>
                    <b className='heading'>BALANCE</b>
                    <b className='heading'>NAME</b>
                    <b className='heading'>MOBILE</b>
                    <b className='heading'>ACTION</b>
                </div>
                {[...searchResults].length ? [...searchResults].map((invoice, i) => {
                    return(
                        <div className="bill">
                            <span className='id_class'>
                                {invoice.account_number}
                            </span>
                            <b className='id_class' style={{'color': '#313131'}}>
                                ₹ {invoice.balance} &ensp;
                            </b>
                            <span className='id_class'>{invoice.first_name + " " + invoice.last_name}</span>
                            <span className='id_class'>{invoice.mobile_no}</span>
                            <span className='id_class'>
                                 
                                <i style={{'color': '#999'}} className="fa fa-edit"
                                onClick={() => {
                                    getAccount(invoice.account_number);
                                }}></i>
                                <i style={{'color': '#999'}} className="fa fa-trash" 
                                onClick={(e) => {
                                    deleteAccount(invoice.account_number, e);
                                    setToast(true);
                                }}>
                                </i>
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

export default AdminTable;