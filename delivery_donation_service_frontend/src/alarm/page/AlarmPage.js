import None from '../../common/component/None';
import Alarm from '../component/Alarm';
import '../style/AlarmPage.scss';

const AlarmPage = () => {
  const alarms = [
    {
      title: '신한은행 땡겨요',
      contents: '(광고) 띵동! 생일 축하 쿠폰 도착 땡겨요에서 준비한 생일쿠폰과 함께 행복한 생일 보내세요!',
      time: '04:31',
    },
  ];

  return (
    <>
      <div className="alarmWrapper">
        <div className="alarmsContainer">
          {alarms.length > 0 ? (
            <Alarm date="2023.05.07 일" alarms={alarms} />
          ) : (
            <None title="띠링!" image="image/MOLI.png">
              새로운 알림이 없어요.
              <br />
              땡기는 소식이 생기면 전달해드릴게요!
            </None>
          )}
        </div>
      </div>
    </>
  );
};

export default AlarmPage;
