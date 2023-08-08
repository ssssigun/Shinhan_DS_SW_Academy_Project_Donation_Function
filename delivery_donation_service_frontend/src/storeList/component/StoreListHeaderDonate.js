import HeaderWrapper from '../../common/component/HeaderWrapper';
import BackIcon from '../../common/component/Icons/BackIcon';
import HomeIcon from '../../common/component/Icons/HomeIcon';
import CartIcon from '../../common/component/Icons/CartIcon';

const StoreListHeader = ({ children }) => {
  return (
    <HeaderWrapper>
      <div class="headerLeftSide">
        <BackIcon size="30px" color="#000" />
      </div>
      <span className='donateFont'>기부&nbsp;</span>
      {children}
      <div class="headerRightSide">
        <HomeIcon size="20px" color="#000" />
        <CartIcon size="24px" color="#000" />
      </div>
    </HeaderWrapper>
  );
};

export default StoreListHeader;
