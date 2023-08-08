import React, { useState, useEffect } from 'react';
import '../style/UpDownButton.scss';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const UpDownButton = ({ buttonStyle, initialAmount, onChange }) => {
  const [count, setCount] = useState(initialAmount); // 초기값으로 initialAmount 사용, 없으면 1로 설정

  useEffect(() => {
    if (onChange) {
      onChange(count); // count 값 변경 시, onChange 콜백 호출
    }
  }, [count, onChange]);

  const handleCountChange = (type) => {
    let newCount = count; // 새로운 카운트 값 생성
    if (type === 'plus') {
      setCount((prevCount) => prevCount + 1);
    } else if (type === 'minus') {
      if (count > 1) {
        setCount((prevCount) => prevCount - 1);
      }
    }
    onChange(count); // 업데이트된 카운트 값을 부모 컴포넌트로 전달
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
