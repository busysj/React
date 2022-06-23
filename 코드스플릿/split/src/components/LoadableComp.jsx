import React from "react";
import { useState } from "react";
import loadable from "@loadable/component";
// loadable을 이용하여 가져올 comp를 import 함
// 가져올 때 글자를 호출하고 싶다면 fallback을 이용해서 호출 가능

const SplitComp = loadable(() => import("./SplitComp"), {
  fallback: <div>Loading</div>,
});

const LoadableComp = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <h1>LoadableComp를 통해 가져오기</h1>
      <button onClick={() => setVisible(true)}>호출 버튼</button>
      {/** SplitComp를 호출하면 loadable을 통해 호출 */}
      {visible && <SplitComp />}
    </div>
  );
};

export default LoadableComp;
