/* eslint-disable @typescript-eslint/no-explicit-any */
import { Space, Button, Tag } from "antd";
import {
  HiOutlineDotsVertical,
  HiCheckCircle,
  HiXCircle,
} from "react-icons/hi";

interface ActionButtonsProps {
  record: any;
  onShowModal: () => void;
  handleReject: (key: string) => void;
  handleApprove: (key: string) => void;
  handleUndo: (key: string) => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  record,
  onShowModal,
  handleReject,
  handleApprove,
  handleUndo,
}) => {
  return (
    <Space size="middle">
      {record.status === "pending" && (
        <>
          <Button type="text" danger onClick={() => handleReject(record.key)}>
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
      <Button type="text" onClick={onShowModal}>
        <HiOutlineDotsVertical className="text-gray-500" />
      </Button>
    </Space>
  );
};

export default ActionButtons;
