import { useState } from 'react';

export const useForceRerendering = () => {
    const [rerender, setRerender] = useState(false);

    return () => setRerender(!rerender);
};
