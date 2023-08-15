import HeaderWrapper from '../../common/component/HeaderWrapper';
import BackIcon from '../../common/component/Icons/BackIcon';
import HomeIcon from '../../common/component/Icons/HomeIcon';
import CartIcon from '../../common/component/Icons/CartIcon';
import '../style/StoreHeader.scss';

const StoreHeader = ({ backurl, backState, cartLink }) => {
  return (
    <HeaderWrapper className="storeHeaderWrapper">
      <div className="headerLeftSide">
        <BackIcon size="30px" color="#FFF" state={backState} />
      </div>
      <div className="headerRightSide">
        <HomeIcon size="24px" color="#FFF" />
        <CartIcon size="24px" color="#FFF" link={cartLink} />
      </div>
    </HeaderWrapper>
  );
};

export default StoreHeader;
