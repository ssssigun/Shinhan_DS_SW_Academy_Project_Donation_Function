import '../style/Request.scss';
import Input from './Input';
import Radio from './Radio';
import RadioButton from './RadioButton';
import RadioGroup from './RadioGroup';
import React, { useState } from 'react';
const Request = ({ children }) => {
  // const [selectedOption, setSelectedOption] = useState(true); // 초기 선택 옵션 설정
  // const handleOptionChange = (event) => {
  //   console.log(111);
  //   setSelectedOption(event.target.value); // 라디오 버튼 선택 시, 상태 업데이트
  // };

  const [selected, setSelected] = useState([1, 0]);

  const hanldeRadioChange = (index) => {
    const newSelected = [0, 0];
    newSelected[index] = 1;
    setSelected(newSelected);
  };

  return (
    <div className="requestWrapper">
      <div className="requestText">요청사항</div>
      <div className="toCEO">
        <div className="CEOText">가게 사장님에게</div>
        <Input placeholder="예) 견과류는 빼주세요"></Input>
      </div>
      <div className="disposable">
        <div className="disposableText">
          일회용품 선택 <span style={{ color: '#FB521B' }}>&nbsp;*</span>
        </div>
        <div className="checkDisposable">
          {/* <Radio name="disposableCheck" value="disposableNo" defaultChecked>
              <div className="disposableTextNO">일회용 수저, 포크 안 주셔도 돼요!</div>
            </Radio>
            <Radio name="disposableCheck" value="disposableYes">
              <div className="disposableTextYes">일회용 수저, 포크 꼭 필요해요!</div>
            </Radio> */}

          <RadioButton
            // checked={true}
            // value="option1"
            // defaultChecked
            name="disposableText"
            labelStyle={{ fontSize: '16px' }}
            checked={selected[0] === 1}
            onChange={() => hanldeRadioChange(0)}
          >
            <div className="disposableTextNO">일회용 수저, 포크 안 주셔도 돼요!</div>
          </RadioButton>
          <RadioButton
            name="disposableText"
            value="disposableTextYes"
            checked={selected[1] === 1}
            onChange={() => hanldeRadioChange(1)}
          >
            <div className="disposableTextYes">일회용 수저, 포크 꼭 필요해요!</div>
          </RadioButton>
        </div>
      </div>
      {children}
    </div>
  );
};
export default Request;
