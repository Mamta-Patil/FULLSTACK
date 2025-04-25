export default function Result({ result }) {
  return (
    <div className="space-y-4 animate-fade-in">
      <h2 className="text-2xl font-bold text-center">
        {result.eligible ? 'Congratulations!' : 'Sorry!'}
      </h2>
      <p className="text-lg text-center">
        {result.message}
      </p>
      <div className="text-center">
        <a
          href="/"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Start Over
        </a>
      </div>
    </div>
  );
}
