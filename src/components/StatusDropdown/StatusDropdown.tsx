import {
  DownOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Dropdown, message, Space } from "antd";
import React from "react";

// Handle menu click
const handleMenuClick: MenuProps["onClick"] = (e) => {
  message.info(`You selected: ${e.domEvent.currentTarget.textContent}`);
  console.log("click", e);
};

// Menu items with updated icons and styles
const items: MenuProps["items"] = [
  {
    label: (
      <span style={{ color: "green" }}>
        <CheckCircleOutlined /> Approved
      </span>
    ),
    key: "1",
  },
  {
    label: (
      <span style={{ color: "red" }}>
        <CloseCircleOutlined /> Rejected
      </span>
    ),
    key: "2",
  },
];

// Menu properties
const menuProps = {
  items,
  onClick: handleMenuClick,
};

// Component
const StatusDropDown: React.FC = () => (
  <Dropdown menu={menuProps}>
    <Button size="large">
      <Space>
        Status
        <DownOutlined />
      </Space>
    </Button>
  </Dropdown>
);

export default StatusDropDown;
