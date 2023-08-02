import { useEffect } from 'react';
import None from '../../common/component/None';
import Alarm from '../component/Alarm';
import AlarmHeader from '../component/AlarmHeader';
import '../style/AlarmPage.scss';

const AlarmPage = () => {
  const alarms = [];

  return (
    <>
      <AlarmHeader />
      <div className="alarmsContainer">
        {alarms.length > 0 ? (
          <Alarm date="2023.05.07 일" alarms={alarms} />
        ) : (
          <None title="띠링!" image="image/MOLI.png" height={`${window.innerHeight}`}>
            새로운 알림이 없어요.
            <br />
            땡기는 소식이 생기면 전달해드릴게요!
          </None>
        )}
      </div>
    </>
  );
};

export default AlarmPage;
