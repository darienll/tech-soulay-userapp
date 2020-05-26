import React from 'react';
import './LoginPage.css'
import { connect } from 'react-redux';
import { userActions } from '../../redux/actions';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        // this.props.dispatch(userActions.logout());

        this.state = {
            email: '',
            password: '',
            email2 : '',
            password2:'',
            submitted: false,
            submitted2: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleLogSubmit = this.handleLogSubmit.bind(this);
        this.handleRegSubmit = this.handleRegSubmit.bind(this);
    }
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleLogSubmit(e) {
        e.preventDefault();
        console.log("in handle log submit")
        this.setState({ submitted: true });
        const { email, password } = this.state;
        console.log(this.props)
        const { dispatch } = this.props;
        if (email && password) {
            dispatch(userActions.login(email, password));
        }
    }
    handleRegSubmit(e) {
        e.preventDefault();
        this.setState({ submitted2: true });
        const { email2, password2 } = this.state;
        console.log(this.props)
        const { dispatch } = this.props;
        if (email2 && password2) {
            dispatch(userActions.register(email2, password2));
        }
        console.log("in handle reg submit");
    }
    render() {
        const { loggingIn } = this.props;
        const { email, password, email2, password2, submitted, submitted2 } = this.state;
        return (
            <div className="login">
                <div className="login__content">
                    <div className="container">
                        <div class="container" id="container">
                            <div class="form-container sign-up-container">
                                <form onSubmit={this.handleRegSubmit}>
                                    <h1>Create Account</h1>
                                    <div class="social-container">
                                        <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                                        <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                                        <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                                    </div>
                                    <span className="adapt-button"><a classs="ghost" class="signIn">or use your account</a></span>
                                    <input type="text" className="form-control" name="email2"  onChange={this.handleChange} placeholder="Email"/>
                                    {
                                            submitted2 && !email2 &&
                                            <div className="help-block">Email is required</div>
                                    }

                                    <input type="password" className="form-control" name="password2" placeholder="Email"  onChange={this.handleChange} placeholder="Password" />
                                    {
                                            submitted2 && !password2 &&
                                            <div className="help-block">Email is required</div>
                                    }

                                   
                                    <button>Sign Up</button>
                                </form>
                            </div>
                            <div class="form-container sign-in-container">
                                <form onSubmit={this.handleLogSubmit}>
                                    <h1>Sign in</h1>
                                    <div class="social-container">
                                        <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                                        <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                                        <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                                    </div>
                                    <span className="adapt-button"><a classs="ghost" class="signUp">or create an account</a></span>
                                    {/* <button classs="ghost" id="signUp">ada</button> */}
                                    <input type="text" className="form-control" name="email"  onChange={this.handleChange} placeholder="Email"/>
                                    {
                                            submitted && !email &&
                                            <div className="help-block">Email is required</div>
                                    }
                                    <input type="password" className="form-control" name="password" placeholder="Email"  onChange={this.handleChange} placeholder="Password" />
                                    {
                                            submitted && !password &&
                                            <div className="help-block">Email is required</div>
                                    }
                                    <a href="#">Forgot your password?</a>
                                    <button>Sign In</button>
                                </form>
                            </div>
                            <div class="overlay-container">
                                <div class="overlay">
                                    <div class="overlay-panel overlay-left">
                                        <h1>Welcome Back!</h1>
                                        <p>To keep connected with us please login with your personal info</p>
                                        <button class="ghost" class="signIn">Sign In</button>
                                    </div>
                                    <div class="overlay-panel overlay-right">
                                        <h1>Hello, Friend!</h1>
                                        <p>Enter your personal details and start journey with us</p>
                                        <button class="ghost" class="signUp">Sign Up</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

export default connect(mapStateToProps)(LoginPage);
