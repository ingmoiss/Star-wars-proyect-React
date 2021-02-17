
export default (store, setStore) => {

    return {
        removeFirst: () => {
            setStore({ people: store.people.filter((p,i) => i !== 0) })
        },
        getUsers: () => {
            fetch("https://www.swapi.tech/api/people")
                .then(res => res.json())
                .then(data => {
                    console.log("llegaron los people", data);
                    setStore({ ...store, people: data.results })
                })
                .catch(err => console.error(err))
        }
    }
}