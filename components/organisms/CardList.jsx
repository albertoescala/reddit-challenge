import { Card } from '../index';

const CardList = ({ data = [] }) => {
  return (
    <div>
      {data.map(({ data }) => (
        <Card key={data.id} {...data} />
      ))}
    </div>
  );
}

export default CardList;