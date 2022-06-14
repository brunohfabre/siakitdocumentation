import { Routes, Route } from 'react-router-dom';

import { AccordionPage } from './pages/AccordionPage';
import { ButtonPage } from './pages/Action/ButtonPage';
import { IconButtonPage } from './pages/Action/IconButtonPage';
import { LinkButtonPage } from './pages/Action/LinkButtonPage';
import { AlertPage } from './pages/AlertPage';
import { AvatarGroupPage } from './pages/AvatarGroupPage';
import { AvatarPage } from './pages/AvatarPage';
import { BadgePage } from './pages/BadgePage';
import { CardPage } from './pages/CardPage';
import { DialogPage } from './pages/DialogPage';
import { DropdownPage } from './pages/DropdownPage';
import { EmptyPage } from './pages/EmptyPage';
import { FooterPage } from './pages/FooterPage';
import { FormPage } from './pages/FormPage';
import { HomePage } from './pages/HomePage';
import { ListPage } from './pages/ListPage';
import { IconPage } from './pages/Media/IconPage';
import { ModalPage } from './pages/ModalPage';
import { PaginationPage } from './pages/PaginationPage';
import { PopoverPage } from './pages/PopoverPage';
import { ProgressBarPage } from './pages/ProgressBarPage';
import { SeparatorPage } from './pages/SeparatorPage';
import { ShimmerPage } from './pages/ShimmerPage';
import { SidebarPage } from './pages/SidebarPage';
import { SpinnerPage } from './pages/SpinnerPage';
import { TabsPage } from './pages/TabsPage';
import { TimelinePage } from './pages/TimelinePage';
import { ToastPage } from './pages/ToastPage';
import { TooltipPage } from './pages/TooltipPage';
import { HeadingPage } from './pages/Typography/HeadingPage';
import { TextPage } from './pages/Typography/TextPage';

export function AppRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/typography">
        <Route path="heading" element={<HeadingPage />} />
        <Route path="text" element={<TextPage />} />
      </Route>

      <Route path="/action">
        <Route path="button" element={<ButtonPage />} />
        <Route path="iconbutton" element={<IconButtonPage />} />
        <Route path="linkbutton" element={<LinkButtonPage />} />
      </Route>

      <Route path="/form">
        <Route path="form" element={<FormPage />} />
      </Route>

      <Route path="/feedback">
        <Route path="progressbar" element={<ProgressBarPage />} />
        <Route path="spinner" element={<SpinnerPage />} />
        <Route path="toast" element={<ToastPage />} />
        <Route path="shimmer" element={<ShimmerPage />} />
        <Route path="alert" element={<AlertPage />} />
      </Route>

      <Route path="/datadisplay">
        <Route path="badge" element={<BadgePage />} />
        <Route path="separator" element={<SeparatorPage />} />
        <Route path="list" element={<ListPage />} />
        <Route path="pagination" element={<PaginationPage />} />
        <Route path="timeline" element={<TimelinePage />} />
      </Route>

      <Route path="/overlay">
        <Route path="modal" element={<ModalPage />} />
        <Route path="dialog" element={<DialogPage />} />
        <Route path="tooltip" element={<TooltipPage />} />
        <Route path="dropdown" element={<DropdownPage />} />
        <Route path="popover" element={<PopoverPage />} />
      </Route>

      <Route path="/disclosure">
        <Route path="accordion" element={<AccordionPage />} />
        <Route path="tabs" element={<TabsPage />} />
      </Route>

      <Route path="/media">
        <Route path="avatar" element={<AvatarPage />} />
        <Route path="icon" element={<IconPage />} />
      </Route>

      <Route path="/layout">
        <Route path="card" element={<CardPage />} />
        <Route path="sidebar" element={<SidebarPage />} />
      </Route>

      <Route path="/utils">
        <Route path="empty" element={<EmptyPage />} />
        <Route path="footer" element={<FooterPage />} />
        <Route path="avatargroup" element={<AvatarGroupPage />} />
      </Route>
    </Routes>
  );
}
