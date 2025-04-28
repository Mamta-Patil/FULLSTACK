export default function LanguageSelector({ setLanguage }) {
    const languages = ['en', 'es', 'fr', 'de'];
  
    return (
      <div className="p-4 bg-gray-200 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Select Language</h2>
        <select
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full p-2 border rounded-lg"
        >
          {languages.map((lang) => (
            <option key={lang} value={lang}>
              {lang.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    );
  }