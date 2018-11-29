import React, { Component } from "react";

class Page extends Component {
    render() {
        const {children} = this.props;

        return <div className="page-wrapper">{children}</div>
    }
}

export default Page;