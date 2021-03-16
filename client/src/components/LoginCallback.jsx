import React, { Component } from 'react';
import qs from 'qs';

class LoginCallback extends Component {
    componentDidMount() {
        const OauthCode = qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).code
        
        fetch('http://localhost:3003/giveCode', {
            method: 'POST',
            body: JSON.stringify({ code: OauthCode}),
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(resJson => {
                console.log(resJson)
                window.close();
            })
            .catch(err => console.log({'Error': err}));
    }
    render() {
        return(
            <div>Redirecting you to the Application!</div>
        )
    }
}

export default LoginCallback;