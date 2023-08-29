import React, { useEffect, useState } from 'react';
import jwt_decoder from 'jwt-decode';
import { Link, useHistory ,useLocation } from "react-router-dom/cjs/react-router-dom.min";
import "../styles/login.css";
// Importing all components
import FormField from '../components/formField';
import Toast from '../components/Toast';
// Importing all images
import obs_logo from "../assets/logo.svg";

  
const Login = () => {

    const location = useLocation();

    const [form, setForm] = useState({
        customerId: location.search.substring(1).length == 8 ? location.search.substring(1) : "",
        password: ''
    });

    const [toast, setToast] = useState(location.search.substring(1).length > 10 ? true : false);
    const [err, setError] = useState("");

    const router = useHistory();
    

    useEffect(() => {
        const jwt_token = localStorage.getItem('hoobank_jwt');
        if (jwt_token != null){
            const decoded = jwt_decoder(jwt_token);
        
            console.log(decoded);
            if (decoded.exp * 1000 > Date.now()){
                router.push({
                    pathname : "/"
                });
            }
        }

        if ("search" in location){
            if (location.search.substring(1) == "expired") {
                setToast(true)
            }
           
        }
    }, [])

    const handleFormFieldChange = (fieldName, e) => {
        setForm({ ...form, [fieldName]: e.target.value })
    }

    const signIn = async () => {

        if (form.customerId.length != 8) {
            setError("Customer ID should be 8 digits")
        } else if (form.password.length < 8) {
            setError("Password should be atleast 8 characters");
        } else {

            const res = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
                method: "POST",
                body: JSON.stringify(form),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await res.json();
            console.log(data);
            if (res.status == 200) {
                localStorage.setItem('hoobank_jwt', data.token)
                router.push({
                    pathname: '/dashboard'
                });
            } else {
                setError("Invalid Credentials. Please try again!")
            }
        }

    }

    return (
        <div className='login_container'>
            {location.search.substring(1).length != 8 ? 
                <Toast type={"error"} isActive={true}
                message={"Login session expired! Please login again"} /> : 
                <Toast type={"success"} isActive={true}
                message={"Your Cutomer ID: " + location.search.substring(1)} />
            }
            <div className='login_bag'>
                <Link to="/">
                    <img className={"login_logo"} src={obs_logo} alt="logo" />
                </Link>
                {err ? <span className='err_msg'>
                    <i style={{'color': '#fff'}} className='fa fa-exclamation-triangle'></i>
                    &ensp;{err}
                </span> : <span>&ensp;</span>}
                <div className='form_bag'>
                    <FormField 
                        labelName="Your Customer ID *"
                        placeholder="XXXXXgHz"
                        inputType="text"
                        value={form.customerId}
                        handleChange={(e) => handleFormFieldChange('customerId', e)}
                    />

                    <FormField 
                        labelName="Your Password *"
                        placeholder="xxxxxx"
                        inputType="password"
                        value={form.password}
                        handleChange={(e) => handleFormFieldChange('password', e)}
                    />
                </div>

                <button className='custom_btn' onClick={() => signIn()} >LOGIN</button>
                <span style={{'cursor': 'pointer'}} className='not_acc'
                onClick={() => router.push("/forgot-password")}>Forgot Password? &ensp; </span>
                <span className='not_acc'>Didn't register yet? &ensp;
                    <b className='create_acc' onClick={() => router.push("/register")}>Register here</b>
                </span>
            </div>
        </div>
    );
}
export default Login;