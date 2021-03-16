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

        browser.onClose = () =>{
            console.log('testing');
        }
    }

    onClickHandler(evt) {
        const { url, name, opts } = this.props;

        if(popup && !popup.closed) {
            popup.focus();

            return ;
        }

        popup = browser.open(url, name, opts);

        return ;
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