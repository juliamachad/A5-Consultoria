import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export default function CardImage() {
  const { t, i18n } = useTranslation();

  const card1Images = [
    "/images/portfolio/1projeto1.jpg",
    "/images/portfolio/1projeto2.jpg",
    "/images/portfolio/1projeto3.jpg"
  ];

  const card2Images = [
    "/images/portfolio/2projeto1.jpg",
    "/images/portfolio/2projeto2.jpg",
    "/images/portfolio/2projeto3.png"
  ];

  const [card1ImageIndex, setCard1ImageIndex] = useState(0);
  const [card2ImageIndex, setCard2ImageIndex] = useState(0);

  const nextImage = (setImageIndex: React.Dispatch<React.SetStateAction<number>>, imageIndex: number, images: string[]) => {
    setImageIndex((imageIndex + 1) % images.length);
  };

  const prevImage = (setImageIndex: React.Dispatch<React.SetStateAction<number>>, imageIndex: number, images: string[]) => {
    setImageIndex((imageIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval1 = setInterval(() => {
      nextImage(setCard1ImageIndex, card1ImageIndex, card1Images);
    }, 5000);
    const interval2 = setInterval(() => {
      nextImage(setCard2ImageIndex, card2ImageIndex, card2Images);
    }, 5000);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, [card1ImageIndex, card2ImageIndex]);

  return (
    <div className="bg-white dark:bg-neutral-900 py-14" id="card">
      <h2 className="text-4xl font-bold text-center mb-7">{t('cardsPortfolio.title')}</h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16 grid md:grid-cols-2 justify-center">

        <div className="col m-2 justify-self-center">
          <div className="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-neutral-800 dark:border-gray-700 flex flex-col h-full relative">
            <img className="rounded-t-lg object-cover h-72 w-full" src={card1Images[card1ImageIndex]} alt="" />
            <button
              className="absolute top-1/4 left-0 transform -translate-y-1/2 bg-white dark:bg-neutral-900 text-black dark:text-white p-2 rounded-r-lg"
              onClick={() => prevImage(setCard1ImageIndex, card1ImageIndex, card1Images)}
            >
              <ChevronLeftIcon className="w-4 h-4" />
            </button>
            <button
              className="absolute top-1/4 right-0 transform -translate-y-1/2 bg-white dark:bg-neutral-900 text-black dark:text-white p-2 rounded-l-lg"
              onClick={() => nextImage(setCard1ImageIndex, card1ImageIndex, card1Images)}
            >
              <ChevronRightIcon className="w-4 h-4" />
            </button>
            <div className="p-5 flex-grow flex flex-col">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{t('cardsPortfolio.card1title')}</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex-grow">{t('cardsPortfolio.card1description')}</p>
              <div className="mt-auto">
                <a href="/portfolio" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange rounded-lg hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                  {t('cardsPortfolio.button')}
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col m-2 justify-self-center">
          <div className="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-neutral-800 dark:border-gray-700 flex flex-col h-full relative">
            <img className="rounded-t-lg object-cover h-72 w-full" src={card2Images[card2ImageIndex]} alt="" />
            <button
              className="absolute top-1/4 left-0 transform -translate-y-1/2 bg-white dark:bg-neutral-900 text-black dark:text-white p-2 rounded-r-lg"
              onClick={() => prevImage(setCard2ImageIndex, card2ImageIndex, card2Images)}
            >
              <ChevronLeftIcon className="w-4 h-4" />
            </button>
            <button
              className="absolute top-1/4 right-0 transform -translate-y-1/2 bg-white dark:bg-neutral-900 text-black dark:text-white p-2 rounded-l-lg"
              onClick={() => nextImage(setCard2ImageIndex, card2ImageIndex, card2Images)}
            >
              <ChevronRightIcon className="w-4 h-4" />
            </button>
            <div className="p-5 flex-grow flex flex-col">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{t('cardsPortfolio.card2title')}</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex-grow">{t('cardsPortfolio.card2description')}</p>
              <div className="mt-auto">
                <a href="/portfolio" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange rounded-lg hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                  {t('cardsPortfolio.button')}
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
