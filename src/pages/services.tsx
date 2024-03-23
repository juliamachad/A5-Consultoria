import Layout from "../components/Layout";
import { Banner } from "../components/Banner";
import { Services } from "../components/Services";
import Faq from "@/components/Faq";
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t, i18n } = useTranslation();

  return (
    <Layout>
      <Banner backgroundImage="/images/backgrounds/servicos.png" text={t('banner.services')}/>
      <Faq />
    </Layout>
  );
}
