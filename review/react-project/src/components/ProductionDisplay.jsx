import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import DataContext from "../context/DataContext";
import CommentWriteform from "./CommentWriteform";

const ProductionDisplay = ({ product }) => {
  const data = useContext(DataContext);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={require(`../img/${product.img}`)} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.text}</Card.Text>
        <Button variant="primary">구매</Button>
        {/* 카드 안에 사용할 모달 컴포넌트 */}
        <CommentWriteform />
      </Card.Body>
      <Card.Footer>
        {
          // data.state.comments의 값을 바로 쓰지말고 product값과 name 값을 비교해서 사용
          // 값을 정리해서 쓸 때는 Home 화면에서 값을 정리해서 prop 값으로 들고와서 사용
          // 아래는 product 값 상관없이 전체 값 들고옴
          data.state.comments.map((comment) => (
            <li key={comment.id}>
              {comment.user} : {comment.text}
            </li>
          ))
        }
      </Card.Footer>
    </Card>
  );
};

export default ProductionDisplay;
