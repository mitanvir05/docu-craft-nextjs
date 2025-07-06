import React from "react";

const Sidebar = ({ docs }) => {
  const roots = docs.filter((doc) => !doc.parent);
  console.log(roots)
  return <div>sidebar</div>;
};

export default Sidebar;
