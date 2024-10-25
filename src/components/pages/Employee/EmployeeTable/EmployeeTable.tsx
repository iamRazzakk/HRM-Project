import { Space, Button, Tag, Table } from "antd";
import type { TableProps } from "antd";
import { DataType } from "../../../../types/DataType";
import SearchBar from "../../../Shared/SearchBar";
import StatusDropdown from "../../../StatusDropdown/StatusDropdown";
import DepartmentDropdown from "../../../DepartmentDropdown/DepartmentDropdown";
import DateRangeDropdown from "../../../DateRangeDropdown/DateRangeDropdown";
import {
  HiOutlineDotsVertical,
  HiCheckCircle,
  HiXCircle,
} from "react-icons/hi";
import { useState } from "react";

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
    status: "approved",
  },
];

const EmployeeTable: React.FC = () => {
  const [data, setData] = useState<DataType[]>(initialData);

  const handleApprove = (key: string) => {
    const newData: DataType[] = data.map((item) =>
      item.key === key ? { ...item, status: "approved" as const } : item
    );
    setData(newData);
  };

  const handleReject = (key: string) => {
    const newData: DataType[] = data.map((item) =>
      item.key === key ? { ...item, status: "rejected" as const } : item
    );
    setData(newData);
  };

  const handleUndo = (key: string) => {
    const newData: DataType[] = data.map((item) =>
      item.key === key ? { ...item, status: "pending" as const } : item
    );
    setData(newData);
  };

  // Define your columns
  const columns: TableProps<DataType>["columns"] = [
    {
      title: <span style={{ fontWeight: 500, color: "black" }}>ID</span>,
      dataIndex: "key",
      key: "key",
      render: (text) => <span style={{ color: "gray" }}>{text}</span>,
      width: 100,
    },
    {
      title: (
        <span style={{ fontWeight: 500, color: "black" }}>Employee Name</span>
      ),
      dataIndex: "name",
      key: "name",
      render: (text) => <span style={{ color: "gray" }}>{text}</span>,
      width: 200,
    },
    {
      title: <span style={{ fontWeight: 500, color: "black" }}>Duration</span>,
      dataIndex: "duration",
      key: "duration",
      render: (text) => <span style={{ color: "gray" }}>{text}</span>,
      width: 150,
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
      width: 200,
    },
    {
      title: <span style={{ fontWeight: 500, color: "black" }}>Due Hours</span>,
      dataIndex: "dueHours",
      key: "dueHours",
      render: (text) => <span style={{ color: "gray" }}>{text}</span>,
      width: 100,
    },
    {
      title: (
        <span style={{ fontWeight: 500, color: "black" }}>Department</span>
      ),
      dataIndex: "department",
      key: "department",
      render: (text) => <span style={{ color: "gray" }}>{text}</span>,
      width: 150,
    },
    {
      title: <span style={{ fontWeight: 500, color: "black" }}>Project</span>,
      dataIndex: "project",
      key: "project",
      render: (text) => <span style={{ color: "gray" }}>{text}</span>,
      width: 150,
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
      width: 200,
    },
    {
      title: <span style={{ fontWeight: 500, color: "black" }}>Action</span>,
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          {record.status === "pending" && (
            <>
              <Button
                type="text"
                danger
                onClick={() => handleReject(record.key)}
              >
                Reject
              </Button>
              <Button
                type="primary"
                className="bg-green-600 text-white"
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
          <HiOutlineDotsVertical className="text-gray-500" />
        </Space>
      ),
      width: 200,
    },
  ];

  return (
    <div className="bg-white text-black p-4 rounded-md">
      <div className="flex items-center justify-evenly gap-4 mb-8">
        <h1 className="lg:text-3xl md:text-2xl text-xl font-bold">
          Employee Time Logs
        </h1>
        <SearchBar />
        <div className="flex items-center gap-4">
          <DateRangeDropdown />
          <StatusDropdown />
          <DepartmentDropdown />
        </div>
      </div>
      <Table<DataType>
        columns={columns}
        dataSource={data}
        pagination={false}
        className="rounded-md"
      />
    </div>
  );
};

export default EmployeeTable;
