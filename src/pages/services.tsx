import Layout from "../components/Layout";
import { Banner } from "../components/Banner";
import { Services } from "../components/Services";
import ListServices from "../components/ListServices";
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t, i18n } = useTranslation();

  return (
    <Layout>
      <Banner backgroundImage="/images/backgrounds/servicos.png" text={t('banner.services')}/>
      <ListServices />
    </Layout>
  );
}
