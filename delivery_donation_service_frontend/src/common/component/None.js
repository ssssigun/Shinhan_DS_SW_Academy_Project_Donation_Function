import '../style/None.scss';

const None = ({ title, children, image, height }) => {
  return (
    <div className="noneWrapper" style={{ height: height - 150 + 'px' }}>
      <div className="noneImageWrapper">
        <img src={image} alt="쏠 캐릭터" />
      </div>
      <div className="noneTitle">{title}</div>
      <div className="noneContents">{children}</div>
    </div>
  );
};

export default None;
