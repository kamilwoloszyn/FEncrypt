import { NextStep } from './action';

export interface StepState {
  currentStep: number
}

const initialStepState = { 
  currentStep: 0
}
export const ProgressReducer = (state: StepState =initialStepState, action: NextStep) => {
  switch (action.type) {
    case "NEXT_STEP": {
      return {
       ...state, currentStep: action.value 
      }
    }
    default: {
      return state;
    }
      
  }
}