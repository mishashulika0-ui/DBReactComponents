import { useRef, useEffect, useState } from "react";

const SizeTracker = () => {
    const divRef = useRef(null);
    const [size, setSize] = useState({ w: 0, h: 0 });

    useEffect(() => {
        if (divRef.current) {
            const rect = divRef.current.getBoundingClientRect();
            setSize({ w: rect.width, h: rect.height });
        }
    }, []);

    return (
        <div>
    <h2>9. Розміри елемента</h2>
    <div
        ref={divRef}
        style={{ background: "#0f3460", color: "white", padding: "30px" }}
    >
        В дверь Штирлица постучали. Он открыл, но снаружи никого не было - только пустое место, хотя шаги были слышны прямо у порога.
        <br/>
        «display: none», - догадался Штирлиц.
    </div>
    <p>Ширина: {size.w}px</p>
    <p>Висота: {size.h}px</p>
</div>
    );
};

export default SizeTracker;