import { CardList, Content } from '../index';
import mock from '../../mock.json';

const Overview = () => {
  return (
    <div>
      <div>
        <CardList data={mock.data.children} />
      </div>
      <div>
        <Content />
      </div>
    </div>
  )
}

export default Overview;