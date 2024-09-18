import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './components/Home'; // Assuming Home contains the sections with IDs


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
           
            {/* Add other routes here if needed */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;