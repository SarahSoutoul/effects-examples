import { useState } from "react";

const Beers = () => {
    const [beers, setBeers] = useState([]);

    return <>
            <h2>Beers</h2>
            { beers.map(b => <li>{b}</li>) }
           </>
}



export default Beers;