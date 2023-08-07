import OrderRadioButtons from '../../common/component/OrderRadioButtons';
import CartHeader from '../component/CartHeader';
import FreeCart from '../component/FreeCart';
import { useState } from 'react';
import OrderBox from '../../common/component/orderBox';
import '../style/Cart.scss';

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

  let buttonText;
  if (flag === 0) {
    buttonText = '배달 주문하기';
  } else if (flag === 1) {
    buttonText = '포장 주문하기';
  } else if (flag === 2) {
    buttonText = '매장식사 주문하기';
  }

  return (
    <div>
      <CartHeader>장바구니</CartHeader>
      <div>
        <div className="DonationCartButtonsWrapper">
          <OrderRadioButtons flag={flag} buttons={buttons} setFlag={setFlag}></OrderRadioButtons>
        </div>
        <FreeCart></FreeCart>
      </div>
      <OrderBox text={buttonText} />
    </div>
  );
};

export default Cart;
