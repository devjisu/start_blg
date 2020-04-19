import React from "react";
import Editor from "../component/write/Editor";
import TagBox from "../component/write/TagBox";
import WriteActionButtons from "../component/write/WriteActionButtons";
import Responsive from "../component/common/Responsive";
import EditorContainer from "../containers/write/EditorContainer"

const WritePage = () => {
  return (
    <Responsive>
      <EditorContainer />
      <TagBox />
      <WriteActionButtons />
    </Responsive>
  );
};

export default WritePage;
