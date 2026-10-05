import { useRef } from "react";

const RefInput = () => {
    const inputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Введено: " + inputRef.current.value);
    };

    return (
        <div>
            <h2>10. Текст тільки в рефі</h2>
            <form onSubmit={handleSubmit}>
                <input ref={inputRef} placeholder="Введіть текст..." />
                <button type="submit">Відправити</button>
            </form>
        </div>
    );
};

export default RefInput;