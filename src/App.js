import './App.css';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import { Home } from './components/Home';
import { Location } from './components/Location';
import { Organization } from './components/Organization';
import { Workplace } from './components/Workplace';
import { Workers } from './components/Workers';
import { Contractors } from './components/Contractors';
import { Users } from './components/Users';
import { Login } from './components/Login';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>

      <div style={{ display: "flex", position: "relative" }}>
        
        <Sidebar />
          
        <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "column", width: "100%" }}>
          <TopNav/>
            
          <Routes>
            <Route exact path="/capital-staff" element={<Home/>}/>
            <Route path="/capital-staff/location" element={<Location />} />
            <Route path="/capital-staff/workplace" element={<Workplace />} />
            <Route path="/capital-staff/workers" element={<Workers />} />
            <Route path="/capital-staff/contractors" element={<Contractors />} />
            <Route path="/capital-staff/organization" element={<Organization />} />
            <Route path="/capital-staff/users" element={<Users />} />
            <Route path="/capital-staff/login" element={<Login />}/>
          </Routes>
        </div>
        
      </div>   
          
    </Router>
  );
}

export default App;
