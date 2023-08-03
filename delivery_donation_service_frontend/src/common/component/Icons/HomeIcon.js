import { MdHomeFilled } from 'react-icons/md';
import { Link } from 'react-router-dom';

const HomeIcon = ({ size, color }) => {
  return (
    <Link to="/">
      <MdHomeFilled size={size} color={color} />
    </Link>
  );
};

export default HomeIcon;
