import { Table } from "antd";
import type { TableProps } from "antd";
import { DataType } from "../../../../types/DataType";
import SearchBar from "../../../Shared/SearchBar";
import DepartmentDropdown from "../../../DepartmentDropdown/DepartmentDropdown";
import DateRangeDropdown from "../../../DateRangeDropdown/DateRangeDropdown";
import StatusDropDown from "../../../StatusDropdown/StatusDropdown";
import EmployeeActionsModal from "../EmployeeModal/EmployeeActionsModal";
import { useState } from "react";
import EmployeeActionButtons from "./EmployeeActionButtons";

// Sample data
const initialData: DataType[] = [
  {
    key: "#1248",
    name: "Sadik Hasan",
    duration: "0.3 hours",
    startTime: "07:15 am",
    endTime: "10:00 am",
    dueHours: "05 hours",
    department: "Design",
    project: "CRM Project",
    notes: "Work on data management.",
    status: "pending",
  },
  {
    key: "#2",
    name: "Jane Smith",
    duration: "7 hours",
    startTime: "9:30 AM",
    endTime: "4:30 PM",
    dueHours: "7 hours",
    department: "Design",
    project: "Project B",
    notes: "Good work on the recent design.",
    status: "pending",
  },
];

const EmployeeTable: React.FC = () => {
  const [data, setData] = useState<DataType[]>(initialData);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentKey, setCurrentKey] = useState<string | null>(null);

  const handleApprove = (key: string) => {
    const newData: DataType[] = data.map((item) =>
      item.key === key ? { ...item, status: "approved" } : item
    );
    setData(newData);
  };

  const handleReject = (key: string) => {
    const newData: DataType[] = data.map((item) =>
      item.key === key ? { ...item, status: "rejected" } : item
    );
    setData(newData);
  };

  const handleUndo = (key: string) => {
    const newData: DataType[] = data.map((item) =>
      item.key === key ? { ...item, status: "pending" } : item
    );
    setData(newData);
  };

  const handleOpenModal = (key: string) => {
    setCurrentKey(key);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setCurrentKey(null);
  };

  const columns: TableProps<DataType>["columns"] = [
    {
      title: <span style={{ fontWeight: 500, color: "black" }}>ID</span>,
      dataIndex: "key",
      key: "key",
      render: (text) => <span style={{ color: "gray" }}>{text}</span>,
      width: "10%", // Adjust width to be percentage-based
    },
    {
      title: (
        <span style={{ fontWeight: 500, color: "black" }}>Employee Name</span>
      ),
      dataIndex: "name",
      key: "name",
      render: (text) => <span style={{ color: "gray" }}>{text}</span>,
      width: "20%",
    },
    {
      title: <span style={{ fontWeight: 500, color: "black" }}>Duration</span>,
      dataIndex: "duration",
      key: "duration",
      render: (text) => <span style={{ color: "gray" }}>{text}</span>,
      width: "15%",
    },
    {
      title: (
        <span style={{ fontWeight: 500, color: "black" }}>
          Start Time - End Time
        </span>
      ),
      key: "time",
      render: (text, record) => (
        <div>
          <span style={{ color: "gray" }}>{record.startTime}</span>
          <span> - </span>
          <span style={{ color: "gray" }}>{record.endTime}</span>
        </div>
      ),
      width: "25%",
    },
    {
      title: <span style={{ fontWeight: 500, color: "black" }}>Due Hours</span>,
      dataIndex: "dueHours",
      key: "dueHours",
      render: (text) => <span style={{ color: "gray" }}>{text}</span>,
      width: "10%",
    },
    {
      title: (
        <span style={{ fontWeight: 500, color: "black" }}>Department</span>
      ),
      dataIndex: "department",
      key: "department",
      render: (text) => <span style={{ color: "gray" }}>{text}</span>,
      width: "10%",
    },
    {
      title: <span style={{ fontWeight: 500, color: "black" }}>Project</span>,
      dataIndex: "project",
      key: "project",
      render: (text) => <span style={{ color: "gray" }}>{text}</span>,
      width: "10%",
    },
    {
      title: <span style={{ fontWeight: 500, color: "black" }}>Notes</span>,
      dataIndex: "notes",
      key: "notes",
      render: (text) => (
        <div
          style={{
            maxWidth: "200px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            color: "gray",
          }}
        >
          {text}
        </div>
      ),
      width: "25%",
    },
    {
      title: <span style={{ fontWeight: 500, color: "black" }}>Action</span>,
      key: "action",
      render: (_, record) => (
        <EmployeeActionButtons
          record={record}
          handleApprove={handleApprove}
          handleReject={handleReject}
          handleUndo={handleUndo}
          handleOpenModal={handleOpenModal}
        />
      ),
      width: "15%",
    },
  ];

  return (
    <div className="bg-white text-black p-4 rounded-md">
      <div className="flex items-center justify-between gap-4 mb-8">
        <h1 className="lg:text-2xl md:text-2xl text-xl font-bold">
          Employee Time Logs
        </h1>
        <div className="flex items-center gap-4">
          <SearchBar />
          <DateRangeDropdown />
          <StatusDropDown />
          <DepartmentDropdown />
        </div>
      </div>
      <Table<DataType>
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 10 }}
        scroll={{ x: "max-content" }}
      />
      <EmployeeActionsModal
        visible={modalVisible}
        onCancel={handleCloseModal}
        onEdit={() => {
          handleCloseModal();
        }}
        onExport={() => {
          handleCloseModal();
        }}
        onDelete={() => {
          if (currentKey) {
            const newData = data.filter((item) => item.key !== currentKey);
            setData(newData);
          }
          handleCloseModal();
        }}
      />
    </div>
  );
};

export default EmployeeTable;
