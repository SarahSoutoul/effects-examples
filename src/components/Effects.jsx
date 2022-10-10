import { useState } from "react";

const Effects = () => {
    const [val, setVal] = useState(0);
    const [specialVal, setSpecialVal] = useState(0);

    function handleClick () {
        setVal(prev => prev + 1);
        if (val % 10 === 0) {
            setSpecialVal(prev => prev + 1);
        }
    }

    return <div>
            <h2>Beers!</h2>
            <button onClick={handleClick}>{val}</button>
           </div>
}

export default Effects;