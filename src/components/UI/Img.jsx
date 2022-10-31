import React from 'react';
import del from "../../assets/images/delete.png";

export const Img = ({onClick}) => (
    <img onClick={onClick} style={{"cursor": "pointer"}} src={del} />
); 
