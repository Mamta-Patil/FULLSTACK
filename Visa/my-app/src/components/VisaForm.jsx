// 'use client';
// import { useState } from 'react';
// import Question from './Question';
// import ProgressBar from './ProgressBar';
// import LeadCapture from './LeadCapture';
// import Result from './Result';
// import { checkEligibility } from '../lib/eligibility';

// const questions = [
//   {
//     id: 'age',
//     text: 'What is your age?',
//     type: 'number',
//     placeholder: 'Enter your age',
//   },
//   {
//     id: 'education',
//     text: 'What is your highest level of education?',
//     type: 'select',
//     options: ['High School', 'Bachelor’s Degree', 'Master’s Degree', 'Other'],
//   },
//   {
//     id: 'language',
//     text: 'Do you have proof of English proficiency (e.g., IELTS, TOEFL)?',
//     type: 'radio',
//     options: ['Yes', 'No'],
//   },
// ];

// export default function VisaForm() {
//   const [step, setStep] = useState(0);
//   const [formData, setFormData] = useState({});
//   const [result, setResult] = useState(null);

//   const handleNext = (data) => {
//     setFormData({ ...formData, ...data });
//     if (step < questions.length - 1) {
//       setStep(step + 1);
//     } else {
//       setStep(step + 1);
//     }
//   };

//   const handleLeadSubmit = async (leadData) => {
//     const finalData = { ...formData, ...leadData };
//     try {
//       const response = await fetch('/api/leads', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(finalData),
//       });
//       if (response.ok) {
//         const eligibilityResult = checkEligibility(finalData);
//         setResult(eligibilityResult);
//         setStep(step + 1);
//       } else {
//         console.error('Failed to save lead');
//         alert('Error saving your data. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('An error occurred. Please try again.');
//     }
//   };

//   const handleBack = () => {
//     if (step > 0) setStep(step - 1);
//   };

//   return (
//     <div className="bg-white p-8 rounded-lg shadow-lg">
//       {step < questions.length && (
//         <>
//           <ProgressBar current={step + 1} total={questions.length + 1} />
//           <Question
//             question={questions[step]}
//             onNext={handleNext}
//             onBack={handleBack}
//             value={formData[questions[step].id]}
//           />
//         </>
//       )}
//       {step === questions.length && !result && (
//         <LeadCapture onSubmit={handleLeadSubmit} onBack={handleBack} />
//       )}
//       {result && <Result result={result} />}
//     </div>
//   );
// }

'use client';
import { useState } from 'react';
import Question from './Question';
import ProgressBar from './ProgressBar';
import LeadCapture from './LeadCapture';
import Result from './Result';
import { checkEligibility } from '../lib/eligibility';

const questions = [
  {
    id: 'age',
    text: 'What is your age?',
    type: 'number',
    placeholder: 'Enter your age',
  },
  {
    id: 'education',
    text: 'What is your highest level of education?',
    type: 'select',
    options: ['High School', 'Bachelor’s Degree', 'Master’s Degree', 'Other'],
  },
  {
    id: 'language',
    text: 'Do you have proof of English proficiency (e.g., IELTS, TOEFL)?',
    type: 'radio',
    options: ['Yes', 'No'],
  },
];

export default function VisaForm() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [result, setResult] = useState(null);

  const handleNext = (data) => {
    setFormData({ ...formData, ...data });
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setStep(step + 1);
    }
  };

  const handleLeadSubmit = async (leadData) => {
    const finalData = { ...formData, ...leadData };
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(finalData),
      });
      if (response.ok) {
        const eligibilityResult = checkEligibility(finalData);
        setResult(eligibilityResult);
        setStep(step + 1);
      } else {
        console.error('Failed to save lead');
        alert('Error saving your data. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      {step < questions.length && (
        <>
          <ProgressBar current={step + 1} total={questions.length + 1} />
          <Question
            question={questions[step]}
            onNext={handleNext}
            onBack={handleBack}
            value={formData[questions[step].id]}
            step={step}
          />
        </>
      )}
      {step === questions.length && !result && (
        <LeadCapture onSubmit={handleLeadSubmit} onBack={handleBack} />
      )}
      {result && <Result result={result} />}
    </div>
  );
}
