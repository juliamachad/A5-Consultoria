import Image from "next/image";

const services = [
  {
    title: "Consultoria",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit laudantium",
    image: "/images/services/consultoria.png",
    alt: "Service description",
  },
  {
    title: "Engenharia de processos",
    description:
      "Nemo quos doloribus quo omnis mollitia nostrum excepturi impedit veniam ",
    image: "/images/services/processos.png",
    alt: "Service description",
  },
  {
    title: "Engenharia de produtos",
    description:
      "Accusantium eius omnis minus debitis est odio earum labore ad itaque mollitia",
    image: "/images/services/produtos.png",
    alt: "Service description",
  },
  {
    title: "Serviço de campo",
    description:
      "Dolores nemo labore soluta incidunt cumque repellat quod ducimus explicabo",
    image: "/images/services/campo.png",
    alt: "Service description",
  },
  {
    title: "Diligenciamento de projetos",
    description:
      "voluptatum ex molestiae quae alias quasi eum magnam maxime autem atque",
    image: "/images/services/diligenciamento.png",
    alt: "Service description",
  },
  
];
export function Services() {
  return (
    <div className="bg-gray-50 dark:bg-neutral-900" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h2 className="text-4xl font-bold">Serviços</h2>

        <p className="pt-6 pb-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
          Halley is consectetur Obcaecati veniam explicabo perspiciatis sapiente
          saepe sequi atque aut ullam aliquam.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16 flex flex-row flex-wrap justify-center">
        {services.map(({ title, description, image, alt }) => (
          <div key={title} style={{flexBasis: '30%' }}>
            <div className="h-32 w-32 flex justify-center mx-auto">
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
    </div>
  );
}
