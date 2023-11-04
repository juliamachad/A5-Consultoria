import { Banner } from "../components/Banner";
import Layout from "../components/Layout";
import Customers from "../components/Customers";
import bg from '../../public/images/backgrounds/sobre.png'
import Team from "@/components/Team";

export default function Home() {
    const backgroundImg = bg;
  return (
    <Layout>
      <Banner backgroundImage={backgroundImg.src} text="Sobre nós" />
      <div className="bg-gray-50 dark:bg-neutral-900" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h2 className="text-4xl font-bold">Nossa história</h2>

        <p className="pt-6 pb-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Praesent lacinia justo in magna varius euismod.
Fusce consectetur vestibulum ex, sit amet tristique odio.
Suspendisse at semper ligula, in porta justo.
In hac habitasse platea dictumst.
Mauris vehicula, erat a luctus volutpat, sapien risus accumsan purus, nec eleifend ante.
Duis sit amet tincidunt elit.
Vestibulum feugiat velit in justo fringilla, non efficitur quam dignissim.
Cras scelerisque, metus ac ultricies tincidunt, orci libero tincidunt sem.
Sed id condimentum arcu.

        </p>
      </div>
      </div>
      <Team></Team>
    </Layout>
  );
}
