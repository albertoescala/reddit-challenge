import { Button, Label, Image } from '../index';
const Card = () => {
  return (
    <div>
      <div>
        <div>
          <Label />
          <Label />
        </div>
        <div>
          <Image />
          <Label />
        </div>
        <div>
          <Button />
          <Label />
        </div>
      </div>
      <div>
        <Image />
      </div>
    </div>
  )
};

export default Card;