import React from "react";
import { useParams } from "react-router-dom";

const Board = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>{id}페이지입니다</h1>
    </div>
  );
};

export default Board;
