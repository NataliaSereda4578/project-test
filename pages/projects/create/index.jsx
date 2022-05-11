import {
  Box,
  Button,
  Input,
  Text,
  useStyleConfig,
  VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState, useRef } from 'react';
import { saveProject } from '../../../api/requests/projectRequests';
import { Layout } from '../../../components/Layout/Layout';
import { getUserInfo } from '../../../api/requests/userRequests';
import { Cropper } from 'react-cropper';

function ProjectsCreate({ user }) {
  const styles = useStyleConfig('Card');
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const cropperRef = useRef();

  const apply = async (e) => {
    // eslint-disable-next-line no-undef
    const fileReader = new FileReader();
    fileReader.readAsDataURL(e.target.files[0]);
    fileReader.onloadend = () => {
      setFile(fileReader.result);
    };
  };

  const onCrop = () => {
    const imageElement = cropperRef?.current;
    const cropper = imageElement?.cropper;
    setImage(cropper.getCroppedCanvas().toDataURL());
  };

  const handleSubmit = async () => {
    if (image && name) {
      await saveProject({ name, image })
        .then(() => router.replace('/projects'))
        .catch((e) => setError(e.message));
    } else {
      setError('All fields required');
    }
  };

  return (
    <Layout user={user && JSON.parse(user)}>
      <VStack __css={styles} spacing={2}>
        <Box>
          <Text>Create project</Text>
        </Box>
        <Text color="red.200">{error}</Text>
        <Input
          placeholder="Project Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Box
          sx={{
            height: '20rem',
            width: '20rem',
            aspectRatio: '1',
            flex: ' 0 0 20rem',
            padding: '0 !important',
            backgroundImage: `url(${file})`,
            marginBottom: 3,
          }}
        >
          <Cropper
            src={file}
            style={{ height: '15rem', width: '100%' }}
            initialAspectRatio={16 / 9}
            guides={false}
            crop={onCrop}
            ref={cropperRef}
          />
          <Input type="file" onChange={apply} />
        </Box>
        <Button onClick={handleSubmit}>Submit</Button>
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
      return { redirect: { destination: '/login', permanent: false } };
    }
  } else {
    return { redirect: { destination: '/login', permanent: false } };
  }

  return { props: { user: user ? JSON.stringify(user) : null } };
};

export default ProjectsCreate;
