import './App.scss';
import {Routes, Route} from "react-router-dom";
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
  <div>
    <Routes>
      <Route path="/Portfolio" element={<Layout />}>
        <Route index element= {<Home/>} />
        <Route path="about" element= {<About/>} />
      </Route>
    </Routes>
  </div>
  );
}

export default App;
