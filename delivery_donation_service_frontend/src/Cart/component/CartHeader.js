import HeaderWrapper from '../../common/component/HeaderWrapper';
import BackIcon from '../../common/component/Icons/BackIcon';
import '../style/CartHeader.scss';

const CartHeader = ({ children }) => {
  return (
    <HeaderWrapper>
      <div className="headerLeftSide">
        <BackIcon size="30px" color="#000" />
      </div>
      {children}
      <div className="headerRightSide cartHeaderRightSide">전체삭제</div>
    </HeaderWrapper>
  );
};

export default CartHeader;
