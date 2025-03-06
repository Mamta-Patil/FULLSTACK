
import { Button, Stepper, Step } from "@material-tailwind/react";
import React, { useState } from "react";
// import Navbar from './Navbar'

const StepperComponent = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    if (activeStep < 4) setActiveStep(activeStep + 1);
  };

  const handlePrev = () => {
    if (activeStep > 0) setActiveStep(activeStep - 1);
  };

  return (
    <div className="">
          <div className="flex flex-col items-center mt-40 px-20">
      {/* Stepper */}
      <Stepper activeStep={activeStep}>
        <Step onClick={() => setActiveStep(0)}>1</Step>
        <Step onClick={() => setActiveStep(1)}>2</Step>
        <Step onClick={() => setActiveStep(2)}>3</Step>
        <Step onClick={() => setActiveStep(3)}>4</Step>
        <Step onClick={() => setActiveStep(4)}>5</Step>
      </Stepper>

      {/* Buttons */}
      <div className="mt-8 flex gap-4">
        <Button onClick={handlePrev} disabled={activeStep === 0} color="gray">
          Prev
        </Button>
        <Button onClick={handleNext} disabled={activeStep === 4}>
          Next
        </Button>
      </div>
    </div>

    </div>
  );
};

export default StepperComponent;
