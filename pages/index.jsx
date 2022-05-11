import { getUserInfo } from '../api/requests/userRequests';
import { Layout } from '../components/Layout/Layout';

export default function Home(props) {
  const { user } = props;
  return <Layout user={JSON.parse(user)} />;
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

  return { props: { user: user ? JSON.stringify(user) : null } };
};
