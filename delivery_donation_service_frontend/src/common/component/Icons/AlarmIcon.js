import { FaRegBell } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AlarmIcon = ({ size, color }) => {
  return (
    <Link to="/alarm">
      <FaRegBell size={size} color={color} />
    </Link>
  );
};

export default AlarmIcon;
