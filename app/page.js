"use client";

import Image from "next/image";
import { IPO_DATA } from "./lib/ipoJson";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className=" p-6 min-w-[1000px] mx-auto overflow-auto">
      <h1 className="text-xl font-semibold mb-4">IPO List Page</h1>
      <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        <div className="grid grid-cols-4 bg-gray-100 p-4 font-medium text-gray-600">
          <span>Company / Issue date</span>
          <span>Issue size</span>
          <span>Price range</span>
          <span>Min invest/qty</span>
        </div>
        {IPO_DATA.map((ipo, index) => (
          <div
            key={index}
            className="grid grid-cols-4 items-center p-4 border-t border-gray-200 hover:!bg-gray-50"
          >
            <div className="flex items-center space-x-4">
              <Image
                width={50}
                height={50}
                src={ipo.logo}
                alt={`${ipo.name} logo`}
                className="w-10 h-10 rounded-full object-contain border-gray-300 border-2"
              />
              <div>
                <p
                  className="text-lg font-semibold text-blue-600 cursor-pointer"
                  onClick={() => {
                    router.push(`/ipo-detail/${ipo?.id}`);
                  }}
                >
                  {ipo.name}
                </p>
                <p className="text-sm text-gray-500">{ipo.date}</p>
              </div>
            </div>
            <p className="text-lg font-semibold">{ipo.size}</p>
            <p className="text-lg font-semibold">{ipo.priceRange}</p>
            <div>
              <p className="text-lg font-semibold">{ipo.minInvestment}</p>
              <p className="text-sm text-gray-500">{ipo.sharesLots}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
