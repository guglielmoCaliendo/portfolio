import { useContext } from 'react';
import LanguageContext from '../context/LanguageContext';

export default function useLanguage() {
  const { language, changeLanguage } = useContext(LanguageContext);
  return { language, changeLanguage };
}
