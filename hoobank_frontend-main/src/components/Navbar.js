import { useHistory, Link } from "react-router-dom/cjs/react-router-dom.min";
import jwt_decoder from 'jwt-decode';
import "../styles/navbar.css";
import obs_logo from "../assets/logo.svg"
import { useState, useEffect } from 'react';
import LogoutButton from "./LogoutButton";


const Icon = ({ name, text, isActive, handleClick }) => (
    <div className={`${"nav_link"} ${isActive && isActive === name ? "active" : null}`} onClick={handleClick}>
      {isActive ? (
        <span className={`${"nav_text"} ${isActive && isActive === name ? "active" : null}`}>{text}</span>
      ) : (
        <span className="nav_text">{text}</span>
      )}
    </div>
)

export default function Navbar({ initial }) {

  const router = useHistory();
  const [isActive, setIsActive] = useState(initial);
  const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        const jwt_token = localStorage.getItem('hoobank_jwt');
        if (jwt_token != null) {
          const decoded = jwt_decoder(jwt_token);
          console.log(decoded);
          if (decoded.exp * 1000 > Date.now()) {
              setIsLogin(true)
          }
        }
    }, [])

  return (
    <div className={"navbar_wrap"}>
        <div className={"navbar_cont"}>

            <Link to="/">
                <img className={"logo"} src={obs_logo} alt="logo" />
            </Link>

            <div className={"navbar_bag"}>
                <div style={{'display': 'flex', 'marginLeft': '19px'}}>
                    <Icon key="dashboard" name="dashboard" isActive={isActive} text="Dashboard"
                    handleClick={() => {
                        setIsActive("dashboard");
                        router.push("/dashboard");
                    }}
                    />

                    <Icon key="about" name="about" isActive={isActive} text="About Us"
                    handleClick={() => {
                        setIsActive("about");
                        router.push("/about");
                    }}
                    />
                </div>

                {isLogin ? 
                <div style={{'display': 'flex', 'marginRight': '25px', 'alignItems': 'baseline'}}>
                  <LogoutButton theme="dark" />
                </div> :
                <div style={{'display': 'flex', 'marginRight': '25px'}}>
                  <Icon key="login" name="login" isActive={isActive} text="Login"
                  handleClick={() => {
                      setIsActive("login");
                      router.push("/login");
                  }}
                  />

                  <div className="register" onClick={() => router.push("/create-account")}>
                    Create Account
                  </div>
                </div>
              }
            </div>
        </div>
    </div>
  );
}