import { useState } from "react";
import Image from "next/image";
import class2 from "../../assets/images/class2.png"

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState("pills-home");

  const tabs = [
    { id: "pills-home", label: "All" },
    { id: "pills-profile", label: "Streamed" },
    { id: "pills-contact", label: "Live" },
    { id: "upcomming-contact", label: "Upcoming" },
  ];

  return (
    <>
      {/* Tab Navigation */}
      <ul className="nav nav-pills" id="pills-tab" role="tablist">
        {tabs.map((tab) => (
          <li className="nav-item" role="presentation" key={tab.id}>
            <button
              className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
              id={`${tab.id}-tab`}
              type="button"
              role="tab"
              aria-controls={tab.id}
              aria-selected={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Tab Content */}
      <div className="tab-content" id="pills-tabContent">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab-pane fade ${
              activeTab === tab.id ? "show active" : ""
            }`}
            id={tab.id}
            role="tabpanel"
            aria-labelledby={`${tab.id}-tab`}
          >
            <div className="row">
              {[1, 2, 3, 4].map((item) => (
                <div className="col-md-6" key={item}>
                  <div className="class-item">
                    <Image
                      src={class2}
                      alt="Class Image"
                      className="img-fluid"
                      width={500}
                      height={300}
                    />
                    <h6>Understanding Of International Law For CLAT</h6>
                    <ul>
                      <li>
                        <i className="fa-solid fa-location-dot"></i>
                        <span>New Delhi, Delhi NCR</span>
                      </li>
                      <li>
                        <i className="fa-solid fa-calendar-days"></i>
                        <span>Start Date:</span> SUN, 12th Jan 25
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <i className="fa-regular fa-clock"></i> 06:00 PM - 07:00
                        PM
                      </li>
                      <li>
                        <i className="fa-solid fa-user"></i>
                        <p>
                          ANSHUL TIWARI{" "}
                          <span>Visuti Edu and Tech Pvt Ltd.</span>
                        </p>
                      </li>
                    </ul>
                    <div className="bottom-bar">
                      <div className="live">
                        <i className="fa-solid fa-tv"></i> Live Webinar
                      </div>
                      <div className="join">
                        <a href="#">Join Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TabsComponent;
