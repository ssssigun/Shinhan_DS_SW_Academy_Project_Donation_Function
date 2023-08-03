import None from '../../common/component/None';
import Order from './Order';

const DonationList = ({ donations }) => {
  if (donations.length === 0) {
    return (
      <None title="떵그러니..." image="image/PLI.png" height={`${window.innerHeight}`}>
        기부내역이 없어요.
        <br />
        땡겨요로 기부해보세요.
      </None>
    );
  } else {
    return donations.map((donation, idx) => {
      return (
        <Order
          date={donation.date}
          state={donation.state}
          title={donation.title}
          image={donation.image}
          menu={donation.menu}
          price={donation.price}
          menuLength={donation.menu.length}
          key={idx}
        />
      );
    });
  }
};

export default DonationList;
