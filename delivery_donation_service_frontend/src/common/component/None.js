import '../style/None.scss';

const None = ({ title, children, image }) => {
  return (
    <div className="noneWrapper">
      <div className="noneImageWrapper">
        <img src={image} alt="쏠 캐릭터" />
      </div>
      <div className="noneTitle">{title}</div>
      <div className="noneContents">{children}</div>
    </div>
  );
};

export default None;
