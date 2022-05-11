import { Center, Text } from '@chakra-ui/react';
import { Layout } from '../../components/Layout/Layout';

export default function Custom404() {
  return (
    <Layout>
      <Center minH="100vh">
        <Text variant="title">Page not found (404)</Text>
      </Center>
    </Layout>
  );
}
