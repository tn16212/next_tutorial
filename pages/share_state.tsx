import React, { useState } from 'react';

function MyButton(
    { count, onClick }: { count: number, onClick: React.MouseEventHandler<HTMLButtonElement> }
) {
    return (
        <button onClick={onClick}>
            Clicked {count} times
        </button>
    );
}

export default function MyApp() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Counters that update separately</h1>
            <MyButton count={count} onClick={handleClick} />
            <MyButton count={count} onClick={handleClick} />
        </div>
    );
}