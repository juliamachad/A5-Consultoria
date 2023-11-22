import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useTranslation } from 'react-i18next';


export default function Faq() {
  const { t, i18n } = useTranslation();

  const faqitems = [
    { 
      image: "/images/services/consultoria.png",
      question: t('services.1title'),
      response:t('services.1description'),
    },
    {
      image: "/images/services/processos.png",
      question: t('services.2title'),
      response:t('services.2description'),
    },
    {
      image: "/images/services/produtos.png",
      question: t('services.3title'),
      response:t('services.3description'),
    },
    {
      image: "/images/services/campo.png",
      question: t('services.4title'),
      response:t('services.4description'),
    },
    {
      image: "/images/services/diligenciamento.png",
      question: t('services.5title'),
      response:t('services.5description'),
    },
  ];

  return (
    <div
      className="bg-white dark:bg-neutral-900 w-full px-4 pt-16 pb-16"
      id="faq"
    >
      <h2 className="text-4xl font-bold text-center">
        {t('services.titlepage')}
      </h2>

      <div className="mx-auto w-full max-w-2xl rounded-2xl bg-transparent dark:bg-transparent">
        {faqitems.map(({ question, response, image}) => (
          <div key={question}>
            <Disclosure>
              {({ open }) => (
                <div className="mt-4">
                  <Disclosure.Button
                    className={`${
                      open
                        ? "bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-100 rounded-b-none"
                        : ""
                    } flex w-full justify-between rounded-lg bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-800 px-4 py-4 text-left text-base font-medium `}
                  >
                    <div className="flex flex-start">
                      <Image
                      src={image}
                      width={30}
                      height={30}
                      quality={75}
                      sizes="100vw"
                      priority
                      alt="oi"
                      className="mr-3"
                    />
                    <h2 className="font-semibold">{question}</h2></div>
                    <ChevronDownIcon
                      className={`${
                        open ? "rotate-180 transition-transform" : ""
                      } h-5 w-5 flex-shrink-0`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel
                    className={`${
                      open
                        ? "px-4 pt-4 pb-2 text-base dark:text-neutral-400"
                        : ""
                    } bg-neutral-100 dark:bg-neutral-800 rounded-b-lg`}
                  >
                    <p>{response}</p>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </div>
  );
}
