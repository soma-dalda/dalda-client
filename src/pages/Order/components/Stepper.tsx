import ThreeDotsIcon from '@/components/icons/ThreeDotsIcon'
import React from 'react'
import StepButton from './StepButton'

type Props = {
  steps: number
  current: number
  handleClickStep: (step: number) => () => void
}

const Stepper = ({ steps, current, handleClickStep }: Props) => {
  return (
    <ol className="mt-10 flex h-1 w-full">
      {Array(steps)
        .fill(0)
        .map((_, index) => (
          <li className="flex items-center" key={`step-${+index}`}>
            <StepButton active={current === index} value={index} onClick={handleClickStep(index)}>
              {index + 1}
            </StepButton>
            {index + 1 < steps && <ThreeDotsIcon className="mx-2" />}
          </li>
        ))}
    </ol>
  )
}

export default Stepper
