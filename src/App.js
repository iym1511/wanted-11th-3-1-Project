import logo from './logo.svg';
import './App.css';
import Detail from './pages/Detail';
import Issues from './pages/Issues';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route>
          <Route index path='/' element={<Issues />}/>
          <Route path='/detail' element={<Detail />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
