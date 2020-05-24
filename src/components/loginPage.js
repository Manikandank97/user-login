import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUserAction } from '../actions/authenticAction';
import { history } from '../utils/history';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            submitted: false
        };
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true });
        const { username, password } = this.state;
        const data = { username, password };
        if (username && password) {
            this.props.dispatch(loginUserAction(data));
        }
    }



    render() {
        const { username, password, submitted } = this.state;
        if (this.props.isLoggedIn) {
            history.push("/dashboard");
        }
        return (
            <div className="col-md-6 col-sm-6">
                <h2>Login</h2>
                <form name="form" onSubmit={(e) => this.handleSubmit(e)}>
                    <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                        <label>Username</label>
                        <input type="text" className="form-control" name="username" value={username} onChange={(e) => this.handleChange(e)} />
                        {submitted && !username &&
                            <div className="error-info-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <label>Password</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={(e) => this.handleChange(e)} />
                        {submitted && !password &&
                            <div className="error-info-block">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-warning mr-4">Login</button>
                        <Link to="/register" className="btn btn-link">Register</Link>
                    </div>
                </form>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.login.userLogin
    }
};

export default connect(mapStateToProps)(LoginPage);