import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ViewSystemsPage from './pages/view-system-page';
import CreateSytemPage from './pages/create-system-page';
import EditSystemPage from './pages/edit-system-page';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="" element={<ViewSystemsPage/>}/>
                <Route path="/new-system" element={<CreateSytemPage/>}/>
                <Route path="/edit-system/:id" element={<EditSystemPage/>}/>
            </Routes>
        </Router>
    );
};

export default App;
