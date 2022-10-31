import React from 'react';
import { Btn } from '../UI/Button';
import Form from 'react-bootstrap/Form';
import { Context } from '../../context';

export const FormBlock = () => {
    const [locationAdd, setLocationAdd] = React.useState("");
    const { middleware, token } = React.useContext(Context);
    // status: status,
    // comment: comment, 
    // type: type

  function addClickHandler() {
      middleware({operation: "addLocation", name: locationAdd, token: token});
      setLocationAdd("");
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        {/* <Form.Label>enter location</Form.Label> */}
        <Form.Control placeholder="enter location" value={locationAdd} onChange={e => setLocationAdd(e.target.value)} style={{'width': '250px'}}/>
        {/* <Form.Check 
            type="switch"
            id="custom-switch"
            label="indicate the status"
            onChange={() => setData({inputLocation: data.inputLocation, status: !data.status, comment: data.comment})}
            checked={data.status}
            style={{"marginBottom": "10px", "marginTop": "10px"}}
        />
        <Form.Control placeholder="comment" value={data.comment} onChange={e => setData({inputLocation: data.inputLocation, status: data.status,
        comment: e.target.value})} style={{'width': '250px'}}/> */}
      </Form.Group>
      <Btn disabled={false} onClick={() => addClickHandler()}>ADD</Btn>
    </Form>
  )
}