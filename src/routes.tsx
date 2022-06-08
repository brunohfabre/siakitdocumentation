import { Routes, Route } from 'react-router-dom';

import { AlertPage } from './pages/AlertPage';
import { AvatarGroupPage } from './pages/AvatarGroupPage';
import { AvatarPage } from './pages/AvatarPage';
import { BadgePage } from './pages/BadgePage';
import { ButtonPage } from './pages/ButtonPage';
import { CardPage } from './pages/CardPage';
import { DropdownPage } from './pages/DropdownPage';
import { FooterPage } from './pages/FooterPage';
import { HeadingPage } from './pages/HeadingPage';
import { HomePage } from './pages/HomePage';
import { IconButtonPage } from './pages/IconButtonPage';
import { LinkButtonPage } from './pages/LinkButtonPage';
import { SeparatorPage } from './pages/SeparatorPage';
import { TextPage } from './pages/TextPage';
import { TooltipPage } from './pages/TooltipPage';

export function AppRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/heading" element={<HeadingPage />} />
      <Route path="/text" element={<TextPage />} />
      <Route path="/button" element={<ButtonPage />} />
      <Route path="/iconbutton" element={<IconButtonPage />} />
      <Route path="/linkbutton" element={<LinkButtonPage />} />
      <Route path="/tooltip" element={<TooltipPage />} />
      <Route path="/card" element={<CardPage />} />
      <Route path="/dropdown" element={<DropdownPage />} />
      <Route path="/separator" element={<SeparatorPage />} />
      <Route path="/avatar" element={<AvatarPage />} />
      <Route path="/avatargroup" element={<AvatarGroupPage />} />
      <Route path="/badge" element={<BadgePage />} />
      <Route path="/alert" element={<AlertPage />} />
      <Route path="/footer" element={<FooterPage />} />
    </Routes>
  );
}
