import logo from './logo.svg';
import './App.css';
import Button from './Button';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Datafile from './Datafile';
import Home from './components/Home';
import Fetch from './components/Fetch';
import NewFile from './components/NewFile';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Fetch/:id' element={<Fetch />} />
          {/* <Route path='/:id' element={<NewFile />} /> */}
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
