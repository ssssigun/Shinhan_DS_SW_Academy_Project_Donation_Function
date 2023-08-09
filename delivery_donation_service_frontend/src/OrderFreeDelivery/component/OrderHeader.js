import BackIcon from '../../common/component/Icons/BackIcon';
import HeaderWrapper from '../../common/component/HeaderWrapper';

const OrderHeader = ({ children }) => {
  return (
    <HeaderWrapper>
      <div className="headerLeftSide">
        <BackIcon size="30px" color="#000" />
      </div>
      {children}
    </HeaderWrapper>
  );
};

export default OrderHeader;
