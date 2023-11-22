import Image from "next/image";
import { CheckIcon } from "@heroicons/react/24/solid";
import { useTranslation } from 'react-i18next';


export function Portfolio() {
  const { t, i18n } = useTranslation();
  const contents = [
    {
      title: t('projetos.1title'),
      description: t('projetos.1description'),
      features: [
        t('projetos.1features1'),
        t('projetos.1features2'),
        t('projetos.1features3'),
      ],
      image: "/images/projects/projeto1.png",
      order: false,
    },
    {
      title: t('projetos.2title'),
      description:t('projetos.2description'),
      features: [
        t('projetos.2features1'),
        t('projetos.2features2'),
        t('projetos.2features3'),
      ],
      image: "/images/projects/projeto2.png",
      order: true,
    },
    {
      title: t('projetos.3title'),
      description:t('projetos.3description'),
      features: [
        t('projetos.3features1'),
        t('projetos.3features2'),
        t('projetos.3features3'),
      ],
      image: "/images/projects/projeto3.png",
      order: false,
    },
  ];

  return (
    <div className="bg-white dark:bg-neutral-900" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-x-40 pt-16 pb-16">
        <h2 className="text-4xl font-bold text-center">{t('portfolio.title')}</h2>
        <p className="pt-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
        {t('portfolio.description')}
        </p>

        {contents.map((content) => (
          <div
            key={content.title}
            className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-28 items-center"
          >
            <div
              className={`pt-8 md:pt-16 ${
                content.order ? "order-1 md:order-2" : "order-1"
              }`}
            >
              <h1 className="text-2xl font-bold">{content.title}</h1>
              <p className="pt-6 pb-6 text-base dark:text-neutral-400">
                {content.description}
              </p>

              <ul className="font-medium space-y-1 flex-1">
                {content.features.map((feature) => (
                  <li key={feature} className="leading-6 flex">
                    <CheckIcon className="mt-2 w-3 h-3 text-orange shrink-0" />
                    <span className="ml-3 dark:text-neutral-400">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`order-1 pt-8 md:pt-16 ${
                content.order ? "ml-0 2xl:-ml-40" : "mr-0 2xl:-mr-40"
              }`}
            >
              <div className="flex items-center">
                <Image
                  src={content.image}
                  alt="Image description"
                  width={1920}
                  height={1080}
                  quality={75}
                  sizes="100vw"
                  priority
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
