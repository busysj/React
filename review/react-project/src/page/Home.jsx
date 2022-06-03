import React, { useContext } from "react";
import ProductionDisplay from "../components/ProductionDisplay";
import DataContext from "../context/DataContext";

const Home = () => {
  const data = useContext(DataContext);
  return (
    <div>
      <h1>Home</h1>
      {/* 카드 컴포넌트 - ProductionDisplay */}
      <ProductionDisplay product={data.state.product} />
      {/* 카드 컴포넌트 안에 모달 컴포넌트 - CommentWriteform */}
    </div>
  );
};

export default Home;
