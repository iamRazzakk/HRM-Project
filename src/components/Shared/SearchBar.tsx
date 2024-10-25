import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const SearchBar: React.FC = () => (
  <Input
    size="large"
    placeholder="Search by ID, Name"
    style={{ width: "100%", backgroundColor: "transparent" }}
    prefix={<SearchOutlined style={{ color: "rgba(0,0,0,0.45)" }} />}
  />
);

export default SearchBar;
