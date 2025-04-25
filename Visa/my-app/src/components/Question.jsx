// 'use client';
// import { useState } from 'react';
// import Button from './Button';

// export default function Question({ question, onNext, onBack, value }) {
//   const [answer, setAnswer] = useState(value || '');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onNext({ [question.id]: answer });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in">
//       <h2 className="text-xl font-semibold">{question.text}</h2>
//       {question.type === 'number' && (
//         <input
//           type="number"
//           value={answer}
//           onChange={(e) => setAnswer(e.target.value)}
//           placeholder={question.placeholder}
//           className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//           required
//         />
//       )}
//       {question.type === 'select' && (
//         <select
//           value={answer}
//           onChange={(e) => setAnswer(e.target.value)}
//           className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//           required
//         >
//           <option value="" disabled>
//             Select an option
//           </option>
//           {question.options.map((option) => (
//             <option key={option} value={option}>
//               {option}
//             </option>
//           ))}
//         </select>
//       )}
//       {question.type === 'radio' && (
//         <div className="space-y-2">
//           {question.options.map((option) => (
//             <label key={option} className="flex items-center space-x-2">
//               <input
//                 type="radio"
//                 value={option}
//                 checked={answer === option}
//                 onChange={(e) => setAnswer(e.target.value)}
//                 required
//               />
//               <span>{option}</span>
//             </label>
//           ))}
//         </div>
//       )}
//       <div className="flex justify-between">
//         <Button type="button" onClick={onBack} disabled={step === 0}>
//           Back
//         </Button>
//         <Button type="submit">Next</Button>
//       </div>
//     </form>
//   );
// }



'use client';
import { useState } from 'react';
import Button from './Button';

export default function Question({ question, onNext, onBack, value, step }) {
  const [answer, setAnswer] = useState(value || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext({ [question.id]: answer });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in">
      <h2 className="text-xl font-semibold">{question.text}</h2>
      {question.type === 'number' && (
        <input
          type="number"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder={question.placeholder}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      )}
      {question.type === 'select' && (
        <select
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="" disabled>
            Select an option
          </option>
          {question.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}
      {question.type === 'radio' && (
        <div className="space-y-2">
          {question.options.map((option) => (
            <label key={option} className="flex items-center space-x-2">
              <input
                type="radio"
                value={option}
                checked={answer === option}
                onChange={(e) => setAnswer(e.target.value)}
                required
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      )}
      <div className="flex justify-between">
        <Button type="button" onClick={onBack} disabled={step === 0}>
          Back
        </Button>
        <Button type="submit">Next</Button>
      </div>
    </form>
  );
}
