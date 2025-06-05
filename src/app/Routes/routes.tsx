import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { Settings } from 'pages';

export const ProjectRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
};
