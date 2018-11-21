import React, { Component } from "react";

import "./Modal.sass";

class Modal extends Component {
    render() {
        return (
            <div className="popup">
                <div className="popup__inner">
                    <h2 className="popup__title">This is a welcome message</h2>
                    <p>Don't worry! This modal will be closed after</p>
                    <p className="popup__timer">{this.props.timer}</p>
                    <p>or click <span className="popup__close" onClick={this.props.closeModal}>here</span> to do it</p>
                </div>
            </div>
        )
    }
}

export default Modal;