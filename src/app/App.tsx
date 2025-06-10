import './App.css';
import React from 'react';
import { AppBar } from '../widgets/AppBar';
import { ProjectRoutes } from '../shared/router';

function App() {
  return (
    <>
      <AppBar />
      <ProjectRoutes />
    </>
  );
}

export default App;
