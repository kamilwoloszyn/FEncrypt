import React,{useState, useEffect} from "react";
import styled from 'styled-components';
import '../../styles/scss/progress.scss';
import { useSelector } from "react-redux";
import { StepState } from '../../redux/reducer';

interface Props { 
  Active: boolean;
  Show: boolean;
}

interface StepProps {
  stepId: number;
  current: number;
}

interface ProgressWrapperProps {
  Show:boolean
}

const ProgressWrapper = styled.div<ProgressWrapperProps>`
display:${({ Show })=> Show ?'block':'none'}
`
const StyledStep = styled.span<StepProps>`
${({ stepId, current }) => (current > stepId) ? 'background-color: #e88d58' : ''}
${({stepId,current})=> (current == stepId )? 'background-color:#dcdbdf': ''}
`

export const Progress: React.FC<Props> = (Props) => {
  const currentStep = useSelector<StepState, StepState["currentStep"]>((state) => state.currentStep)
  const [step, setStep] = useState<number>(0);
  useEffect(() => {
    setStep(currentStep)
  },[currentStep])
  if (Props.Active) { 
    return (
      <ProgressWrapper Show={Props.Show} className="progress-wrapper">
        <div className="steps-group">
          <div className="step-group">
            <StyledStep className="step" stepId={0} current={step}>1</StyledStep>
          </div>
          <div className="step-group">
            <StyledStep className="step" stepId={1} current={step}>2</StyledStep>
          </div>
          <div className="step-group">
            <StyledStep className="step" stepId={2} current={step}>3</StyledStep>
          </div>
        </div>
      </ProgressWrapper>
    
  )
  } else { 
    return (
      <h1> Module Progress inactive</h1>
    )
  }
}
export default Progress;