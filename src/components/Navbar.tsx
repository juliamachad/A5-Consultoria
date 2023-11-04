import Link from "next/link";
import Image from "next/image";
import ThemeSwitchButton from "./ThemeSwitchButton";

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { Disclosure } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import LanguageSwitchButton from "./LanguageSwitchButton";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Sobre", href: "/about", current: false },
  { name: "Serviços", href: "#services", current: false },
  { name: "Portfólio", href: "#faq", current: false },
  //{ name: "Contato", href: "#contact", current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {

  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  return (
    <Disclosure
      as="nav"
      className=" fixed top-0 left-0 right-0 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-400 border-b border-neutral-200 dark:border-neutral-700 backdrop-blur-sm bg-white/90 dark:bg-neutral-900/80 z-20"
    >
      {({ open }: { open: any }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-between">
                <div className="flex flex-shrink-0 items-center md:pl-0">
                  <Link href="/">
                  {resolvedTheme === "dark" ? (
                        <Image
                        className="block h-8 w-auto"
                        src="/images/logos/logo-branca.png"
                        alt="Logo Your Company"
                        width={150}
                        height={150}
                        quality={75}
                        sizes="100vw"
                      />

                    ) : (
                      <Image
                      className="block h-8 w-auto"
                      src="/images/logos/logo@4x.png"
                      alt="Logo Your Company"
                      width={150}
                      height={150}
                      quality={75}
                      sizes="100vw"
                    />

                    )}
                    
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
                            ? "text-neutral-900 dark:text-neutral-400 "
                            : "text-neutral-900 dark:text-neutral-400 hover:underline",
                          "text-base font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className=" inset-y-0 right-10 ml-3 sm:right-0 flex items-center gap-2">
                  <Link
                    href="/contato"
                    className="hidden sm:block"
                  >
                    <button className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-4 p-2 text-base font-medium dark:hover:bg-orange hover:bg-orange hover:text-white dark:hover:text-white rounded-full">
                      Contato
                    </button>
                  </Link>
                  <LanguageSwitchButton></LanguageSwitchButton>
                  <ThemeSwitchButton />
                </div>
                </div>
                
                

                <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md text-neutral-900 dark:text-white ">
                    <span className="sr-only">Open main menu</span>
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
              
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
