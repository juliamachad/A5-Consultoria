import Image from "next/image";
import Link from "next/link";
import bg from '../../public/images/backgrounds/mina.png'

import { useTranslation } from 'react-i18next';

export function Hero() {
  const { t, i18n } = useTranslation();

  return (
 
    <div className="bg-white dark:bg-neutral-900" style={{
      backgroundImage: `url(${bg.src})`, backgroundSize: 'cover', backgroundPositionY:'center',
      width: '100%',
    }}>
      <div className="max-w-7xl mx-auto pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="pt-6 md:pt-32 justify-center text-center sm:justify-start sm:text-center pq-bs">
          <h1 className="text-5xl font-bold text-white drop-shadow" suppressHydrationWarning>
            {t('hero.welcome')} <br />
            <span className="text-orange font-extrabold drop-shadow" suppressHydrationWarning>{t('hero.company')}</span>
          </h1>
          <p className="pt-6 text-base w-auto  text-white" suppressHydrationWarning>
          {t('hero.description')} 
          </p>
          <div className="flex flex-auto pt-10 gap-2 min-w-[350px] justify-center sm:justify-center">

            <div>
              <Link href="/about">
                <button className="bg-orange text-white text-base rounded-full px-4 p-2 font-medium" suppressHydrationWarning>
                {t('hero.button')}
                </button>
              </Link>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}
