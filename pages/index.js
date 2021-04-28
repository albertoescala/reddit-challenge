import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { setCode } from '../config/actions';
import { fetchTopPosts, getToken, getUser } from '../config/services';
import { Overview } from '../components';

export default function Home() {
  const {
    auth: { token, code: stateCode },
    user,
    posts,
  } = useSelector((state) => state);
  const router = useRouter();
  const { code } = router.query;
  const dispatch = useDispatch();

  useEffect(() => {
    if (code) {
      if (stateCode !== code) {
        dispatch(setCode(code));
        dispatch(getToken(code));
      }
      if (token && !user.name) {
        dispatch(getUser());
      }
    }
    if (posts.length === 0) {
      dispatch(fetchTopPosts());
    }
  }, []);

  return (
    <>
      <Overview />
    </>
  );
}
