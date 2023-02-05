import logo from './logo.svg';
import './App.css';
import Create from './Components/Create';
import Read from './Components/Read';
import Edit from './Components/Edit';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route  path='/Create' element= {<Create/>} exact/>
        <Route  path='/Read' element= {<Read/>} exact/>
        <Route  path='/Edit' element= {<Edit/>} exact/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
