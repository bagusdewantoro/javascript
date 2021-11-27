import React from 'react';
import Chat from './Chat';
import Join from './Join';

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
