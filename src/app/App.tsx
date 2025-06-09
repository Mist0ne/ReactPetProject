import './App.css';
import React from 'react';
import { AppBar } from './AppBar';
import { ProjectRoutes } from './routes';

function App() {
  return (
    <>
      <AppBar />
      <ProjectRoutes />
    </>
  );
}

export default App;
