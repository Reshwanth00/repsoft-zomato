import classes from './Login.module.css';
import { IoMdClose } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import flag from './flag.png';
import google from './google.jpeg';
import { useHistory } from 'react-router-dom';
// npm install react-router-dom

const Login = () => {
    const down = ">";
    const history = useHistory();
    const closeHandler = () => {
        history.push("/");
    }
    return (
        <div className={classes.mainContainer}>
            <div className={classes.bodyContainer}>
                <div className={classes.innerContainer}>
                    <div className={classes.loginTextContainer}>
                        <div className={classes.loginTextDiv}>
                            Login
                        </div>
                        <button className={classes.closeIcons} onClick={closeHandler}>
                            <IoMdClose size={25} />
                        </button>
                    </div>
                    <div className={classes.phoneInputContainer}>
                        <div className={classes.flagContainer}>
                            <img src={flag} className={classes.flagImg}/>
                        </div>
                        <div className={classes.contryCodeContainer}>
                            <div className={classes.contryCodeText}>
                                +91 &nbsp;
                            </div>
                            <div className={classes.contryCodeIcon}>
                                {down}
                            </div>
                        </div>
                        <div className={classes.numberDividerContainer}>

                        </div>
                        <div className={classes.numberInputContainer}>
                            <input type="number" className={classes.numberInput} placeholder='Phone'/>
                        </div>
                    </div>
                    <div className={classes.otpInputContainer}>
                        <button className={classes.otpDiv}>
                            Send One Time Password
                        </button>

                    </div>
                    <div className={classes.orDividerContainer}>
                        <div className={classes.leftDivider}>

                        </div>
                        <div className={classes.orDivider}>
                            or
                        </div>
                        <div className={classes.rightDivider}>

                        </div>

                    </div>
                    <div className={classes.emailContainer}>
                        <button className={classes.mailContainer}>
                            <div className={classes.mailIcon}>
                            <MdEmail size={23}/>
                            </div>
                            <div className={classes.mailTextContianer}>
                                Continue with Email
                            </div>
                        </button>
                    </div>
                    <div className={classes.googleContainer}>
                        <button className={classes.googleDiv}>
                            <div className={classes.googleIcon}>
                                <img src={google} className={classes.googleImg}/>
                            </div>
                            <div className={classes.googleTextContianer}>
                                Sign in with Google
                            </div>
                        </button>
                    </div>
                    <div className={classes.bottomDividerContainer}>

                    </div>
                    <div className={classes.zomatoContainer}>
                        <div className={classes.newZomatoContianer}>
                            New to Zomato?
                        </div>
                        <div className={classes.createContainer}>
                            Create Account
                        </div>
                    </div>
                </div>
            </div>

        </div>


    );
}

export default Login;