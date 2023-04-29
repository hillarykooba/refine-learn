import { useModal } from "@refinedev/antd";
import { Button, Modal } from "antd";

export const Dashboard: React.FC = () => {
  const { show, modalProps } = useModal();

  return (
    <>
      <Button onClick={show}>Show Modal</Button>
      <Modal {...modalProps}>
        <p>Modal Content</p>
      </Modal>
    </>
  );
};
