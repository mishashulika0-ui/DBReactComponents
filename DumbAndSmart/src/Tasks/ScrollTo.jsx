import { useRef } from "react";

const ScrollTo = () => {
    const targetRef = useRef(null);

    return (
        <div>
            <h2>7. Прокрутка до секції</h2>
            <button onClick={() => targetRef.current.scrollIntoView({ behavior: "smooth" })}>
                Прокрутити вниз
            </button>
            <div style={{ height: "300px" }} />
            <div
                ref={targetRef}
                style={{ background: "#e94560", color: "white", padding: "40px" }}
            >
                а ось і секція
            </div>
        </div>
    );
};

export default ScrollTo;