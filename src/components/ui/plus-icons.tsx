import { PlusIcon } from "lucide-react";
import React from "react";

const PlusIcons = () => {
  return (
    <>
      <PlusIcon className="absolute z-10 top-0 left-0 -translate-x-1/2 -translate-y-1/2 size-4 " />
      <PlusIcon className="absolute z-10 top-0 right-0 translate-x-1/2 -translate-y-1/2 size-4 " />
    </>
  );
};

export default PlusIcons;
