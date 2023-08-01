import { AiFillMessage } from 'react-icons/ai';
import { TbMoneybag } from 'react-icons/tb';
import '../style/AlarmMessage.scss';

const AlarmMessage = ({ isDonation, title, time, children }) => {
  return (
    <>
      <div className="messageWrapper">
        <div className="messageIconWrapper">
          <div className="iconWrapper">
            {isDonation ? <TbMoneybag size="20px" color="#5279FE" /> : <AiFillMessage size="20px" color="#5279FE" />}
          </div>
        </div>
        <div className="messageContainer">
          <div className="title">
            {title}
            <div className="time">{time}</div>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default AlarmMessage;
