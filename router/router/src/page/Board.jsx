import React from "react";
import { useParams } from "react-router-dom";

const Board = () => {
  const { id } = useParams();
  return (
    <div>
      <h3>{id}번 게시글 입니다</h3>
      {/* <Link to="/boardlist">리스트</Link> */}
    </div>
  );
};

export default Board;
