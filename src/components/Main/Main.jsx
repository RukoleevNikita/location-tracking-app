import React from 'react';
import { DropDown } from '../UI/Dropdown';
import { Table } from '../Table';
import { Btn } from '../UI/Button';
import { FormBlock } from '../UI/Form';
import { ModalEdit } from '../UI/ModalEdit';

import cls from './Main.module.scss';

export const Main = ({disabled}) => {
  const [nameLocation, setNameLocation] = React.useState("");
  const [showModalEdit, setShowModalEdit] = React.useState(false);
  // const [disabledEdit, setDisabledEdit] = React.useState(false);

  function editClickHandler() {
    setShowModalEdit(true);
  }
 
  return (
    <div className={cls.container}>
      <div className={cls.header}>
        <div className={cls.header__top}>
          <FormBlock />
        </div>
        <div className={cls.header__bottom}>
          <DropDown disabled={disabled} setNameLocation={setNameLocation} />
          <Btn disabled={disabled} onClick={() => editClickHandler()}>EDIT</Btn>
        </div>
      </div>
      <Table />
      <ModalEdit show={showModalEdit} setShow={setShowModalEdit} name={nameLocation} />
    </div>
  )
}

{/* Пока список локаций пуст редактирование данных не возможно и должно выводиться сообщение о необходимости добавить локации. */}
