import { useSelector } from 'react-redux';
import { Image, Label } from '../atoms';

const Details = () => {
  const postSelected = useSelector((state) => state.postSelected)

  return postSelected.author ? (
    <div style={{ textAlign: 'center' }}>
      <Label text={postSelected.title} />
      {postSelected.thumbnail !== 'default' && <Image src={postSelected.thumbnail} style={{ width: '200px', height: '200px' }} />}
      <Label text={`${postSelected.score} Points`} />
    </div>
  ) : (
    <div />
  );
}

export default Details;