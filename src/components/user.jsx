import React from "react";

class User extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            planet: "earth",
        };
        console.log("Hey I'm from Constructor✌");
    }

    componentDidMount() {
        this.setState({planet: "Mars"});
    }

    render() {
        //view 
        // logic
        // component lifecycle 
        console.log("Hey I'm from rendered😎");
        return (
            <div>
                <h1>{this.props.name}</h1>
                <p>{this.props.description}</p>
                <h4>{this.state.planet}</h4>
            </div>
        );
    }
}

export default User;