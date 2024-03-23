import { Banner } from "../components/Banner";
import Layout from "../components/Layout";
import Customers from "../components/Customers";
import bg from '../../public/images/backgrounds/sobre.png'
import Team from "@/components/Team";

import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t, i18n } = useTranslation();
  const backgroundImg = bg;
    
  return (
    <Layout>
      <Banner backgroundImage={backgroundImg.src} text={t('banner.about')} />
      <div className="bg-gray-50 dark:bg-neutral-900" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h2 className="text-4xl font-bold">{t('about.title')}</h2>
      
        <p className="pt-6 pb-2 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
          {t('about.description1')}
        </p>

        <p className="pt-2 pb-2 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
          {t('about.description2')}
        </p>

        <p className="pt-2 pb-2 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
          {t('about.description3')}
        </p>

        <p className="pt-2 pb-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
          {t('about.description4')}
        </p>
      </div>
      </div>
      <Team></Team>
    </Layout>
  );
}
