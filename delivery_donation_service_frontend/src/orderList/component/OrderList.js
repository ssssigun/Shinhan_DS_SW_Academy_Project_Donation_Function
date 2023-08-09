import dayjs from 'dayjs';
import None from '../../common/component/None';
import Order from './Order';

const OrderList = ({ orders }) => {
  const dateformat = (date) => {
    return dayjs(date).format('YYYY.MM.DD');
  };

  const orderState = (orderFlag, orderState) => {
    if (orderFlag === 1) {
      if (orderState === 1) {
        return '배달이 완료되었습니다.';
      }
    } else if (orderFlag === 2) {
      if (orderState === 1) {
        return '픽업이 완료되었습니다.';
      }
    }
  };

  if (Object.keys(orders).length === 0) {
    return (
      <None title="떵그러니..." image="image/PLI.png" height={`${window.innerHeight}`}>
        주문내역이 없어요.
        <br />
        땡겨요로 주문해보세요.
      </None>
    );
  } else {
    return orders.map((order, idx) => {
      return (
        <Order
          date={dateformat(order.orderDate)}
          state={orderState(order.orderFlag, order.orderState)}
          title={order.store.storeName}
          image={order.store.storeImage}
          menu={order.orderDetails[0].menu.detail}
          price={order.orderPrice.toLocaleString()}
          menuLength={order.orderDetails.length}
          key={idx}
        />
      );
    });
  }
};

export default OrderList;
