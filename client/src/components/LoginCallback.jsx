import React, { Component } from 'react';
import qs from 'qs';
import { useLocation } from 'react-router';

class LoginCallback extends Component {
    componentDidMount() {
        const OauthCode = qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).code
        
        fetch('http://localhost:3003/getToken/' + OauthCode)
            .then(res => res.json())
            .then(resJson => {
                console.log(resJson)
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