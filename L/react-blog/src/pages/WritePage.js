import React from "react";
import Editor from "../component/write/Editor";
import TagBox from "../component/write/TagBox";
import WriteActionButtons from "../component/write/WriteActionButtons";
import Responsive from "../component/common/Responsive";

const WritePage = () => {
  return (
    <Responsive>
      <Editor />
      <TagBox />
      <WriteActionButtons />
    </Responsive>
  );
};

export default WritePage;
