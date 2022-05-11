import { extendTheme } from '@chakra-ui/react';
import { globalStyles } from './styles';
import { bg } from './bg';
import { breakpoints } from './foundations/breakpoints';
import { buttonStyles } from './components/button';
import { badgeStyles } from './components/badge';
import { linkStyles } from './components/link';
import { drawerStyles } from './components/drawer';
import { switchStyles } from './components/switch';
import { MainPanelComponent } from './additions/layout/MainPanel';
import { PanelContentComponent } from './additions/layout/PanelContent';
import { PanelContainerComponent } from './additions/layout/PanelContainer';
import { SidebarComponent } from './components/Sidebar';
import { Text } from './components/text';
import { CardComponent } from './components/card';

export default extendTheme(
  { breakpoints },
  bg,
  globalStyles,
  buttonStyles,
  badgeStyles,
  linkStyles,
  drawerStyles,
  switchStyles,
  MainPanelComponent,
  PanelContentComponent,
  PanelContainerComponent,
  SidebarComponent,
  Text,
  CardComponent,
  {
    fonts: {
      heading: 'Roboto, sans-serif',
      body: 'Roboto, sans-serif',
    },
  }
);
