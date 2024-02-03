import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css";

const Login = () => {
    const navigate = useNavigate();
    return (
        <div className="login">
            <div className="main-content">
                <div className="form-container">
                    <h1>Login</h1>
                    <input type="email" name="email" id="email" placeholder="Email Address"/><br/>
                    <input type="password" name="password" id="password" placeholder="Password"/>
                    <br/><span className="create-account">New user? Create an account</span>
                    <button id="login" type="button" onClick={() => navigate("/products")}>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Login;