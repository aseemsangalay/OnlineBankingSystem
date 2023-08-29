import React, { useState, useEffect } from 'react';
import "../styles/transactionStatus.css";
import obs_logo from "../assets/logo.svg";
import logo_bg from "../assets/logo_bg.png";
import favicon from "../assets/logo192.png";
import { Link, useLocation, useHistory } from "react-router-dom/cjs/react-router-dom.min";
  
const TransactionStatus = () => {

    const [transaction, setTransaction] = useState("");
    const location = useLocation();
    const router = useHistory();

    useEffect(() => {
        async function getTransaction(){
            try{
                const res = await fetch(`${process.env.REACT_APP_API_URL}/transaction/${location.search.substring(1)}`)
                const data = await res.json()
                console.log(data);
                setTransaction(data)
            } catch (error){
                console.log(error)
            }
        }

        getTransaction();

    }, [])

    return (
        <div className='status_bag' id='printer' style={{'color': '#313131'}}>
            <div className='status_wrap'>
               
                <div className='upper_div'>
                    <th className='only_print'><img className="login_logo" src={obs_logo} alt="logo" /></th>
                    <div style={{alignSelf: 'center', fontSize: '60px'}}>
                        <i style={{'color': "#47D764", 'border': '10px solid #47d7645e',
                        'borderRadius': '50%'}} className={"fas fa-check-circle"}></i>
                    </div>
                    <h2 className='success'>Payment Successful</h2>
                    <article className='account_info'>
                    Transaction ID &ensp;<b>{transaction.transaction_id}</b>
                    </article>
                </div>
                <div className='mid_div'>
                    <div className='account_wrap'>
                        <span className='account_info' style={{'paddingLeft': '2px'}}>Payer Acc No</span>
                        <article className='account_number'>{transaction.senderAccNumber}&ensp;&ensp;&ensp;</article>
                    </div>
                    <span className='dot_line'>--------</span>
                    <img className="favicon" src={logo_bg} alt="logo" />
                    <span className='dot_line'>--------</span>
                    <div className='account_wrap'>
                        <span className='account_info' style={{'paddingLeft': '2px'}}>&ensp;&ensp; Payee Acc No</span>
                        <article className='account_number'>&ensp;&ensp;{transaction.receiverAccNumber}</article>
                    </div>
                    <article className='account_number'></article>
                </div>
                <div className='lower_div'>
                    <article className='trans_info_heading'>Transaction Information</article>
                    <div className='trans_infos'>
                        <div className='trans_labels'>
                            <article className='trans_info_label'>Transaction type</article>
                            <article className='trans_info_label'>Amount</article>
                            <article className='trans_info_label'>Transaction date</article>
                            <article className='trans_info_label'>Remarks</article>
                        </div>

                        <div className='trans_values'>
                            <span className='trans_info_value'>{transaction.transaction_type}</span>
                            <span className='trans_info_value' style={{'fontSize': '18px',
                            'fontWeight': 'bold'}}>₹ {transaction.amount}</span>
                            <span className='trans_info_value'>{transaction.transaction_date}</span>
                            <span className='trans_info_value'>{transaction.description}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* {JSON.stringify(transaction, null, 2)} */}
            <div style={{'display': 'flex', 'alignItems': 'center'}}>
                <button className='custom_btn no_print' style={{'marginTop': '23px'}}
                onClick={() => window.print()}>PRINT</button>
                <span className='go_to no_print'
                onClick={() => router.push("/dashboard")}>
                    <img className="small_img" src={logo_bg} alt="logo" />
                    <span>&ensp;Dashboard</span>
                </span>
            </div>
        </div>
    );
}
export default TransactionStatus;