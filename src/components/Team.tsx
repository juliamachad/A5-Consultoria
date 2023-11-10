import Link from "next/link";
import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";
//import linkedin from '../../public/images/icons/linkedin-logo.png'
import Image from 'next/image'

const products = [
  {
    foto: "/images/icons/linkedin-logo.png",
    title: "Stefan Würzner",
    frecuency: "month",
    description: "Engenharia de Processos Consultoria em Mineração, Siderurgia e Reciclagem.",
    features: [
      "stefan-wurzner",
    ],
    href: "https://www.linkedin.com/in/stefan-wurzner-54972333/",
    cta: "Buy Hobby",
    mostPopular: false,
    linkedin: "/images/icons/linkedin-logo.png",
  },
  {
    foto: "",
    title: "Engenheiros Civis",
    frecuency: "year",
    description: "",
    features: [
      "Especialista em Estruturas Metálicas (Mestrado/Doutorado). Experiência na elaboração de projetos estruturais, de concreto armado e execução de obras.",
    ],
    href: "#",
    cta: "Buy Hobby",
    mostPopular: false,
    linkedin: "",
  },
  {
    foto: "/images/icons/linkedin-logo.png",
    title: "Mislene Rosa",
    frecuency: "month",
    description: "Especialista em Estruturas Metálicas (Mestrado/Doutorado). Experiência na elaboração de projetos estruturais, de concreto armado e execução de obras.",
    features: [
      "mislene-rosa",
    ],
    href: "https://www.linkedin.com/in/mislene-rosa-70a43441/",
    cta: "Buy Freelancer",
    mostPopular: true,
    linkedin: "/images/icons/linkedin-logo.png",
  },
  {
    foto: "",
    title: "Engenheiros Eletricistas",
    frecuency: "year",
    description: "",
    features: [
      "Especialistas em projetos elétricos e de automação. Experiência em serviços de campo e pesquisa energética eficiente.",
    ],
    href: "#",
    cta: "Buy Freelancer",
    mostPopular: true,
    linkedin: "",
  },
  {
    foto: "",
    title: "Engenheiros Mecânicos",
    frecuency: "year",
    description: "",
    features: [
      "Especialista na elaboração de projetos Estruturas Metálicas, Caldeiraria, Usinagem, Tubulações, entre outros.",
    ],
    href: "#",
    cta: "Buy Startup",
    mostPopular: false,
    linkedin: "",
  },
  {
    foto: "",
    title: "Engenheiros de Minas",
    frecuency: "year",
    description: "",
    features: [
      "Especialista na realização de estudos sobre a viabilidade técnica e econômica e elaboração de projeto de extração dos minérios.",
    ],
    href: "#",
    cta: "Buy Enterprice",
    mostPopular: false,
    linkedin: "",
  },
  {
    foto: "",
    title: "Técnicos de campo",
    frecuency: "year",
    description: "",
    features: [
      "Equipe multidisciplinar, profissionais com grande experiência nas suas especialidades, trabalhando de forma integrada.",
    ],
    href: "#",
    cta: "Buy Enterprice",
    mostPopular: false,
    linkedin: "",
  },
];

type BillingInterval = "year" | "month";

export default function Team() {
  const [billingInterval, setBillingInterval] =
    useState<BillingInterval>("month");
  return (
    <div className="bg-gray-50 dark:bg-neutral-900" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <h2 className="text-4xl font-bold text-center">Equipe</h2>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 sm:flex sm:flex-col sm:align-center">
        <div className="relative self-center text-base font-semibold mt-6 bg-neutral-200  dark:bg-neutral-800 rounded-lg flex sm:mt-8">
          <button
            onClick={() => setBillingInterval("month")}
            type="button"
            className={`${
              billingInterval === "month"
                ? "relative w-1/2 bg-white dark:bg-neutral-600 text-neutral-900 dark:text-neutral-100"
                : "ml-0.5 relative w-1/2 text-neutral-900 dark:text-neutral-400"
            } rounded-md m-1 py-2 whitespace-nowrap sm:w-auto sm:px-8`}
          >
            Equipe
          </button>
          <button
            onClick={() => setBillingInterval("year")}
            type="button"
            className={`${
              billingInterval === "year"
                ? "relative w-1/2 bg-white dark:bg-neutral-600 text-neutral-900 dark:text-neutral-100"
                : "ml-0.5 relative w-1/2 text-neutral-900 dark:text-neutral-400"
            } rounded-md m-1 py-2 whitespace-nowrap sm:w-auto sm:px-8`}
          >
            Suporte
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 
      md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-16 justify-center items-center">
        {products.map(
          ({
            title,
            mostPopular,
            description,
            frecuency,
            features,
            linkedin,
            foto,
            href
          }) => {
            if (foto != "") {
            return (
              <>
                {billingInterval === frecuency ? (
                  <div
                    key={title}
                    style={{maxWidth:'500px'}}
                    className={`rounded-lg py-8 relative flex flex-col ${
                      mostPopular
                        ? "border-neutral-300 border dark:border-neutral-600"
                        : "border-neutral-300 border dark:border-neutral-600"
                    }`}
                  >
                      <div className="flex justify-start pl-8 pb-8">
                      <Image
                            src={linkedin}
                            width={100}
                            height={10}
                            alt="Picture of the author"
                          />
                    </div>
        
                    
                    <h3 className="px-6 text-lg font-semibold leading-5">
                      {title}
                    </h3>
                    

                    <p className="px-6 mt-4 leading-6 dark:text-neutral-400">
                      {description}
                    </p>
                  

                    

                    {/* features */}
                    <ul className="mt-6 px-6 space-y-4 flex-1 border-t border-neutral-300 dark:border-neutral-500">
                      <p className="mt-6 font-semibold dark:text-neutral-300">
                        
                      </p>
                      {features.map((features) => (
                       
                        <li key={features} className="leading-6 flex">
                           <a target="_blank" href={href} style={{display:'flex'}}>
                          <Image
                            
                            src={linkedin}
                            width={25}
                            height={10}
                            alt="Picture of the author"
                          />
                          <span className="ml-3 dark:text-neutral-400">
                            {features}
                          </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </>
            );
            } else {
              return (
                <>
                  {billingInterval === frecuency ? (
                    <div
                      key={title}
                      style={{maxWidth:'500px'}}
                      className={`rounded-lg py-8 relative flex flex-col ${
                        mostPopular
                          ? "border-neutral-300 border dark:border-neutral-600"
                          : "border-neutral-300 border dark:border-neutral-600"
                      }`}
                    >
                      
          
                      
                      <h3 className="px-6 text-lg font-semibold leading-5">
                        {title}
                      </h3>
                      
  
                      <p className="px-6 mt-4 leading-6 dark:text-neutral-400">
                        {description}
                      </p>
                    
  
                      
  
                      {/* features */}
                      <ul className="mt-6 px-6 space-y-4 flex-1 border-t border-neutral-300 dark:border-neutral-500">
                        <p className="mt-6 font-semibold dark:text-neutral-300">
                          
                        </p>
                        {features.map((features) => (
                          <li key={features} className="leading-6 flex">
                            <span className="ml-3 dark:text-neutral-400">
                              {features}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </>
              );
            }
          }
        )}
      </div>
    </div>
  );
}
