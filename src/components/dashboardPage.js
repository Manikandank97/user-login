import React from 'react';
import { connect } from 'react-redux';
import { history } from '../utils/history';
import { LOGIN_USER_FAILURE } from '../constant/constants'

class DashboardPage extends React.Component {

  logOut(e) {
    e.preventDefault();
    this.props.dispatch({
      type: LOGIN_USER_FAILURE,
    });
    history.push("/");
  }

  render() {
    return (
      <div className="col-md-6 col-sm-6 d-flex justify-content-between">
        Welcome {this.props.loginUser} to Dashboard !!!
        <button className="btn btn-warning" onClick={(e) => this.logOut(e)}>Logout</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loginUser: state.LoginReducer.userLogin ? state.LoginReducer.userName : ''
  }
}

export default connect(mapStateToProps)(DashboardPage);