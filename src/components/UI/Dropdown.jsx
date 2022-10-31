import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Context } from '../../context';

import cls from '../Main/Main.module.scss';

export const DropDown = ({disabled, setNameLocation}) => {
  const { location } = React.useContext(Context);
  const [locationName, setLicationName] = React.useState("List of locations");

  function  chooseLocation(id, locationName) {
    setLicationName(locationName);
    setNameLocation(locationName);
  }
  
  return (
    <Dropdown className={cls.dropdownBlock}>
      <Dropdown.Toggle variant="success" id="dropdown-basic" disabled={disabled}>
        {locationName}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {
          location.map((e) => (
            <Dropdown.Item href="#/action-1" key={e.id} onClick={() => chooseLocation(e.id, e.name)}>{e.name}</Dropdown.Item>
          ))
        }
      </Dropdown.Menu>
    </Dropdown>
  )
}
