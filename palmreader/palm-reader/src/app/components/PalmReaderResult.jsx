// import ReactMarkdown from 'react-markdown';
// import remarkGfm from 'remark-gfm';

// export default function PalmReaderResult({ result }) {
//   if (!result) return null;

//   return (
//     <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg prose">
//       <h3 className="text-xl font-bold text-gray-800 mb-4">Palm Reading Results</h3>
//       <ReactMarkdown remarkPlugins={[remarkGfm]}>{result}</ReactMarkdown>
//     </div>
//   );
// }

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function PalmReaderResult({ result }) {
  if (!result) return null;

  // Check for unhelpful responses
  const isUnhelpful = result.toLowerCase().includes('cannot predict') || result.toLowerCase().includes('fortune telling');

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg prose">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Palm Reading Results</h3>
      {isUnhelpful ? (
        <p className="text-gray-600">
          The analysis could not identify specific palm features. Please try uploading a clearer image of your palm with visible lines (heart, head, life) or refine the prompt to focus on specific features.
        </p>
      ) : (
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{result}</ReactMarkdown>
      )}
    </div>
  );
}