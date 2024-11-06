// app/ipo/[id]/page.js

"use client";
import { useEffect, useState } from "react";
import { IPO_DATA } from "@/app/lib/ipoJson";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function IPOPage({ params }) {
  const router = useRouter();
  const id = params.id;
  const [ipoData, setIpoData] = useState({});

  useEffect(() => {
    if (id) {
      const ipo = IPO_DATA.find((item) => item.id == id);
      setIpoData(ipo);
    }
  }, [id]);

  if (!ipoData) return <p>Loading...</p>;

  return (
    <div className="p-6 max-w-screen mx-auto">
      {/* Breadcrumb */}
      <div
        className="text-gray-500 mb-4"
        onClick={() => {
          router.push("/");
        }}
      >
        Home {">"} Market Watch
      </div>

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Image
            width={100}
            height={100}
            src={ipoData.logo}
            alt={ipoData.name}
            className="h-12 w-12 object-contain"
          />
          <div>
            <h1 className="text-2xl font-semibold">{ipoData.companyName}</h1>
            <p className="text-gray-500">{ipoData.description}</p>
          </div>
        </div>
        <button className="bg-[#1D1E66] text-white px-6 py-2 rounded-lg shadow-lg">
          Apply now
        </button>
      </div>

      {/* IPO Details */}
      <section className="mb-6 border border-gray-200 rounded-lg p-3">
        <h2 className="font-semibold text-lg mb-4 text-[#1D1E66]">
          IPO details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-4 bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
          <div>
            <p className="text-gray-500">Issue size</p>
            <p className="font-semibold text-[#1D1E66]">{ipoData.issueSize}</p>
          </div>
          <div>
            <p className="text-gray-500">Price range</p>
            <p className="font-semibold text-[#1D1E66]">{ipoData.priceRange}</p>
          </div>
          <div>
            <p className="text-gray-500">Minimum amount</p>
            <p className="font-semibold text-[#1D1E66]">{ipoData.minAmount}</p>
          </div>
          <div>
            <p className="text-gray-500">Lot size</p>
            <p className="font-semibold text-[#1D1E66]">{ipoData.lotSize}</p>
          </div>
          <div>
            <p className="text-gray-500">Issue dates</p>
            <p className="font-semibold text-[#1D1E66]">{ipoData.issueDates}</p>
          </div>
          <div>
            <p className="text-gray-500">Listed on</p>
            <p className="font-semibold text-[#1D1E66]">{ipoData.listedOn}</p>
          </div>
          <div>
            <p className="text-gray-500">Listed price</p>
            <p className="font-semibold text-[#1D1E66]">
              {ipoData.listedPrice}
            </p>
          </div>
          <div>
            <p className="text-gray-500">Listing gains</p>
            <p className="font-semibold text-red-600">{ipoData.listingGains}</p>
          </div>
        </div>
      </section>

      {/* IPO Timeline */}
      <section className="mb-6 border border-gray-200 rounded-lg p-3 min-h-[200px]">
        <h2 className="font-semibold text-lg mb-4 text-[#1D1E66]">
          IPO timeline
        </h2>
        <div class="w-full px-10 sm:px-24 py-4">
          <div class=" hidden sm:relative sm:flex items-center justify-between w-full">
            <div class="absolute left-0 top-2/4 h-0.5 w-full -translate-y-2/4 bg-gray-300"></div>
            <div class="absolute left-0 top-2/4 h-0.5 w-full -translate-y-2/4 bg-green-500 transition-all duration-500"></div>
            {ipoData?.timeline?.map((event, index) => (
              <div class="relative z-10 grid w-10 h-10 font-bold text-white transition-all duration-300 bg-green-500 rounded-full place-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-4 w-4 text-white"
                  viewBox="0 0 20 20"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <div class="absolute -bottom-[4.5rem] w-max text-center">
                  <p className="font-semibold text-[#1D1E66]">{event.stage}</p>
                  <p className="text-sm text-gray-500">{event.date}</p>
                </div>
              </div>
            ))}
          </div>

          <ol class=" sm:hidden relative text-gray-500 border-s-2 border-green-500 dark:border-gray-700 dark:text-gray-400">
            {ipoData?.timeline?.map((event, index) => (
              <li class="mb-10 ms-6">
                <span class="absolute flex items-center justify-center w-8 h-8 bg-green-500 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-4 w-4 text-white"
                    viewBox="0 0 20 20"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <p className="ml-3 font-semibold text-[#1D1E66]">
                  {event.stage}
                </p>
                <p className="ml-3 text-sm text-gray-500">{event.date}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* About the Company */}
      <section className="border border-gray-200 rounded-lg p-3">
        <h2 className="font-semibold text-lg mb-4 text-[#1D1E66]">
          About the company
        </h2>
        <p className="text-gray-700">{ipoData.about}</p>
      </section>
    </div>
  );
}
