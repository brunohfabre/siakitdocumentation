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

      <SubMenu value="media">
        <SubMenuItem onClick={() => navigate('/media/icon')}>Icon</SubMenuItem>
      </SubMenu>
    </Sidebar>
  );
}
