import React, { useState } from 'react';
import '../style/UpDownButton.scss';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const UpDownButton = ({ buttonStyle }) => {
  const [count, setCount] = useState(1); // 초기값 설정

  const handleCountChange = (type) => {
    if (type === 'plus') {
      setCount((prevCount) => prevCount + 1);
    } else if (type === 'minus') {
      if (count > 1) {
        setCount((prevCount) => prevCount - 1);
      }
    }
  };

  return (
    <div className="upDownOption">
      <div className="downButton" style={buttonStyle} onClick={() => handleCountChange('minus')}>
        <AiOutlineMinus />
      </div>
      <div className="result" id="result">
        {count}
      </div>
      <div className="upButton" style={buttonStyle} onClick={() => handleCountChange('plus')}>
        <AiOutlinePlus />
      </div>
    </div>
  );
};

export default UpDownButton;
