import { Component } from "react";

//옛날 방식
class ClassComponent extends Component {
    render() {
        return <p>Class Component</p>;
    }
}

function FunctionComponent() {
    return <p>Function Expresstion</p>;
}

const ArrowFunctionExpresstion = () => <p>Arrow Function Expresstion</p>;

export { FunctionComponent, ArrowFunctionExpresstion, ClassComponent };