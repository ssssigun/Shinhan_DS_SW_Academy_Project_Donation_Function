import { MdKeyboardArrowLeft } from 'react-icons/md';
import HeaderWrapper from '../../common/component/HeaderWrapper';

const OrderHeader = ({ children }) => {
  return (
    <HeaderWrapper>
      <div className="headerLeftSide">
        <MdKeyboardArrowLeft size="30px" />
      </div>
      {children}
    </HeaderWrapper>
  );
};

export default OrderHeader;
