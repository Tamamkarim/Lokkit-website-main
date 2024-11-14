import React, { useState } from 'eact';

function LanguageSwitcher() {
  const [language, setLanguage] = useState('en');

  const switchLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const translations = {
    'hello': {
      'en': 'Hello',
      'fi': 'Hei'
    },
    'goodbye': {
      'en': 'Goodbye',
      'fi': 'Kiitos'
    }
  };

  return (
    <div className="language-switcher">
      <button onClick={() => switchLanguage('en')}>English</button>
      <button onClick={() => switchLanguage('fi')}>Finnish</button>
      <div className="content">
        {translations['hello'][language]}
        {translations['goodbye'][language]}
      </div>
    </div>
  );
}

export default LanguageSwitcher;
