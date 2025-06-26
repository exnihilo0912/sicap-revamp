import { createContext } from 'react';

export const SelectContext = createContext<[string, (value: string) => void]>(['', () => { }]);
