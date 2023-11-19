
import Layout from "../components/Layout";
import { Banner } from "../components/Banner";
import Contact from "@/components/Contact";
export default function Home() {
  return (
    <Layout>
      <Banner backgroundImage="/images/backgrounds/sobre.png" text="Fale com a gente"/>
      <Contact></Contact>
    </Layout>
  );
}
