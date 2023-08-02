import '../style/Request.scss';
import Input from './Input';
import RadioButton from './RadioButton';
const Request = ({ children }) => {
  return (
    <div className="requestWrapper">
      <div className="requestText">요청사항</div>
      <div className="toCEO">
        <div className="CEOText">가게 사장님에게</div>
        <Input placeholder="예) 견과류는 빼주세요"></Input>
      </div>
      <div className="disposable">
        <div className="disposableText">일회용품 선택</div>
        <div className="checkDisposable">
          <RadioButton>
            <div className="disposableTextNO">일회용 수저, 포크 안 주셔도 돼요!</div>
          </RadioButton>
          <RadioButton>
            <div className="disposableTextYes">일회용 수저, 포크 꼭 필요해요!</div>
          </RadioButton>
        </div>
      </div>
      {children}
    </div>
  );
};
export default Request;
