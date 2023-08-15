import { useEffect, useState } from 'react';
import None from '../../common/component/None';
import Alarm from '../component/Alarm';
import AlarmHeader from '../component/AlarmHeader';
import '../style/AlarmPage.scss';
import axios from 'axios';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

dayjs.locale('ko');

const AlarmPage = () => {
  const userPk = sessionStorage.getItem('userPk');

  const [alarms, setAlarms] = useState({});

  // 날짜별로 데이터 분류
  const makeSection = (list) => {
    const object = {};
    list.forEach((data) => {
      const monthDate = dayjs(data.date).format('YYYY.MM.DD ddd');

      if (object[monthDate]) {
        object[monthDate].push(data);
      } else {
        object[monthDate] = [data];
      }
    });
    return object;
  };

  useEffect(() => {
    axios
      .get(`/db/selectAlarms?userPk=${userPk}`)
      .then((response) => {
        setAlarms(makeSection(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <AlarmHeader />
      <div className="alarmsContainer">
        {Object.keys(alarms).length > 0 ? (
          Object.entries(alarms).map((alarm, idx) => {
            return <Alarm date={alarm[0]} alarms={alarm[1]} key={idx} />;
          })
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
