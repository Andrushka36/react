import React, {Component} from "React";

class Home extends Component {
    render() {
        return (
            <div className="container">
                <p><b>React is a JavaScript library for building user interfaces.</b></p>
                <p>- Declarative: React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable, simpler to understand, and easier to debug.</p>
                <p>- Component-Based: Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.</p>
                <p>- Learn Once, Write Anywhere: We don't make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using React Native.</p>
            </div>
        )
    }
}

export default Home;