
import React, { useState, useContext } from 'react';

const Datoscontext = React.createContext();   


export const Obtenerdata=()=>{
    const [planetasgeneral,setplanetasgeneral]=useState([])

    fetch("https://www.swapi.tech/api/people")
        .then(res => res.json())
        .then(data => console.
        log(data))
        .catch(err => console.error(err))

return (
    <Datoscontext.Provider value={"people"}>
        <h1>algun titulo</h1>
    </Datoscontext.Provider>

);
};