import { useSelector } from 'react-redux';
import { Label } from '../atoms';

const UserInfo = () => {
  const { user } = useSelector((state) => ({
    user: state.user,
  }));

  return (
    <Label style={{ margin: '0 15px' }} text={user.name} />
  );
}

export default UserInfo;