"use client";

import { useState } from "react";
import Link from "next/link";

const FeesDetails: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <section className="compare-tabs mt-0 pt-0">
      <div className="container mx-auto p-4">
        <div className="row">
          <div className="col-12">
            <h5 className="text-lg font-semibold mb-3">Fees Details</h5>
            <ul className="flex flex-wrap gap-3">
              {[
                "B.Tech",
                "M.Tech",
                "MBA",
                "B.Tech + M.Tech",
                "M.S",
                "PH.D",
                "M.Des",
                "Filter",
                "General",
                "OBC",
                "SC/ST",
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className={`px-3 py-2 border rounded ${
                      activeTab === item
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                    }`}
                    onClick={() => handleTabClick(item)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeesDetails;
