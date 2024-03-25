import Image from "next/image";
import { CheckIcon } from "@heroicons/react/24/solid";
import { useTranslation } from 'react-i18next';


export function Portfolio() {
  const { t, i18n } = useTranslation();

  const listaDescription = [t('projetos.2description2')].toString().split('.,');

  return (
    <div className="bg-white dark:bg-neutral-900" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-x-40 pt-16 pb-16">
        <h2 className="text-4xl font-bold text-center">{t('portfolio.title')}</h2>
        <p className="pt-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
        {t('portfolio.description')}
        </p>

        
            <div className="pt-12 justify-center flex">
              <h1 className="text-2xl font-bold w-2/3 text-center">{t('projetos.1title')}</h1>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16  items-center mb-4 lg:gap-x-8">
            <div className="pt-6 lg:pt-6 order-1 md:order-2">
                     <p className="pt-6 pb-6 text-base dark:text-neutral-400">
                     {t('projetos.1description1')}
                    </p>
                    <p className="pt-6 pb-6 text-base dark:text-neutral-400">
                     {t('projetos.1description2')}
                    </p>
                    
             
            </div>
            <div
              className="order-1 pt-6 lg:pt-0 ml-0 2xl:-ml-40"
            >
              <div className="flex flex-col lg:flex-row gap-2">
              
              <div > 
                
                     <Image
                     src="/images/portfolio/1projeto1.jpg"
                     alt="Image description"
                     width={1920}
                     height={100}
                     quality={75}
                     sizes="100vw"
                     
                     priority
                   />
                </div>

                <div className="flex flex-col gap-2">
                   <div>
                     <Image
                     src="/images/portfolio/1projeto2.jpg"
                     alt="Image description"
                     width={1920}
                     height={100}
                     quality={75}
                     sizes="100vw"
                     priority
                   />
                   </div>
                   <div>
                     <Image
                     src="/images/portfolio/1projeto3.jpg"
                     alt="Image description"
                     width={1920}
                     height={100}
                     quality={75}
                     sizes="100vw"
                     priority
                   />
                   </div>
                </div>
                
              </div>
            </div>
          </div>

          <p className="pt-0 pb-6 text-base dark:text-neutral-400 text-center">
                     {t('projetos.1description3')}
          </p>
        

          <div className="pt-12 justify-center flex">
              <h1 className="text-2xl font-bold w-2/3 text-center">{t('projetos.2title')}</h1>
            </div>
           
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16  items-center mb-4">
            <div className="md:pt-6 order-1">
            <p className="pt-6 pb-6 text-base dark:text-neutral-400">
                     {t('projetos.2description1')}
                    </p>
                    <ul className="list-disc">
                      {listaDescription.map((description, index) => (
                        <li key={index} className="pb-2">
                          {description}
                        </li>
                        
                      ))}
                    </ul>
                    <p className="pt-4 pb-6 text-base dark:text-neutral-400 ">
                     {t('projetos.2description3')}
          </p> 
             
            </div>
            <div
              className="order-1 md:pt-16 mr-0 2xl:-mr-40"
            >
              <div className="flex flex-row gap-2">
              
              <div>
                
                    
                </div>

                <div className="flex flex-col gap-2">
                <Image
                     src="/images/portfolio/2projeto1.jpg"
                     alt="Image description"
                     width={1920}
                     height={100}
                     quality={75}
                     sizes="100vw"
                     priority
                   />
                   <div>
                     <Image
                     src="/images/portfolio/2projeto2.jpg"
                     alt="Image description"
                     width={1920}
                     height={100}
                     quality={75}
                     sizes="100vw"
                     priority
                   />
                   </div>
                   <div>
                     <Image
                     src="/images/portfolio/2projeto3.png"
                     alt="Image description"
                     width={1920}
                     height={100}
                     quality={75}
                     sizes="100vw"
                     priority
                   />
                   </div>
                </div>
                
              </div>
            </div>
          </div>

          

          
          </div>
      </div>
   
    
  );
}
