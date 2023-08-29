import React, { useState } from 'react';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const LogoutButton = ({theme, no_text}) => {

    const router = useHistory();

    return (
        <div data-testid="logout-1" style={{'display': 'flex', 'marginBottom': no_text ? '0' : '12px', 
        'alignItems': 'baseline', 'cursor': 'pointer'}}
        onClick={() => {
            localStorage.removeItem('hoobank_jwt');
            router.push("/login")
        }}>
            {!no_text ? <span style={{'fontWeight': '600'}}>Logout</span> : null}
            <i style={{'color': theme == 'dark' ? '#fff' : '#999', 
            'marginLeft': no_text ? '0' : '8px',
            'marginRight': no_text ? '20px':'0',
            'fontSize': no_text ? '20px':'16px'}} 
            className='fas fa-sign-out-alt'></i>
        </div>
    );
}
export default LogoutButton;