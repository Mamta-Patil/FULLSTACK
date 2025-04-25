export default function ProgressBar({ current, total }) {
  const percentage = (current / total) * 100;

  return (
    <div className="mb-6">
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-600 mt-2">
        Step {current} of {total}
      </p>
    </div>
  );
}
