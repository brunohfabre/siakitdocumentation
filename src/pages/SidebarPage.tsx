import { useNavigate } from 'react-router-dom';

import SiaLogoLg from '../assets/icons/logo-lg.png';
import SiaLogoSm from '../assets/icons/logo-sm.png';
import { Flex } from '../components/Flex';
import {
  Sidebar,
  Menu,
  MenuHeader,
  MenuTitle,
  MenuItem,
  SubMenu,
  SubMenuItem,
  SubMenuSeparator,
  SubMenuTitle,
} from '../components/Sidebar';

export function SidebarPage(): JSX.Element {
  const navigate = useNavigate();

  return (
    <Flex>
      <Sidebar>
        <Menu>
          <MenuHeader onClick={() => navigate('/')}>
            <img src={SiaLogoLg} alt="sia logo" />

            <img src={SiaLogoSm} alt="sia logo" />
          </MenuHeader>

          <MenuItem
            value="1"
            onClick={() => console.log('navigate to route 1')}
            icon="House"
          >
            item 1
          </MenuItem>
          <MenuItem
            value="2"
            onClick={() => console.log('navigate to route 2')}
            icon="ChartPieSlice"
          >
            item 2
          </MenuItem>

          <MenuTitle>title</MenuTitle>

          <MenuItem
            value="3"
            onClick={() => console.log('navigate to route 3')}
            icon="FileText"
          >
            item 3
          </MenuItem>
          <MenuItem
            value="4"
            onClick={() => console.log('navigate to route 4')}
            icon="Gear"
          >
            item 4
          </MenuItem>
        </Menu>

        <SubMenu value="1">
          <SubMenuTitle>title 1</SubMenuTitle>

          <SubMenuItem onClick={() => undefined}>item 1</SubMenuItem>
          <SubMenuItem onClick={() => undefined}>item 1</SubMenuItem>
          <SubMenuItem onClick={() => undefined}>item 1</SubMenuItem>
          <SubMenuItem onClick={() => undefined}>item 1</SubMenuItem>

          <SubMenuSeparator />

          <SubMenuTitle>title 1</SubMenuTitle>

          <SubMenuItem onClick={() => undefined}>item 1</SubMenuItem>
          <SubMenuItem onClick={() => undefined}>item 1</SubMenuItem>
          <SubMenuItem onClick={() => undefined}>item 1</SubMenuItem>
          <SubMenuItem onClick={() => undefined}>item 1</SubMenuItem>
        </SubMenu>

        <SubMenu value="2">
          <SubMenuTitle>title 2</SubMenuTitle>

          <SubMenuItem onClick={() => undefined}>item 2</SubMenuItem>
          <SubMenuItem onClick={() => undefined}>item 2</SubMenuItem>
          <SubMenuItem onClick={() => undefined}>item 2</SubMenuItem>
          <SubMenuItem onClick={() => undefined}>item 2</SubMenuItem>

          <SubMenuSeparator />

          <SubMenuTitle>title 2</SubMenuTitle>

          <SubMenuItem onClick={() => undefined}>item 2</SubMenuItem>
          <SubMenuItem onClick={() => undefined}>item 2</SubMenuItem>
          <SubMenuItem onClick={() => undefined}>item 2</SubMenuItem>
          <SubMenuItem onClick={() => undefined}>item 2</SubMenuItem>
        </SubMenu>

        <SubMenu value="3">
          <SubMenuTitle>title 3</SubMenuTitle>

          <SubMenuItem onClick={() => undefined}>item 3</SubMenuItem>
          <SubMenuItem onClick={() => undefined}>item 3</SubMenuItem>
          <SubMenuItem onClick={() => undefined}>item 3</SubMenuItem>
          <SubMenuItem onClick={() => undefined}>item 3</SubMenuItem>

          <SubMenuSeparator />

          <SubMenuTitle>title 3</SubMenuTitle>

          <SubMenuItem onClick={() => undefined}>item 3</SubMenuItem>
          <SubMenuItem onClick={() => undefined}>item 3</SubMenuItem>
          <SubMenuItem onClick={() => undefined}>item 3</SubMenuItem>
          <SubMenuItem onClick={() => undefined}>item 3</SubMenuItem>
        </SubMenu>

        <SubMenu value="4">
          <SubMenuTitle>title 4</SubMenuTitle>

          <SubMenuItem onClick={() => undefined}>item 4</SubMenuItem>
          <SubMenuItem onClick={() => undefined}>item 4</SubMenuItem>
          <SubMenuItem onClick={() => undefined}>item 4</SubMenuItem>
          <SubMenuItem onClick={() => undefined}>item 4</SubMenuItem>

          <SubMenuSeparator />

          <SubMenuTitle>title 4</SubMenuTitle>

          <SubMenuItem onClick={() => undefined}>item 4</SubMenuItem>
          <SubMenuItem onClick={() => undefined}>item 4</SubMenuItem>
          <SubMenuItem onClick={() => undefined}>item 4</SubMenuItem>
          <SubMenuItem onClick={() => undefined}>item 4</SubMenuItem>
        </SubMenu>
      </Sidebar>
    </Flex>
  );
}
