"use client";

import { useState } from "react";
import Image from "next/image";

const courses = [
  {
    id: 1,
    name: "B. Tech",
    fee: "₹2.29 Lakhs (1st Year Fees)",
    courses: [
      {
        name: "Mathematics And Computing",
        reviews: "4.1 (25 Reviews)",
        applicationDate: "27 Apr - 18 Jun 2024",
        fee: "₹2,28,650",
      },
    ],
  },
  {
    id: 2,
    name: "M. Tech B.Tech",
    fee: "₹2.29 Lakhs (1st Year Fees)",
    courses: [
      {
        name: "Mathematics And Computing",
        reviews: "4.1 (25 Reviews)",
        applicationDate: "27 Apr - 18 Jun 2024",
        fee: "₹2,28,650",
      },
    ],
  },
];

export default function CourseAccordionForCollageDetails() {
  const [openCourse, setOpenCourse] = useState<number | null>(null);

  const toggleCourse = (id: number) => {
    setOpenCourse(openCourse === id ? null : id);
  };

  return (
    <div className="course">
      <div className="accordion" id="courseAccordion">
        {courses.map((course) => (
          <div className="accordion-item" key={course.id}>
            <h4 className="accordion-header">
              <button
                className={`accordion-button ${
                  openCourse === course.id ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => toggleCourse(course.id)}
              >
                <div className="course-name-fees d-flex align-items-center justify-content-between w-100 pe-5">
                  <div className="course-name">
                    <h5>{course.name}</h5>
                    <p>{course.courses.length} Courses</p>
                  </div>
                  <div className="course-fees">
                    <h6>{course.fee}</h6>
                  </div>
                </div>
              </button>
            </h4>
            {openCourse === course.id && (
              <div className="accordion-collapse collapse show">
                <div className="accordion-body">
                  <div className="table-responsive">
                    <table className="table table-hover table-bordered">
                      <thead>
                        <tr>
                          <th>Course</th>
                          <th>Application Date</th>
                          <th>Fees</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {course.courses.map((c, index) => (
                          <tr key={index}>
                            <td>
                              <p>{c.name}</p>
                              <div className="review">⭐ {c.reviews}</div>
                            </td>
                            <td>{c.applicationDate}</td>
                            <td>
                              <p>{c.fee}</p>
                              <div className="review">1st Yr Fees</div>
                            </td>
                            <td>
                              <div className="table-link">
                                <a href="#">Neet Predictor</a>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
