import { useState } from 'react';
import '../style/Terms.scss';
import { MdCheck } from 'react-icons/md';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const Terms = ({}) => {
  const [allAgreed, setAllAgreed] = useState(false);
  const [agreements, setAgreements] = useState({
    termsAgreed: false,
    personalInfoAgreed: false,
    provisonAgreed: false,
    locationAgreed: false,
    eventAlarmAgreed: false,
    serviceAlarmAgreed: false,
  });

  const handleAgreementChange = (event) => {
    const { name, checked } = event.target;

    setAgreements((prevAgreements) => ({ ...prevAgreements, [name]: checked }));
    const allChecked = Object.values({ ...agreements, [name]: checked }).every((value) => value === true);
    setAllAgreed(allChecked);
  };

  const handleAllAgreementChange = (event) => {
    const { checked } = event.target;
    setAgreements((prevAgreements) =>
      Object.keys(prevAgreements).reduce(
        (newAgreements, agreementKey) => ({
          ...newAgreements,
          [agreementKey]: checked,
        }),
        {},
      ),
    );
    setAllAgreed(checked);
  };

  return (
    <div className="termsWrapper">
      <div className="agreeAll">
        <div className="checkButton">
          <input
            className="allAgreed"
            type="checkbox"
            id="agree_check_all"
            name="agree_check_all"
            checked={allAgreed}
            onChange={handleAllAgreementChange}
          />
          <label htmlFor="agree_check_all">전체동의</label>
        </div>
      </div>
      <hr className="agreeLine"></hr>
      <li className="agreeUsed">
        <div className="checkUsed">
          <input
            className="termsAgreed"
            type="checkbox"
            id="agree_check_used"
            name="termsAgreed"
            required
            checked={agreements.termsAgreed}
            onChange={handleAgreementChange}
          />
          <label htmlFor="agree_check_used">이용약관 (필수)</label>
        </div>
        <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown>
      </li>
      <li className="agreeOther">
        <div className="checkOther">
          <input
            className="provisonAgreed"
            type="checkbox"
            id="agree_check_info_other"
            name="provisonAgreed"
            required
            checked={agreements.provisonAgreed}
            onChange={handleAgreementChange}
          />
          <label htmlFor="agree_check_info_other">개인정보 제 3자 제공 (필수)</label>
        </div>
        <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown>
      </li>
      <li className="agreeInfo">
        <div className="checkInfo">
          <input
            className="personalInfoAgreed"
            type="checkbox"
            id="agree_check_info"
            name="personalInfoAgreed"
            required
            checked={agreements.personalInfoAgreed}
            onChange={handleAgreementChange}
          />
          <label htmlFor="agree_check_info">개인정보 수집 및 이용 (필수)</label>
        </div>
        <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown>
      </li>

      <div className="agree">
        <div className="agreeText">위 내용을 확인하였으며 동의합니다.</div>
      </div>
    </div>
  );
};

export default Terms;
