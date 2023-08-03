import OrderRadioButtons from '../../common/component/OrderRadioButtons';
import CartHeader from '../component/CartHeader';
import FreeCart from '../component/FreeCart';
import { useState } from 'react';
import OrderBox from '../../common/component/orderBox';

const Cart = ({}) => {
  const buttons = [
    {
      flag: 0,
      name: '배달',
    },
    {
      flag: 1,
      name: '포장',
    },
    {
      flag: 2,
      name: '매장식사',
    },
  ];

  const [flag, setFlag] = new useState(0);

  return (
    <div>
      <CartHeader>장바구니</CartHeader>
      <div>
        <div className="DonationCartButtonsWrapper">
          <OrderRadioButtons flag={flag} buttons={buttons} setFlag={setFlag}></OrderRadioButtons>
        </div>
        <FreeCart></FreeCart>
      </div>
      <OrderBox />
    </div>
  );
};

export default Cart;
