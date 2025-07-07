import ContentDisplay from "@/components/ContentDisplay";
import React from "react";

const subContentPage = ({ params: { subContentId } }) => {
  return (
    <div>
      <ContentDisplay id={subContentId} />
    </div>
  );
};

export default subContentPage;
