import React from 'react';

import { Routes, Route } from 'react-router-dom';

import { ButtonPage } from './pages/Action/ButtonPage';
import { IconButtonPage } from './pages/Action/IconButtonPage';
import { LinkButtonPage } from './pages/Action/LinkButtonPage';
import { BadgePage } from './pages/Datadisplay/BadgePage';
import { ListPage } from './pages/Datadisplay/ListPage';
import { PaginationPage } from './pages/Datadisplay/PaginationPage';
import { SeparatorPage } from './pages/Datadisplay/SeparatorPage';
import { TimelinePage } from './pages/Datadisplay/TimelinePage';
import { AccordionPage } from './pages/Disclosure/AccordionPage';
import { TabsPage } from './pages/Disclosure/TabsPage';
import { AlertPage } from './pages/Feedback/AlertPage';
import { ProgressBarPage } from './pages/Feedback/ProgressBarPage';
import { ShimmerPage } from './pages/Feedback/ShimmerPage';
import { SpinnerPage } from './pages/Feedback/SpinnerPage';
import { ToastPage } from './pages/Feedback/ToastPage';
import { FormPage } from './pages/Form/FormPage';
import { FormTestPage } from './pages/Form/FormTestPage';
import { InputPage } from './pages/Form/InputPage';
import { MaskPage } from './pages/Form/MaskPage';
import { PasswordPage } from './pages/Form/PasswordPage';
import { SelectMultiPage } from './pages/Form/SelectMultiPage';
import { SelectPage } from './pages/Form/SelectPage';
import { SliderPage } from './pages/Form/SliderPage';
import { SwitchPage } from './pages/Form/SwitchPage';
import { TextAreaPage } from './pages/Form/TextAreaPage';
import { HomePage } from './pages/HomePage';
import { CardPage } from './pages/Layout/CardPage';
import { FlexPage } from './pages/Layout/FlexPage';
import { GridPage } from './pages/Layout/GridPage';
import { SidebarPage } from './pages/Layout/SidebarPage';
import { AvatarPage } from './pages/Media/AvatarPage';
import { IconPage } from './pages/Media/IconPage';
import { ImagePage } from './pages/Media/ImagePage';
import { DialogPage } from './pages/Overlay/DialogPage';
import { DropdownPage } from './pages/Overlay/DropdownPage';
import { HoverCardPage } from './pages/Overlay/HoverCardPage';
import { ModalPage } from './pages/Overlay/ModalPage';
import { PopoverPage } from './pages/Overlay/PopoverPage';
import { TooltipPage } from './pages/Overlay/TooltipPage';
import { HeadingPage } from './pages/Typography/HeadingPage';
import { TextPage } from './pages/Typography/TextPage';
import { AvatarGroupPage } from './pages/Utils/AvatarGroupPage';
import { EmptyPage } from './pages/Utils/EmptyPage';
import { FooterPage } from './pages/Utils/FooterPage';

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
        <Route path="test" element={<FormTestPage />} />
        <Route path="input" element={<InputPage />} />
        <Route path="select" element={<SelectPage />} />
        <Route path="selectmulti" element={<SelectMultiPage />} />
        <Route path="switch" element={<SwitchPage />} />
        <Route path="mask" element={<MaskPage />} />
        <Route path="password" element={<PasswordPage />} />
        <Route path="slider" element={<SliderPage />} />
        <Route path="textarea" element={<TextAreaPage />} />
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
        <Route path="hovercard" element={<HoverCardPage />} />
      </Route>

      <Route path="/disclosure">
        <Route path="accordion" element={<AccordionPage />} />
        <Route path="tabs" element={<TabsPage />} />
      </Route>

      <Route path="/media">
        <Route path="avatar" element={<AvatarPage />} />
        <Route path="icon" element={<IconPage />} />
        <Route path="image" element={<ImagePage />} />
      </Route>

      <Route path="/layout">
        <Route path="card" element={<CardPage />} />
        <Route path="sidebar" element={<SidebarPage />} />
        <Route path="flex" element={<FlexPage />} />
        <Route path="grid" element={<GridPage />} />
      </Route>

      <Route path="/utils">
        <Route path="empty" element={<EmptyPage />} />
        <Route path="footer" element={<FooterPage />} />
        <Route path="avatargroup" element={<AvatarGroupPage />} />
      </Route>
    </Routes>
  );
}
