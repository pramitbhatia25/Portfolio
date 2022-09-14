import './App.scss';
import {Routes, Route} from "react-router-dom";
import Layout from './components/Layout';
import Home from './components/Home';

function App() {
  return (
  <div>
    <Routes>
      <Route path="/Portfolio" element={<Layout />}>
        <Route index element= {<Home/>} />
      </Route>
    </Routes>
  </div>
  );
}

export default App;
