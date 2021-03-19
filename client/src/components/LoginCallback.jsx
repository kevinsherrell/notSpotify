import React, { Component } from 'react';
import qs from 'qs';
import { useLocation } from 'react-router';

class LoginCallback extends Component {
    componentDidMount() {
        const OauthCode = qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).code
        
        fetch('https://murmuring-basin-75117.herokuapp.com/getToken/' + OauthCode)
            .then(() => {
                window.close();
            })
            .catch(err => console.log({'Error': err}));
    }
    render() {
        return(
            <div>test </div>
        )
    }
}

export default LoginCallback;