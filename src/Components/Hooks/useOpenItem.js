import { useState } from 'react';

export const useOpenItem = () => {
    const [openItem, setOpenItem] = useState(null);

    return { openItem, setOpenItem };
}