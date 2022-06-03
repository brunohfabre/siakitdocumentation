import { Routes, Route } from 'react-router-dom';

import { ButtonPage } from './pages/ButtonPage';
import { HeadingPage } from './pages/HeadingPage';
import { HomePage } from './pages/HomePage';
import { TextPage } from './pages/TextPage';

export function AppRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/heading" element={<HeadingPage />} />
      <Route path="/text" element={<TextPage />} />
      <Route path="/button" element={<ButtonPage />} />
    </Routes>
  );
}
