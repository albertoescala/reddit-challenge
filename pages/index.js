import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setCode } from '../config/actions';
import { fetchTopPosts, getToken, getUser } from '../config/services';
import { Overview, Button } from '../components';
import { useRouter } from 'next/router';

const REDDIT_HOST = process.env.NEXT_PUBLIC_REDDIT_HOST;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;
const CALLBACK_URI = process.env.NEXT_PUBLIC_CALLBACK_URI;

export default function Home() {
  const token = useSelector((state) => state.auth.token);
  const stateCode = useSelector((state) => state.auth.code);
  const router = useRouter()
  const { code } = router.query
  const dispatch = useDispatch();

  useEffect(async () => {
    if (code) {
      if (stateCode !== code) {
        dispatch(setCode(code))
        dispatch(getToken(code))
      }
      if (token) {
        dispatch(getUser());
      }
    }
    dispatch(fetchTopPosts(token))
  }, [code])

  const login = () => {
    return (
      router.push(`${REDDIT_HOST}/api/v1/authorize?client_id=${CLIENT_ID}&response_type=code&state=SUCCESS&redirect_uri=${CALLBACK_URI}&duration=permanent&scope=read+save+history+identity`)
    )
  }

  return (
    <div>
      <Overview />
      <Button text="Login" onClick={() => login()} />
    </div>
  )
}
