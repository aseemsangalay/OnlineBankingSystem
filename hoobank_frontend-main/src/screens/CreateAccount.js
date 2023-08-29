import React, { useState, useEffect } from 'react';
import "../styles/createAccount.css";
import obs_logo from "../assets/logo.svg";
import { Link, useLocation, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import FormField from '../components/formField';
import { formatDate, getAccountNumber } from '../utils/dateUtil';

const CreateAccount = () => {

    const [form, setForm] = useState({
        title: '', first_name: '', middle_name: '', last_name: '',
        father_name: '',  aadhaar: '', email: '',
        permanent_address: '', residential_address: '',
        dob: '', is_locked: 'no', opening_date: formatDate(),
        mobile_no: '', account_number: getAccountNumber(),
        occupation: '', annual_income: '', agree: '',
        pan_no: '', account_type: 'savings', balance: '0'
    });

    const router = useHistory();
    const [err, setError] = useState("");

    const handleFormFieldChange = (fieldName, e) => {
        setForm({ ...form, [fieldName]: e.target.value })
    }

    const addAccount = async () => {
        console.log(form)
        if (!form.first_name || !form.last_name || !form.permanent_address || !form.mobile_no || !form.permanent_address
            || !form.residential_address || !form.aadhaar || !form.agree || !form.annual_income
            || !form.occupation || !form.email || !form.dob) {
            setError("Enter all fields!");
        } else if (form.mobile_no.length != 10) {
            setError("Mobile number should be 10 digits")
        } else if (form.aadhaar.length != 12) {
            setError("Aadhar number should be 12 digits")
        } else if (form.pan_no.length != 10) {
            setError("PAN number should be 10 digits")
        } else if (!form.email.includes("@")) {
            setError("Enter Valid email address")
        } else {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/add_account`, {
                method: "POST",
                body: JSON.stringify(form),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await res.json();
            console.log(data);
            if (res.status == 200) {
                router.push({
                    pathname: "/register",
                    search: data.account_number
                });
            }
        }
    }

    return (
        <div className='login_container'>
            <div className='login_bag'>
                <Link to="/">
                    <img className={"login_logo"} src={obs_logo} alt="logo" />
                </Link>
                <h2 style={{'color': '#313131', 'marginTop': '0'}}>Open an Account</h2>
                {err ? <span className='err_msg'>
                    <i style={{'color': '#fff'}} className='fa fa-exclamation-triangle'></i>
                    &ensp;{err}
                </span> : <span>&ensp;</span>}
                <div className='account_form_bag'>

                    <div>
                        <FormField 
                            labelName="Title *"
                            placeholder="Mr."
                            inputType="text"
                            value={form.title}
                            handleChange={(e) => handleFormFieldChange('title', e)}
                        />
                        <FormField 
                            labelName="First Name *"
                            placeholder="John"
                            inputType="text"
                            value={form.first_name}
                            handleChange={(e) => handleFormFieldChange('first_name', e)}
                        />

                        <FormField 
                            labelName="Middle Name"
                            placeholder="Wilson"
                            inputType="text"
                            value={form.middle_name}
                            handleChange={(e) => handleFormFieldChange('middle_name', e)}
                        />

                        <FormField 
                            labelName="Last Name *"
                            placeholder="Doe"
                            inputType="text"
                            value={form.last_name}
                            handleChange={(e) => handleFormFieldChange('last_name', e)}
                        />

                        <FormField 
                            labelName="Father's Name *"
                            placeholder="James Jacob"
                            inputType="text"
                            value={form.father_name}
                            handleChange={(e) => handleFormFieldChange('father_name', e)}
                        /> 

                    </div>

                    <div>
                        <FormField 
                            labelName="Aadhaar No *"
                            placeholder="XXXX XXXX XXXX"
                            inputType="text"
                            value={form.aadhaar}
                            handleChange={(e) => handleFormFieldChange('aadhaar', e)}
                        />      

                        <FormField 
                            labelName="Your PAN No *"
                            placeholder="XXXXXXXXX"
                            inputType="text"
                            value={form.pan_no}
                            handleChange={(e) => handleFormFieldChange('pan_no', e)}
                        />

                        <FormField 
                            labelName="Residential Address *"
                            placeholder="Enter your address here"
                            inputType="text"
                            isTextArea={true}
                            value={form.residential_address}
                            handleChange={(e) => handleFormFieldChange('residential_address', e)}
                        /> 

                        <FormField 
                            labelName="Permanent Address *"
                            placeholder="Enter your address here"
                            inputType="text"
                            isTextArea={true}
                            value={form.permanent_address}
                            handleChange={(e) => handleFormFieldChange('permanent_address', e)}
                        /> 

                    </div>

                    <div>

                        <FormField 
                            labelName="Date of Birth *"
                            placeholder="DD/MM/YYYY"
                            inputType="date"
                            value={form.dob}
                            handleChange={(e) => handleFormFieldChange('dob', e)}
                        />  

                        <FormField 
                            labelName="Your Mobile No *"
                            placeholder="9876543210"
                            inputType="text"
                            value={form.mobile_no}
                            handleChange={(e) => handleFormFieldChange('mobile_no', e)}
                        />

                        <FormField 
                            labelName="Your Email *"
                            placeholder="hello@gmail.com"
                            inputType="text"
                            value={form.email}
                            handleChange={(e) => handleFormFieldChange('email', e)}
                        />  

                        <FormField 
                            labelName="Your Occupation *"
                            placeholder="Govt. Officer"
                            inputType="text"
                            value={form.occupation}
                            handleChange={(e) => handleFormFieldChange('occupation', e)}
                        /> 

                        <FormField 
                            labelName="Annuual Income *"
                            placeholder="₹ 120000"
                            inputType="text"
                            value={form.annual_income}
                            handleChange={(e) => handleFormFieldChange('annual_income', e)}
                        />  
                          
                    </div> 

                </div>

                <div style={{'display': 'flex', 'margin': '10px'}}>
                    <input type="checkbox" id="agree" 
                    checked={form.agree == "yes"} onChange={
                        (e) => {
                            setForm({...form, ["agree"]: form.agree == "yes" ? "no" : "yes"})
                            console.log("checked")
                        }
                    } />
                    <label htmlFor='agree' style={{'color': '#313131'}}>
                        &ensp;I agree to terms & conditions *
                    </label> 
                </div>

                <button className='custom_btn' onClick={() => addAccount()} >ADD ACCOUNT</button>
            </div>
        </div>
    )
}

export default CreateAccount;