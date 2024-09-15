import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateSytemPage from './pages/create-system-page';
import ViewSystemsPage from './pages/view-system-page';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/new-system" element={<CreateSytemPage/>}/>
                <Route path="" element={<ViewSystemsPage/>}/>
            </Routes>
        </Router>
    );
};

export default App;
