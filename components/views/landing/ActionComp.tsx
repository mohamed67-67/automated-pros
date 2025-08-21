import SelectComp from "@/components/selectComp";
import TextField from "@/components/textField";
import { GenderOptions, StatusOptions } from "@/constants/state";
import { IActionComp } from "@/interface/Comps";
import React from "react";

export default function ActionComp({
  state,
  setState,
  filters,
  setFilters,
}: IActionComp<string>) {
  return (
    <div className="flex justify-between items-center">
      <TextField
        debounce
        placeHolder="Search by name"
        setState={setState}
        state={state}
      />
      <div className="flex items-center gap-1">
        <SelectComp
          options={GenderOptions}
          name="gender"
          setValue={setFilters}
          value={filters.gender}
          placeHolder="Select Gender"
        />
        <SelectComp
          options={StatusOptions}
          name="status"
          setValue={setFilters}
          value={filters.status}
          placeHolder="Select Status"
        />
      </div>
    </div>
  );
}
