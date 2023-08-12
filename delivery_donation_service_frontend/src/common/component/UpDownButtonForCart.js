import React from 'react';
import '../style/UpDownButton.scss';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const UpDownButtonForCart = ({ cartPk, storeName, ceil, upAmount, downAmount, count }) => {
  return (
    <div className="upDownOption">
      <div className={'button ' + (count === 1 ? 'noneButton' : '')} onClick={() => downAmount(cartPk, storeName)}>
        <AiOutlineMinus />
      </div>
      <div className="result" id="result">
        {count}
      </div>
      <div className={'button ' + (count === ceil ? 'noneButton' : '')} onClick={() => upAmount(ceil, cartPk, storeName)}>
        <AiOutlinePlus />
      </div>
    </div>
  );
};

UpDownButtonForCart.defaultProps = {
  ceil: 10,
};

export default UpDownButtonForCart;
