import './App.css';
import {RouterProvider} from 'react-router-dom';
import Header from './components/layout/Header';
import routerConfig from './router/router';

function App() {
  return (
    <div>
      <Header />
      <RouterProvider router={routerConfig}/>
    </div>
  );
}

export default App;
