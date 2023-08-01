import '../style/FreeCart.scss'
import { AiOutlinePlus } from 'react-icons/ai'
import { MdClose } from 'react-icons/md'

import RadioButton from '../../common/component/RadioButton'
import UpDownButton from '../../common/component/UpDownButton'
import React, { useState } from 'react'

const FreeCart = ({}) => {
  const [selectedOption, setSelectedOption] = useState('option1') // 초기 선택 옵션 설정
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value) // 라디오 버튼 선택 시, 상태 업데이트
  }
  return (
    <div className="wrapper">
      <div className="cart">
        <div className="storeTitle">
          <RadioButton
            checked={selectedOption === 'option1'}
            value="option1"
            onChange={handleOptionChange}
            labelStyle={{ fontSize: '16px' }}
          >
            대한냉면 마포점
          </RadioButton>
          {/* 라디오버튼 컴포넌트 */}
          {/* <div className=""></div> */}

          <MdClose style={{ width: '20px', height: '20px' }} color="#888888" />
        </div>

        <div className="cartDetail">
          <div className="detailTitle">
            <div className="title">
              물냉면
              <MdClose style={{ width: '15px', height: '15px' }} color="#B0B0B0" />
            </div>
            <div className="price"></div>
          </div>
          <div className="count">
            {/* 컴포넌트로 해야될듯 */}
            <UpDownButton buttonStyle={{ background: '#A6A6A6', color: '#F9F9F9' }}></UpDownButton>
          </div>

          {/* 17,000원 */}
        </div>
        <div className="expectedPaymentWrapper">
          <div className="expectedPayment">하루 1메뉴만 주문이 가능합니다.</div>
        </div>
      </div>
    </div>
  )
}

export default FreeCart
