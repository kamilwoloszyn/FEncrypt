import { createContext} from 'react';

export interface PasswordState {
  usedPassword: string,
  SetUsedPassword: React.Dispatch<React.SetStateAction<string>>
}

export interface ActionToDo {
  usedContext: string;
  SetUsedContext: React.Dispatch<React.SetStateAction<string>>
}

export interface FileState {
  usedFile?: File,
  SetUsedFile: React.Dispatch<React.SetStateAction<File | undefined>>
}

export interface IvState {
  usedIV?: string,
  SetUsedIV: React.Dispatch<React.SetStateAction<string>>
}

const initialState: PasswordState=  {
  usedPassword: "",
  SetUsedPassword: ()=> console.warn("No SetUsedPassword provided.")
}

const initialStateActionToDo: ActionToDo = { 
  usedContext: "",
  SetUsedContext: ()=> console.warn("No SetUsedContext provided.")
}

const initialIVState: IvState = {
  SetUsedIV: ()=> console.warn("No SetUsedIV provided")
}





export const PasswordContext = createContext<PasswordState>(initialState)
export const ActionToDoContext = createContext<ActionToDo>(initialStateActionToDo);
export const FileUploadContext = createContext<FileState | undefined>(undefined);
export const IVContext = createContext<IvState>(initialIVState);