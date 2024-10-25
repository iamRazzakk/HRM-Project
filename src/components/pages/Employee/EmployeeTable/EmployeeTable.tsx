/* eslint-disable @typescript-eslint/no-explicit-any */
import { Space, Table, Tag } from "antd";
import type { TableProps } from "antd";
import { DataType } from "../../../../types/DataType";
import { UserOutlined } from "@ant-design/icons";
import SearchBar from "../../../Shared/SearchBar";
import DateRangeDropdown from "../../../DateRangeDropdown/DateRangeDropdown";
import StatusDropDownd from "../../../StatusDropdown/StatusDropdown";
import DepartmentDropdown from "../../../DepartmentDropdown/DepartmentDropdown";

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
    title: <span style={{ fontWeight: 500, color: "black" }}>Department</span>,
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
    title: <span style={{ fontWeight: 500, color: "black" }}>Tags</span>,
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
    width: 150,
  },
  {
    title: <span style={{ fontWeight: 500, color: "black" }}>Action</span>,
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
    width: 150,
  },
];

// Sample data
const data: DataType[] = [
  {
    key: "#1",
    name: "John Doe",
    duration: "8 hours",
    startTime: "9:00 AM",
    endTime: "5:00 PM",
    dueHours: "8 hours",
    department: "Development",
    project: "Project A",
    notes: "Completed tasks efficiently.",
    tags: ["active"],
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
    tags: ["creative"],
  },
];

// Menu items for the dropdown
const items = [
  {
    label: "1st menu item",
    key: "1",
    icon: <UserOutlined />,
  },
];

// Handle menu item click
const handleMenuClick = (e: any) => {
  console.log("click", e);
};

const EmployeeTable: React.FC = () => (
  <div className="bg-white text-black p-4">
    <div className="flex items-center justify-evenly gap-4 mb-8">
      <h1 className="lg:text-3xl md:text-2xl text-xl font-bold">
        Employee Time Logs
      </h1>
      <SearchBar />
      <div className="flex items-center gap-4">
        <DateRangeDropdown items={items} handleMenuClick={handleMenuClick} />
        <StatusDropDownd />
        <DepartmentDropdown />
      </div>
    </div>
    <Table<DataType> columns={columns} dataSource={data} pagination={false} />
  </div>
);

export default EmployeeTable;
