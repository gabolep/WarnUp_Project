import { render, screen } from '@testing-library/react';
import ReactDOM from "react-dom";
import App from '../../App';
import renderer from "react-test-renderer";


test('renders without crashing', () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);

});
it("matches snapshot", () => {
  const tree = renderer.create(<App/>).toJSON();
  expect(tree).toMatchSnapshot();
})
