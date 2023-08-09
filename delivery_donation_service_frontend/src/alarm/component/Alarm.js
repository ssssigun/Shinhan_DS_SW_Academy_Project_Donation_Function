import AlarmDate from './AlarmDate';
import AlarmMessage from './AlarmMessage';
import '../style/Alarm.scss';
import dayjs from 'dayjs';

const Alarm = ({ date, alarms }) => {
  // 시간만 추출
  const getTime = (date) => {
    return dayjs(date).format('HH:MM');
  };

  return (
    <div className="alarmContainer">
      <AlarmDate date={date} />
      <div className="alarmMessageContainer">
        {alarms.map((alarm, idx) => {
          return (
            <AlarmMessage key={idx} title={alarm.title} time={getTime(alarm.date)}>
              {alarm.content}
            </AlarmMessage>
          );
        })}
      </div>
    </div>
  );
};

export default Alarm;
