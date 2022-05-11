import {
  Box,
  Button,
  Input,
  Text,
  useStyleConfig,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { register } from '../../api/requests/userRequests';
import { Layout } from '../../components/Layout/Layout';

function RegisterPage() {
  const styles = useStyleConfig('Card');
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    fullname: '',
  });
  const [error, setError] = useState('');

  const handleChange = (event) => {
    setUserInfo((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleRegistration = () => {
    if (userInfo.email && userInfo.password && userInfo.fullname) {
      register({
        email: userInfo.email,
        password: userInfo.password,
        fullname: 'fullname',
      });
    } else {
      setError('missing information');
    }
  };

  return (
    <Layout>
      <Box __css={styles}>
        <VStack spacing="5" alignItems="start">
          <Text variant="subtitle-bold">Register</Text>
          <Text color="red.200">{error}</Text>
          <Input
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={userInfo.email}
          />
          <Input
            placeholder="Full Name"
            name="fullname"
            onChange={handleChange}
            value={userInfo.fullname}
          />
          <Input
            placeholder="Password"
            type="password"
            name="password"
            onChange={handleChange}
            value={userInfo.password}
          />
          <Button onClick={handleRegistration}>Register</Button>
        </VStack>
      </Box>
    </Layout>
  );
}

export default RegisterPage;
