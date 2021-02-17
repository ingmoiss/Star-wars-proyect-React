import React from 'react';
import { DatosContext } from "../store/flux";
export const Navbar=()=>{
    const { store, actions } = React.useContext(DatosContext);
    return(
        <nav className="navbar navbar-light bg-light">
            <img className="logostarwars" src="https://logos-marcas.com/wp-content/uploads/2020/11/Star-Wars-Logo.png" alt=""/>
            <button onClick={() => actions.removeFirst()}>🗑</button>
            <select className="btn btn-primary form-select" aria-label="Default select example">
                <option className="text-primary" selected>Favorites</option>
                <option className="text-primary" value ="1">One</option>
                <option className="text-primary" value="2">Two</option>
                <option className="text-primary" value="3">Three</option>
            </select>
        </nav>
    )
    
}