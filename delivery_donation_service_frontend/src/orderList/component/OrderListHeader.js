import HeaderWrapper from '../../common/component/HeaderWrapper';
import '../style/OrderListHeader.scss';
import { MdKeyboardArrowLeft, MdHomeFilled } from 'react-icons/md';

const OrderListHeader = () => {
  return (
    <HeaderWrapper>
      <div className="headerLeftSide">
        <MdKeyboardArrowLeft size="30px" />
      </div>
      주문내역
      <div className="headerRightSide">
        <MdHomeFilled size="20px" />
      </div>
    </HeaderWrapper>
  );
};

export default OrderListHeader;
