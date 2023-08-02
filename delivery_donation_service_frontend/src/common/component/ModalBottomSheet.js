import '../style/ModalBottomSheet.scss';

const ModalBottomSheet = ({ hideModal, children }) => {
  return (
    <>
      <div class="modalBottomSheetWrapper" onClick={(e) => hideModal(e)}></div>
      <div class="modalBottomSheet">{children}</div>
    </>
  );
};

export default ModalBottomSheet;
