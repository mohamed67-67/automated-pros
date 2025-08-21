import React from "react";
import type { PaginationProps } from "antd";
import { Pagination } from "antd";
import { IPaginationComp } from "@/interface/Comps";

const PaginationComp = ({
  total,
  page,
  per_page,
  setPagination,
}: IPaginationComp) => {
  const onChange: PaginationProps["onChange"] = (page) => {
    setPagination(page);
    window.scrollTo(0, 0);
  };
  return (
    <Pagination
      showQuickJumper
      showSizeChanger={false}
      pageSize={per_page}
      current={page}
      total={total}
      onChange={onChange}
      // pageSizeOptions={[10, 15, 20]}
    />
  );
};

export default PaginationComp;
