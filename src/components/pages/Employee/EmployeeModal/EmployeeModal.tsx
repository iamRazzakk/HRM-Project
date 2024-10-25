import { Button, Dropdown, Input, Modal, TimePicker } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useState } from "react";
import type { DropdownProps, MenuProps } from "antd";
import { CiSquarePlus } from "react-icons/ci";
import dayjs, { Dayjs } from "dayjs";
import { MenuItemType } from "antd/es/menu/interface";

interface EmployeeModalProps {
  isVisible: boolean;
  onOk: () => void;
  onCancel: () => void;
  departmentItems: MenuItemType[];
  projectItems: MenuItemType[];
}

const EmployeeModal: React.FC<EmployeeModalProps> = ({
  isVisible,
  onOk,
  onCancel,
  departmentItems,
  projectItems,
}) => {
  const [openDepartment, setOpenDepartment] = useState(false);
  const [openProject, setOpenProject] = useState(false);
  const [employeeID, setEmployeeID] = useState<string>("");
  const [employeeName, setEmployeeName] = useState<string>("");
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(
    null
  );
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [timeSlots, setTimeSlots] = useState<
    { startTime: Dayjs; endTime: Dayjs }[]
  >([{ startTime: dayjs("00:00", "HH:mm"), endTime: dayjs("01:00", "HH:mm") }]);

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    if (e.key) {
      if (openDepartment) {
        setSelectedDepartment(e.key);
        setOpenDepartment(false);
      } else if (openProject) {
        setSelectedProject(e.key);
        setOpenProject(false);
      }
    }
  };

  const handleOpenDepartmentChange: DropdownProps["onOpenChange"] = (
    nextOpen
  ) => {
    setOpenDepartment(nextOpen);
  };

  const handleOpenProjectChange = (nextOpen: boolean) => {
    setOpenProject(nextOpen);
  };

  const handleStartTimeChange = (index: number, time: Dayjs | null) => {
    const updatedSlots = [...timeSlots];
    if (time) {
      updatedSlots[index].startTime = time;
      setTimeSlots(updatedSlots);
    }
  };

  const handleEndTimeChange = (index: number, time: Dayjs | null) => {
    const updatedSlots = [...timeSlots];
    if (time) {
      updatedSlots[index].endTime = time;
      setTimeSlots(updatedSlots);
    }
  };

  const handleSubmit = () => {
    console.log("Employee Data --->", {
      employeeID,
      employeeName,
      department: selectedDepartment,
      project: selectedProject,
      timeSlots,
    });

    // Reset the modal
    setEmployeeID("");
    setEmployeeName("");
    setSelectedDepartment(null);
    setSelectedProject(null);
    setTimeSlots([
      { startTime: dayjs("00:00", "HH:mm"), endTime: dayjs("01:00", "HH:mm") },
    ]);
    onOk();
  };

  return (
    <Modal
      title="Employee Information"
      open={isVisible}
      onOk={handleSubmit}
      onCancel={onCancel}
      okText="Add Employee"
      cancelText="Cancel"
      okButtonProps={{ size: "large" }}
      cancelButtonProps={{ size: "large" }}
    >
      <div>
        <div className="mb-4">
          <label>Employee ID</label> <br />
          <Input
            size="large"
            style={{ width: "40%" }}
            className="!font-medium"
            placeholder="Enter employee ID"
            value={employeeID}
            onChange={(e) => setEmployeeID(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label>Type Employee Name *</label>
          <Input
            size="large"
            style={{ width: "100%" }}
            className="!font-medium"
            placeholder="Enter employee name"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          {/* Select Department */}
          <div className="mb-4">
            <label className="mb-4">Select Department *</label> <br />
            <div className="flex items-center gap-4">
              <div>
                <Dropdown
                  className="border px-4 py-1"
                  menu={{
                    items: departmentItems.map((item) => ({
                      ...item,
                      disabled: item.key === selectedDepartment,
                    })),
                    onClick: handleMenuClick,
                  }}
                  onOpenChange={handleOpenDepartmentChange}
                  open={openDepartment}
                  overlayStyle={{ width: "20%" }}
                >
                  <Button
                    size="large"
                    className="flex justify-between items-center !font-medium border border-gray-300"
                    style={{ width: "100%", height: "40px" }}
                  >
                    {selectedDepartment
                      ? departmentItems.find(
                          (item) => item.key === selectedDepartment
                        )?.label
                      : "Select Department"}
                    <DownOutlined />
                  </Button>
                </Dropdown>
              </div>
              <div className="text-blue-700 text-4xl">
                <CiSquarePlus className="cursor-pointer" />
              </div>
            </div>
          </div>
          {/* Select Project */}
          <div className="mb-4">
            <label className="mb-4">Select Project *</label> <br />
            <div className="flex items-center gap-4">
              <div>
                <Dropdown
                  className="border px-4 py-1"
                  menu={{
                    items: projectItems.map((item) => ({
                      ...item,
                      disabled: item.key === selectedProject,
                    })),
                    onClick: handleMenuClick,
                  }}
                  onOpenChange={handleOpenProjectChange}
                  open={openProject}
                  overlayStyle={{ width: "20%" }}
                >
                  <Button
                    size="large"
                    className="flex justify-between items-center !font-medium border border-gray-300"
                    style={{ width: "100%", height: "40px" }}
                  >
                    {selectedProject
                      ? projectItems.find(
                          (item) => item.key === selectedProject
                        )?.label
                      : "Select Project"}
                    <DownOutlined />
                  </Button>
                </Dropdown>
              </div>
              <div className="text-blue-700 text-4xl">
                <CiSquarePlus className="cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
        {/* Time setup */}
        <div className="flex flex-col">
          {timeSlots.map((slot, index) => (
            <div key={index} className="flex items-center mb-2 justify-between">
              <div className="flex flex-col mr-4">
                <label>Start Time</label>
                <div className="flex items-center gap-4">
                  <TimePicker
                    value={slot.startTime}
                    onChange={(time) => handleStartTimeChange(index, time)}
                    format="h:mm a"
                    showNow={false}
                    use12Hours
                    className="!text-black font-medium border border-gray-300 rounded"
                    bordered={true}
                    suffixIcon={null}
                    style={{ width: "120px", height: "40px" }}
                  />
                  <div className="text-blue-700 text-4xl">
                    <CiSquarePlus className="cursor-pointer" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col mr-4">
                <label>End Time</label>
                <div className="flex items-center gap-4">
                  <TimePicker
                    value={slot.endTime}
                    onChange={(time) => handleEndTimeChange(index, time)}
                    format="h:mm a"
                    showNow={false}
                    use12Hours
                    className="!text-black font-medium border border-gray-300 rounded"
                    bordered={true}
                    suffixIcon={null}
                    style={{ width: "120px", height: "40px" }}
                  />
                  <div className="text-blue-700 text-4xl">
                    <CiSquarePlus className="cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default EmployeeModal;
