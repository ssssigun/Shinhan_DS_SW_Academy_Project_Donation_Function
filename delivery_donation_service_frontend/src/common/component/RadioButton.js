import React, { useState } from 'react';
import '../style/RadioButton.scss';

const RadioButton = ({ children, value, name, checked, onChange, labelStyle }) => {
  // const [selectedOption, setSelectedOption] = useState([checked]); // 초기 선택 옵션 설정
  // const handleOptionChange = (event) => {
  //   console.log(111);
  //   setSelectedOption(event.target.value); // 라디오 버튼 선택 시, 상태 업데이트
  // };
  return (
    <label className="radioLabel" style={labelStyle}>
      <input className="radioInput" type="radio" value={value} name={name} onChange={onChange} checked={checked} />

      {checked === true ? ( //선택된 버튼이면
        <img src="/image/radiobutton.png" alt="checked" /> //이미지 주황
      ) : (
        <img src="/image/radiobuttonunchecked.png" alt="unchecked" /> //이미지 회색
      )}
      {children}
    </label>
  );
};

export default RadioButton;
