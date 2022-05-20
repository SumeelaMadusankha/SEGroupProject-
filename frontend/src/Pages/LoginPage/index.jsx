import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css'
import login from './login2.jpg'
import logo from './logo.png'



function Register() {
    return (
        <div>
            <main className="d-flex align-items-center min-vh-100 py-3 py-md-0">
                <div className="container">
                <div className="card login-card">
                    <div className="row no-gutters">
                    <div className="col-lg-6 col-md-5">
                        <img src={login} alt="login" className="login-card-img" /> 
                    </div>
                    <div className="col-lg-6 col-md-7 ">
                        <div className="card-body text-center">
                        <div className="brand-wrapper">
                            <img src={logo} alt="logo" class="logo" />
                        </div>
                        <p className="login-card-description">Sign into your account</p>
                        <form action="#!" className="login-form">
                            <div className="form-group align-items-center">
                                <label for="username" className="sr-only text-center">Email</label>
                                <input type="username" name="username" id="username" className="form-control text-center" placeholder="Username" />
                            </div>
                            <div class="form-group mb-4">
                                <label for="password" className="sr-only">Password</label>
                                <input type="password" name="password" id="password" className="form-control text-center" placeholder="***********" />
                            </div>
                            <input name="login" id="login" className="btn btn-block login-btn mb-4" type="button" value="Login" />
                            </form>
                            <p className="login-card-footer-text">Don't have an account? <a href="#!" className="text-reset">Register here</a></p>
                            <nav className="login-card-footer-nav">
                            <a href="#!">Terms of use.</a>
                            <a href="#!">Privacy policy</a>
                            </nav>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </main>

            <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
        </div>
    );
}

export default Register;