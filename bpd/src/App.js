
import './App.css';
import { HomePage } from './containers/HomePage';
import { About } from './containers/about';
import { Contact } from './containers/contact';
import { Photography } from './containers/photography';
import { Prints } from './containers/prints';
import { WebDesign } from './containers/webDesign';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="Blank Page Design">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route path="/gabehug" element={<About/>}/>
          <Route path="/photography" element={<Photography/>}/>
          <Route path="/webDesign" element= {<WebDesign/>}/>
          <Route path="/prints" element= {<Prints/>} />
          <Route path="/contact" element= {<Contact/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
