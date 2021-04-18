import React, { Component } from 'react';
class Services extends Component {
    constructor() {
        super();

        // this.state = {
        //name: "anwi",
        // age: 13
        //}
    }
    componentDidMount() {
        console.warn("props", this.props.name);

    }
    componentDidUpdate() {
        //alert("component update");
        console.warn("props", this.props.name)

    }

    render() {
        return <div >
            <
            h1 > { this.props.name } < /h1>

        <
        /
        div >
    }

}
export default Services;