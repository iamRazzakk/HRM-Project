import { DownloadOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";
import { useState } from "react";
import { GrGroup } from "react-icons/gr";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import EmployeeModal from "./EmployeeModal/EmployeeModal";
import { MenuItemType } from "antd/es/menu/interface";
import EmployeeTable from "./EmployeeTable/EmployeeTable";

const Employee = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // Department Items
  const departmentItems: MenuItemType[] = [
    { label: "Development", key: "1" },
    { label: "Product", key: "2" },
    { label: "Designer", key: "3" },
    { label: "Sales", key: "4" },
  ];

  // Project Items
  const projectItems: MenuItemType[] = [
    { label: "CRM Project", key: "1" },
    { label: "HRM Project", key: "2" },
  ];

  return (
    <div className="min-h-screen container mx-auto font-Inter">
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center gap-4 mt-8 mb-8">
          <GrGroup className="text-blue-800 bg-white h-16 w-16 p-4 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-100" />
          <div>
            <h2 className="text-lg font-bold">Employee Time</h2>
            <p className="text-gray-600">Manage your time logs</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Upload
            showUploadList={false}
            accept=".xls,.xlsx"
            onChange={(info) => {
              if (info.file.status === "done") {
                message.success(`File uploaded: ${info.file.name}`);
              } else if (info.file.status === "error") {
                message.error(`File upload failed: ${info.file.name}`);
              }
            }}
          >
            <Button
              size="large"
              className="hover:!text-black hover:!border-gray-200 hover:!bg-gray-200 !bg-white"
            >
              Upload Excel <DownloadOutlined />
            </Button>
          </Upload>
          <Button size="large" type="primary" onClick={showModal}>
            <MdOutlinePersonAddAlt className="font-bold text-lg" /> Add Employee
          </Button>
        </div>
      </div>
      <EmployeeModal
        isVisible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        departmentItems={departmentItems}
        projectItems={projectItems}
      />
      <EmployeeTable />
    </div>
  );
};

export default Employee;
