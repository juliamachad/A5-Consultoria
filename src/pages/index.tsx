import { Hero } from "../components/Hero";
import Layout from "../components/Layout";
import { Portfolio } from "../components/Portfolio";
import { Services } from "../components/Services";



export default function Home() {
  return (
    <Layout>
      <Hero />
      <Services />
      <Portfolio />
    </Layout>
  );
}
