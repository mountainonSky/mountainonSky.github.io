import React, { useState, useRef, useEffect, useCallback, useMemo, useReducer } from "react";

const Test = () => {
    return (
        <>
            버튼을 눌렀다.
        </>
    )
}

function UseUseState() {
    const [items, setItems] = useState<string[]>([]);
    const handleClick = () => {
        setItems([...items, `Item ${items.length + 1}`]);
    };
    return (
        <div>
            <button onClick={handleClick}>Add Item</button>
            {items.map((item) => (
                <div key={item}>{item}</div>
            ))}
            
        </div>
    );
}

function UseUseRef() {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={handleClick}>포커스 주기</button>
        </div>
    );

}

function UseUseCallback() {
    const [count, setCount] = useState(0);

    const handleIncrement = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, [setCount]);

    const handleReset = useCallback(() => {
        setCount(0);
    }, [setCount]);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}

interface SumProps {
    n: number;
}

function Sum({ n }: SumProps) {

    const sum = useMemo(() => {


        let result = 0;

        for (let i = 0; i <= n; i++) {
            result += i;

        }

        return result;

    }, [n]);

    return <div>{sum}</div>;
}

function UseUseMemo() {
    const [n, setN] = useState(5);

    useEffect(() => {
        console.log('calculate sum?'); // 언제 호출되는지 확인하기 위해 로그 추가
    }, [n]);

    return (
        <div>
            <input type="number" value={n} onChange={(e) => setN(parseInt(e.target.value))} />
            <Sum n={n} />
        </div>
    );
}

interface State {
    count: number;
}

interface Action {
    type: string;
}

function reducer(state: State, action: Action) {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}

function UseUseReducer() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
        </div>
    );
}

export const cps = {
    Test,
    UseUseState,
    UseUseRef,
    UseUseCallback,
    UseUseMemo,
    UseUseReducer
};