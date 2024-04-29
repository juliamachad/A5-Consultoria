import Image from "next/image";
import Link from "next/link";
import ThemeSwitchOption from "./ThemeSwitchOption";
import { useTranslation } from "react-i18next";

const social = [

  {
    name: "email",
    href: "mailto:contato@a5consultoria.com",
    icon: (
      <svg width="24px" height="24px" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm3.519 0L12 11.671 18.481 6H5.52zM20 7.329l-7.341 6.424a1 1 0 0 1-1.318 0L4 7.329V18h16V7.329z" fill="#0D0D0D"/></svg>
    ),
  },

  {
    name: "linkedin",
    href: "https://www.linkedin.com/company/a5-consultoria/",
    icon: (
      <svg fill="#000000" width="24px" height="24px" viewBox="-2 -3 24 23" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" ><path d='M19.959 11.719v7.379h-4.278v-6.885c0-1.73-.619-2.91-2.167-2.91-1.182 0-1.886.796-2.195 1.565-.113.275-.142.658-.142 1.043v7.187h-4.28s.058-11.66 0-12.869h4.28v1.824l-.028.042h.028v-.042c.568-.875 1.583-2.126 3.856-2.126 2.815 0 4.926 1.84 4.926 5.792zM2.421.026C.958.026 0 .986 0 2.249c0 1.235.93 2.224 2.365 2.224h.028c1.493 0 2.42-.989 2.42-2.224C4.787.986 3.887.026 2.422.026zM.254 19.098h4.278V6.229H.254v12.869z' /></svg>
    ),
  },
];

const column2 = [
  { name: "produto1", href: "/" },
  { name: "produto2", href: "/" },
  { name: "produto3", href: "/" },
  { name: "produto4", href: "/" },
];

const column3 = [
  { name: "Privacy Policy", href: "/" },
  { name: "Terms of Service", href: "/" },
  { name: "Support Terms", href: "/" },
];

export default function Footer() {
  const { t, i18n } = useTranslation();
  const column1 = [
    { name: t('navbar.home'), href: "/" },
    { name: t('navbar.about'), href: "/about" },
    { name: t('navbar.services'), href: "/services" },
    { name: t('navbar.portfolio'), href: "/portfolio" },
    { name: t('navbar.contact'), href: "/contato" },
  ];
  return (
    <footer className="bg-neutral-900 dark:bg-neutral-800 text-neutral-300 dark:text-neutral-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-12 grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6">
        <div className="col-span-2 sm:col-span-3 md:col-span-3 lg:col-span-2 2xl:col-span-2">
          <Link href="/">
            <Image
              className="h-8 w-auto"
              src="/images/logos/logo-branca.png"
              alt="Logo"
              width={150}
              height={150}
              quality={75}
              sizes="100vw"
            />
          </Link>

          <p className="md:text-sm pt-4 w-auto sm:w-6/12 md:w-6/12 lg:w-8/12">
          {t('footer.description')}
          </p>

          <div className="flex gap-2 pt-6 sm:pt-6 md:pt-6 lg:pt-12 max-w-[300px]">
            {social.map((red) => (
              <Link key={red.name} href={red.href} target="_blank">
                <div className="w-9 h-9 p-2 text-white bg-orange hover:opacity-75 rounded-full flex items-center justify-center">
                  {red.icon}
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className=" lg:col-start-6">
          
          {column1.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-orange md:text-sm my-4 grid"
            >
              {item.name}
            </Link>
          ))}
        </div>

       

        
      </div>

      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 p-6 text-center border-t border-neutral-800">
        
          &copy; Copyright {new Date().getFullYear()}. All rights reserved.
     
      </div>
    </footer>
  );
}
