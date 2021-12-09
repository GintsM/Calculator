import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Nav from './components/navbar';
import Home from './components/Home';
import Quote from './components/Quote';

const App = () => (
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quotes" element={<Quote />} />
    </Routes>
  </BrowserRouter>
);

export default App;
