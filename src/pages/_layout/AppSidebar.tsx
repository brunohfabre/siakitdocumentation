import { useNavigate } from 'react-router-dom';

import siakitLogoFullImage from '../../assets/icons/siakit-logo-full.png';
import siakitLogoShortImage from '../../assets/icons/siakit-logo-short.png';
import {
  Menu,
  MenuHeader,
  MenuItem,
  Sidebar,
  SubMenu,
  SubMenuItem,
} from '../../components/Sidebar';

export function AppSidebar(): JSX.Element {
  const navigate = useNavigate();

  return (
    <Sidebar>
      <Menu>
        <MenuHeader onClick={() => navigate('/')}>
          <img src={siakitLogoFullImage} alt="SIAKIT" />

          <img src={siakitLogoShortImage} alt="SIAKIT" />
        </MenuHeader>
        <MenuItem value="typography" icon="HiHome" tooltip="Typography">
          Typography
        </MenuItem>
        <MenuItem value="action" icon="HiCursorClick" tooltip="Action">
          Action
        </MenuItem>
        <MenuItem value="form" icon="HiPencil" tooltip="Form">
          Form
        </MenuItem>
        <MenuItem value="feedback" icon="HiAnnotation" tooltip="Feedback">
          Feedback
        </MenuItem>
        <MenuItem
          value="datadisplay"
          icon="HiCollection"
          tooltip="Data display"
        >
          Data display
        </MenuItem>
        <MenuItem value="overlay" icon="HiDesktopComputer" tooltip="Overlay">
          Overlay
        </MenuItem>
        <MenuItem value="disclosure" icon="HiSpeakerphone" tooltip="Disclosure">
          Disclosure
        </MenuItem>
        <MenuItem value="media" icon="HiPhotograph" tooltip="Media">
          Media
        </MenuItem>
        <MenuItem value="layout" icon="HiTemplate" tooltip="Layout">
          Layout
        </MenuItem>
        <MenuItem value="utils" icon="HiAdjustments" tooltip="Utils">
          Utils
        </MenuItem>
      </Menu>

      <SubMenu value="typography">
        <SubMenuItem onClick={() => navigate('/typography/heading')}>
          Heading
        </SubMenuItem>
        <SubMenuItem onClick={() => navigate('/typography/text')}>
          Text
        </SubMenuItem>
      </SubMenu>

      <SubMenu value="action">
        <SubMenuItem onClick={() => navigate('/action/button')}>
          Button
        </SubMenuItem>
        <SubMenuItem onClick={() => navigate('/action/iconbutton')}>
          Icon button
        </SubMenuItem>
        <SubMenuItem onClick={() => navigate('/action/linkbutton')}>
          Link Button
        </SubMenuItem>
      </SubMenu>

      <SubMenu value="form">
        <SubMenuItem onClick={() => navigate('/form/form')}>Form</SubMenuItem>
      </SubMenu>

      <SubMenu value="feedback">
        <SubMenuItem onClick={() => navigate('/feedback/progressbar')}>
          Progress bar
        </SubMenuItem>
        <SubMenuItem onClick={() => navigate('/feedback/spinner')}>
          Spinner
        </SubMenuItem>
        <SubMenuItem onClick={() => navigate('/feedback/toast')}>
          Toast
        </SubMenuItem>
        <SubMenuItem onClick={() => navigate('/feedback/shimmer')}>
          Shimmer
        </SubMenuItem>
        <SubMenuItem onClick={() => navigate('/feedback/alert')}>
          Alert
        </SubMenuItem>
      </SubMenu>

      <SubMenu value="datadisplay">
        <SubMenuItem onClick={() => navigate('/datadisplay/badge')}>
          Badge
        </SubMenuItem>
        <SubMenuItem onClick={() => navigate('/datadisplay/separator')}>
          Separator
        </SubMenuItem>
        <SubMenuItem onClick={() => navigate('/datadisplay/list')}>
          List
        </SubMenuItem>
        <SubMenuItem onClick={() => navigate('/datadisplay/pagination')}>
          Pagination
        </SubMenuItem>
        <SubMenuItem onClick={() => navigate('/datadisplay/timeline')}>
          Timeline
        </SubMenuItem>
      </SubMenu>

      <SubMenu value="overlay">
        <SubMenuItem onClick={() => navigate('/overlay/modal')}>
          Modal
        </SubMenuItem>
        <SubMenuItem onClick={() => navigate('/overlay/dialog')}>
          Dialog
        </SubMenuItem>
        <SubMenuItem onClick={() => navigate('/overlay/tooltip')}>
          Tooltip
        </SubMenuItem>
        <SubMenuItem onClick={() => navigate('/overlay/Dropdown')}>
          Dropdown
        </SubMenuItem>
        <SubMenuItem onClick={() => navigate('/overlay/popover')}>
          Popover
        </SubMenuItem>
        <SubMenuItem onClick={() => navigate('/overlay/hovercard')}>
          Hover card
        </SubMenuItem>
      </SubMenu>

      <SubMenu value="disclosure">
        <SubMenuItem onClick={() => navigate('/disclosure/accordion')}>
          Accordion
        </SubMenuItem>
        <SubMenuItem onClick={() => navigate('/disclosure/tabs')}>
          Tabs
        </SubMenuItem>
      </SubMenu>

      <SubMenu value="media">
        <SubMenuItem onClick={() => navigate('/media/avatar')}>
          Avatar
        </SubMenuItem>
        <SubMenuItem onClick={() => navigate('/media/icon')}>Icon</SubMenuItem>
      </SubMenu>

      <SubMenu value="layout">
        <SubMenuItem onClick={() => navigate('/layout/card')}>Card</SubMenuItem>
        <SubMenuItem onClick={() => navigate('/layout/sidebar')}>
          Sidebar
        </SubMenuItem>
      </SubMenu>

      <SubMenu value="utils">
        <SubMenuItem onClick={() => navigate('/utils/empty')}>
          Empty
        </SubMenuItem>
        <SubMenuItem onClick={() => navigate('/utils/footer')}>
          Footer
        </SubMenuItem>
        <SubMenuItem onClick={() => navigate('/utils/avatargroup')}>
          Avatar group
        </SubMenuItem>
      </SubMenu>
    </Sidebar>
  );
}
