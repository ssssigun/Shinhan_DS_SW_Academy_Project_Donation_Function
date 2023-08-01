import { useState } from 'react';
import OrderRadioButtons from '../component/OrderRadioButtons';

const OrderRadioButtonsTest = () => {
  const buttons = [
    {
      flag: 0,
      name: '주문',
    },
    {
      flag: 1,
      name: '기부',
    },
  ];

  const [flag, setFlag] = new useState(0);

  return <OrderRadioButtons flag={flag} buttons={buttons} setFlag={setFlag} />;
};

export default OrderRadioButtonsTest;
