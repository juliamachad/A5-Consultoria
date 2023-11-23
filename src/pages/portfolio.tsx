
import Layout from "../components/Layout";
import { Banner } from "../components/Banner";
import { Portfolio } from "@/components/Portfolio";
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t, i18n } = useTranslation();
  return (
    <Layout>
      <Banner backgroundImage="/images/backgrounds/portfolio.png" text={ t('banner.portfolio')}/>
      <Portfolio></Portfolio>
    </Layout>
  );
}
