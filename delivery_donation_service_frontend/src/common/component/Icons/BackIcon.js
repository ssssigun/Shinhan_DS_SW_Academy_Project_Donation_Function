import { MdKeyboardArrowLeft } from 'react-icons/md';
import { Link } from 'react-router-dom';

const BackIcon = ({ size, color, url, state }) => {
  return (
    <Link to={url} state={{ state }}>
      <MdKeyboardArrowLeft size={size} color={color} />
    </Link>
  );
};

BackIcon.defaultProps = {
  url: -1,
};

export default BackIcon;
