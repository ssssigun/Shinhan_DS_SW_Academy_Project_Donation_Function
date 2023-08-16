import '../style/OrderRadioButtons.scss';

/*
1. 사용해야하는 페이지에 버튼들을 배열로 선언한다.
  1-1. 배열에는 각 버튼들의 name(문자열), flag(숫자형)를 저장한다.
2. useState를 사용해서 flag를 state로 선언한다.
3. buttons, flag, setFlag를 이 컴포넌트에 전달한다.

### 사용 예시는 common/page/OrderRadioButtonsTest.js에 있음
*/

const OrderRadioButtonsFree = ({ flag, buttons, onClick }) => {
  return (
    <div className="radioButtonsWrapper">
      {buttons.map((button, idx) => {
        return (
          <div
            className={flag === button.flag ? 'button selected' : 'button'}
            key={idx}
            onClick={() => onClick(button.flag)}
          >
            {button.name}
          </div>
        );
      })}
    </div>
  );
};

export default OrderRadioButtonsFree;
