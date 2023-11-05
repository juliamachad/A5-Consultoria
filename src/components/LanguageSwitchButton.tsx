import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { useTranslation } from 'react-i18next';
import '../pages/i18n'

export default function LanguageSwitchButton() {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();
    // After mounting, we have access to the theme
    useEffect(() => setMounted(true), []);

    const { i18n } = useTranslation();

    const changeLanguage = (newLanguage:string) => {
    i18n.changeLanguage(newLanguage);
  };

  const currentLanguage = i18n.language;

    return (

        <div>
            {currentLanguage !== 'en' && (
                <button 
                className="w-10 h-10  flex items-center justify-center hover:bg-neutral-200 hover:dark:bg-neutral-600 rounded-full transition-all"
                onClick={() => changeLanguage('en')}>EN</button>
            )}
            {currentLanguage !== 'pt' && (
                <button 
                className="w-10 h-10  flex items-center justify-center hover:bg-neutral-200 hover:dark:bg-neutral-600 rounded-full transition-all"
                onClick={() => changeLanguage('pt')}>PT</button>
            )}
        </div>
    )
}