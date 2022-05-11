import { Box, Flex, useStyleConfig } from '@chakra-ui/react';
import { Sidebar } from '../Sidebar/Sidebar';

export function Layout({ user, children }) {
  const styles = useStyleConfig('MainPanel');

  return (
    <Flex minH="100vh">
      <Sidebar user={user} />
      <Box __css={styles}>{children}</Box>
    </Flex>
  );
}
