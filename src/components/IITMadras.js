import Image from "next/image";
import Link from "next/link";

export default function IITMadras() {
  return (
    <div className="left-side">
      <div className="college-info">
        <h4>Info</h4>
        <p>
          Indian Institute of Technology Madras (IIT Madras) is a prestigious
          educational institution located in Chennai, India. Established in
          1959, IIT Madras has performed exceptionally well in NIRF rankings. It
          has secured the 1st rank in Engineering and Overall categories for
          several consecutive years.
        </p>
        <p>
          IIT Madras offers a wide range of programs. Among these, B.Tech.,
          M.Tech, and B.Tech-M.Tech courses are the most popular. Admission to
          the B.Tech & B.Tech-M.Tech programs is based on the JEE Advanced exam
          rank, followed by JoSAA counseling. IIT Madras B.Tech CSE program has
          a competitive cutoff ranging from 144 to 148 (Closing Ranks) for
          various counseling rounds for general category students.
        </p>
      </div>

      {/* IIT Madras Latest Updates and News */}
      <section className="latest-sec type2">
        <div className="container">
          <div className="bg-color">
            <div className="col-12">
              <div className="title">
                <h6>IIT Madras Latest Updates and News</h6>
              </div>
            </div>
            <div className="swiper latestSwiper2">
              <div className="swiper-wrapper">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div className="swiper-slide" key={item}>
                    <div className="news-inner">
                      <div className="image-wrap">
                        <Image
                          src="/assets/images/news.jpg"
                          alt="News"
                          width={396}
                          height={220}
                          className="img-fluid"
                        />
                      </div>
                      <div className="content">
                        <h6>Google Ads Training 2021: Profit with Pay</h6>
                        <p>Lorem Ipsum is simply dummy text of the printing</p>
                        <span>15 Dec. 2024</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IIT Madras Highlights */}
      <section className="madras pt-5">
        <h4>IIT Madras Highlights</h4>
        <p>The table below shows the important highlights of IIT Madras:</p>

        <div className="table-responsive">
          <table className="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th>Category</th>
                <th>IIT Madras Highlights</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Institute Name</td>
                <td>Abc</td>
              </tr>
              <tr>
                <td>Established Year</td>
                <td>2020</td>
              </tr>
              <tr>
                <td>Recognized By</td>
                <td>Government of India</td>
              </tr>
              <tr>
                <td>Affiliation and Accreditation</td>
                <td>Abc</td>
              </tr>
              <tr>
                <td>State</td>
                <td>Chennai</td>
              </tr>
              <tr>
                <td>College Code</td>
                <td>ADBC</td>
              </tr>
              <tr>
                <td>Website</td>
                <td>
                  <Link href="https://www.visuticareer.com" target="_blank">
                    www.visuticareer.com
                  </Link>
                </td>
              </tr>
              <tr>
                <td>NIRF Ranking</td>
                <td>---</td>
              </tr>
              <tr>
                <td>State Rank</td>
                <td>---</td>
              </tr>
              <tr>
                <td>Campus Area</td>
                <td>617 Acres</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
