import logo from './logo.svg';
import './App.css';
import Detail from './pages/Detail';
import Issues from './pages/Issues';
import index from './components/Facebook/IssuesList/index'
import { Route, Routes } from 'react-router-dom';
import IssuesList from './components/Facebook/IssuesList/index';
import Layout from './components/layout/Layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index path='/' element={<IssuesList />}/>
          <Route path='/detail/:id' element={<Detail />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
