import { MainBanner } from "../components/MainBanner";
import Layout from "../components/Layout";
import { Portfolio } from "../components/Portfolio";
import { Services } from "../components/Services";



export default function Home() {
  return (
    <Layout>
      <MainBanner/>
      <Services />
      <Portfolio />
    </Layout>
  );
}
