import '../style/SendingWarm.scss';
import Input from './Input';

const SendingWarm = ({}) => {
  return (
    <div className="sendingWarm">
      <div className="title">
        <div className="text">따뜻해진 마음 전하기</div>
      </div>
      <Input placeholder="예) 감사합니다."></Input>
    </div>
  );
};

export default SendingWarm;
