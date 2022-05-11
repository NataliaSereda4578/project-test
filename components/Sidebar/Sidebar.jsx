import { Box, HStack, Text, useStyleConfig, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import { logout } from '../../api/requests/userRequests';
import { sidebarOptions } from './constants';

export function Sidebar({ user }) {
  const styles = useStyleConfig('Sidebar');

  const handleLogOut = () => {
    logout();
  };

  return (
    <VStack __css={styles}>
      <Box>
        <Text variant="big-bold">Projects project ;)</Text>
      </Box>
      {sidebarOptions &&
        sidebarOptions
          .filter((e) => e.logged && user)
          .map((option) => (
            <Link href={option.path} key={option.lable}>
              <HStack>
                {option.icon && <option.icon color="white" />}
                <Text variant="link">{option.lable}</Text>
              </HStack>
            </Link>
          ))}
      {user && (
        <Text
          sx={{ mt: 'auto !important' }}
          variant="link"
          onClick={handleLogOut}
        >
          {user.email} | LogOut
        </Text>
      )}
    </VStack>
  );
}
