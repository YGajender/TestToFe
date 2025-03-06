"use client"
import Image from "next/image"
import Link from "next/link"
import { CiSearch } from "react-icons/ci"
import { FaAngleRight } from "react-icons/fa"
import { FaAngleLeft } from "react-icons/fa6"

const BlogSection = () => {
  const blogPosts = [
    {
      image:
        "https://bibaanbackend.webspulses.com/visuticareer/assets/images/blog1.jpg",
      category: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      authorImage:
        "https://bibaanbackend.webspulses.com/visuticareer/assets/images/user2.jpg",
      author: "Jason Francisco",
      date: "Dec. 20, 2024"
    },
    {
      image:
        "https://bibaanbackend.webspulses.com/visuticareer/assets/images/blog2.jpg",
      category: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      authorImage:
        "https://bibaanbackend.webspulses.com/visuticareer/assets/images/user2.jpg",
      author: "Jason Francisco",
      date: "Dec. 20, 2024"
    }
  ]

  const popularPosts = [
    {
      image:
        "https://bibaanbackend.webspulses.com/visuticareer/assets/images/po1.png",
      title: "Our 15 favorite websites from August",
      category: "NEET UG Counselling"
    },
    {
      image:
        "https://bibaanbackend.webspulses.com/visuticareer/assets/images/po2.png",
      title: "The beginners guide to user research",
      category: "NEET UG Counselling"
    },
    {
      image:
        "https://bibaanbackend.webspulses.com/visuticareer/assets/images/po3.png",
      title: "Web page layout 101: website anatomy every designer",
      category: "NEET UG Counselling"
    }
  ]

  return (
    <section className="blogs-sec">
      <div className="container">
        <div className="row">
          {/* Blog Posts Section */}
          <div className="col-lg-8">
            <div className="row">
              {blogPosts.map((post, index) => (
                <div key={index} className="col-md-6">
                  <div className="blog-item">
                    <Image
                      src={post.image}
                      alt="Blog Image"
                      width={500}
                      height={300}
                      className="img-fluid"
                    />
                    <span>{post.category}</span>
                    <h5>{post.title}</h5>
                    <ul>
                      <li>
                        <Image
                          src={post.authorImage}
                          alt="Author"
                          width={30}
                          height={30}
                        />{" "}
                        {post.author}
                      </li>
                      <li>{post.date}</li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="pagination">
              <ul>
                <li>
                  <a href="#">
                    <FaAngleLeft />
                  </a>
                </li>
                <li>
                  <a href="#">01</a>
                </li>
                <li>
                  <a href="#">02</a>
                </li>
                <li>
                  <a href="#">03</a>
                </li>
                <li>
                  <a href="#">04</a>
                </li>
                <li>
                  <a href="#">
                    <FaAngleRight />
                    <i className="fa-solid fa-angle-right"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <div className="right-side">
              {/* Search Form */}

              <div className="form-outer-div popular m-0 p-0">
                <form>
                  <div className="search-blog p-0">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Search"
                    />
                    <CiSearch />
                  </div>
                </form>
              </div>

              {/* Popular Posts */}
              <div className="popular">
                <h5>POPULAR POST</h5>
                {popularPosts.map((post, index) => (
                  <div key={index} className="inner-item">
                    <Image
                      src={post.image}
                      alt="Popular Post"
                      width={80}
                      height={80}
                      className="img-fluid"
                    />
                    <div className="content">
                      <p>{post.category}</p>
                      <h6>{post.title}</h6>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media Links */}
              <div className="popular social">
                <h5>SOCIAL MEDIA</h5>
                <ol>
                  <li>
                    <Link href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fa-brands fa-discord"></i>
                    </Link>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogSection
