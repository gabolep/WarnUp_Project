import react from "react";
import ReactDOM from "react-dom";
import News from '../News';
import { render, cleanup } from '@testing-library/react'
import renderer from "react-test-renderer";


afterEach(cleanup);

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<News></News>, div)
})
it("matches snapshot", () => {
    const tree = renderer.create(<News/>).toJSON();
    expect(tree).toMatchSnapshot();
})