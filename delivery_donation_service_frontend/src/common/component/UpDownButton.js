import React from 'react';
import '../style/UpDownButton.scss';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const UpDownButton = ({ count, setCount, ceil }) => {
  const upCount = () => {
    if (count < ceil) setCount(count + 1);
  };

  const downCount = () => {
    if (count > 1) setCount(count - 1);
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

UpDownButton.defaultProps = {
  ceil: 10,
};

export default UpDownButton;
