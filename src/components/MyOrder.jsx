import flechita from '@images/flechita.svg';
import { Link } from 'react-router-dom';

const MyOrder = ({products, date, totalOrder}) => {
  const countProdcuts = products?.length;
  const formatedDate = `${date.getFullYear()}/${(date.getMonth()+1)}/${date.getDate()}`
  return (
    <div className="order-item">
      <div className="order-info">
        <p>
          <span> {formatedDate} </span>
          <span> {countProdcuts} {' '} articles </span>
        </p>
        <div>
          <p> {`${totalOrder}`} </p>
            <figure>
              <img src={flechita} alt=""/>
            </figure>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
