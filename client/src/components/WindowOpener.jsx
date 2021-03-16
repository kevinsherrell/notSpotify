import PropTypes from 'prop-types';
import React from 'react';

//Most code on this page is from https://enetoolveda.medium.com/open-a-popup-window-react-db81c8c180e5
let browser = null;
let popup = null;
let timer = null;

function watcher () {
    if (popup === null) {
        clearInterval(timer);
        timer = null;
    } else if (popup !== null && !popup.closed) {
        popup.focus();
    } else if (popup !== null && popup.closed) {
        clearInterval(timer);
        browser.focus();
        browser.onClose("child was closed");
        timer = null;
        popup = null;
    }
}
class WindowOpener extends React.Component {
    constructor(props) {
        super(props);
        
        this.onClickHandler = this.onClickHandler.bind(this);

        browser = window.self;

        browser.onSuccess = (res) => {
            console.log('Success');
        }

        // each time we failed we will use the `onError`
        browser.onError = (error) => {
            console.log(error);
        }

        // Tells when a child window is open
        browser.onOpen = (message) => {
            console.log(message);
        }

        browser.onClose = () =>{
            this.props.setLoggedIn();
        }
    }

    onClickHandler(evt) {
        const { url, name, opts } = this.props;
        // if there is  already a child open, let's set focus on it
        if (popup && !popup.closed) {
            popup.focus();

            return ;
        }
        // we open a new window.
        popup = browser.open(url, name, opts);

        setTimeout(() => {
            // The opener object is created once and only if a window has a parent
            popup.opener.onOpen("child was opened");
        }, 0);

        if (timer === null) {
            // each two seconds we check if the popup still open or not
            timer = setInterval(watcher, 2000);
        }

        return;
    }

    render () {
        const { children } = this.props;
        return (
            <button type="button" onClick={this.onClickHandler}>
                {children}
            </button>
        );
    }
}

WindowOpener.propTypes = {
    url: PropTypes.string.isRequired,
    name: PropTypes.string,
    opts: PropTypes.string
}

WindowOpener.defaultProps = {
    name: "Cool popup",
    opts: `dependent=${1}, alwaysOnTop=${1}, alwaysRaised=${1}, alwaysRaised=${1}, width=${500}, height=${700}`
}

export default WindowOpener;