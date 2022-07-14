import SiakitLogoFull from '../../assets/icons/siakit-logo-full.png';
import SiakitLogoShort from '../../assets/icons/siakit-logo-short.png';
import { Card } from '../../components/Card';
import { CodeHighlight } from '../../components/CodeHighlight';
import { Flex } from '../../components/Flex';
import { Heading } from '../../components/Heading';
import { LinkButton } from '../../components/LinkButton';
import {
  Menu,
  MenuHeader,
  MenuItem,
  MenuTitle,
  Sidebar,
  SubMenu,
  SubMenuItem,
  SubMenuSeparator,
  SubMenuTitle,
} from '../../components/Sidebar';
import {
  SimpleTable,
  SimpleTableHeader,
  SimpleTableItem,
} from '../../components/SimpleTable';
import { SimpleTableBody } from '../../components/SimpleTable/SimpleTableBody';
import { Spacer } from '../../components/Spacer';
import { Text } from '../../components/Text';

const exampleCode = `import {
  Sidebar,
  Menu,
  MenuHeader,
  MenuTitle,
  MenuItem,
  SubMenu,
  SubMenuTitle,
  SubMenuSeparator,
  SubMenuItem,
} from '@atmoutsourcing/siakit';

<Sidebar>
  <Menu>
    <MenuHeader />
    <MenuTitle />
    <MenuItem />
  </Menu>

  <SubMenu>
    <SubMenuTitle />
    <SubMenuSeparator />
    <SubMenuItem />
  </SubMenu>
</Sidebar>`;

