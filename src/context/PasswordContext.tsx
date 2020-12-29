import { createContext, useState} from 'react';

export interface PasswordState {
  usedPassword: string,
  SetUsedPassword: React.Dispatch<React.SetStateAction<string>>
} 

const initialState: PasswordState=  {
  usedPassword: "",
  SetUsedPassword: ()=> console.warn("No SetUsedPassword provided.")
}

export const PasswordContext = createContext<PasswordState>(initialState)