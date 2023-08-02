import '../style/MainMenu.scss';

const MainMenu = ({ menuFlag, setMenuFlag }) => {
  const isActive = (menuNum) => {
    if (menuFlag === menuNum) {
      return 'activeMenu';
    } else {
      return '';
    }
  };

  return (
    <>
      <ul className="mainMenu">
        <li className={isActive(0)} onClick={() => setMenuFlag(0)}>
          배달
        </li>
        <li className={isActive(1)} onClick={() => setMenuFlag(1)}>
          포장·매장식사
        </li>
        <li className={isActive(2)} onClick={() => setMenuFlag(2)}>
          기부
        </li>
      </ul>
    </>
  );
};

export default MainMenu;
