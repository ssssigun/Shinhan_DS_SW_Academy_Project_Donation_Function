import HeaderWrapper from '../../common/component/HeaderWrapper';
import '../style/DonationCartHeader.scss';
import BackIcon from '../../common/component/Icons/BackIcon';

const DonationCartHeader = ({ children, backUrl, state, onClick }) => {
  return (
    <HeaderWrapper>
      <div className="headerLeftSide">
        <BackIcon size="30px" url={backUrl} state={state} />
      </div>
      {children}
      <div className="headerRightSide cartHeaderRightSide" onClick={() => onClick()}>
        전체삭제
      </div>
    </HeaderWrapper>
  );
};

export default DonationCartHeader;
