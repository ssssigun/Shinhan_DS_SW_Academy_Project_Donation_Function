import HeaderWrapper from '../../common/component/HeaderWrapper';
import BackIcon from '../../common/component/Icons/BackIcon';
import HomeIcon from '../../common/component/Icons/HomeIcon';
import CartIcon from '../../common/component/Icons/CartIcon';

const StoreListHeader = ({ children, backUrl }) => {
  return (
    <HeaderWrapper>
      <div className="headerLeftSide">
        <BackIcon size="30px" color="#000" url={backUrl} />
      </div>
      {children}
      <div className="headerRightSide">
        <HomeIcon size="20px" color="#000" />
        <CartIcon size="24px" color="#000" />
      </div>
    </HeaderWrapper>
  );
};

export default StoreListHeader;
