import { createContext } from 'react';

interface PasswordState {
  usedPassword: string,
  SetUsedPassword: React.Dispatch<React.SetStateAction<string>>
} 
export const PasswordContext = createContext<PasswordState | null>(null)