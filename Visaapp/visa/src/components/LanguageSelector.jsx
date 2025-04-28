export default function LanguageSelector({ setLanguage }) {
    const languages = ['en', 'hi', 'mr', 'gu'];
  
    return (
      <div className="p-2 bg-gray-200 rounded-lg">
        <select
          onChange={(e) => setLanguage(e.target.value)}
          className="p-2 border rounded-lg"
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
  