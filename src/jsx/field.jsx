import React from "react";
import './field.css';

const Field = ({data:{name,mail,gender,website,skills,link}})=>{
    return(
        <>
        <tr>
        <td className="stdt-des">
            {name}<br/>
            {gender}<br />
            {mail}<br />
            {website}<br/>
            {skills}
        </td>
        <td className="stdt-img">
            <img alt='person' src={link} />
        </td>
        </tr>
        </>
    )
}

export default Field;