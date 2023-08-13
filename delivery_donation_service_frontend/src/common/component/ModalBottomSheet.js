import '../style/ModalBottomSheet.scss';

const ModalBottomSheet = ({ hideModal, children }) => {
  return (
    <>
      <div className="modalBottomSheetWrapper" onClick={(e) => hideModal(e)}></div>
      <div className="modalBottomSheet">{children}</div>
    </>
  );
};

export default ModalBottomSheet;
