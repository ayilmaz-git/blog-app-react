import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Header from '../components/Header';

const PrivateRoute = ({isAuthenticated, component: Component, ...rest}) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <div>
            <Header/>
            <Component {...props} />

            </div>
        ):(
            
            <Redirect to="/"/>
        )
    )}/>
)
const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute)