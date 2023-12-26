import React from "react";
import { Select } from "antd";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const Navs: React.FC = () => (
  <Select
    mode="tags"
    style={{ width: "300px" }}
    placeholder="Tags Mode"
    onChange={handleChange}
  />
);

export default Navs;
