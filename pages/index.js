import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setCode } from '../config/actions';
import { fetchTopPosts, getToken, getUser } from '../config/services';
import { Overview } from '../components';
import { useRouter } from 'next/router';

export default function Home() {
  const token = useSelector((state) => state.auth.token);
  const stateCode = useSelector((state) => state.auth.code);
  const stateUser = useSelector((state) => state.user);
  const statePosts = useSelector((state) => state.posts);
  const router = useRouter();
  const { code } = router.query
  const dispatch = useDispatch();

  useEffect(() => {
    if (code) {
      if (stateCode !== code) {
        dispatch(setCode(code))
        dispatch(getToken(code))
      }
      if (token && !stateUser.name) {
        dispatch(getUser());
      }
    }
    if (statePosts.length === 0) {
      dispatch(fetchTopPosts())
    }
  }, [])

  return (
    <div>
      <Overview />
    </div>
  )
}
