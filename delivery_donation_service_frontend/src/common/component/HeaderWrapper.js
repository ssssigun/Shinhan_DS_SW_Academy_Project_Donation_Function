import '../style/HeaderWrapper.scss';

const HeaderWrapper = ({ children, className }) => {
  return (
    <>
      <div className={'headerWrapper ' + className}>{children}</div>
    </>
  );
};

export default HeaderWrapper;
