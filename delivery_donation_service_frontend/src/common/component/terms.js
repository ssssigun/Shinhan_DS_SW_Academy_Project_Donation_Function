import { useState } from 'react';

export default function App() {
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
    <div>
      <label>회원 정보 입력 및 이용약관 동의</label>
      <ul>
        <li>
          <input
            type="checkbox"
            id="agree_check_all"
            name="agree_check_all"
            checked={allAgreed}
            onChange={handleAllAgreementChange}
          />
          <label htmlFor="agree_check_all">이용약관 전체동의</label>
        </li>
      </ul>
    </div>
  );
}
