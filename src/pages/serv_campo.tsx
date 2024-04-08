import Layout from "../components/Layout";
import { useTranslation } from 'react-i18next';

  export default function Home() {
    const { t, i18n } = useTranslation();
  
    const renderContent = (content: string) => {
      return Object.entries(content).map(([key, value], index, array) => {
        if (key.startsWith("img1") && typeof value === "string") {
          return (
            <div className="col lg:row lg:flex items-center">
              <img className="m-auto col-12 lg:col-6 lg:m-6 lg:max-h-72" key={key} src={value} alt={`Imagem ${key}`} />
              <div className="col-12">
              <p className="p-6 ml-6">{array[index+1][1]}</p>
              <ul className="list-disc pb-6 mx-4 md:mx-24 max-w-2xl md:max-w-xl">
                <li className=" pb-2">{array[index+2][1][0]}</li>
                <li className=" pb-2">{array[index+2][1][1]}</li>
                <li className=" pb-2">{array[index+2][1][2]}</li>
                <li className=" pb-2">{array[index+2][1][3]}</li>
              </ul>
              </div>
            </div>
          );
        } else
        if (key.startsWith("img2") && typeof value === "string") {
          return (
            <div className="row lg:flex items-center">
               <div className="col">
              <ul className="list-disc pb-6 mx-4 md:mx-24 max-w-2xl md:max-w-xl">
                <li className=" pb-2">{array[index+1][1][0]}</li>
                <li className=" pb-2">{array[index+1][1][1]}</li>
                <li className=" pb-2">{array[index+1][1][2]}</li>
                <li className=" pb-2">{array[index+1][1][3]}</li>
                <li className=" pb-2">{array[index+1][1][4]}</li>
              </ul>
              </div>
              <img className="m-auto col-6 lg:m-6 lg:max-h-72" key={key} src={value} alt={`Imagem ${key}`} />
              </div>
          );
        } 
        else if (key.startsWith("p") && typeof value === "string" && !key.startsWith("p-3")) {
          return <p className="text-center pt-4 pb-6" key={key}>{value}</p>;
        } else if (key.startsWith("h2") && typeof value === "string") {
          return <h2 className="text-center pb-2 text-xl font-semibold mt-4 border-b-2 border-orange mb-4 w-2/3" key={key}>{value}</h2>;
        } else if (key.startsWith("bold") && typeof value === "string") {
            return <p className="text-center pb-4 text-lg font-semibold mt-4 " key={key}>{value}</p>;
        } else if (key.startsWith("li") && Array.isArray(value) && !key.startsWith("li-1") && !key.startsWith("li-2")) {
          return (
            <ul className="list-disc pb-6 mx-4 md:mx-24 max-w-2xl md:max-w-5xl" key={key}>
              {value.map((item, index) => (
                <li className=" pb-2" key={index}>{item}</li>
              ))}
            </ul>
          );
        } else if (key.startsWith("subtitle") && typeof value === "string") {
            return <h3 className="text-center pb-2 text-lg mt-4 text-orange font-medium mb-4 w-2/3" key={key}>{value}</h3>;
        
        } else 
        return null;
      });
    };
  

  return (
    <Layout>
      <div className="bg-white dark:bg-neutral-900 w-full px-24 pt-16 pb-16 max-w-7xl" id="listServices">
        <div className="container flex flex-col mx-6 items-center">
            <h2 className="text-4xl font-bold text-center mb-12 mt-12">{t('serv_campo.title')}</h2>
            {renderContent(t('serv_campo'))}
        </div>
        
      </div>
    </Layout>
  );
}
