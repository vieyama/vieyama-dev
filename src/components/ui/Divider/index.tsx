import React from "react";

const Divider = ({className}: {className?: string}) => {
  return (
    <div className={className}>
      <div className="border-t-2" />
    </div>
  );
};

export default Divider;
