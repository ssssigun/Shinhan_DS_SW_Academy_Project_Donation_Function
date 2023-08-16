import dayjs from 'dayjs';
import None from '../../common/component/None';
import Donation from './Donation';
import OrderFree from './OrderFree';

const OrderFreeList = ({ donations }) => {
  console.log(donations);
  if (donations == null || donations === undefined || !Object.keys(donations).includes('orderFreeList')) {
    return (
      <None title="떵그러니..." image="image/PLI.png" height={`${window.innerHeight}`}>
        주문내역이 없어요.
        <br />
        땡겨요로 주문해보세요.
      </None>
    );
  } else {
    return donations.orderFreeList.map((donation, idx) => {
      return donation && <OrderFree donation={donation} key={idx} store={donations.stores[donation.storePk]} />;
    });
  }
};

export default OrderFreeList;
