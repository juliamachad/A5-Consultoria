import { MainBanner } from "../components/MainBanner";
import Layout from "../components/Layout";
import CardImage from "@/components/CardImage";
import { Services } from "../components/Services";



export default function Home() {
  return (
    <Layout>
      <MainBanner/>
      <Services />
      <CardImage />
    </Layout>
  );
}
