import OrderRadioButtons from '../../common/component/OrderRadioButtons';
import FreeCart from '../component/FreeCart';
import { useState } from 'react';

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
      <div>
        <OrderRadioButtons flag={flag} buttons={buttons} setFlag={setFlag}></OrderRadioButtons>
        <FreeCart></FreeCart>
      </div>
    </div>
  );
};

export default Cart;
