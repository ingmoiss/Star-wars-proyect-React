import React, { useEffect } from 'react';
import { DatosContext } from "../store/flux";

const Home = () => {
    const { store, actions } = React.useContext(DatosContext);

    useEffect(() => {
        //al pricpio
        actions.getUsers();
    }, []);

return <p>
        {store.people.map(people => <p>{people.name}</p>)}
    </p>
}
export default Home;
