import React from 'react';
import { act } from 'react-dom/test-utils';
import { NextStep } from './action';

interface StepState {
  currentStep: number
}

const initialStepState = { 
  currentStep: 0
}
export const ProgressReducer = (state: StepState =initialStepState, action: NextStep) => {
  switch (action.type) {
    case "NEXT_STEP": {
      return {
       ...state, currentStep: 1
      }
    }
    default: {
      return state;
    }
      
  }
}