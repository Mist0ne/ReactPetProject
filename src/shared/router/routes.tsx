import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { ProfilePage } from 'pages/Profile';

export const ProjectRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/tournaments" />} />
      <Route path="/tournaments" element={<>Турниры</>} />
      <Route path="/about" element={<>О нас</>} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/statistics" element={<>Статистика</>} />
    </Routes>
  );
};
