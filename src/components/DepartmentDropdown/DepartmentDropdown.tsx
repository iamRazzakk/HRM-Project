import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Dropdown, message, Space } from "antd";
import React from "react";

const handleMenuClick: MenuProps["onClick"] = (e) => {
  message.info("Click on menu item.");
  console.log("click", e);
};

const items: MenuProps["items"] = [
  { label: "Development", key: "1" },
  { label: "Product", key: "2" },
  { label: "Designer", key: "3" },
  { label: "Sales", key: "4" },
];

const menuProps = {
  items,
  onClick: handleMenuClick,
};

const DepartmentDropdown: React.FC = () => (
  <Dropdown menu={menuProps}>
    <Button size="large">
      <Space>
        Department
        <DownOutlined />
      </Space>
    </Button>
  </Dropdown>
);

export default DepartmentDropdown;
