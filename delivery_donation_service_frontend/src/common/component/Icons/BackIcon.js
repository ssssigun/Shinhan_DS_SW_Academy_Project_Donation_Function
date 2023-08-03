import { MdKeyboardArrowLeft } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const BackIcon = ({ size, color }) => {
  let navigate = useNavigate();

  return (
    <Link onClick={() => navigate(-1)}>
      <MdKeyboardArrowLeft size={size} color={color} />
    </Link>
  );
};

export default BackIcon;
