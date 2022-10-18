import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';

import React from 'react';

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
                            <Route exact path="/" element={<Home/>}/>
                            <Route path="/location" element={<Location />} />
                            <Route path="/workplace" element={<Workplace />} />
                            <Route path="/workers" element={<Workers />} />
                            <Route path="/contractors" element={<Contractors />} />
                            <Route path="/organization" element={<Organization />} />
                            <Route path="/users" element={<Users />} />
                            <Route path="/login" element={<Login />}/>
                        </Routes>
                    </main>
                </div>
        
            </div>   
          
        </Router>
    );
}

export default App;
