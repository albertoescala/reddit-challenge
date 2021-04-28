import { useSelector } from 'react-redux';
import { Image, Label, Title } from '../atoms';

const Details = () => {
  const postSelected = useSelector((state) => state.postSelected)

  return (
    <div>
      <Label text={postSelected.title} />
      {postSelected.thumbnail !== 'default' && <Image src={postSelected.thumbnail} width="100" height="100" />}
      <Label text={`${postSelected.score} Points`} />
    </div>
  );
}

export default Details;