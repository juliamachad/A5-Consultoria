import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/router';
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'next-themes';
import LanguageSwitchButton from "./LanguageSwitchButton";
import ThemeSwitchButton from "./ThemeSwitchButton";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const [navigation, setNavigation] = useState([
    { name: t('navbar.home'), href: "/", current: false },
    { name: t('navbar.about'), href: "/about", current: false },
    { name: t('navbar.services'), href: "/services", current: false },
    { name: t('navbar.portfolio'), href: "/portfolio", current: false },
    { name: t('navbar.contact'), href: "/contato", current: false },
  ]);
  const { resolvedTheme } = useTheme();
  const [logoImage, setLogoImage] = useState("/images/logos/logo@4x.png");

  useEffect(() => {
    setNavigation([
      { name: t('navbar.home'), href: "/", current: false },
      { name: t('navbar.about'), href: "/about", current: false },
      { name: t('navbar.services'), href: "/services", current: false },
      { name: t('navbar.portfolio'), href: "/portfolio", current: false },
      { name: t('navbar.contact'), href: "/contato", current: false },
    ]);
  }, [i18n.language, t]);
  
  useEffect(() => {
    const currentPath = router.pathname;
    const updatedNavigation = navigation.map(item => {
      return {
        ...item,
        current: item.href === currentPath
      };
    });
    setNavigation(updatedNavigation);
  }, [router.pathname]);

  useEffect(() => {
    if (resolvedTheme === "dark") {
      setLogoImage("/images/logos/logo-branca.png");
    } else {
      setLogoImage("/images/logos/logo@4x.png");
    }
  }, [resolvedTheme]);

  return (
    <Disclosure
      as="nav"
      className="fixed top-0 left-0 right-0 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-400 border-b border-neutral-200 dark:border-neutral-700 backdrop-blur-sm bg-white/90 dark:bg-neutral-900/80 z-20"
    >
      {({ open }: { open: any }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-20 items-center justify-between">
              <div className="flex flex-1 items-center justify-between">
                <div className="flex flex-shrink-0 items-center md:pl-0">
                  <Link href="/">
                    <Image
                      className="block"
                      src={logoImage}
                      alt="Logo Your Company"
                      width={70}
                      height={150}
                      quality={100}
                      sizes="100vw"
                    />
                  </Link>
                </div>

                <div className="hidden sm:ml-6 sm:flex">
                  <div className="flex space-x-5 items-center flex-start">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? " bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-4 p-2 text-base font-medium dark:hover:bg-orange hover:bg-orange hover:text-white dark:hover:text-white rounded-full"
                            : "text-neutral-900 dark:text-neutral-400 hover:underline",
                          "text-base font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="inset-y-0 right-10 ml-3 sm:right-0 flex items-center gap-2">
                    <LanguageSwitchButton />
                    <ThemeSwitchButton />
                  </div>
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md text-neutral-900 dark:text-white ">
                    <span className="sr-only">Open menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-4 min-h-screen border-t border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "text-neutral-900 dark:text-neutral-400"
                      : "text-neutral-900 dark:text-neutral-400",
                    "block py-4 text-base font-medium border-b border-neutral-200 dark:border-neutral-700"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <Link
                href="/contato"
                className={"text-neutral-900 dark:text-neutral-400 block py-4 text-base font-medium border-b border-neutral-200 dark:border-neutral-700"
                }
              >
                <button className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-4 p-2 text-base font-medium dark:hover:bg">
                  {t('navbar.contact')}
                </button>
              </Link>
              <div className="flex flex-row">
                <LanguageSwitchButton />
                <ThemeSwitchButton />
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
