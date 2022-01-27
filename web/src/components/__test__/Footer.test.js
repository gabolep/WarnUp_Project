import react from "react";
import ReactDOM from "react-dom";
import Footer from '../Footer';
import { render, cleanup, screen } from '@testing-library/react'
import renderer from "react-test-renderer";
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup);

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Footer/>, div)
})

it("matches snapshot", () => {
    const tree = renderer.create(<Footer/>).toJSON();
    expect(tree).toMatchSnapshot();
})

test('renders content', () =>{

    const component = render(<Footer/>)

    const footer = screen.getByTestId('footer');
    const h3 = component.getByText('website created by Gabriel Escudero');
    
    //style
    expect(h3).
    toHaveStyle(
        'paddingTop: 20px'
    );
    expect(footer).toHaveStyle(
        'flexDirection: column'
    )
    
})