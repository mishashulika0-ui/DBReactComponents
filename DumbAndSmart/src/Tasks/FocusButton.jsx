import { useRef } from "react";

const FocusButton = () => {
    const inputRef = useRef(null);

    return (
        <div>
            <h2>1. Фокус на input</h2>
            <input ref={inputRef} placeholder="Клікни кнопку нижче..." />
            <button onClick={() => inputRef.current.focus()}>Фокус</button>
        </div>
    );
};

export default FocusButton;