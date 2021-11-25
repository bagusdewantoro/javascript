import React from 'react';
import Chat from './components/Chat';
import Join from './components/Join';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// react-router-dom version 6 (different with version 5)

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Join />} />
        <Route path="chat" element={<Chat />} />
      </Routes>
    </Router>
  );
};

export default App;
