import { useState } from "react";

type FilterKeys =
  | "examPreparation"
  | "collegeUniversity"
  | "interviews"
  | "careerCounselling";

const FilterSidebar = () => {
  const [filters, setFilters] = useState<{
    examPreparation: boolean;
    collegeUniversity: boolean;
    interviews: boolean;
    careerCounselling: boolean;
    searchQuery: string;
  }>({
    examPreparation: true,
    collegeUniversity: false,
    interviews: false,
    careerCounselling: false,
    searchQuery: "",
  });

  const handleCheckboxChange = (filterName: FilterKeys) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: !prevFilters[filterName],
    }));
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
              checked={filters[key as FilterKeys]}
              onChange={() => handleCheckboxChange(key as FilterKeys)}
            />
            <label className="form-check-label">{label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterSidebar;
