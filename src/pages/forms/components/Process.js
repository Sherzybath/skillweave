import Fork from "./Fork"
import { useState } from "react";
import ClientA from "./ClientA"
import ClientB from "./ClientB"
import FreelancerA from "./FreelancerA"
import FreelancerB from "./FreelancerB";
import FreelancerC from "./FreelancerC"
function Process() {
    const [currentComponent, setCurrentComponent] = useState('Fork');

    const handleSubmit = (option) => {
        if (option === 'A') {
        setCurrentComponent('ClientA');
        } else if (option === 'B') {
        setCurrentComponent('FreelancerA');
        }
    };

    const handleNext = () => {
        if (currentComponent === 'ClientA') {
        setCurrentComponent('ClientB');
        } else if (currentComponent === 'ClientB') {
        
        } else if (currentComponent === 'FreelancerA') {
        setCurrentComponent('FreelancerB');
        } else if (currentComponent === 'FreelancerB') {
          setCurrentComponent('FreelancerC');
        }
    };
  return (
    <div className="ProcessContainer">
    {currentComponent === 'Fork' && <Fork onSubmit={handleSubmit} />}
      {currentComponent === 'FreelancerA' && <FreelancerA onNext={handleNext} />}
      {currentComponent === 'FreelancerB' && <FreelancerB onNext={handleNext} />}
      {currentComponent === 'FreelancerC' && <FreelancerC onNext={handleNext} />}
      {currentComponent === 'ClientA' && <ClientA onNext={handleNext} />}
      {currentComponent === 'ClientB' && <ClientB onNext={handleNext} />}
    </div>
  )
}

export default Process