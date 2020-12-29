import { createContext, useState} from 'react';

export interface PasswordState {
  usedPassword: string,
  SetUsedPassword: React.Dispatch<React.SetStateAction<string>>
}

export interface ActionToDo {
  encrypt: boolean;
  decrypt: boolean;
}

const initialState: PasswordState=  {
  usedPassword: "",
  SetUsedPassword: ()=> console.warn("No SetUsedPassword provided.")
}

const initialStateActionToDo: ActionToDo = { 
  encrypt: false,
  decrypt: false
}

export const PasswordContext = createContext<PasswordState>(initialState)
export const ActionToDoContext = createContext<ActionToDo>(initialStateActionToDo)