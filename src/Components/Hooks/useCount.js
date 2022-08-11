import { useState } from 'react';

export const useCount = (startCount) => {
    const [count, setCount] = useState(startCount || 1);

    const onChange = e => setCount(e.target.value);

    return { count, setCount, onChange };
}