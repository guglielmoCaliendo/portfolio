import { createContext, useEffect, useState } from 'react';

type Props = {
  children: JSX.Element[] | JSX.Element;
};

type LanguageContextType = {
  language: string;
  changeLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType>(
  {} as LanguageContextType
);

export const LanguageProvider = ({ children }: Props) => {
  const [language, setLanguage] = useState(
    window.localStorage.getItem('language') || 'EN'
  );

  const changeLanguage = () => {
    if (language === 'EN') {
      setLanguage('ES');
      window.localStorage.setItem('language', 'ES');
    } else {
      setLanguage('EN');
      window.localStorage.setItem('language', 'EN');
    }
  };
  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
