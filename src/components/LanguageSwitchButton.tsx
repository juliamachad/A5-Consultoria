import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export default function LanguageSwitchButton() {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();
    // After mounting, we have access to the theme
    useEffect(() => setMounted(true), []);

    return (

        <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-10 h-10  flex items-center justify-center hover:bg-neutral-200 hover:dark:bg-neutral-600 rounded-full transition-all"
            onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
        >
            
                    {resolvedTheme === "dark" ? (
                        <p className='font-semibold'>EN</p>

                    ) : (
                       <p className='font-semibold'>PT</p>

                    )}
            
        </button >

    )
}