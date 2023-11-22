import Image from "next/image";
import Link from "next/link";
import ThemeSwitchOption from "./ThemeSwitchOption";
import { useTranslation } from "react-i18next";

const social = [
  {
    name: "facebook",
    href: "https://www.facebook.com/",
    icon: (
      <svg width="24px" height="24px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
        <path fill="black" d="M14,6h3a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H14A5,5,0,0,0,9,7v3H7a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1H9v7a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1V14h2.22a1,1,0,0,0,1-.76l.5-2a1,1,0,0,0-1-1.24H13V7A1,1,0,0,1,14,6Z"/>
        </svg>
    ),
  },
  {
    name: "instagram",
    href: "https://www.instagram.com/",
    icon: (
      <svg fill="#000000" width="29px" height="29px" viewBox="0 0 23 24" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M8,2 L16,2 C19.3137085,2 22,4.6862915 22,8 L22,16 C22,19.3137085 19.3137085,22 16,22 L8,22 C4.6862915,22 2,19.3137085 2,16 L2,8 C2,4.6862915 4.6862915,2 8,2 Z M8,4 C5.790861,4 4,5.790861 4,8 L4,16 C4,18.209139 5.790861,20 8,20 L16,20 C18.209139,20 20,18.209139 20,16 L20,8 C20,5.790861 18.209139,4 16,4 L8,4 Z M12,17 C9.23857625,17 7,14.7614237 7,12 C7,9.23857625 9.23857625,7 12,7 C14.7614237,7 17,9.23857625 17,12 C17,14.7614237 14.7614237,17 12,17 Z M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z M17,8 C16.4477153,8 16,7.55228475 16,7 C16,6.44771525 16.4477153,6 17,6 C17.5522847,6 18,6.44771525 18,7 C18,7.55228475 17.5522847,8 17,8 Z"/>
    </svg>
    ),
  },

  {
    name: "email",
    href: "https://www.youtube.com/",
    icon: (
      <svg width="24px" height="24px" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm3.519 0L12 11.671 18.481 6H5.52zM20 7.329l-7.341 6.424a1 1 0 0 1-1.318 0L4 7.329V18h16V7.329z" fill="#0D0D0D"/></svg>
    ),
  },

  {
    name: "linkedin",
    href: "https://www.linkedin.com/",
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
    { name: t('navbar.contact'), href: "/contact" },
  ];
  return (
    <footer className="bg-neutral-900 text-neutral-300 dark:text-neutral-400">
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
          <h3 className="text-sm md:text-xs font-bold pb-4 pt-12 lg:pt-0">
          {t('footer.pages')}
          </h3>
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
        <Link
          href="https://humbernieto.pro"
          target="_blank"
          className="text-neutral-300 dark:text-neutral-400 text-sm hover:text-orange dark:hover:text-orange transition duration-300"
        >
          &copy; Copyright {new Date().getFullYear()}. All rights reserved.
        </Link>
      </div>
    </footer>
  );
}
