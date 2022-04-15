import React, { useState } from 'react';

function CounterButton() {
    //新しい状態変数を宣言する。"count "と呼ぶことにする。
    const [count, setCount] = useState(0);

    return (
        <>
            <p>You  clicked {count} times</p>
            <div className='flex'>
                <button onClick={() => setCount(count + 1)}>
                    +
                </button>
                <button onClick={() => setCount(count - 1)}>
                    -
                </button>
                <button onClick={() => setCount(0)}>
                    reset
                </button>
            </div>

            <style jsx>{`
                button{
                    color:#fff;
                    background-color:#f00;
                    border:none;
                    width:60px;
                    border-radius: 10px;
                }
                .flex{
                    display: flex;
                    gap: 8px;
                }
            `}</style>
        </>
    );
}
export default CounterButton