import HeaderWrapper from './HeaderWrapper';
import BackIcon from './Icons/BackIcon';

const ErrorHeader = () => {
  return (
    <HeaderWrapper>
      <div className="headerLeftSide">
        <BackIcon size="30px" color="#000" />
      </div>
      접근할 수 없는 페이지
    </HeaderWrapper>
  );
};

export default ErrorHeader;
