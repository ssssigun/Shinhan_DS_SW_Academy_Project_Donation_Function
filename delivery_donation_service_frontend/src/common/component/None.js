import '../style/None.scss';

const None = ({ title, children, image, height, style }) => {
  return (
    <div className="noneWrapper" style={{ height: height - 150 + 'px', style }}>
      <div className="noneImageWrapper">
        <img src={image} alt="쏠 캐릭터" />
      </div>
      <div className="noneTitle">{title}</div>
      <div className="noneContents">{children}</div>
    </div>
  );
};

export default None;
