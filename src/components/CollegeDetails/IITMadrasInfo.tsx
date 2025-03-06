"use client";

import React from "react";
import LatestNews from "./LatestNews";

const IITMadrasInfo: React.FC = () => {
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
          the B.Tech & B.Tech-M.Tech programs are based on the JEE Advanced exam
          rank, followed by JoSAA counselling. The IIT Madras B.Tech CSE program
          has a competitive cutoff ranging from 144 to 148 (Closing Ranks) for
          various counselling rounds for general category students.
        </p>
        <p>
          IIT Madras Placements 2024 is ongoing and the final report will be
          released at the end of July 2024. However, IITM MBA Placements 2024
          have concluded, with the highest and average packages closing at INR
          29.65 LPA and INR 16.93 LPA, respectively. IIT Madras has achieved
          100% placements for MBA Batch 2024. Notable recruiters in the 2024
          placements include P&G, Hexaware, McKinsey & Company, Accenture, and
          Morgan Stanley.
        </p>
      </div>

      {/* Latest News Section */}
      <LatestNews />

      {/* IIT Madras Highlights Section */}
      <section className="madres pt-5">
        <h4>IIT Madras Highlights</h4>
        <p>The table below shows the important highlights of IIT Madras:</p>

        <div className="table-responsive">
          <table className="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th scope="col">Category</th>
                <th scope="col">IIT Madras Highlights</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Institute Name</td>
                <td>Abc</td>
              </tr>
              <tr>
                <td>Estd Year</td>
                <td>2020</td>
              </tr>
              <tr>
                <td>Recognized</td>
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
                <td>College code</td>
                <td>ADBC</td>
              </tr>
              <tr>
                <td>Website</td>
                <td>
                  <a
                    href="https://www.visuticareer.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.visuticareer.com
                  </a>
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
};

export default IITMadrasInfo;
