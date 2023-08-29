import React, { useEffect, useState } from 'react';
import jwt_decoder from 'jwt-decode';
import { Link, useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import "../styles/login.css";
// Importing all components
import FormField from '../components/formField';
import Toast from '../components/Toast';
// Importing all images
import logo_bg from "../assets/logo_bg.png";

  
const AdminLogin = () => {

    const [form, setForm] = useState({
        customerId: '',
        password: ''
    });

    const [toast, setToast] = useState(false);
    const [err, setError] = useState("");

    const router = useHistory();
    const location = useLocation();

    useEffect(() => {
        const jwt_token = localStorage.getItem('admin_jwt');
        if (jwt_token != null){
            const decoded = jwt_decoder(jwt_token);
        
            console.log(decoded);
            if (decoded.exp * 1000 > Date.now()){
                router.push({
                    pathname : "/admin_dashboard"
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

        if (form.customerId.length < 8) {
            setError("username should be 8 digits")
        } else if (form.password.length < 8) {
            setError("Password should be atleast 8 characters");
        } else {

            const res = await fetch(`${process.env.REACT_APP_API_URL}/admin_login`, {
                method: "POST",
                body: JSON.stringify(form),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data = await res.json();
            console.log(data);
            
            if (res.status == 200) {
                localStorage.setItem('admin_jwt', data.token)
                router.push({
                    pathname: '/admin_dashboard'
                });
            } else {
                setError("Invalid Credentials. Please try again!")
            }
        }

    }

    return (
        <div className='login_container'>
            
            <div className='login_bag'>
                <div style={{'display': 'flex', 'alignItems': 'center'}}>
                    <img style={{'height': '40px', 'marginRight': '14px'}} src={logo_bg} alt="logo" />
                    <h2 style={{'color': '#313131'}}>Admin Login</h2>
                </div>
                {err ? <span className='err_msg'>
                    <i style={{'color': '#fff'}} className='fa fa-exclamation-triangle'></i>
                    &ensp;{err}
                </span> : <span>&ensp;</span>}
                <div className='form_bag'>
                    <FormField 
                        labelName="Your Username *"
                        placeholder="XXXXX123"
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
            </div>
        </div>
    );
}
export default AdminLogin;