import HeaderWrapper from '../../common/component/HeaderWrapper';
import BackIcon from '../../common/component/Icons/BackIcon';
import HomeIcon from '../../common/component/Icons/HomeIcon';
import '../style/OrderListHeader.scss';

const OrderListHeader = ({ children, backUrl, state }) => {
  return (
    <HeaderWrapper>
      <div className="headerLeftSide">
        <BackIcon size="30px" color="#000" url={backUrl} state={state} />
      </div>
      {children}
      <div className="headerRightSide">
        <HomeIcon size="20px" color="#000" />
      </div>
    </HeaderWrapper>
  );
};

export default OrderListHeader;
