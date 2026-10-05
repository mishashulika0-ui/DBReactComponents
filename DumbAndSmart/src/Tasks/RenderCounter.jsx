import { useState, useRef } from "react";

const RenderCounter = () => {
    const [count, setCount] = useState(0);
    const rendersRef = useRef(0);

    rendersRef.current += 1;

    return (
        <div>
            <h2>4. Кількість рендерів</h2>
            <p>Рендерів: {rendersRef.current}</p>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    );
};

export default RenderCounter;