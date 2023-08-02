import { MdKeyboardArrowLeft } from 'react-icons/md';
import HeaderWrapper from '../../common/component/HeaderWrapper';
import '../style/CartHeader.scss';

const CartHeader = ({ children }) => {
  return (
    <HeaderWrapper>
      <div className="headerLeftSide">
        <MdKeyboardArrowLeft size="30px" />
      </div>
      {children}
      <div className="headerRightSide cartHeaderRightSide">전체삭제</div>
    </HeaderWrapper>
  );
};

export default CartHeader;
