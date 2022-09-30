import './App.scss';
import {Routes, Route} from "react-router-dom";
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';


function App() {
  

  return (
  <div>
    <Routes>
      <Route path="/Portfolio" element={<Layout />}>
        <Route path="" element= {<Home/>} />
        <Route path="home" element= {<Home/>} />
        <Route path="about" element= {<About/>} />
        <Route path="contact" element= {<Contact/>} />
        <Route path="projects" element= {<Portfolio/>} />
      </Route>
    </Routes>
  </div>
  );
}

export default App;
