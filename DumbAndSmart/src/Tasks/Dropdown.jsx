import { useState, useRef, useEffect } from "react";

const Dropdown = () => {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const handleClick = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, []);

    return (
        <div>
            <h2>5. Dropdown</h2>
            <div ref={ref} style={{ position: "relative", display: "inline-block" }}>
                <button onClick={() => setOpen(!open)}>Меню ▼</button>
                {open && (
                    <div style={{
                        position: "absolute",
                        background: "white",
                        border: "1px solid #ccc",
                        padding: "10px",
                        zIndex: 10
                    }}>
                        <div>Пункт 1</div>
                        <div>Пункт 2</div>
                        <div>Пункт 3</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dropdown;