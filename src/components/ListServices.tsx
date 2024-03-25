import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from 'react-i18next';


export default function ListServices() {
  const { t, i18n } = useTranslation();

  const services = [
    { 
      image: "/images/services/consultoria.png",
      question: t('services.1title'),
      href:"/consultoria",
    },
    {
      image: "/images/services/processos.png",
      question: t('services.2title'),
      response:t('services.2description'),
      href:"/eng_processos",
    },
    {
      image: "/images/services/produtos.png",
      question: t('services.3title'),
      href:"/eng_produtos",
    },
    {
      image: "/images/services/campo.png",
      question: t('services.4title'),
      href:"/serv_campo",
    },
    {
      image: "/images/services/diligenciamento.png",
      question: t('services.5title'),
      href:"/diligenciamento",
    },
  ];

  return (
    <div
      className="bg-white dark:bg-neutral-900 w-full px-4 pt-16 pb-16"
      id="faq"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        {t('services.titlepage')}
      </h2>

      <div className="mx-auto w-full max-w-2xl rounded-2xl bg-transparent dark:bg-transparent">
        {services.map(({ question, href, image}) => (
          <div key={question}>
           
                    <Link href={href} className="flex flex-start px-4 py-6 justify-center bg-neutral-50 mb-4 rounded-lg items-center hover:bg-neutral-200">
                      <Image
                      src={image}
                      width={35}
                      height={35}
                      quality={75}
                      sizes="100vw"
                      priority
                      alt="oi"
                      className="mr-3"
                    />
                    <h2 className="font-semibold text-lg">{question}</h2>
                    </Link>
                    
                    
                </div>
              ))}
          </div>
       
      </div>
  );
}
