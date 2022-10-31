import React from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Btn } from './Button';


export const ModalAuth = ({show, authHandler, setShow}) => {
  const [value, setValue] = React.useState("");

  function authorizationHandler() {
    authHandler(value);
    setValue("")
  }

  return (
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
        <Modal.Title>
          Для продолжения необходимо авторизоваться!
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Введите Ваше имя!</Form.Label>
              <Form.Control
                type="text"
                placeholder="name"
                autoFocus
                onChange={(e) => setValue(e.target.value)}
                value={value}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Btn disabled={false} onClick={() => authorizationHandler()}>Авторизоваться</Btn>
        </Modal.Footer>
      </Modal>
  )
}