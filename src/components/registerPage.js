import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUserAction } from '../actions/authenticAction';
import Loading from '../assets/loader.gif'

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                userEmail: '',
                userCountry: '',
                gender: 'male',
                username: '',
                password: ''
            },
            submitted: false
        };
    }

    handleChange(e) {
        const { name, value } = e.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.firstName && user.lastName && user.userEmail && user.userCountry && user.username && user.password) {
            this.props.dispatch(registerUserAction(user));
        }
    }

    render() {
        const { user, submitted } = this.state;
        return (
            <div className="col-md-6 col-sm-6">
                <h2>Register</h2>
                <form name="form" onSubmit={(e) => this.handleSubmit(e)}>
                    <div className={'form-group' + (submitted && !user.firstName ? ' has-error' : '')}>
                        <label>First Name</label>
                        <input type="text" className="form-control" name="firstName" value={user.firstName} onChange={(e) => this.handleChange(e)} />
                        {submitted && !user.firstName &&
                            <div className="error-info-block">First Name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.lastName ? ' has-error' : '')}>
                        <label>Last Name</label>
                        <input type="text" className="form-control" name="lastName" value={user.lastName} onChange={(e) => this.handleChange(e)} />
                        {submitted && !user.lastName &&
                            <div className="error-info-block">Last Name is required</div>
                        }
                    </div>
                    <div className='form-group d-flex justify-content-between'>
                        <label>
                            <input
                                type="radio"
                                value="male"
                                name="gender"
                                checked={user.gender === "male"}
                                onChange={(e) => this.handleChange(e)}
                            />
                            Male
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="female"
                                name="gender"
                                checked={user.gender === "female"}
                                onChange={(e) => this.handleChange(e)}
                            />
                            Female
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="transgender"
                                name="gender"
                                checked={user.gender === "transgender"}
                                onChange={(e) => this.handleChange(e)}
                            />
                            Transgender
                        </label>
                    </div>
                    <div className={'form-group' + (submitted && !user.userEmail ? ' has-error' : '')}>
                        <label>Email</label>
                        <input type="email" className="form-control" name="userEmail" value={user.userEmail} onChange={(e) => this.handleChange(e)} />
                        {submitted && !user.userEmail &&
                            <div className="error-info-block">Email is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.userCountry ? ' has-error' : '')}>
                        <label>Country</label>
                        <select className="form-control" name="userCountry" value={user.userCountry} onChange={(e) => this.handleChange(e)}>
                            <option value="">select country</option>
                            <option value="india">India</option>
                            <option value="china">China</option>
                            <option value="usa">USA</option>
                            <option value="uae">Dubai</option>
                            <option value="russia">Russia</option>
                        </select>
                        {submitted && !user.userCountry &&
                            <div className="error-info-block">Country is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.username ? ' has-error' : '')}>
                        <label>Username</label>
                        <input type="text" className="form-control" name="username" value={user.username} onChange={(e) => this.handleChange(e)} />
                        {submitted && !user.username &&
                            <div className="error-info-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                        <label>Password</label>
                        <input type="password" className="form-control" name="password" value={user.password} onChange={(e) => this.handleChange(e)} />
                        {submitted && !user.password &&
                            <div className="error-info-block">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-warning mr-4">Register</button>
                        {this.props.isLoading && <img src={Loading} alt="image-loader" height="25" width="25" />}
                        <Link to="/login" className="btn btn-link">Cancel</Link>
                    </div>
                </form>
                {this.props.isUserRegister && 'User registered successfully!!! Please Login to application.'}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isUserRegister: state.register.registerSuccess,
        isLoading: state.register.registerLoading,
    }
};

export default connect(mapStateToProps)(RegisterPage);