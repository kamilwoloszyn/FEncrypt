import { createContext} from 'react';

export interface PasswordState {
  usedPassword: string,
  SetUsedPassword: React.Dispatch<React.SetStateAction<string>>
}

export interface ActionToDo {
  usedContext: string;
  SetUsedContext: React.Dispatch<React.SetStateAction<string>>;
}

export interface FileState {
  usedFile?: File,
  SetUsedFile: React.Dispatch<React.SetStateAction<File | undefined>>;
}

const initialState: PasswordState=  {
  usedPassword: "",
  SetUsedPassword: ()=> console.warn("No SetUsedPassword provided.")
}

const initialStateActionToDo: ActionToDo = { 
  usedContext: "",
  SetUsedContext: ()=> console.warn("No SetUsedContext provided.")
}





export const PasswordContext = createContext<PasswordState>(initialState)
export const ActionToDoContext = createContext<ActionToDo>(initialStateActionToDo);
export const FileUploadContext = createContext<FileState| undefined>(undefined);