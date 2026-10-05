import { useState, useRef } from "react";

const Stopwatch = () => {
    const [seconds, setSeconds] = useState(0);
    const intervalRef = useRef(null);

    const start = () => {
        if (intervalRef.current) return;

        intervalRef.current = setInterval(() => {
            setSeconds(s => s + 1);
        }, 1000);
    };

    const stop = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    };

    return (
        <div>
            <h2>2. Секундомір: {seconds} с</h2>
            <button onClick={start}>Старт</button>
            <button onClick={stop}>Стоп</button>
        </div>
    );
};

export default Stopwatch;