import Link from "next/link"
import { FaPenNib } from "react-icons/fa"
import { FaExternalLinkAlt } from "react-icons/fa"

const AllCoursesSection = () => {
  const courses = [
    { name: "NEET UG", icon: "fa-pen-nib", link: "#" },
    { name: "NEET PG", icon: "fa-pen-nib", link: "#" },
    { name: "IIT", icon: "fa-pen-nib", link: "#" },
    { name: "MBBS", icon: "fa-pen-nib", link: "#" },
    { name: "BDS", icon: "fa-pen-nib", link: "#" },
    { name: "Bams", icon: "fa-pen-nib", link: "#" },
    { name: "Bsc Nursing", icon: "fa-pen-nib", link: "#" },
    { name: "MBBS Abroad", icon: "fa-pen-nib", link: "#" }
  ]

  return (
    <section className="all-course-sec">
      <div className="container">
        <div className="row">
          <div className="title col-12">
            <h3>
              All Our <span>Courses</span>
            </h3>
            <p>Our all courses here to explore now</p>
          </div>

          {courses.map((course, index) => (
            <div key={index} className="col-sm-6 col-md-4 col-lg-3">
              <div className={`course-item ${index === 0 ? "active" : ""}`}>
                <div className="text-with-icon">
                  <FaPenNib size={16} />
                  {course.name}
                </div>

                <div className="arrow">
                  <Link href={course.link}>
                    <FaExternalLinkAlt size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AllCoursesSection
