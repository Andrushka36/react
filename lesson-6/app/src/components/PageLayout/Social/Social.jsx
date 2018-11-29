import React, { Component } from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import "./Social.sass";

class Social extends Component {
    items = [{
        prefix: "fab",
        iconName: "twitter",
        link: "#"
    }, {
        prefix: "fab",
        iconName: "facebook-f",
        link: "#"
    }, {
        prefix: "fab",
        iconName: "github",
        link: "#"
    }];
    render() {
        return (
            <div className="social">
                {this.items.map((item) => {
                    let { prefix, iconName, link } = item;
                    return (
                        <a className="social__item" href="#" key={`social__item--${iconName}`}>
                            <FontAwesomeIcon icon={[prefix, iconName]} />
                        </a>
                    )
                })}
            </div>
        )
    }
}

export default Social;