import Layout from "../components/Layout";
import { useTranslation } from 'react-i18next';

  export default function Home() {
    const { t, i18n } = useTranslation();
  
    const renderContent = (content: string) => {
      return Object.entries(content).map(([key, value]) => {
        if (key.startsWith("p") && typeof value === "string") {
          return <p className="text-center pt-4 pb-6" key={key}>{value}</p>;
        } else if (key.startsWith("h2") && typeof value === "string") {
          return <h2 className="text-center pb-2 text-xl font-semibold mt-4 border-b-2 border-orange mb-4 w-2/3" key={key}>{value}</h2>;
        } else if (key.startsWith("bold") && typeof value === "string") {
            return <p className="text-center pb-0 text-lg font-semibold mt-4 " key={key}>{value}</p>;
        } else if (key.startsWith("li") && Array.isArray(value)) {
          return (
            <ul className="list-disc pb-6 mx-4 md:mx-24 max-w-2xl md:max-w-5xl" key={key}>
              {value.map((item, index) => (
                <li className=" pb-2" key={index}>{item}</li>
              ))}
            </ul>
          );
        } else if (key.startsWith("subtitle") && typeof value === "string") {
            return <h3 className="text-center pb-2 text-lg mt-4 text-orange font-medium mb-4 w-2/3" key={key}>{value}</h3>;
        
        } else if (key.startsWith("ïmg") && typeof value === "string") {
          return <img className="pb-6" key={key} src={value} alt={`Imagem ${key}`} />;
        }
        return null;
      });
    };
  

  return (
    <Layout>
      <div className="flex justify-center">
      <div className="bg-white dark:bg-neutral-900 w-full px-24 pt-16 pb-16 max-w-7xl" id="listServices">
        <div className="container flex flex-col mx-6 items-center">
            <h2 className="text-4xl font-bold text-center mb-12 mt-12">{t('eng_processos.title')}</h2>
            {renderContent(t('eng_processos'))}
        </div>
        </div>
      </div>
    </Layout>
  );
}
