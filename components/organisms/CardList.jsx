import { Card } from '../index';

const CardList = ({ data = [] }) => {
  return (
    <div>
      {data.map(() => (
        <Card />
      ))}
    </div>
  );
}

export default CardList;