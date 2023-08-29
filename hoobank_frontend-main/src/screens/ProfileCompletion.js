import React, { useState, useEffect } from 'react';
import obs_logo from "../assets/logo.svg";
import { Link, useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import "../styles/login.css";
import FormField from '../components/formField';
  
const ProfileCompletion = () => {

    const [form, setForm] = useState({
        first_name: '',
        last_name: '',
        address: '',
        dob: '',
        mobile_no: ''
    });
    const [user_id, setUser_id] = useState("");


    const router = useHistory();
    const location = useLocation();

    useEffect(() => {
        setUser_id(location.search)
    }, [location])

    const handleFormFieldChange = (fieldName, e) => {
        setForm({ ...form, [fieldName]: e.target.value })
    }

    const addProfile = async () => {

        if (!form.first_name || !form.last_name || !form.address || !form.mobile_no || !form.address) {
            alert("Enter all fields!");
        } else if (form.mobile_no.length != 10) {
            alert("Mobile number should be 10 digits")
        } else {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/add_user/${user_id.substring(1)}`, {
                method: "PUT",
                body: JSON.stringify(form),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await res.json();
            console.log(data);
            if (res.status == 200) {
                router.push("/dashboard");
            }
        }
    }

    return (
        <div className='login_container'>
            <div className='login_bag'>
                <Link to="/">
                    <img className={"login_logo"} src={obs_logo} alt="logo" />
                </Link>
                <div className='form_bag'>
                    <FormField 
                        labelName="First Name *"
                        placeholder="John"
                        inputType="text"
                        value={form.first_name}
                        handleChange={(e) => handleFormFieldChange('first_name', e)}
                    />

                    <FormField 
                        labelName="Last Name *"
                        placeholder="Doe"
                        inputType="text"
                        value={form.last_name}
                        handleChange={(e) => handleFormFieldChange('last_name', e)}
                    />

                    <FormField 
                        labelName="Address *"
                        placeholder="enter your address here"
                        inputType="textarea"
                        value={form.address}
                        handleChange={(e) => handleFormFieldChange('address', e)}
                    />  

                    <FormField 
                        labelName="Date of Birth *"
                        placeholder="DD/MM/YYYY"
                        inputType="text"
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
                </div>

                <button className='custom_btn' onClick={() => addProfile()} >UPDATE PROFILE</button>
            </div>
        </div>
    );
}
export default ProfileCompletion;