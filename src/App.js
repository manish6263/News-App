import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const pageSize = 15;
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<News key="general" pageSize={pageSize} country="in" category="general"/>}></Route>
          <Route path="/business" element={<News key="business" pageSize={pageSize} country="in" category="business"/>}></Route>
          <Route path="/entertainment" element={<News key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}></Route>
          <Route path="/health" element={<News key="health" pageSize={pageSize} country="in" category="health"/>}></Route>
          <Route path="/science" element={<News key="science" pageSize={pageSize} country="in" category="science"/>}></Route>
          <Route path="/sports" element={<News key="sports" pageSize={pageSize} country="in" category="sports"/>}></Route>
          <Route path="/technology" element={<News key="technology" pageSize={pageSize} country="in" category="technology"/>}></Route>
        </Routes>
      </Router>
   </div>//business entertainment general health science sports technology
  );
}

export default App;


// Title: LOOKING FOR JS (JAVA SCRIP ) DEVELOPER
// Stipend: Rs. 5000
// Email: atiqure@nanoinformatics.in
// Phone No: 9706211724
// Location: Guwahati
// Last Date to Apply: 31-05-2022

// Looking for JS (JAVA SCRIPT) Developer for front end designing and data ploting. Should have knowledge about Node.js, reachtjs, veiwjs.