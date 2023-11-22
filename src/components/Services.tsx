import Image from "next/image";
import { useTranslation } from 'react-i18next';


export function Services() {
  const { t, i18n } = useTranslation();

  const services = [
    {
      title: t('services.1title'),
      description: t('services.1subtitle'),
      image: "/images/services/consultoria.png",
      alt: "Service description",
    },
    {
      title: t('services.2title'),
      description: t('services.2subtitle'),
      image: "/images/services/processos.png",
      alt: "Service description",
    },
    {
      title: t('services.3title'),
      description: t('services.3subtitle'),
      image: "/images/services/produtos.png",
      alt: "Service description",
    },
    {
      title: t('services.4title'),
      description: t('services.4subtitle'),
      image: "/images/services/campo.png",
      alt: "Service description",
    },
    
  ];

  return (
    <div className="bg-gray-50 dark:bg-neutral-900" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center ">
        <h2 className="text-4xl font-bold">
          {t('services.titlesection')}
        </h2>

        <p className="pt-6 pb-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
        {t('services.descriptionsection')}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16 grid md:grid-cols-2 flex-row flex-wrap justify-center">
        {services.map(({ title, description, image, alt }) => (
          <div key={title} className="servicos-home " style={{flexBasis: 'auto' }}>
            <div className="h-32 w-32 flex justify-center mx-auto ">
              <Image
                src={image}
                alt={alt}
                width={130}
                height={130}
                quality={75}
                sizes="100vw"
                priority
              />
            </div>
            <h2 className="font-bold text-lg text-center">{title}</h2>
            <p className="pt-2 text-base text-center dark:text-neutral-400">
              {description}
            </p>
          </div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16 flex flex-row flex-wrap justify-center">
      <div className="servicos-home " style={{flexBasis: 'auto' }}>
            <div className="h-32 w-32 flex justify-center mx-auto ">
              <Image
                src="/images/services/diligenciamento.png"
                alt="foto"
                width={130}
                height={130}
                quality={75}
                sizes="100vw"
                priority
              />
            </div>
            <h2 className="font-bold text-lg text-center">{t('services.5title')}</h2>
            <p className="pt-2 text-base text-center dark:text-neutral-400">
           {t('services.5title')}
            </p>
          </div>
          </div>
    </div>
  );
}
