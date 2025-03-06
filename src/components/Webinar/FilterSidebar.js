import { useState } from "react";

const FilterSidebar = () => {
  const [filters, setFilters] = useState({
    examPreparation: true,
    collegeUniversity: false,
    interviews: false,
    careerCounselling: false,
    searchQuery: "",
  });

  const handleCheckboxChange = (filterName) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: !prevFilters[filterName],
    }));
  };

  const handleSearchChange = (event) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      searchQuery: event.target.value,
    }));
  };

  const clearFilters = () => {
    setFilters({
      examPreparation: false,
      collegeUniversity: false,
      interviews: false,
      careerCounselling: false,
      searchQuery: "",
    });
  };

  return (
    <div className="left-side-filter">
      <div className="filter d-flex align-items-center">
        <h4>Filters By</h4>
        <button type="button" className="btn" onClick={clearFilters}>
          <a href="#">Clear</a>
        </button>
      </div>
      <div className="filter-label">
        <label>Topics Covered</label>
        <div className="search-blog">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            value={filters.searchQuery}
            onChange={handleSearchChange}
          />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <div className="check-box-wrapper">
        {[
          { label: "Exam Preparation", key: "examPreparation" },
          { label: "College & University", key: "collegeUniversity" },
          { label: "Interviews", key: "interviews" },
          { label: "Career Counselling", key: "careerCounselling" },
        ].map(({ label, key }) => (
          <div className="form-check" key={key}>
            <input
              className="form-check-input"
              type="checkbox"
              checked={filters[key]}
              onChange={() => handleCheckboxChange(key)}
            />
            <label className="form-check-label">{label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterSidebar;

