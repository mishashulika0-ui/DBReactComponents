import { useState, useRef, useEffect } from "react";

const PrevValue = () => {
    const [count, setCount] = useState(0);
    const prevRef = useRef(null);

    useEffect(() => {
        prevRef.current = count;
    }, [count]);

    return (
        <div>
            <h2>3. Попереднє значення</h2>
            <p>Поточне: {count}</p>
            <p>Попереднє: {prevRef.current}</p>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    );
};

export default PrevValue;