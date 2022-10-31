import React from 'react';
import { Grid } from 'gridjs-react';
import "gridjs/dist/theme/mermaid.css";
import { Context } from '../context';
import { _ } from "gridjs-react";
import cls from './Main/Main.module.scss';
import { Img } from './UI/Img';

export const Table = () => {
/*
comment: "test"
id: "6cd456ce-3354-4cd5-b0b0-1e8385693e9b"
inputLocation: "123"
name: "Nikita"
status: true
type: []
*/
// _(<button className={"py-2 px-4 border rounded-md text-white bg-blue-600"} onClick={() => alert('clicked!')}>Edit</button>)

  const { data, deleteItem } = React.useContext(Context);

  function lineDeletion(id) {
    deleteItem(id);
  }

  // console.log("TABLE ", data)
  return (
    // <div style={{"width": "30%", "margin": "0 auto"}}>
    <div className={cls.table}>
      <Grid
        style={{"width": "50%"}}
        data={data.map((e) => (
          [`${e.name}`, `${e.inputLocation}`, `${e.status}`, `${e.comment}`, _(<Img onClick={() => lineDeletion(e.id)} />)]
        ))}

        columns={['Name', 'Location', "Status", "Coment", "Delete"]}
        // pagination={{
        //     enabled: true,
        //     limit: 1,
        // }}
      />
    </div>
  )
}
