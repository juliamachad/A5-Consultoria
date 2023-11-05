import { Hero } from "../components/Hero";
import Layout from "../components/Layout";
import { Portfolio } from "../components/Portfolio";
import { Services } from "../components/Services";
import { useTranslation } from 'react-i18next';

import i18next from "./i18n";


export default function Home() {
  const { t, i18n } = useTranslation();
  return (
    <Layout>
      <Hero />
     {i18next.t('title')}
      <Services />
      <Portfolio />
    </Layout>
  );
}
