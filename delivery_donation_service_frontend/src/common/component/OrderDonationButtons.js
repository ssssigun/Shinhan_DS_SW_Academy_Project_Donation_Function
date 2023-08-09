import { useNavigate } from 'react-router-dom';
import '../style/OrderRadioButtons.scss';

const OrderDonationButtons = ({ flag, buttons }) => {
  const navigate = useNavigate();

  return (
    <div className="radioButtonsWrapper">
      {buttons.map((button, idx) => {
        return (
          <div
            className={flag === button.flag ? 'button selected' : 'button'}
            key={idx}
            onClick={() => navigate('/orderList?flag=' + button.flag)}
          >
            {button.name}
          </div>
        );
      })}
    </div>
  );
};

export default OrderDonationButtons;