export function SidebarPage(): JSX.Element {
  return (
    <Flex flex direction="column" align="center" overflow>
      <Flex width={768} padding={32} direction="column" gap>
        <Heading size="xl">Sidebar</Heading>
        <Card>
          <Flex padding justify="center" height={248} align="center" flex>
            <Sidebar>
              <Menu>
                <MenuHeader onClick={() => undefined}>
                  <img src={SiakitLogoFull} alt="siakit logo" />

                  <img src={SiakitLogoShort} alt="siakit logo" />
                </MenuHeader>

                <MenuItem
                  value="1"
                  onClick={() => undefined}
                  icon="HiOutlineArchive"
                  activeIcon="HiArchive"
                >
                  item 1
                </MenuItem>
                <MenuItem
                  value="2"
                  onClick={() => undefined}
                  icon="HiOutlineArchive"
                  activeIcon="HiArchive"
                >
                  item 2
                </MenuItem>

                <MenuTitle>title</MenuTitle>

                <MenuItem
                  value="3"
                  onClick={() => undefined}
                  icon="HiOutlineArchive"
                  activeIcon="HiArchive"
                >
                  item 3
                </MenuItem>
                <MenuItem
                  value="4"
                  onClick={() => undefined}
                  icon="HiOutlineArchive"
                  activeIcon="HiArchive"
                >
                  item 4
                </MenuItem>
              </Menu>

              <SubMenu value="1">
                <SubMenuTitle>title 1</SubMenuTitle>

                <SubMenuItem onClick={() => undefined}>item 1</SubMenuItem>

                <SubMenuSeparator />

                <SubMenuTitle>title 1</SubMenuTitle>

                <SubMenuItem onClick={() => undefined}>item 1</SubMenuItem>
                <SubMenuItem onClick={() => undefined}>item 1</SubMenuItem>
                <SubMenuItem onClick={() => undefined}>item 1</SubMenuItem>
              </SubMenu>

              <SubMenu value="2">
                <SubMenuTitle>title 2</SubMenuTitle>

                <SubMenuItem onClick={() => undefined}>item 2</SubMenuItem>

                <SubMenuSeparator />

                <SubMenuTitle>title 2</SubMenuTitle>

                <SubMenuItem onClick={() => undefined}>item 2</SubMenuItem>
                <SubMenuItem onClick={() => undefined}>item 2</SubMenuItem>
                <SubMenuItem onClick={() => undefined}>item 2</SubMenuItem>
              </SubMenu>

              <SubMenu value="3">
                <SubMenuTitle>title 3</SubMenuTitle>

                <SubMenuItem onClick={() => undefined}>item 3</SubMenuItem>

                <SubMenuSeparator />

                <SubMenuTitle>title 3</SubMenuTitle>

                <SubMenuItem onClick={() => undefined}>item 3</SubMenuItem>
                <SubMenuItem onClick={() => undefined}>item 3</SubMenuItem>
                <SubMenuItem onClick={() => undefined}>item 3</SubMenuItem>
              </SubMenu>

              <SubMenu value="4">
                <SubMenuTitle>title 4</SubMenuTitle>

                <SubMenuItem onClick={() => undefined}>item 4</SubMenuItem>

                <SubMenuSeparator />

                <SubMenuTitle>title 4</SubMenuTitle>

                <SubMenuItem onClick={() => undefined}>item 4</SubMenuItem>
                <SubMenuItem onClick={() => undefined}>item 4</SubMenuItem>
                <SubMenuItem onClick={() => undefined}>item 4</SubMenuItem>
              </SubMenu>
            </Sidebar>
          </Flex>
        </Card>

        <Spacer height />
        <Heading>Anatomy</Heading>
        <CodeHighlight>{exampleCode}</CodeHighlight>

        <Spacer height />
        <Heading>API reference</Heading>
        <Heading size="md">Sidebar</Heading>

        <SimpleTable>
          <SimpleTableHeader>
            <SimpleTableItem isHeader>Prop</SimpleTableItem>
            <SimpleTableItem isHeader>Type</SimpleTableItem>
            <SimpleTableItem isHeader>Default</SimpleTableItem>
          </SimpleTableHeader>

          <SimpleTableBody>
            <SimpleTableItem required>children</SimpleTableItem>
            <SimpleTableItem>ReactNode</SimpleTableItem>
            <SimpleTableItem />
          </SimpleTableBody>
        </SimpleTable>

        <Spacer height />
        <Heading size="md">Menu</Heading>

        <SimpleTable>
          <SimpleTableHeader>
            <SimpleTableItem isHeader>Prop</SimpleTableItem>
            <SimpleTableItem isHeader>Type</SimpleTableItem>
            <SimpleTableItem isHeader>Default</SimpleTableItem>
          </SimpleTableHeader>

          <SimpleTableBody>
            <SimpleTableItem required>children</SimpleTableItem>
            <SimpleTableItem>ReactNode</SimpleTableItem>
            <SimpleTableItem />
          </SimpleTableBody>
        </SimpleTable>

        <Spacer height />
        <Heading size="md">MenuHeader</Heading>

        <SimpleTable>
          <SimpleTableHeader>
            <SimpleTableItem isHeader>Prop</SimpleTableItem>
            <SimpleTableItem isHeader>Type</SimpleTableItem>
            <SimpleTableItem isHeader>Default</SimpleTableItem>
          </SimpleTableHeader>

          <SimpleTableBody>
            <SimpleTableItem required>children</SimpleTableItem>
            <SimpleTableItem>ReactNode</SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem>onClick</SimpleTableItem>
            <SimpleTableItem>FUNCTION</SimpleTableItem>
            <SimpleTableItem />
          </SimpleTableBody>
        </SimpleTable>

        <Spacer height />
        <Heading size="md">MenuTitle</Heading>

        <SimpleTable>
          <SimpleTableHeader>
            <SimpleTableItem isHeader>Prop</SimpleTableItem>
            <SimpleTableItem isHeader>Type</SimpleTableItem>
            <SimpleTableItem isHeader>Default</SimpleTableItem>
          </SimpleTableHeader>

          <SimpleTableBody>
            <SimpleTableItem required>children</SimpleTableItem>
            <SimpleTableItem>string</SimpleTableItem>
            <SimpleTableItem />
          </SimpleTableBody>
        </SimpleTable>

        <Spacer height />
        <Heading size="md">MenuItem</Heading>

        <SimpleTable>
          <SimpleTableHeader>
            <SimpleTableItem isHeader>Prop</SimpleTableItem>
            <SimpleTableItem isHeader>Type</SimpleTableItem>
            <SimpleTableItem isHeader>Default</SimpleTableItem>
          </SimpleTableHeader>

          <SimpleTableBody>
            <SimpleTableItem required>children</SimpleTableItem>
            <SimpleTableItem>string</SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem required>value</SimpleTableItem>
            <SimpleTableItem>string</SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem>onClick</SimpleTableItem>
            <SimpleTableItem>FUNCTION</SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem>icon</SimpleTableItem>
            <SimpleTableItem isEnum>
              <LinkButton
                onClick={() =>
                  window.open('https://react-icons.github.io/react-icons/')
                }
              >
                react-icons docs
              </LinkButton>
            </SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem>activeIcon</SimpleTableItem>
            <SimpleTableItem isEnum>
              <LinkButton
                onClick={() =>
                  window.open('https://react-icons.github.io/react-icons/')
                }
              >
                react-icons docs
              </LinkButton>
            </SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem>tooltip</SimpleTableItem>
            <SimpleTableItem>string</SimpleTableItem>
            <SimpleTableItem />
          </SimpleTableBody>
        </SimpleTable>

        <Spacer height />
        <Heading size="md">SubMenu</Heading>

        <SimpleTable>
          <SimpleTableHeader>
            <SimpleTableItem isHeader>Prop</SimpleTableItem>
            <SimpleTableItem isHeader>Type</SimpleTableItem>
            <SimpleTableItem isHeader>Default</SimpleTableItem>
          </SimpleTableHeader>

          <SimpleTableBody>
            <SimpleTableItem required>children</SimpleTableItem>
            <SimpleTableItem>string</SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem required>value</SimpleTableItem>
            <SimpleTableItem>string</SimpleTableItem>
            <SimpleTableItem />
          </SimpleTableBody>
        </SimpleTable>

        <Spacer height />
        <Heading size="md">SubMenuTitle</Heading>

        <SimpleTable>
          <SimpleTableHeader>
            <SimpleTableItem isHeader>Prop</SimpleTableItem>
            <SimpleTableItem isHeader>Type</SimpleTableItem>
            <SimpleTableItem isHeader>Default</SimpleTableItem>
          </SimpleTableHeader>

          <SimpleTableBody>
            <SimpleTableItem required>children</SimpleTableItem>
            <SimpleTableItem>ReactNode</SimpleTableItem>
            <SimpleTableItem />
          </SimpleTableBody>
        </SimpleTable>

        <Spacer height />
        <Heading size="md">SubMenuSeparator</Heading>

        <Flex>
          <Text>No props</Text>
        </Flex>

        <Spacer height />
        <Heading size="md">SubMenuItem</Heading>

        <SimpleTable>
          <SimpleTableHeader>
            <SimpleTableItem isHeader>Prop</SimpleTableItem>
            <SimpleTableItem isHeader>Type</SimpleTableItem>
            <SimpleTableItem isHeader>Default</SimpleTableItem>
          </SimpleTableHeader>

          <SimpleTableBody>
            <SimpleTableItem required>children</SimpleTableItem>
            <SimpleTableItem>ReactNode</SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem required>onClick</SimpleTableItem>
            <SimpleTableItem>FUNCTION</SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem>index</SimpleTableItem>
            <SimpleTableItem>number</SimpleTableItem>
            <SimpleTableItem />
          </SimpleTableBody>
        </SimpleTable>
      </Flex>
    </Flex>
  );
}
