import { HiHome } from 'react-icons/hi';
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
        <MenuItem value="typography" icon="HiHome">
          Typography
        </MenuItem>
        <MenuItem value="action" icon="HiCursorClick">
          Action
        </MenuItem>
        <MenuItem value="form" icon="HiPencil">
          Form
        </MenuItem>
        <MenuItem value="feedback" icon="HiAnnotation">
          Feedback
        </MenuItem>
        <MenuItem value="datadisplay" icon="HiCollection">
          Data display
        </MenuItem>
        <MenuItem value="overlay" icon="HiDesktopComputer">
          Overlay
        </MenuItem>
        <MenuItem value="disclosure" icon="HiSpeakerphone">
          Disclosure
        </MenuItem>
        <MenuItem value="media" icon="HiPhotograph">
          Media
        </MenuItem>
        <MenuItem value="layout" icon="HiTemplate">
          Layout
        </MenuItem>
        <MenuItem value="utils" icon="HiAdjustments">
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
