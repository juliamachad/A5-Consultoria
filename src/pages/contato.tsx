
import Layout from "../components/Layout";
import { Banner } from "../components/Banner";
import Contact from "@/components/Contact";

import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t, i18n } = useTranslation();
  return (
    <Layout>
      <Banner backgroundImage="/images/backgrounds/contato.png" text= {t('banner.contact')}/>
      <Contact></Contact>
    </Layout>
  );
}
