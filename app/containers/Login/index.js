/**
 *
 * Login
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectLogin from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import 'containers/Signup/style.css';
import {Form} from 'reactstrap';


export class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  changeAll = () => {

  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push('/dashboard');
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Login</title>
          <meta name="description" content="Description of Login" />
        </Helmet>

        {/* SignIn Section */}
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-md-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1  col-12">
              <Form className="user-detail" id="user-detail" onChange={this.changeAll} onSubmit={this.handleSubmit} >
                <div className="heading">
                  <h1 className="text-center" >Login</h1>
                </div>
                <div className="sign-up-box">
                  <div className="sign-up-form">
                    <div className="form-group">
                      <div className="input-icon">
                        <input className="form-control" type="text" placeholder="Email / Username" />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-icon">
                        <input className="form-control" type="password" placeholder="Password" />
                      </div>
                    </div>
                    <div className="btn-continue">
                      <button className="btn btn-success btn-block">Continue</button>
                    </div>
                    <div className="input-group"><span className="input-group-addon">
                      <input type="checkbox" id="checkbox" /></span><span className="remember">remember me?</span><a href="#">forget password</a></div>
                    <div className="or"><span>or</span></div>
                    <div className="social-btn">
                      <div className="btn-facebook">
                        <button className="btn btn-default btn-block">Continue With Facebook</button>
                      </div>
                      <div className="btn-google">
                        <button className="btn btn-default btn-block">Continue With Google</button>
                      </div>
                      <div className="btn-linkedin">
                        <button className="btn btn-default btn-block">Continue With LinkedIn</button>
                      </div>
                    </div>
                  </div>
                </div>
              </Form>

            </div>
          </div>
        </div>

      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'login', reducer });
const withSaga = injectSaga({ key: 'login', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Login);
