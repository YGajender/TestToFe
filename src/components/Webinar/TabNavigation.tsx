import { useState } from "react";

const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState("pills-home");

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <ul className="nav nav-pills" role="tablist">
      {[
        { id: "pills-home", label: "All" },
        { id: "pills-profile", label: "Streamed" },
        { id: "pills-contact", label: "Live" },
        { id: "upcomming-contact", label: "Upcoming" },
      ].map(({ id, label }) => (
        <li className="nav-item" role="presentation" key={id}>
          <button
            className={`nav-link ${activeTab === id ? "active" : ""}`}
            id={`${id}-tab`}
            type="button"
            role="tab"
            aria-controls={id}
            aria-selected={activeTab === id}
            onClick={() => handleTabChange(id)}
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TabNavigation;
