import { Card } from '../index';

const CardList = ({ data = [] }) => {
  return (
    <div>
      {data.map(({ data }) => (
        <Card {...data} />
      ))}
    </div>
  );
}

export default CardList;