import React from 'react'
import { Btn } from '../UI/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Context } from '../../context';


export const ModalEdit = React.memo(
  ({show, handle, setShow, name}) => {

    const { addData, location } = React.useContext(Context);

    const [data, setData] = React.useState({
      inputLocation: "",
      status: false,
      comment: "",
      // type: ""
    });

    function addClickHandler() {
      addData(data, "add");
      setData({
          inputLocation: "",
          status: false,
          comment: "",
          // type: ""
      });
    }
    return (
      <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Добро пожаловать!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Для продолжения необходимо авторизоваться

          </Modal.Body>
            <Form style={{padding: "16px"}}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    {/* <Form.Label>enter location</Form.Label>  */}
                    <Form.Control placeholder="enter location" value={name} onChange={e => setData({inputLocation: e.target.value, status: data.status, comment: data.comment})} style={{'width': '250px'}}/>
                    <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="indicate the status"
                        onChange={() => setData({inputLocation: data.inputLocation, status: !data.status, comment: data.comment})}
                        checked={data.status}
                        style={{"marginBottom": "10px", "marginTop": "10px"}}
                    />
                    <Form.Control placeholder="comment" value={data.comment} onChange={e => setData({inputLocation: data.inputLocation, status: data.status,
                    comment: e.target.value})} style={{'width': '250px'}}/>
                  </Form.Group>

                  {/* <Btn disabled={false} onClick={() => addClickHandler()}>ADD</Btn> */}
                </Form>
          <Modal.Footer>
            <Btn variant="primary" onClick={() => addClickHandler()}>
              EDIT
            </Btn>
          </Modal.Footer>
        </Modal>
    )
  }
)
