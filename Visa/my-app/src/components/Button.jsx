export default function Button({ children, type = 'button', onClick, disabled }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded font-semibold text-white ${
        disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
      } transition`}
    >
      {children}
    </button>
  );
}