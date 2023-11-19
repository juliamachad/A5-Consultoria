import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const faqitems = [
  { 
    image: "/images/services/consultoria.png",
    question: "Consultoria",
    response:
      "If youre unhappy with your purchase for any reason, email us within 90 days and well refund you in full, no questions asked.",
  },
  {
    image: "/images/services/processos.png",
    question: "Engenharia de processos",
    response:
      "No, we dont offer technical support for free downloads. Please purchase a support plan to get 6 months of support.",
  },
  {
    image: "/images/services/produtos.png",
    question: "Engenharia de produtos",
    response:
      "If youre unhappy with your purchase for any reason, email us within 90 days and well refund you in full, no questions asked.",
  },
  {
    image: "/images/services/campo.png",
    question: "Serviço de campo",
    response:
      "You can use any debit or credit card to pay for a subscription. We secure your card details and process payments via Stripe. Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  },
  {
    image: "/images/services/diligenciamento.png",
    question: "Diligenciamento de projetos",
    response:
      "You can use any debit or credit card to pay for a subscription. We secure your card details and process payments via Stripe. Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  },
];

export default function Faq() {
  return (
    <div
      className="bg-white dark:bg-neutral-900 w-full px-4 pt-16 pb-16"
      id="faq"
    >
      <h2 className="text-4xl font-bold text-center">
        O que fazemos
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
