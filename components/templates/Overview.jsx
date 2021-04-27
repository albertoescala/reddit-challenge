import { useSelector } from 'react-redux';
import { CardList, Content } from '../index';

const Overview = () => {
  const { payload } = useSelector((state) => ({
  payload: state.payload,
}))
  return (
    <div>
      <div>
        <CardList data={payload || []} />
      </div>
      <div>
        <Content />
      </div>
    </div>
  )
}

export default Overview;