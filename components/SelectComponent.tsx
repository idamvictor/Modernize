import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import React from "react";

const SelectComponent = () => {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="March 2023" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">March 2023</SelectItem>
        <SelectItem value="system">April 2023</SelectItem>
        <SelectItem value="dark">May 2023</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SelectComponent;
