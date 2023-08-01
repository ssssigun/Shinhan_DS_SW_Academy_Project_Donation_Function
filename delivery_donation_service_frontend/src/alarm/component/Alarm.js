import AlarmDate from './AlarmDate';
import AlarmMessage from './AlarmMessage';
import '../style/Alarm.scss';

const Alarm = ({ date, alarms }) => {
  return (
    <div className="alarmContainer">
      <AlarmDate date={date} />
      <div className="alarmMessageContainer">
        {alarms.map((alarm, idx) => {
          return (
            <AlarmMessage key={idx} title={alarm.title} time={alarm.time}>
              {alarm.contents}
            </AlarmMessage>
          );
        })}
      </div>
    </div>
  );
};

export default Alarm;
