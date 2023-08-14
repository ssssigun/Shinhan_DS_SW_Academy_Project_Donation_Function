import OrderListHeader from '../component/OrderListHeader';

const DonationReceipt = () => {
  return (
    <>
      <OrderListHeader>기부영수증</OrderListHeader>
      <div style={{ width: '100%', overflow: 'auto' }}>
        <img src="/image/donationReceipt.png" alt="기부영수증" />
      </div>
    </>
  );
};

export default DonationReceipt;
