import React from 'react';
import '../style/UpDownButton.scss';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const UpDownButtonForCart = ({ cartPk, count, setCount, ceil, updateAmount }) => {
  const upCount = () => {
    if (count < ceil) {
      count++;
      setCount((prev) => ({ ...prev, [cartPk]: count }));
      updateAmount(cartPk, count);
    }
  };

  const downCount = () => {
    if (count > 1) {
      count--;
      setCount((prev) => ({ ...prev, [cartPk]: count }));
      updateAmount(cartPk, count);
    }
  };

  return (
    <div className="upDownOption">
      <div className={'button ' + (count === 1 ? 'noneButton' : '')} onClick={() => downCount()}>
        <AiOutlineMinus />
      </div>
      <div className="result" id="result">
        {count}
      </div>
      <div className={'button ' + (count === ceil ? 'noneButton' : '')} onClick={() => upCount()}>
        <AiOutlinePlus />
      </div>
    </div>
  );
};

UpDownButtonForCart.defaultProps = {
  ceil: 10,
};

export default UpDownButtonForCart;
