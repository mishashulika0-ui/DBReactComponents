import { useRef } from "react";

const CodeInput = () => {
    const refs = [useRef(null), useRef(null), useRef(null), useRef(null)];

    const handleChange = (e, index) => {
        if (e.target.value && index < 3) {
            refs[index + 1].current.focus();
        }
    };

    return (
        <div>
            <h2>8. Код підтвердження</h2>
            {refs.map((ref, i) => (
                <input
                    key={i}
                    ref={ref}
                    maxLength={1}
                    onChange={(e) => handleChange(e, i)}
                    style={{
                        width: "40px",
                        height: "40px",
                        margin: "5px",
                        textAlign: "center",
                        fontSize: "20px"
                    }}
                />
            ))}
        </div>
    );
};

export default CodeInput;