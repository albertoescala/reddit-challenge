import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setCode } from '../config/actions';
import { fetchTopPosts, getToken } from '../config/services';
import { Overview, Button } from '../components';
import { useRouter } from 'next/router';

export default function Home() {
  const token = useSelector((state) => state.auth.access_token);
  const stateCode = useSelector((state) => state.auth.code);
  const router = useRouter()
  const { code } = router.query
  const dispatch = useDispatch();

  useEffect(() => {
    if (code) {
      if (stateCode !== code) {
        dispatch(setCode(code))
        dispatch(getToken(code))
      }
    }
    dispatch(fetchTopPosts(token))
  }, [code, stateCode])

  const login = () => {
    return (
      router.push('https://www.reddit.com/api/v1/authorize?client_id=client_id&response_type=code&state=SUCCESS&redirect_uri=http%3A%2F%2Fwww.localhost%3A3000&duration=permanent&scope=read+save+history')
    )
  }

  return (
    <div>
      <Overview />
      <Button text="Login" onClick={() => login()} />
    </div>
  )
}
