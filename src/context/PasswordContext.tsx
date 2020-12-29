import { createContext, useState} from 'react';

export interface PasswordState {
  usedPassword: string,
  SetUsedPassword: React.Dispatch<React.SetStateAction<string>>
}

export interface ActionToDo {
  type: string;
  SetType: React.Dispatch<React.SetStateAction<string>>;
}

const initialState: PasswordState=  {
  usedPassword: "",
  SetUsedPassword: ()=> console.warn("No SetUsedPassword provided.")
}

const initialStateActionToDo: ActionToDo = { 
  type: "",
  SetType: ()=> console.warn("")
}

export const PasswordContext = createContext<PasswordState>(initialState)
export const ActionToDoContext = createContext<ActionToDo>(initialStateActionToDo);