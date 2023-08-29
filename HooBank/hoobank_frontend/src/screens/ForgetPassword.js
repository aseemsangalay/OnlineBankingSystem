import React, { useEffect, useState } from 'react';
import jwt_decoder from 'jwt-decode';
import { Link, useHistory ,useLocation } from "react-router-dom/cjs/react-router-dom.min";
import "../styles/login.css";
// Importing all components
import FormField from '../components/formField';
import Toast from '../components/Toast';
// Importing all images
import obs_logo from "../assets/logo.svg";

  
const ForgetPassword = () => {

    const location = useLocation();

    const [form, setForm] = useState({
        customerId: "",
        password: ''
    });

    const [toast, setToast] = useState(location.search.substring(1).length > 10 ? true : false);
    const [err, setError] = useState("");
    const [otp, setOtp] = useState(Math.floor(Math.random() * 9000 + 1000));
    const [otpInput, setOtpInput] = useState("");
    const [passwordPage, setPasswordPage] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState("");

    const router = useHistory();
    

    // useEffect(() => {
    //     const jwt_token = localStorage.getItem('hoobank_jwt');
    //     if (jwt_token != null){
    //         const decoded = jwt_decoder(jwt_token);
        
    //         console.log(decoded);
    //         if (decoded.exp * 1000 > Date.now()){
    //             router.push({
    //                 pathname : "/"
    //             });
    //         }
    //     }
    // }, [])

    const handleFormFieldChange = (fieldName, e) => {
        setForm({ ...form, [fieldName]: e.target.value })
    }

    const changePassword = async () => {

        if (form.password.length < 8) {
            setError("Password should be atleast 8 characters");
        } else if (form.password != confirmPassword){
            setError("Password doesn't match. Try again");
        } else {

        const res = await fetch(`${process.env.REACT_APP_API_URL}/change_password/${form.customerId}`, {
                method: "PUT",
                body: JSON.stringify(form),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await res.json();
            console.log(data);
            if (res.status == 200) {
                router.push({
                    pathname: '/login'
                });
            }
        }

    }

    return (
        <div className='login_container'>
            {toast ?  
                <Toast type={"info"} isActive={true}
                message={`Your OTP for changing password is ${otp}`} /> : null 
            }
            <div className='login_bag'>
                <Link to="/">
                    <img className={"login_logo"} src={obs_logo} alt="logo" />
                </Link>
                {err ? <span className='err_msg'>
                    <i style={{'color': '#fff'}} className='fa fa-exclamation-triangle'></i>
                    &ensp;{err}
                </span> : <span>&ensp;</span>}
                {!passwordPage ?
                <div className='form_bag'>
                    <FormField 
                        labelName="Your Customer ID *"
                        placeholder="XXXXXgHz"
                        inputType="text"
                        value={form.customerId}
                        handleChange={(e) => handleFormFieldChange('customerId', e)}
                    />

                    <button className='custom_btn' onClick={() => {
                        if (form.customerId.length != 8) {
                            setError("Enter Valid Customer ID")
                        } else {
                            setToast(true);
                        }
                    }} >
                        GET OTP
                    </button>

                    {toast ?
                    <div>
                        <FormField 
                        labelName="Your OTP here *"
                        placeholder="1 2 3 4"
                        inputType="text"
                        value={otpInput}
                        handleChange={(e) => setOtpInput(e.target.value)}
                        />
                        <button className='custom_btn' onClick={() => {
                            if (otp != otpInput){
                                setError("Incorrect OTP. Please try again!")
                            } else {
                                setPasswordPage(true)
                            }
                        }} >CONTINUE</button>
                    </div> : null}
                </div> : 
                <div className='form_bag'>
                    <FormField 
                        labelName="New Password *"
                        placeholder="xxxxxx"
                        inputType="password"
                        value={form.password}
                        handleChange={(e) => handleFormFieldChange('password', e)}
                    />

                    <FormField 
                        labelName="Confirm Password *"
                        placeholder="xxxxxx"
                        inputType="password"
                        value={form.confirmPassword}
                        handleChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <button className='custom_btn' onClick={() => changePassword()} >CHANGE PASSWORD</button>
                </div>}

                
            </div>
        </div>
    );
}
export default ForgetPassword;