
import Layout from "../components/Layout";
import { Banner } from "../components/Banner";
import { Portfolio } from "@/components/Portfolio";
export default function Home() {
  return (
    <Layout>
      <Banner backgroundImage="/images/backgrounds/portfolio.png" text="Nossos projetos concluídos"/>
      <Portfolio></Portfolio>
    </Layout>
  );
}
