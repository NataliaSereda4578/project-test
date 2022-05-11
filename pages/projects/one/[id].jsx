import { Box, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import { getProjectById } from '../../../api/requests/projectRequests';
import { getUserInfo } from '../../../api/requests/userRequests';
import { Layout } from '../../../components/Layout/Layout';

function SingleProject(props) {
  const { project, user } = props;

  return (
    <Layout user={user && JSON.parse(user)}>
      <VStack h="50%" justifyContent="space-between">
        <Text variant="big-bold">{project.name}</Text>
        <Box pos="relative" height={300} width={400}>
          {project.image && (
            <Image
              height={300}
              width={400}
              layout="intrinsic"
              src={project.image}
            />
          )}
        </Box>
      </VStack>
    </Layout>
  );
}

export const getServerSideProps = async ({ req, res, params }) => {
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
  const project = await getProjectById(
    { ...params, token: req.cookies?.token },
    res
  );

  return { props: { user: user ? JSON.stringify(user) : null, project } };
};

export default SingleProject;
