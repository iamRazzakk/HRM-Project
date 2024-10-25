import { DownOutlined, CalendarOutlined } from "@ant-design/icons";
import { Button, Modal, Space, DatePicker, Select, Row, Col, Form } from "antd";
import { useState } from "react";

const { Option } = Select;

const DateRangeDropdown: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [dateRange, setDateRange] = useState("Last 7 Days");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleDateRangeChange = (value: string) => {
    setDateRange(value);
  };

  return (
    <>
      <Button size="large" onClick={showModal}>
        <Space>
          <CalendarOutlined />
          Date Range
          <DownOutlined />
        </Space>
      </Button>
      <Modal
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button size="large" key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button size="large" key="apply" type="primary" onClick={handleOk}>
            Apply
          </Button>,
        ]}
      >
        <Form layout="vertical">
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item
                label={<span className="font-medium">Date Range</span>}
              >
                <Select
                  size="large"
                  defaultValue={dateRange}
                  onChange={handleDateRangeChange}
                  style={{ width: "100%" }}
                >
                  <Option value="Last 7 Days">Last 7 Days</Option>
                  <Option value="Last 30 Days">Last 30 Days</Option>
                  <Option value="Custom">Custom</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label={<span className="font-medium">Start Date</span>}
              >
                <DatePicker
                  size="large"
                  style={{ width: "100%" }}
                  placeholder="Select start date"
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label={<span className="font-medium">End Date</span>}>
                <DatePicker
                  size="large"
                  style={{ width: "100%" }}
                  placeholder="Select end date"
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
};

export default DateRangeDropdown;
