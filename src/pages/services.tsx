import { Hero } from "../components/Hero";
import Layout from "../components/Layout";
import { Banner } from "../components/Banner";
import { Services } from "../components/Services";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <Layout>
      <Banner backgroundImage="/images/backgrounds/sobre.png" text="Nossos Serviços"/>
      <Faq />
    </Layout>
  );
}
