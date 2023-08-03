import HeaderWrapper from '../../common/component/HeaderWrapper';
import BackIcon from '../../common/component/Icons/BackIcon';
import HomeIcon from '../../common/component/Icons/HomeIcon';
import CartIcon from '../../common/component/Icons/CartIcon';
import '../style/StoreHeader.scss';

const StoreHeader = () => {
  return (
    <HeaderWrapper className="storeHeaderWrapper">
      <div className="headerLeftSide">
        <BackIcon size="30px" color="#FFF" />
      </div>
      <div className="headerRightSide">
        <HomeIcon size="24px" color="#FFF" />
        <CartIcon size="24px" color="#FFF" />
      </div>
    </HeaderWrapper>
  );
};

export default StoreHeader;
