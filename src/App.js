import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';

import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import { Home } from './components/Home';
import { Location } from './components/sections/Location';
import { Organization } from './components/sections/Organization';
import { Workplace } from './components/sections/Workplace';
import { Workers } from './components/sections/Workers';
import { Contractors } from './components/sections/Contractors';
import { Users } from './components/sections/Users';
import { Login } from './components/Login';


function App() {
    return (
        <Router>
            <div className="app-wrapper"> 

                <Sidebar />
          
                <div className="content">
                    <TopNav />
          
                    <main>
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
                    </main>
                </div>
        
            </div>
        </Router>
    );
}

export default App;
