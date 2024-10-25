import { Modal, Button, Space } from "antd";
import { HiPencilAlt, HiOutlineDownload, HiTrash } from "react-icons/hi";

interface EmployeeActionsModalProps {
  visible: boolean;
  onCancel: () => void;
  onEdit: () => void;
  onExport: () => void;
  onDelete: () => void;
}

const EmployeeActionsModal: React.FC<EmployeeActionsModalProps> = ({
  visible,
  onCancel,
  onEdit,
  onExport,
  onDelete,
}) => {
  return (
    <Modal width={250} visible={visible} onCancel={onCancel} footer={null}>
      <Space direction="vertical">
        <Button type="primary" icon={<HiPencilAlt />} onClick={onEdit}>
          Edit Info
        </Button>
        <Button type="default" icon={<HiOutlineDownload />} onClick={onExport}>
          Export Excel
        </Button>
        <Button
          className="text-red-600"
          type="dashed"
          icon={<HiTrash />}
          onClick={onDelete}
        >
          Delete Info
        </Button>
      </Space>
    </Modal>
  );
};

export default EmployeeActionsModal;
