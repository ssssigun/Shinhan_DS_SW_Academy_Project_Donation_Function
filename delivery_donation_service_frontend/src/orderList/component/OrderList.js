import None from '../../common/component/None';
import Order from './Order';

const OrderList = ({ orders }) => {
  if (orders.length === 0) {
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
          date={order.date}
          state={order.state}
          title={order.title}
          image={order.image}
          menu={order.menu}
          price={order.price}
          menuLength={order.menu.length}
          key={idx}
        />
      );
    });
  }
};

export default OrderList;
