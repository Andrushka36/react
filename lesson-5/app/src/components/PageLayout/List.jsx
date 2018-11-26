import React, {Component} from "React";

class List extends Component {
    constructor(props) {
        super(props);

        this.state.count = +this.props.defaultCount;
        this.step = +this.props.defaultCount;
    }

    state = {};

    componentWillUpdate(nextProps, nextState) {
        if (nextProps != this.props) {
            nextState.count = +nextProps.defaultCount;
            this.step = nextProps.defaultCount;
        }
    }

    appendItems = () => {
        this.setState({
            count: this.state.count + this.step
        })
    };

    render() {
        const {list, Child, sectionClassName, title} = this.props;

        return (
            <div className="container">
                {list.map((item, i) => {
                    if (i < this.state.count) return (
                        <Child.type attr={item} key={`${sectionClassName}--${i}`} articles={this.props.articles} comments={this.props.comments} users={this.props.users} addModal addComment={this.props.addComment}/>
                    )
                })}
                <div className="append-items" onClick={this.appendItems}>{`Older ${title}`} →</div>
            </div>
        )
    }
}

export default List;