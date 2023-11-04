import Contact from "../components/Contact";
import { Hero } from "../components/Hero";
import Layout from "../components/Layout";
import Pricing from "../components/Team";
import { Features } from "../components/Features";
import { Services } from "../components/Services";
import Faq from "../components/Faq";
import Customers from "../components/Customers";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Services />
      <Features />
    </Layout>
  );
}
