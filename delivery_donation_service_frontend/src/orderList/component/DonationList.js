import dayjs from 'dayjs';
import None from '../../common/component/None';
import Donation from './Donation';

const DonationList = ({ donations }) => {
  if (Object.keys(donations).length === 0) {
    return (
      <None title="떵그러니..." image="image/PLI.png" height={`${window.innerHeight}`}>
        기부내역이 없어요.
        <br />
        땡겨요로 기부해보세요.
      </None>
    );
  } else {
    return donations.map((donation, idx) => {
      console.log('donationList', donation);
      return <Donation donation={donation} key={idx} />;
    });
  }
};

export default DonationList;
