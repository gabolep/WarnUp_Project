import react from "react";
import ReactDOM from "react-dom";
import Layout from '../Layout';
import { render, cleanup  } from '@testing-library/react'
import renderer from "react-test-renderer";


afterEach(cleanup);

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Layout></Layout>, div)
})
it("matches snapshot", () => {
    const tree = renderer.create(<Layout/>).toJSON();
    expect(tree).toMatchSnapshot();
})