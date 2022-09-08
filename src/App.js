
import { Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Products from './components/Products';

function App() {
  return (
    <div>
      <Route path="/welcome">
        <Welcome/>
      </Route>
      <Route path="/products">
        <Products/>
      </Route>
    </div>
  );
}

export default App;
