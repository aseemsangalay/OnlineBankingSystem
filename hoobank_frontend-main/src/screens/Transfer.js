import React, { useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import jwt_decoder from 'jwt-decode';
// Importing all components
import FormField from '../components/formField';
import Popup from '../components/Popup';
import Toast from '../components/Toast';
import SideBar from '../components/SideBar';
import LogoutButton from '../components/LogoutButton';
// Importing all images
import obs_logo from "../assets/logo.svg";
import bill_img from "../assets/bill.png";
import profile from "../assets/profile.svg";
// Importing styles
import "../styles/transfer.css";
// Importing utility functions
import { formatDate } from '../utils/dateUtil';
  
const Transfer = () => {

    const [beneficiaries, setBeneficiaries] = useState([]);
    const [accNo, setAccNo] = useState("");
    const [toast, setToast] = useState(false);
    const [err, setError] = useState("");
    const [popErr, setPopErr] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [receiverAccNumberConfirm, setReceiverAccNumberConfirm] = useState("");

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    const router = useHistory();
    const location = useLocation();

    useEffect(() => {
        setAccNo(location.search.split("?")[1]);
        console.log(location.search.split("?"))
    }, [location])

    const [form, setForm] = useState({
        senderAccNumber: location.search.split("?")[1],
        receiverAccNumber: '',
        amount: '',
        description: '',
        transaction_type: '',
        transaction_date: formatDate()
    });

    const [beneForm, setBeneForm] = useState({
        senderAccNumber: location.search.split("?")[1],
        receiver_acc_number: '',
        nick_name: '',
        payee_name: '',
        bank_name: 'Hoo Bank'
    });

    const handleBeneFormFieldChange = (fieldName, e) => {
        setBeneForm({ ...beneForm, [fieldName]: e.target.value })
    }

    useEffect(() => {

        const jwt_token = localStorage.getItem('hoobank_jwt');
        if (jwt_token) {
            const decoded = jwt_decoder(jwt_token);
            console.log(decoded);
            if (decoded.exp * 1000 < Date.now()) {
                router.push({
                    pathname : "/login",
                    search: "expired"
                });
            }
        }

        async function getBeneficiaries(){
            try{
                console.log('accNo', accNo)
                const res = await fetch(`${process.env.REACT_APP_API_URL}/user_payees/${location.search.split("?")[1]}`)
                const data = await res.json()
                console.log(data);
                setBeneficiaries(data)
            } catch (error){
                console.log(error)
            }
        }

        getBeneficiaries();
    }, [isOpen])

    const handleFormFieldChange = (fieldName, e) => {
        setForm({ ...form, [fieldName]: e.target.value })
    }

    const pay = async () => {
        const balance = location.search.split("?")[2];
        if (!form.transaction_type || !form.description || !form.receiverAccNumber || !form.amount) {
            setError("Enter all required fields");
        }
        else if (parseFloat(form.amount) <= 0) {
            setError("Enter valid amount!");
        }
        else if (parseFloat(form.amount) > 200000) {
            setError("Maximum payment limit is ₹ 200,000");
        }
        else if (parseFloat(form.amount) > parseFloat(balance)) {
            setError("Not sufficiet balance in your account");
        }
         else {
            console.log(form)
            const res = await fetch(`${process.env.REACT_APP_API_URL}/add_transaction`, {
                method: "POST",
                body: JSON.stringify(form),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await res.json();
            console.log(data)
            if (res.status == 200) {
                router.push({
                    pathname: '/transaction-status',
                    search: data.transaction_id
                });
            }
        }

    }

    const addBeneficiary = async () => {
        if (!beneForm.receiver_acc_number || !beneForm.nick_name || !beneForm.senderAccNumber || !beneForm.payee_name) {
            setPopErr("Enter all required fields");
            // alert("Enter all required fields");
        }
        else if (beneForm.receiver_acc_number == beneForm.senderAccNumber) {
            setPopErr("Can't add yourself as payee");
        }
        else if (beneForm.receiver_acc_number != receiverAccNumberConfirm) {
            setPopErr("Receiver Account Number doesn't match!");
        }
         else {
            
            const res = await fetch(`${process.env.REACT_APP_API_URL}/add_payee`, {
                method: "POST",
                body: JSON.stringify(beneForm),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await res.json();
            console.log(data)
            if (res.status == 200) {
                togglePopup();
                setToast(true)
            }
        }
    }

    return (
    <div style={{'display': 'flex'}}>
        {isOpen && <Popup style={{'zIndex': '10'}}
        content={
        <div style={{'display': 'flex', 'justifyContent': 'space-evenly', 'overflow': 'hidden'}}>
            <div className="form" style={{'display': 'block'}}>
                <figure>
                <img style={{'height': '40px', 'width': 'auto',
                'background': '#313131', 'padding': '14px', 'borderRadius': '6px'}} 
                src={obs_logo} alt="login-pic"/>
                </figure>

                {popErr ? <article className='err_msg' style={{'marginBottom': '10px'}}>
                    <i style={{'color': '#fff'}} className='fa fa-exclamation-triangle'></i>
                    &ensp;{popErr}
                </article> : <article>&ensp;</article>}

                <FormField 
                    labelName="Beneficiary's Account No. *"
                    placeholder="XXXXXX6712"
                    inputType="text"
                    value={beneForm.receiver_acc_number}
                    handleChange={(e) => handleBeneFormFieldChange('receiver_acc_number', e)}
                />

                <FormField 
                    labelName="Confirm Account No. *"
                    placeholder="XXXXXX6712"
                    inputType="text"
                    value={receiverAccNumberConfirm}
                    handleChange={(e) => setReceiverAccNumberConfirm(e.target.value)}
                />

                <FormField 
                    labelName="Payee Name *"
                    placeholder="John Wick"
                    inputType="text"
                    value={beneForm.payee_name}
                    handleChange={(e) => handleBeneFormFieldChange('payee_name', e)}
                />

                <FormField 
                    labelName="Nick Name "
                    placeholder="Step Brother"
                    inputType="text"
                    value={beneForm.nick_name}
                    handleChange={(e) => handleBeneFormFieldChange('nick_name', e)}
                />          
                
                <button className='custom_btn' onClick={(e) => addBeneficiary(e)}>ADD BENEFICIARY</button>
            </div>
        </div>}
        handleClose={togglePopup}
        />}
        {toast ? 
            <Toast type={"success"} isActive={true}
            message={"Added beneficiary succesfully!"} /> : null
        }
        <SideBar initial="transfer" />
        <div style={{'width': '100%'}}>
            <div className='header'>
                <div style={{'fontSize': '23px', 'color': '#313131',
                'marginLeft': '25px', 'fontWeight': 'bold'}}>
                    Fund Transfer
                </div>
                <div style={{'display': 'flex', 'alignItems': 'center'}}>
                    <img style={{'filter': 'grayscale(1)', 'marginRight': '15px'}}
                    src={profile} alt="profile" />
                    <LogoutButton theme="light" no_text={true} />
                </div>
            </div>
            <div className='body_cont' style={{'justifyContent': 'center', 'alignItems': 'center'}}>
                <div className='transfer_login_bag'>
                    <Link to="/">
                        <img className={"login_logo"} style={{'marginBottom': '0px'}}
                        src={obs_logo} alt="logo" />
                    </Link>
                    {err ? <span className='err_msg' style={{'margin': '15px 0'}}>
                        <i style={{'color': '#fff'}} className='fa fa-exclamation-triangle'></i>
                        &ensp;{err}
                    </span> : <span>&ensp;</span>}
                    <div style={{'display': 'flex', 'justifyContent': 'space-around', 'width': '100%'}}>
                        <div className='transfer_form_bag'>
                            <div className='benefs_wrap'>
                                <select className='benefs'
                                onChange={(e) => handleFormFieldChange("receiverAccNumber", e)}>
                                    <option  value="none">--- select beneficiary ---</option>
                                    {beneficiaries.map(bene => (
                                        <option key={bene.payee_id} value={bene.receiver_acc_number}>
                                            {bene.payee_name} ({bene.nick_name})
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <article className='account_info' style={{'marginTop': '5px'}}>
                                Not found?&ensp;&ensp; 
                                <b style={{'cursor': 'pointer'}} onClick={() => togglePopup()}>
                                    Add beneficiary
                                </b>
                            </article>

                            <FormField 
                                labelName="Amount *"
                                placeholder="₹ 500"
                                inputType="text"
                                value={form.amount}
                                handleChange={(e) => handleFormFieldChange('amount', e)}
                            />
                            <div>&ensp;</div>
                            <label className='choose_method'>Choose Payment Method</label>
                            <div style={{'margin': '8px 0'}}>
                                <input
                                    type="radio"
                                    name="type"
                                    value="IMPS"
                                    id="IMPS"
                                    checked={form.transaction_type === "IMPS"}
                                    onChange={(e) => handleFormFieldChange('transaction_type', e)}
                                />
                                <label className='payment_method' htmlFor="IMPS">IMPS</label>

                                <input
                                    type="radio"
                                    name="type"
                                    value="Neft"
                                    id="Neft"
                                    checked={form.transaction_type === "Neft"}
                                    onChange={(e) => handleFormFieldChange('transaction_type', e)}
                                />
                                <label className='payment_method' htmlFor="Neft">Neft</label>

                                <input
                                    type="radio"
                                    name="type"
                                    value="RTGS"
                                    id="RTGS"
                                    checked={form.transaction_type === "RTGS"}
                                    onChange={(e) => handleFormFieldChange('transaction_type', e)}
                                />
                                <label className='payment_method' htmlFor="RTGS">RTGS</label>

                            </div>

                            <FormField 
                                labelName="Remarks *"
                                placeholder="Bank deposit"
                                inputType="text"
                                value={form.description}
                                handleChange={(e) => handleFormFieldChange('description', e)}
                            />
                        </div>
                        <div>
                            <img className="bill_img" src={bill_img} alt="logo" />
                        </div>
                    </div>

                    <button className='custom_btn' onClick={() => pay()} >PAY</button>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Transfer;