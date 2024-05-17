import classes from "./Header.module.css";
import { FaLocationDot } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { BiSolidDownArrow } from "react-icons/bi";
import { useHistory } from 'react-router-dom';


const Header = () => {
    const history = useHistory(); 
    const loginHandler = () => {
        history.push("/login");
    }

    return (
        <div className={classes.mainContainer}>
            <div className={classes.bodyContainer}>
                <div className={classes.zomatoText}>
                    <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" className={classes.zomatoTextImg} />
                </div>
                <div className={classes.middleContainer}>
                    <div className={classes.dropBoxContainer}>
                        <div className={classes.locationDiv}>
                            <FaLocationDot style={{ color: "#FF7E8B" }} />

                        </div>
                        <div className={classes.dropBoxDiv}>
                            Hyderabad
                        </div>
                        <button className={classes.downArrowDiv}>
                        <BiSolidDownArrow />
                        </button>

                    </div>
                    <div className={classes.inputContainer}>
                    <CiSearch />
                        <input type="text" />
                    </div>
                </div>

                <div className={classes.loginContainer}>
                    <button className={classes.loginButton} onClick={loginHandler}>
                        Log in
                    </button>
                </div>
                <div className={classes.signinContainer}>
                    <button className={classes.signInButton}>
                    Sign in
                    </button>
                </div>
            </div>
        </div>

    );
}
export default Header;