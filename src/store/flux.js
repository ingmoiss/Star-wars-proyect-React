
import React, { useState, useContext } from 'react';
import defaultStore from "./data";
import actions from "./actions";
import Layout from "../layout"
export const DatosContext = React.createContext();   

export const Flux=()=>{
    const [store,setStore]=useState(defaultStore)

    return (
        <DatosContext.Provider value={{ store, actions: actions(store, setStore) }}>
            <Layout />
        </DatosContext.Provider>
    );
};