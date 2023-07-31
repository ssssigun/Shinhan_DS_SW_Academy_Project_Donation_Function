import { MdClose } from 'react-icons/md'
import { AiOutlinePlus } from 'react-icons/ai'
import RadioButton from '../../common/component/RadioButton'
const DonationCart = () => {
  return (
    <div className="wrapper">
      <div className="cart">
        <div className="storeTitle">
          <RadioButton></RadioButton>
          {/* 라디오버튼 컴포넌트 */}
          {/* <div className=""></div> */}

          <MdClose />
        </div>

        <div className="cartDetail">
          <div className="detailTitle">
            <div className="title">
              <MdClose />
            </div>
            <div className="price">{/* 단품가격: 8,500원 */}</div>
          </div>
          <div className="count">{/* 컴포넌트로 해야될듯 */}</div>
          <h2>17,000원</h2>
          {/* 17,000원 */}
        </div>
        <div className="expectedPaymentWrapper">
          <div className="expectedPayment">
            <h2>결제예정금액</h2>
            <h2>17,000원</h2>
          </div>
        </div>
        <div className="addMenu">
          <AiOutlinePlus />
          <h2>메뉴추가</h2>
        </div>
      </div>
    </div>
  )
}

export default DonationCart
