import React, { useEffect, useState } from 'react';  
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import jwt_decoder from 'jwt-decode';
// Importing all components
import SideBar from '../components/SideBar';
import Card from '../components/Card';
import Table from '../components/Table';
import LogoutButton from '../components/LogoutButton';
// Importing all images
import profile from "../assets/profile.svg";
import wtsp_dark from "../assets/wtsp_bg_dark.jpg";
import no_account from "../assets/no_account.jpg"
import avatar from "../assets/avatar.png"
import loader from "../assets/loader.svg"
// Importing styles
import "../styles/dashboard.css";


const Dashboard = () => {

    const [isAccount, setIsAccount] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [myAccount, setMyAccount] = useState({});
    const [spendings, setSpendings] = useState(0);
    const [savings, setSavings] = useState(0);

    const router = useHistory();

    useEffect(() => {
        var customer_id = "hello";
        const jwt_token = localStorage.getItem('hoobank_jwt');
        if (jwt_token != null) {
            const decoded = jwt_decoder(jwt_token);
            console.log(decoded);
            if (decoded.exp * 1000 < Date.now()) {
                router.push({
                    pathname : "/login",
                    search: "expired"
                });
            } 
            customer_id = decoded.sub;
            accountExist(customer_id);
        } 
        
    }, []);

    // Checking if account already exists
    // var customer_id = "OVaTTsTU";
    const accountExist = async (customer_id) => {
        setIsLoading(true);
        const res = await fetch(`${process.env.REACT_APP_API_URL}/account_exist/${customer_id}`);
        const data = await res.json();

        if (data != null) {
            setIsAccount(true);
            setMyAccount(data);
        }
        setIsLoading(false);
    }

    return (
        <div>
            {isLoading && (
                <img src={loader} alt="loader" className="loader" />
            )}

            {!isLoading && isAccount && (
            <div style={{'display': 'flex'}}>
                <SideBar initial="dashboard" acc_no={myAccount.account_number} balance={myAccount.balance} />
                <div style={{'width': '100%'}}>
                    <div className='header'>
                        <div style={{'fontSize': '23px', 'color': '#313131',
                        'marginLeft': '25px', 'fontWeight': 'bold'}}>
                            Dashboard
                        </div>
                        <div style={{'display': 'flex', 'alignItems': 'center'}}>
                            <img style={{'filter': 'grayscale(1)', 'marginRight': '15px'}}
                            src={profile} alt="profile" />
                            <LogoutButton theme="light" no_text={true} />
                        </div>
                    </div>
                    <div className='body_cont'>
                        <div className='left_cont'>
                            <div className='cards_bag'>

                                <Card cardIcon='fa fa-money-check' cardLabel={"Total Spendings"}
                                cardInfo={`₹ ${spendings}`} />

                                <Card cardIcon='fa fa-wallet fa_dark' cardLabel={"Total Balance"}
                                cardInfo={"₹ " + myAccount.balance} theme={"dark"}/>                   

                                <Card cardIcon='fa fa-coins' cardLabel={"Total Savings"}
                                cardInfo={`₹ ${savings}`} />
                            </div>

                            <div className='transaction_wrap'>
                                <Table acc_no={myAccount.account_number} 
                                setSavings={setSavings} setSpendings={setSpendings} />
                            </div>
                        </div>

                        <div className='right_cont'>
                            <img className='dark_bg' src={wtsp_dark} alt="dark_bg" />
                            <img className='avatar' src={avatar} alt="avatar" />
                            <div className='details'>
                                <article className='account_info'>
                                    Acc No&ensp; <b>{myAccount.account_number}</b>
                                </article>
                                <article className='account_info'>
                                    Customer ID&ensp; <b>{myAccount.customerId}</b>
                                </article>
                                <article className='account_info'>
                                    Name&ensp; <b>{myAccount.first_name} {myAccount.last_name}</b>
                                </article>
                                <article className='account_info'>
                                    Aadhaar No&ensp; <b>{myAccount.aadhaar}</b>
                                </article>
                                <article className='account_info'>
                                    PAN No&ensp; <b>{myAccount.pan_no}</b>
                                </article>
                                <article className='account_info'>
                                    Account type&ensp; <b>{myAccount.account_type}</b>
                                </article>
                                <article className='account_info' style={{'marginTop': '14px'}}>
                                    <i style={{'color': '#656565', 'fontSize': '15px'}} className='fa fa-envelope'></i>
                                    &ensp; 
                                    <span className='account_info' style={{'fontWeight': 'normal'}}>
                                        {myAccount.email}
                                    </span>
                                </article>
                                <article className='account_info' style={{'marginTop': '14px'}}>
                                    <i style={{'color': '#656565', 'fontSize': '15px'}} className='fa fa-phone'></i>
                                    &ensp; 
                                    <span className='account_info' style={{'fontWeight': 'normal'}}>
                                        {myAccount.mobile_no}
                                    </span>
                                </article>
                                <article className='account_info' 
                                style={{'fontWeight': 'bold', 'fontSize': '16px', 'marginTop': '14px'}}>
                                    <i style={{'color': '#656565'}} className='fas fa-map-marker-alt'></i>
                                    &ensp;Address&ensp; <br />
                                    <span className='account_info' style={{'fontWeight': 'normal'}}>{myAccount.permanent_address}</span>
                                </article>
                            </div>
                            <span className='account_info' style={{'fontWeight': 'normal', 'fontSize': '13px',
                            'position': 'absolute', 'bottom': '7px', 'left': '15px'}}>
                                Visit branch for further details and edits.
                            </span>
                        </div>
                    </div>
                    
                </div>
            </div> 
            )}

            {!isLoading && !myAccount && (
                <div style={{'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'center'}}>
                    <div className='noAccount'>
                        <img style={{'opacity': '0.6'}} src={no_account} alt="no_account" />
                    </div>
                    <span className='no_text'>Login to access your dashboard</span>
                    <div style={{'margin': '0 auto'}}>
                        <Link to="/login">
                            <button className='custom_btn'>Login</button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}
export default Dashboard;