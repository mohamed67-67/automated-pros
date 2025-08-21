import React from "react";
import { Select } from "antd";
import { FilterFilled } from "@ant-design/icons";
import { ISelectComp } from "@/interface/Comps";

export default function SelectComp({
  options,
  value,
  setValue,
  placeHolder = "Select",
  name,
}: ISelectComp<any>) {
  const onChange = (value: string) => {
    setValue((prev: any) => ({ ...prev, [name]: value }));
  };
  return (
    <div>
      <Select
        allowClear
        suffixIcon={<FilterFilled />}
        showSearch={false}
        value={value}
        placeholder={placeHolder}
        optionFilterProp="label"
        onChange={onChange}
        options={options}
      />
    </div>
  );
}
