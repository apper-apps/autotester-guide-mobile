import React from "react";
import Checkbox from "@/components/atoms/Checkbox";

const PrerequisiteItem = ({ prerequisite, onToggle }) => {
  return (
    <div className="py-3 border-b border-gray-100 last:border-b-0">
      <Checkbox
        checked={prerequisite.isChecked}
        onChange={() => onToggle(prerequisite.id)}
        label={prerequisite.text}
      />
    </div>
  );
};

export default PrerequisiteItem;