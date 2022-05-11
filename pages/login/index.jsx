import {
  Box,
  Button,
  Input,
  Text,
  useStyleConfig,
  VStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';
import { login } from '../../api/requests/userRequests';
import { Layout } from '../../components/Layout/Layout';

function LoginPage() {
  const styles = useStyleConfig('Card');
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (event) => {
    setUserInfo((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleRegistration = () => {
    if (userInfo.email && userInfo.password) {
      try {
        login({
          email: userInfo.email,
          password: userInfo.password,
        });
      } catch (err) {
        setError(err.message || 'Login failed');
      }
    } else {
      setError('missing information');
    }
  };
  return (
    <Layout>
      <Box __css={styles}>
        <VStack spacing="5" alignItems="start">
          <Text variant="subtitle-bold">LOGIN</Text>
          <Text color="red.200">{error}</Text>
          <Input
            onChange={handleChange}
            placeholder="Email"
            name="email"
            value={userInfo.email}
          />
          <Input
            onChange={handleChange}
            placeholder="Password"
            name="password"
            type="password"
            value={userInfo.password}
          />
          <Button onClick={handleRegistration}>Enter</Button>
          <Link href="/register">
            <Text variant="link">Register</Text>
          </Link>
        </VStack>
      </Box>
    </Layout>
  );
}

export default LoginPage;
