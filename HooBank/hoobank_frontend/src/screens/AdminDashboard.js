import React, { useEffect, useState } from 'react';
import jwt_decoder from 'jwt-decode';
import { Link, useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";
// Importing all components
import AdminTable from '../components/AdminTable';
import Toast from '../components/Toast';
// Importing all images
import logo_bg from "../assets/logo_bg.png";
import UpdateAccount from './UpdateAccount';


  
const AdminDashboard = () => {

    const [toast, setToast] = useState(false);
    const [err, setError] = useState("");
    const [accountNo, setAccountNo] = useState("");
    const [account, setAccount] = useState("account");

    const router = useHistory();
    const location = useLocation();

    useEffect(() => {
        const jwt_token = localStorage.getItem('admin_jwt');
        if (jwt_token != null){
            const decoded = jwt_decoder(jwt_token);
        
            console.log(decoded);
            if (decoded.exp * 1000 < Date.now()){
                router.push({
                    pathname : "/hoobank_admin",
                    search: "expired"
                });
            }
        }
        
    }, [])

    async function getAccount(acc_no) {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/account/${acc_no}`)
        const data = await res.json();
        console.log(data);
        setAccount(data[0])
    }

    return (
        <div className='login_container'>
            {account != "account" ? <UpdateAccount setAccount={setAccount} account={account} /> : 
            <AdminTable setAccountNo={setAccountNo} setAccount={setAccount} />}
        </div>
    );
}
export default AdminDashboard;