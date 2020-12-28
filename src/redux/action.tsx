 export type NextStep = { 
  type: "NEXT_STEP",
  value: number
}

export const SetStep = (val: number): NextStep => {
  if (val >= 0 && val <= 2) { 
    return ({
    type: "NEXT_STEP",
    value: val
  })
  } else { 
    return ({
    type: "NEXT_STEP",
    value: 0
    })
  }
  
   
}



