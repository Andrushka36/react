import React, {Component} from "react";

import List from "../List.jsx";

class UserDetail extends Component {
    render() {
        const {list, Child, defaultCount, sectionClassName, title, users, comments, articles} = this.props;

        return (
            <section>
                <h3 className="user__subtitle">{title}</h3>
                <List
                    list={list}
                    Child={Child}
                    defaultCount={defaultCount}
                    sectionClassName={sectionClassName}
                    title={title}
                    articles = {articles}
                    comments={comments}
                    users={users}
                />
            </section>
           )
    }
}

export default UserDetail;