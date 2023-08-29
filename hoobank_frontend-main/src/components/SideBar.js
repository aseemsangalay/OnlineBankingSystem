import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "../styles/sidebar.css";
import obs_logo from "../assets/logo.svg"
import summary from "../assets/summary.svg";
import shield from "../assets/Shield.svg";
import cash from "../assets/cash.svg";
// import summary from "../assets/summary.svg";
import { useState } from 'react';


const Icon = ({ name, text,imgUrl, isActive, handleClick }) => (
    <div className={"side_link"} onClick={handleClick}>
      {!isActive ? (
        <div style={{'display': 'flex', 'justifyContent': 'flex-start', 'alignItems': 'center' }} >
            <img src={imgUrl} alt="fund_logo" className={'icon_img'} />
            <span className={"side_text"}>{text}</span>
        </div>
      ) : (
        <div style={{'display': 'flex', 'justifyContent': 'flex-start', 'alignItems': 'center'}}>
            <img src={imgUrl} alt="fund_logo" className={isActive !== name ? "icon_img" : "icon_img_color"} />
            <span className={isActive && isActive === name ? "side_text_white" : "side_text"}>{text}</span>
        </div>
        
      )}
    </div>
)

export default function SideBar({ initial, acc_no, balance }) {

  const router = useHistory();
  const [isActive, setIsActive] = useState(initial);

  return (
    <div className={"sidebar_wrap"}>
        <div className={"sidebar_cont"}>
            <div className={"sidebar_bag"}>
            <Link to="/">
                <img className={"logo"} style={{'marginBottom': '30px'}} src={obs_logo} alt="logo" />
            </Link>
                <Icon key="dashboard" name="dashboard" imgUrl={summary}
                isActive={isActive} text="Account Summary"
                handleClick={() => {
                    setIsActive("dashboard");
                    router.push("/dashboard");
                }}
                />

                <Icon key="transfer" name="transfer" imgUrl={cash}
                isActive={isActive} text="Fund Transfer"
                handleClick={() => {
                    setIsActive("transfer");
                    router.push({
                      pathname: "/transfer",
                      search: `${acc_no}?${balance}`
                    });
                }}
                />

                <Icon key="password" name="password" imgUrl={shield}
                isActive={isActive} text="Change Password"
                handleClick={() => {
                    setIsActive("password");
                    router.push("/forgot-password");
                }}
                />
            </div>
        </div>
    </div>
  );
}