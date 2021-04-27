import moment from 'moment';
import { Button, Label, Image } from '../index';

const Card = ({ author, created, thumbnail, title, num_comments }) => {
  return (
    <div>
      <div>
        <div>
          <Label text={author} />
          <Label text={`${moment.unix(created).fromNow()}`} />
        </div>
        <div>
          <Image src={thumbnail} width="50" height="50" />
          <Label text={title} />
        </div>
        <div>
          <Button text="Dismiss Post" />
          <Label text={`${num_comments} comments`} />
        </div>
      </div>
      <div>
        <Image />
      </div>
    </div>
  )
};

export default Card;