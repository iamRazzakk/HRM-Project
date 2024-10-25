import { Space, Button, Tag } from "antd";
import {
  HiOutlineDotsVertical,
  HiCheckCircle,
  HiXCircle,
} from "react-icons/hi";
import { DataType } from "../../../../types/DataType";

interface EmployeeActionButtonsProps {
  record: DataType;
  handleApprove: (key: string) => void;
  handleReject: (key: string) => void;
  handleUndo: (key: string) => void;
  handleOpenModal: (key: string) => void;
}

const EmployeeActionButtons: React.FC<EmployeeActionButtonsProps> = ({
  record,
  handleApprove,
  handleReject,
  handleUndo,
  handleOpenModal,
}) => {
  return (
    <Space size="middle">
      {record.status === "pending" && (
        <>
          <Button
            type="text"
            className="text-red-600"
            danger
            onClick={() => handleReject(record.key)}
          >
            Reject
          </Button>
          <Button
            className="bg-green-600 text-white"
            type="primary"
            onClick={() => handleApprove(record.key)}
          >
            Approve
          </Button>
        </>
      )}
      {record.status === "approved" && (
        <>
          <Tag color="green" className="flex items-center px-2 py-1">
            <HiCheckCircle className="mr-1" />
            Approved
          </Tag>
          <Button type="default" onClick={() => handleUndo(record.key)}>
            Undo
          </Button>
        </>
      )}
      {record.status === "rejected" && (
        <>
          <Tag color="volcano" className="flex items-center px-2 py-1">
            <HiXCircle className="mr-1" />
            Rejected
          </Tag>
          <Button type="default" onClick={() => handleUndo(record.key)}>
            Undo
          </Button>
        </>
      )}
      <Button
        type="text"
        icon={<HiOutlineDotsVertical className="text-gray-500" />}
        onClick={() => handleOpenModal(record.key)}
      />
    </Space>
  );
};

export default EmployeeActionButtons;
