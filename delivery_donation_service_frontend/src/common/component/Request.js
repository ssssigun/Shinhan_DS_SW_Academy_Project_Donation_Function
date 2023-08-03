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

  return (
    <div className="requestWrapper">
      <div className="requestText">요청사항</div>
      <div className="toCEO">
        <div className="CEOText">가게 사장님에게</div>
        <Input placeholder="예) 견과류는 빼주세요"></Input>
      </div>
      <div className="disposable">
        <div className="disposableText">일회용품 선택 *</div>
        <div className="checkDisposable">
          <RadioGroup>
            <Radio name="disposableCheck" value="disposableNo" defaultChecked>
              <div className="disposableTextNO">일회용 수저, 포크 안 주셔도 돼요!</div>
            </Radio>
            <Radio name="disposableCheck" value="disposableYes">
              <div className="disposableTextYes">일회용 수저, 포크 꼭 필요해요!</div>
            </Radio>

            <RadioButton
              // checked={true}
              // value="option1"
              name="disposableText"
              labelStyle={{ fontSize: '16px' }}
              // defaultChecked
            >
              <div className="disposableTextNO">일회용 수저, 포크 안 주셔도 돼요!</div>
            </RadioButton>
            <RadioButton name="disposableText" value="disposableTextYes">
              <div className="disposableTextYes">일회용 수저, 포크 꼭 필요해요!</div>
            </RadioButton>
          </RadioGroup>
        </div>
      </div>
      {children}
    </div>
  );
};
export default Request;
