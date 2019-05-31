import React from 'react';
import {connect} from 'react-redux';
import Auth from './auth'

function Resolver(props) {
    return <React.Fragment>{props.isAuthenticating && <Auth />}</React.Fragment>
}

function mapState(state) {
    return state.isAuthenticating;
}

export default connect(mapState, null)(Resolver)