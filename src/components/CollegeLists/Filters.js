"use client";

import { useState } from "react";

const Filters = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleCheckboxChange = (value) => {
    setSelectedFilters((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  return (
    <div className="left-side-filter">
      {/* Filter Header */}
      <div className="filter d-flex align-items-center">
        <h4>Filters By</h4>
        <button
          type="button"
          className="btn"
          onClick={() => setSelectedFilters([])}
        >
          <a href="#">Clear</a>
        </button>
      </div>

      {/* Search Component */}
      <div className="filter-label">
        <label>Sort By</label>
        <div className="search-blog">
          <input
            type="text"
            className="form-control"
            placeholder="Search for anything..."
          />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>

      {/* Dynamic Checkbox Section */}
      {[
        {
          label: "Ranking",
          options: [
            "NIRF Ranking",
            "Teaching, Learning & Resources (TLR)",
            "Research and Professional Practice (RPC)",
            "Graduation Outcomes (GO)",
            "Peer Perception (PERCEPTION)",
            "Visuti Career Ranking",
          ],
        },
        {
          label: "State",
          options: [
            "Tamil Nadu",
            "Maharashtra",
            "Andhra Pradesh",
            "Karnataka",
            "Telangana",
            "West Bengal",
          ],
        },
        {
          label: "Course",
          options: [
            "BE/B.Tech",
            "M.Phil/Ph.D in Engineering",
            "M.Phil/Ph.D in Science",
            "ME/M.Tech",
            "M.Phil/Ph.D in Arts",
            "M.Sc",
          ],
        },
        {
          label: "Type Of College",
          options: ["Government", "Private Colleges"],
        },
        {
          label: "Avg Fee Per Year",
          options: [
            "0 - 25K",
            "25 - 50K",
            "50 - 75K",
            "75K - 1L",
            "1 - 2L",
            "Above 2L",
          ],
        },
      ].map((section, index) => (
        <div key={index}>
          <div className="filter-label">
            <label>{section.label}</label>
            <div className="search-blog">
              <input
                type="text"
                className="form-control"
                placeholder="Search for anything..."
              />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          <div className="check-box-wrapper">
            {section.options.map((option, i) => (
              <div className="form-check" key={i}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={`checkbox-${option}`}
                  checked={selectedFilters.includes(option)}
                  onChange={() => handleCheckboxChange(option)}
                />
                <label
                  className="form-check-label"
                  htmlFor={`checkbox-${option}`}
                >
                  {option}
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Filters;
