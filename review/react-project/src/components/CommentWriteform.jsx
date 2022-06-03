import { React, useContext, useState } from "react";
import { Button, Modal, FloatingLabel, Form } from "react-bootstrap";
import DataContext from "../context/DataContext";

const CommentWriteform = () => {
  const data = useContext(DataContext);
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // input 값을 가져오는 이벤트 함수
  const onChange = (e) => {
    setText(e.target.value);
  };
  // 버튼을 눌렀을 때 값을 넣어주는 함수
  const addComment = () => {
    const nextComment = {
      id: data.state.id,
      user: data.state.user,
      text: text,
      product: null, // props 값으로 받아와서 넣기
      img: null, // 기능 확인 후 넣기
    };
    data.action.setComments([...data.state.comments, nextComment]);
    data.action.setId(data.state.id + 1);

    // 모달창 종료
    setShow(false);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        후기 작성
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>후기를 작성해주세요</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingTextarea2" label="Comments">
            <Form.Control
              onChange={onChange}
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
            />
          </FloatingLabel>
          <Form.Group controlId="formFile" className="my-3">
            <Form.Label> 추가할 이미지를 선택하세요</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            취소
          </Button>
          <Button variant="primary" onClick={addComment}>
            작성
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CommentWriteform;
