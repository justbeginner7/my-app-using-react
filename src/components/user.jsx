import React, { useEffect, useState } from "react";

const User = (props) => {
    const [planet, setPlanet] = useState("earth");

    // componentDidMount
    // shouldComponent Update
    useEffect(() => {
        console.log("component mounting");
        // componentWillUnMount
        return console.log("bye bye");
    }, []);

    // componentDidUpdate
    useEffect(() => {
        console.log("planet changes")
    }, [planet]);

    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <button onClick={() => setPlanet("neptune")}>{planet}</button>
        </div>
    );
};

export default User;