import react from "react";
import ReactDOM from "react-dom";
import New from '../New';
import { render, cleanup, screen, fireEvent } from '@testing-library/react'
import renderer from "react-test-renderer";


afterEach(cleanup);

describe('<New />', () =>{
    let component
    beforeEach(() => {
        const mockHandler = jest.fn();

        const n = {
            created_at: new Date(),
            title: 'title',
            story_title: 'story title',
            url: 'url',
            story_url: 'story_url',
            author: 'author',
            story_id: 1,
            state: true,
        }
        component = render(<New n = {n} onClick = {mockHandler} />)
        const deleteButton = screen.getByTestId('deleteButton');
        fireEvent.click(deleteButton);
        expect(mockHandler.mock.calls).toHaveLength(1);
    })

    test('renders its children', () => {
        component.getByText('title')
        component.getByText('-author-')
        const deleteButton = screen.getByTestId('deleteButton');
         
    })
})
it("matches snapshot", () => {
    const n = {
        created_at: '2022-01-20T15:19:13.000+00:00',
        title: 'title',
        story_title: 'story title',
        url: 'url',
        story_url: 'story_url',
        author: 'author',
        story_id: 1,
        state: true,
    }
    const tree = renderer.create(<New New n = {n} />).toJSON();
    expect(tree).toMatchSnapshot();
})


