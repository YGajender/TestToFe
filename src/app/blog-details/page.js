/* eslint-disable react/no-unescaped-entities */
import Footer from "@/components/Footer"
import HeaderSecond from "@/components/HeaderSecond"
import user2 from "../../assets/images/user2.jpg"
import Image from "next/image"
import BlogBanner from "../../assets/images/blog-banner.png"
import po1 from "../../assets/images/po1.png"
import po2 from "../../assets/images/po2.png"
import po3 from "../../assets/images/po3.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CiSearch } from "react-icons/ci"

import {
  faTwitter,
  faInstagram,
  faDiscord
} from "@fortawesome/free-brands-svg-icons"
import Link from "next/link"

export default function BlogDetail() {
  return (
    <main>
      <HeaderSecond />
      <section className="blogs-sec">
        <div className="container">
          <div className="row">
            {/* Blog Content Section */}
            <div className="col-lg-8">
              <div className="detail-content">
                <span>Technology</span>

                <h4>
                  The Impact of Technology on the Workplace: How Technology is
                  Changing
                </h4>

                <ul>
                  <li>
                    <Image
                      src={user2}
                      alt="Author"
                      width={35}
                      height={35}
                      className=""
                    />
                    Jason Francisco
                  </li>
                  <li>Dec. 20, 2024</li>
                </ul>

                <Image
                  src={BlogBanner}
                  alt="Blog Banner"
                  width={1230}
                  height={100}
                  className="img-fluid"
                />

                <p>
                  Traveling is an enriching experience that opens up new
                  horizons, exposes us to different cultures, and creates
                  memories that last a lifetime. However, traveling can also be
                  stressful and overwhelming, especially if you don't plan and
                  prepare adequately. In this blog article, we'll explore tips
                  and tricks for a memorable journey and how to make the most of
                  your travels.
                </p>

                <p>
                  One of the most rewarding aspects of traveling is immersing
                  yourself in the local culture and customs. This includes
                  trying local cuisine, attending cultural events and festivals,
                  and interacting with locals. Learning a few phrases in the
                  local language can also go a long way in making connections
                  and showing respect.
                </p>

                <h6>Research Your Destination</h6>
                <p>
                  Before embarking on your journey, take the time to research
                  your destination. This includes understanding the local
                  culture, customs, and laws, as well as identifying top
                  attractions, restaurants, and accommodations. Doing so will
                  help you navigate your destination with confidence and avoid
                  any cultural faux pas.
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  In hendrerit gravida rutrum quisque non tellus orci ac auctor.
                  Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet.
                  Aenean euismod elementum nisi quis eleifend quam adipiscing
                  vitae. Viverra adipiscing at in tellus.
                </p>

                <h6>Plan Your Itinerary</h6>
                <p>
                  While it's essential to leave room for spontaneity and
                  unexpected adventures, having a rough itinerary can help you
                  make the most of your time and budget. Identify the must-see
                  sights and experiences and prioritize them according to your
                  interests and preferences. This will help you avoid
                  overscheduling and ensure that you have time to relax and
                  enjoy your journey.
                </p>

                <i className="italic-text">
                  “Traveling can expose you to new environments and potential
                  health risks, so it's crucial to take precautions to stay safe
                  and healthy.”
                </i>

                <Image
                  src={BlogBanner}
                  alt="Blog Banner"
                  width={1230}
                  height={100}
                  className="img-fluid"
                />

                <h6>Pack Lightly and Smartly</h6>
                <p>
                  Packing can be a daunting task, but with some careful planning
                  and smart choices, you can pack light and efficiently. Start
                  by making a packing list and sticking to it, focusing on
                  versatile and comfortable clothing that can be mixed and
                  matched. Invest in quality luggage and packing organizers to
                  maximize space and minimize wrinkles.
                </p>

                <h6>Stay Safe and Healthy</h6>
                <p>
                  Traveling can expose you to new environments and potential
                  health risks, so it's crucial to take precautions to stay safe
                  and healthy. This includes researching any required
                  vaccinations or medications, staying hydrated, washing your
                  hands frequently, and using sunscreen and insect repellent.
                  It's also essential to keep your valuables safe and secure and
                  to be aware of your surroundings at all times.
                </p>

                <h6>Immerse Yourself in the Local Culture</h6>
                <p>
                  One of the most rewarding aspects of traveling is immersing
                  yourself in the local culture and customs. This includes
                  trying local cuisine, attending cultural events and festivals,
                  and interacting with locals. Learning a few phrases in the
                  local language can also go a long way in making connections
                  and showing respect.
                </p>

                <h6>Capture Memories</h6>
                <p>
                  Finally, don't forget to capture memories of your journey.
                  Whether it's through photographs, journaling, or souvenirs,
                  preserving the moments and experiences of your travels can
                  bring joy and nostalgia for years to come. However, it's also
                  essential to be present in the moment and not let technology
                  distract you from the beauty of your surroundings.
                </p>

                <h6>Conclusion:</h6>
                <p>
                  Traveling is an art form that requires a blend of planning,
                  preparation, and spontaneity. By following these tips and
                  tricks, you can make the most of your journey and create
                  memories that last a lifetime. So pack your bags, embrace the
                  adventure, and enjoy the ride.
                </p>
              </div>
            </div>

            {/* Sidebar Section */}
            <div className="col-lg-4">
              <div className="right-side">
                {/* Search Form */}
                <div className="form-outer-div popular p-0 m-0">
                  <form>
                    <div className="search-blog">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Search"
                      />

                      <CiSearch />
                    </div>
                  </form>
                </div>

                {/* Enquiry Form */}
                <div className="form-outer-div popular">
                  <h5>Enquiry Form</h5>
                  <form>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter name"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone Number"
                      />
                    </div>
                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        placeholder="Message"
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Search
                    </button>
                  </form>
                </div>

                {/* Popular Posts */}
                <div className="popular">
                  <h5>POPULAR POST</h5>
                  <div className="inner-item">
                    <Image
                      src={po1}
                      alt="Post Image"
                      width={70}
                      height={50}
                      className="img-fluid"
                    />
                    <div className="content">
                      <p>NEET UG Counselling</p>
                      <h6>Our 15 favorite websites from August</h6>
                    </div>
                  </div>
                  <div className="inner-item">
                    <Image
                      src={po2}
                      alt="Post Image"
                      width={70}
                      height={50}
                      className="img-fluid"
                    />
                    <div className="content">
                      <p>NEET UG Counselling</p>
                      <h6>The beginners guide to user research</h6>
                    </div>
                  </div>
                  <div className="inner-item">
                    <Image
                      src={po3}
                      alt="Post Image"
                      width={70}
                      height={50}
                      className="img-fluid"
                    />
                    <div className="content">
                      <p>NEET UG Counselling</p>
                      <h6>
                        Web page layout 101: website anatomy every designer
                      </h6>
                    </div>
                  </div>
                </div>

                {/* Recent Posts */}
                <div className="popular recent">
                  <h5>RECENT POST</h5>
                  <div className="inner-item">
                    <div className="content">
                      <p>NEET UG Counselling</p>
                      <h6>Our 15 favorite websites from August</h6>
                    </div>
                  </div>
                  <div className="inner-item">
                    <div className="content">
                      <p>NEET UG Counselling</p>
                      <h6>The beginners guide to user research</h6>
                    </div>
                  </div>
                  <div className="inner-item">
                    <div className="content">
                      <p>NEET UG Counselling</p>
                      <h6>
                        Web page layout 101: website anatomy every designer
                      </h6>
                    </div>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="popular social">
                  <h5>SOCIAL MEDIA</h5>
                  <ol>
                    <li>
                      <Link href="#">
                        <FontAwesomeIcon icon={faTwitter} />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FontAwesomeIcon icon={faInstagram} />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FontAwesomeIcon icon={faDiscord} />
                      </Link>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
