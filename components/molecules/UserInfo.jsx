import { useSelector } from 'react-redux';
import { Label, Image } from '../index';

const UserInfo = () => {
  const { user } = useSelector((state) => ({
    user: state.user,
  }));

  return user.name ? (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Label style={{ margin: '0 15px', fontSize: '16px' }} text={user.name} />
      <Image
        style={{
          width: '50px',
          height: '50px',
          padding: '0',
          borderRadius: '100%',
          border: 'none',
        }}
        src={user.subreddit.icon_img.substring(
          0,
          user.subreddit.icon_img.indexOf('?')
        )}
      />
    </div>
  ) : (
    <div />
  );
};

export default UserInfo;
