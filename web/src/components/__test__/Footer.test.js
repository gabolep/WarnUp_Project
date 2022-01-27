import react from "react";
import ReactDOM from "react-dom";
import Footer from '../Footer';

import { render, cleanup } from '@testing-library/react'
import renderer from "react-test-renderer";

afterEach(cleanup);

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Footer></Footer>, div)
})
it("render footer correctly", () => {
    const { getByTestId } = render(<Footer/>)
    expect(getByTestId("h3")).toHaveTextContent("website created by Gabriel Escuder");

})
it("matches snapshot", () => {
    const tree = renderer.create(<Footer></Footer>).toJSON();
    expect(tree).toMatchSnapshot();
})