import React, { useState } from 'react';
import FormField from '../components/formField';
import Toast from '../components/Toast';
import "../styles/login.css";
import obs_logo from "../assets/logo.svg";
import { Link, useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { getCustomerId } from '../utils/customerIdUtil';
import { formatDate } from '../utils/dateUtil';
  
const Register = () => {

    const location = useLocation();

    const [form, setForm] = useState({
        account_number: location.search.substring(1),
        password: '',
        customerId: getCustomerId(),
        registration_date: formatDate()
    });

    const router = useHistory();

    const [toast, setToast] = useState(location.search.substring(1).length > 10 ? true : false);
    const [err, setError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleFormFieldChange = (fieldName, e) => {
        setForm({ ...form, [fieldName]: e.target.value })
    }

    const register = async () => {

        if (!form.account_number || !form.password || !form.customerId || !form.registration_date) {
            setError("Enter all required fields");
        } else if (form.password.length < 8) {
            setError("Password should be atleast 8 characters");
        } else if (form.password != confirmPassword){
            setError("Password doesn't match. Try again");
        } else {

            const res = await fetch(`${process.env.REACT_APP_API_URL}/add_account/${location.search.substring(1)}`, {
                method: "PUT",
                body: JSON.stringify(form),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await res.json();
            console.log(data)
            if (res.status == 200) {
                router.push({
                    pathname: '/login',
                    search: data.customerId
                });
            }
        }

    }

    return (
        <div className='login_container' style={{'marginTop': '50px'}}>
            {toast ? 
                <Toast type={"success"} isActive={true}
                message={`Your Acc No: ${location.search.substring(1)}`} /> : null
            }
            <div className='login_bag'>
                <Link to="/">
                    <img className={"login_logo"} src={obs_logo} alt="logo" />
                </Link>
                <h2 style={{'color': '#313131'}}>Register for Internet Banking</h2>
                {err ? <span className='err_msg'>
                    <i style={{'color': '#fff'}} className='fa fa-exclamation-triangle'></i>
                    &ensp;{err}
                </span> : <span>&ensp;</span>}
                <div className='form_bag'>
                    <FormField 
                        labelName="Your Account No. *"
                        placeholder="XXXXXXX234"
                        inputType="text"
                        value={form.account_number}
                        handleChange={(e) => handleFormFieldChange('account_number', e)}
                    />

                    <FormField 
                        labelName="Your Password *"
                        placeholder="xxxxxx"
                        inputType="password"
                        value={form.password}
                        handleChange={(e) => handleFormFieldChange('password', e)}
                    />

                    <FormField 
                        labelName="Confirm Password *"
                        placeholder="xxxxxx"
                        inputType="password"
                        value={confirmPassword}
                        handleChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>

                <button className='custom_btn' onClick={() => register()} >REGISTER</button>
                <span className='not_acc'>Don't have bank account? &ensp;
                    <b className='create_acc' onClick={() => router.push("/create-account")}>Create Account</b>
                </span>
            </div>
        </div>
    );
}
export default Register;