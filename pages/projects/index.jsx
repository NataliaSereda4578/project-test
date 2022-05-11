import { Box, Flex, Text, useStyleConfig, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { getAllProjects } from '../../api/requests/projectRequests';
import { getUserInfo } from '../../api/requests/userRequests';
import { Layout } from '../../components/Layout/Layout';

function AllProjects({ projects, user }) {
  const styles = useStyleConfig('Card');
  const router = useRouter();

  return (
    <Layout user={JSON.parse(user)}>
      <VStack alignItems="start" minH="100vh" spacing="20" minW="100%" p="30">
        <Text vartiant="title">{JSON.parse(user).email} projects</Text>
        <Flex sx={{ flexWrap: 'wrap' }}>
          {projects &&
            projects.map((prj, index) => (
              // eslint-disable-next-line no-underscore-dangle
              <Box
                __css={styles}
                onClick={() => router.push(`projects/one/${prj._id}`)}
                key={`${prj}-${index}`}
              >
                <Text>{prj.name}</Text>
                {prj.image && (
                  <Image
                    src={prj.image}
                    width="80"
                    height="80"
                    layout="intrinsic"
                  />
                )}
              </Box>
            ))}
        </Flex>
      </VStack>
    </Layout>
  );
}

export const getServerSideProps = async ({ req, res }) => {
  let user;
  if (req.cookies.token) {
    try {
      user = await getUserInfo(req.cookies.token);
    } catch (err) {
      res.redirect('/login');
    }
  } else {
    res.redirect('/login');
  }

  const projects = await getAllProjects(req.cookies.token);

  return { props: { user: user ? JSON.stringify(user) : null, projects } };
};

export default AllProjects;
