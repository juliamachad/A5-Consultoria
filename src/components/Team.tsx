import Link from "next/link";
import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";

const products = [
  {
    title: "Stefan Würzner",
    price: 12,
    currency: "$",
    frecuency: "month",
    description: "All the features you need to grow your business.",
    features: [
      "Unlimited vouchers ∞",
      "02 users",
      "Point of sale",
      "Customers",
    ],
    href: "#",
    cta: "Buy Hobby",
    mostPopular: false,
  },
  {
    title: "Hobby",
    price: 120,
    currency: "$",
    frecuency: "year",
    description: "All the features you need to grow your business.",
    features: [
      "Unlimited vouchers ∞",
      "02 users",
      "Point of sale",
      "Customers",
    ],
    href: "#",
    cta: "Buy Hobby",
    mostPopular: false,
  },
  {
    title: "Mislene Rosa",
    price: 24,
    currency: "$",
    frecuency: "month",
    description: "All the features you need to grow your business.",
    features: [
      "Unlimited vouchers ∞",
      "04 users",
      "02 warehouses",
      "Dashboard",
      "Point of sale",
    ],
    href: "#",
    cta: "Buy Freelancer",
    mostPopular: true,
  },
  {
    title: "Freelancer",
    price: 240,
    currency: "$",
    frecuency: "year",
    description: "All the features you need to grow your business.",
    features: [
      "Unlimited vouchers ∞",
      "04 users",
      "02 warehouses",
      "Dashboard",
      "Point of sale",
    ],
    href: "#",
    cta: "Buy Freelancer",
    mostPopular: true,
  },
  {
    title: "Startup",
    price: 320,
    currency: "$",
    frecuency: "year",
    description: "All the features you need to grow your business.",
    features: [
      "Unlimited vouchers ∞",
      "08 users",
      "04 warehouses",
      "Dashboard",
      "Point of sale",
      "Finance",
      "mobile App",
    ],
    href: "#",
    cta: "Buy Startup",
    mostPopular: false,
  },
  {
    title: "Enterprice",
    price: 480,
    currency: "$",
    frecuency: "year",
    description: "All the features you need to grow your business.",
    features: [
      "Unlimited vouchers ∞",
      "16 users",
      "08 warehouses",
      "Dashboard",
      "Point of sale",
      "Inventory",
      "Shopping",
      "Finance",
      "mobile App",
    ],
    href: "#",
    cta: "Buy Enterprice",
    mostPopular: false,
  },
];

type BillingInterval = "year" | "month";

export default function Team() {
  const [billingInterval, setBillingInterval] =
    useState<BillingInterval>("month");
  return (
    <div className="bg-gray-50 dark:bg-neutral-900" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <h2 className="text-4xl font-bold text-center">Equipe</h2>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 sm:flex sm:flex-col sm:align-center">
        <div className="relative self-center text-base font-semibold mt-6 bg-neutral-200  dark:bg-neutral-800 rounded-lg flex sm:mt-8">
          <button
            onClick={() => setBillingInterval("month")}
            type="button"
            className={`${
              billingInterval === "month"
                ? "relative w-1/2 bg-white dark:bg-neutral-600 text-neutral-900 dark:text-neutral-100"
                : "ml-0.5 relative w-1/2 text-neutral-900 dark:text-neutral-400"
            } rounded-md m-1 py-2 whitespace-nowrap sm:w-auto sm:px-8`}
          >
            Equipe
          </button>
          <button
            onClick={() => setBillingInterval("year")}
            type="button"
            className={`${
              billingInterval === "year"
                ? "relative w-1/2 bg-white dark:bg-neutral-600 text-neutral-900 dark:text-neutral-100"
                : "ml-0.5 relative w-1/2 text-neutral-900 dark:text-neutral-400"
            } rounded-md m-1 py-2 whitespace-nowrap sm:w-auto sm:px-8`}
          >
            Suporte
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-16 justify-center">
        {products.map(
          ({
            title,
            mostPopular,
            description,
            currency,
            price,
            frecuency,
            cta,
            features,
            href,
          }) => {
            return (
              <>
                {billingInterval === frecuency ? (
                  <div
                    key={title}
                    className={`rounded-lg py-8 relative flex flex-col ${
                      mostPopular
                        ? "border-neutral-300 border dark:border-neutral-600"
                        : "border-neutral-300 border dark:border-neutral-600"
                    }`}
                  >
                    <h3 className="px-6 text-lg font-semibold leading-5">
                      {title}
                    </h3>
                    

                    <p className="px-6 mt-4 leading-6 dark:text-neutral-400">
                      {description}
                    </p>
                  

                    

                    {/* features */}
                    <ul className="mt-6 px-6 space-y-4 flex-1 border-t border-neutral-300 dark:border-neutral-500">
                      <p className="mt-6 font-semibold dark:text-neutral-300">
                        
                      </p>
                      {features.map((features) => (
                        <li key={features} className="leading-6 flex">
                          <CheckIcon className="mt-2 w-3 h-3 text-orange shrink-0" />
                          <span className="ml-3 dark:text-neutral-400">
                            {features}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </>
            );
          }
        )}
      </div>
    </div>
  );
}
