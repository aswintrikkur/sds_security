import React from "react";

const pagesCount = 10

export const PaginationButtons = () => {
  return <div className="flex gap-7 justify-end opacity-60  my-5">
    
    <p className="text-lg">{"< Previous"}</p>

    <p className="text-lg">{"Next >"}</p>
  </div>;
};
