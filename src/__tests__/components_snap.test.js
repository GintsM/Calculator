import { cleanup } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Button from '../components/Button';
import Home from '../components/Home';
import Quote from '../components/Quote';
import Calculator from '../components/Calculator';
import Nav from '../components/navbar';

afterEach(() => cleanup());

describe('matches components', () => {
  test('matches snapshot button', () => {
    const tree = renderer.create(<Button value="AC" className="btn" onEvent={() => ''} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('matches snapshot Home', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('matches snapshot Quote', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('matches snapshot Calculator', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('matches snapshot Navbar', () => {
    const navtree = renderer.create(
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quotes" element={<Quote />} />
        </Routes>
      </BrowserRouter>
    ).toJSON();
    expect(navtree).toMatchSnapshot();
  });
});
