/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Button, Dropdown, Space } from "antd";
import { CalendarOutlined, DownOutlined } from "@ant-design/icons";

interface DateRangeDropdownProps {
  items: any[];
  handleMenuClick: (e: any) => void;
}

const DateRangeDropdown: React.FC<DateRangeDropdownProps> = ({
  items,
  handleMenuClick,
}) => {
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <Dropdown menu={menuProps}>
      <Button size="large">
        <Space>
          <CalendarOutlined />
          Date Range
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
  );
};

export default DateRangeDropdown;
