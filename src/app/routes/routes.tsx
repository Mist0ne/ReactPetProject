import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { Profile } from 'pages';

export const ProjectRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/tournaments" />} />
        <Route path="/tournaments" element={<>Турниры</>} />
        <Route path="/about" element={<>О нас</>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/statistics" element={<>Статистика</>} />
      </Routes>
    </BrowserRouter>
  );
};
