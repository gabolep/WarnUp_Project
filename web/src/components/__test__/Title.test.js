import react from "react";
import ReactDOM from "react-dom";
import Title from '../Title';
import { render, cleanup, screen } from '@testing-library/react'
import renderer from "react-test-renderer";
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup);

describe('<Title />', () =>{
        
    let component
    beforeEach(() => {
        component = render(<Title/>)
    })

    test('renders its children', () => {
        component.getByText('HN Feed')
        component.getByText('We <3 hacker news!')
    })
    test('the style is fine', () => {
        const title = component.getByText('HN Feed')
        const subtitle = component.getByText('We <3 hacker news!')
        expect(title).
        toHaveStyle(
            'font-weight: 630'
        );
        expect(subtitle).toHaveStyle(
            'font-weight: 300'
        )
    })
})
it("matches snapshot", () => {
    const tree = renderer.create(<Title/>).toJSON();
    expect(tree).toMatchSnapshot();
})
